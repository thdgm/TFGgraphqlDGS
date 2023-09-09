package es.unizar.iaaa.tfg.services.csvServices

import es.unizar.iaaa.tfg.adapters.FrequencyScalar
import es.unizar.iaaa.tfg.annotations.Frequency
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RegulationsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RelatedResourcesEntity
import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.csvDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesLanguageServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

/*
 * These services help to create a DatasetEntity and its relationships
 * with other entities.
 */

interface CsvDatasetModelServices {
    fun createDataset(
        d: DatasetCSVModel,
        distributions:Collection<DistributionEntity>,
        dServ: DataServiceEntity,
        idCatalog: String,
        catalog: CatalogEntity
    ):DatasetEntity
}

@Service

class CsvDatasetModelServicesImpl(

    private val datasetRepository: DatasetRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val catalogRepository: CatalogRepository,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,
    private val createRelationsBetweenEntitiesLanguageServices: CreateRelationsBetweenEntitiesLanguageServices,
    private val themeRepository: ThemeRepository,

    ) : CsvDatasetModelServices {
    override fun createDataset(
        d: DatasetCSVModel,
        distributions:Collection<DistributionEntity>,
        dServ: DataServiceEntity,
        idCatalog: String,
        catalog: CatalogEntity):DatasetEntity {

        val dataset = DatasetEntity()
        dataset.id = if (d.url != null) UUID.nameUUIDFromBytes(d.url.toByteArray()).toString() else UUID.randomUUID().toString()
        dataset.type = ConstantValues.DATASET_TYPE
        if (d.issued != null) dataset.issued = d.issued
        if (d.modified != null) dataset.modified = d.modified
        if (d.license != null) dataset.license = d.license

        if (d.frequency != null){
            val rangPeriod = d.frequency.split(",")
            val frequency = Frequency(rangPeriod.first(),rangPeriod.elementAt(1).toFloat())
            dataset.accrualPeriodicity = frequency.toString()
        }
        if (d.publisher != null) {
            val newPublisher = createAuxiliarEntitiesServices.createPublisherFromCsv(d.publisher)
            if (newPublisher != null)  dataset.publisher = newPublisher
        }

        if (d.period != null) {

            if ( d.period.first != null) dataset.temporalCoverageStart = d.period.first
            if ( d.period.second != null) dataset.temporalCoverageEnd = d.period.second

        }

        if(d.validity != null)  dataset.validity = d.validity

        if (!datasetRepository.existsById(dataset.id)) datasetRepository.save(dataset)

        auxiliarFieldsAndRelationshipsDataset(d, distributions, dServ, idCatalog, dataset,catalog)

        return dataset

    }

    fun auxiliarFieldsAndRelationshipsDataset(
        d: DatasetCSVModel,
        distributions:Collection<DistributionEntity>,
        dServ: DataServiceEntity,
        idCatalog: String,
        dataset: DatasetEntity,
        catalog: CatalogEntity
    ) {

        createAuxiliarEntitiesServices.createIdentifier(listOf(d.identifier, d.url), dataset)

        if (d.spatial != null) {
            val locations = createAuxiliarEntitiesServices.createLocationFromCsv(d.spatial)
            createRelationsBetweenEntitiesServices.insertIntoDatasetLocation(locations, dataset)
        }

        if (!d.themes.isNullOrEmpty()) {
            createRelationsBetweenEntitiesServices.insertIntoThemesResources(d.themes, dataset.id)
            d.themes.map {
                themeRepository.insertInThemesResources(it, dataset.id)
                println("INSERTOOOOOOOOO THEMESSSSSSS OKEEYYY:::::: $it --- ${dataset.id}")

            }
        }
        if (!d.description.isNullOrEmpty()) {
            createAuxiliarEntitiesServices.createResourceDescriptionsFromCsv(d.description, dataset.id, dataset)
        }

        if (!d.keywords.isNullOrEmpty()) {
            createAuxiliarEntitiesServices.createKeywordsFromCsv(d.keywords, dataset.id,dataset)
        }

        if (!d.languages.isNullOrEmpty()) {
            val languages = createAuxiliarEntitiesServices.createLanguagesFromCsv(d.languages, dataset.id)
            createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languages, dataset)
        }

        if (!d.title.isNullOrEmpty()) {
            createAuxiliarEntitiesServices.createTitleFromCsv(d.title, dataset)
        }

        if (!d.regulations.isNullOrEmpty()) {
            createAuxiliarEntitiesServices.createRegulations(d.regulations, dataset)
        }

        if (!d.relatedResources.isNullOrEmpty()){
            createAuxiliarEntitiesServices.createRelatedResources(d.relatedResources, dataset)
        }

        createRelationsBetweenEntitiesServices.insertIntoDistributionsFromCsv(dataset, distributions)
        createRelationsBetweenEntitiesServices.insertIntoServesDataset(dServ, dataset)

       val catalogExists = catalogRepository.existsById(idCatalog)
        if (catalogExists){
            createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, dataset)

        }
    }

}

