package es.unizar.iaaa.tfg.services.csvServices

import es.unizar.iaaa.tfg.adapters.FrequencyScalar
import es.unizar.iaaa.tfg.annotations.Frequency
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesLanguageServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
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
        idCatalog: String):String
}

@Service
class CsvDatasetModelServicesImpl(

    private val datasetRepository: DatasetRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val catalogRepository: CatalogRepository,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,
    private val createRelationsBetweenEntitiesLanguageServices: CreateRelationsBetweenEntitiesLanguageServices



    ) : CsvDatasetModelServices {
    override fun createDataset(
        d: DatasetCSVModel,
        distributions:Collection<DistributionEntity>,
        dServ: DataServiceEntity,
        idCatalog: String):String {

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
            dataset.temporalCoverageStart = d.period.first
            dataset.temporalCoverageEnd = d.period.second
        }

        if (!datasetRepository.existsById(dataset.id)) datasetRepository.save(dataset)

        auxiliarFieldsAndRelationshipsDataset(d, distributions, dServ, idCatalog, dataset)

        return dataset.id

    }

    fun auxiliarFieldsAndRelationshipsDataset(
        d: DatasetCSVModel,
        distributions:Collection<DistributionEntity>,
        dServ: DataServiceEntity,
        idCatalog: String,
        dataset: DatasetEntity
    ){

        createAuxiliarEntitiesServices.createIdentifier(listOf(d.identifier,d.url), dataset)

        if (d.spatial != null) {
            val locations = createAuxiliarEntitiesServices.createLocationFromCsv(d.spatial)
            createRelationsBetweenEntitiesServices.insertIntoDatasetLocation(locations, dataset)
        }

        if (!d.themes.isNullOrEmpty()) {
            createRelationsBetweenEntitiesServices.insertIntoThemesResources(d.themes,dataset.id)
        }

        if (!d.description.isNullOrEmpty()) {
            createAuxiliarEntitiesServices.createResourceDescriptionsFromCsv(d.description, dataset.id)
        }

        if (!d.keywords.isNullOrEmpty()){
            createAuxiliarEntitiesServices.createKeywordsFromCsv(d.keywords,dataset.id)
        }

        if (!d.languages.isNullOrEmpty()){
            val languages =createAuxiliarEntitiesServices.createLanguagesFromCsv(d.languages,dataset.id)
            createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languages, dataset)
        }

        if (!d.title.isNullOrEmpty()) {
            println("CREATE TITLE::::::: ${d.title}")
            createAuxiliarEntitiesServices.createTitleFromCsv(d.title, dataset)
        }

        createRelationsBetweenEntitiesServices.insertIntoDistributionsFromCsv(dataset, distributions)
        createRelationsBetweenEntitiesServices.insertIntoServesDataset(dServ, dataset)
        val catalog = catalogRepository.findByIdOrNull(idCatalog)
        if (catalog != null){
            createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, dataset)
        }
    }

}

