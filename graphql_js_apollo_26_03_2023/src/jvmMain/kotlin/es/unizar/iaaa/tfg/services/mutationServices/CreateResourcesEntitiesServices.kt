package es.unizar.iaaa.tfg.services.mutationServices

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import es.unizar.iaaa.tfg.constants.ConstantValues.ACCRUAL_PERIODICITY
import es.unizar.iaaa.tfg.constants.ConstantValues.CR_ID
import es.unizar.iaaa.tfg.constants.ConstantValues.DATASET
import es.unizar.iaaa.tfg.constants.ConstantValues.DATASET_TYPE
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN
import es.unizar.iaaa.tfg.constants.ConstantValues.DISTRIBUTION
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.CheckIfExistResourceServices
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*

/*
 * These services are responsible for the creation
 * of the different main entities needed.
 * They are resources and distributions.
 * They are used by mutation queries.
 */

interface CreateResourcesEntitiesServices {
    fun createDataservices(): Collection<DataServiceEntity>
    fun createDistributions(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        service: Collection<DataServiceEntity>
    ): MutableCollection<DistributionEntity>

    fun createDatasets(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        distributions: MutableCollection<DistributionEntity>
    ): DatasetEntity?

    fun createCatalogRecords(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordEntity?
}


@Service
class CreateResourcesEntitiesServicesImpl(
    private val resourcesRepository: ResourceRepository,
    private val datasetServicesRepository: DataServiceRepository,
    private val distributionRepository: DistributionRepository,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val datasetRepository: DatasetRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createRelationsBetweenEntitiesLanguageServices: CreateRelationsBetweenEntitiesLanguageServices,
    private val checkIfExistResourceServices: CheckIfExistResourceServices,

    ) : CreateResourcesEntitiesServices {

    // Create DataServicesEntity entities according to Json

    override fun createDataservices(): Collection<DataServiceEntity> {

        val dser = DataServiceEntity()
        dser.id = UUID.randomUUID().toString()
        if(!datasetServicesRepository.existsById(dser.id)) datasetServicesRepository.save(dser)
        return mutableListOf(dser)
    }

    // Create DistributionEntity entities according to Json
    override fun createDistributions(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        service: Collection<DataServiceEntity>
    ): MutableCollection<DistributionEntity> {

        val distributionsModel = jsonFields.filterValues { it == DISTRIBUTION }
        val distributions = mutableListOf<DistributionEntity>()

        distributionsModel.forEach{
            val distribution = it.key as DistributionJsonMapping
            val dist = DistributionEntity()

            dist.id = UUID.nameUUIDFromBytes(distribution.id.toByteArray()).toString()
            if (!checkIfExistResourceServices.existDistribution(distribution.identifier)){
                dist.accessService = service

                if(distribution.accessUrl != null) dist.accessUrl = distribution.accessUrl

                if(distribution.byteSize != null) dist.byteSize = distribution.byteSize.toUInt()

                val format = createAuxiliarEntitiesServices.createFormat(jsonFields, distribution.format)
                if(format != null) dist.format = format

                distributionRepository.save(dist)

                createAuxiliarEntitiesServices.createIdentifier(distribution.identifier, dist)
                createAuxiliarEntitiesServices.createTitle(distribution.titlesText,distribution.titlesLang,dist)

                distributions.add(dist)
            }
        }
        return distributions
    }

    // Create CatalogRecordEntity entities according to Json
    override fun createCatalogRecords(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordEntity? {

        val dataset = jsonFields.filterValues { it == DATASET }.keys.elementAt(0)  as DatasetJsonMapping
        val idPrimaryTopic = UUID.nameUUIDFromBytes(dataset.id.toByteArray()).toString()//dataset.id
        val id: String = input.catalogRecorId ?: "$idPrimaryTopic$CR_ID"
        if(!resourcesRepository.existsById(id)){
            val cr = CatalogRecordEntity()
            cr.id = id
            cr.title = "TitleCR"
            if (input.content != null) cr.content = input.content
            if (input.contentUrl != null) cr.contentUrl = input.contentUrl
            if (input.contentType != null) cr.contentType = input.contentType
            cr.resource = resourcesRepository.findById(idPrimaryTopic).get()
            catalogRecordsRepository.save(cr)
            if (!input.hints.isNullOrEmpty()) createAuxiliarEntitiesServices.createHints(input.hints,cr)
            createRelationsBetweenEntitiesServices.insertIntoCatalogRecord(cr, idCatalog)
            return cr
        }
        return null
    }

    // Create DatasetEntity entities according to Json
    override fun createDatasets(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        distributions: MutableCollection<DistributionEntity>
    ): DatasetEntity? {

        val dateFormatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME

        val datasetModel = jsonFields.filterValues { it == DATASET}.keys.elementAt(0) as DatasetJsonMapping
        val accrualPeriodicity = jsonFields.filterValues { it == ACCRUAL_PERIODICITY }

        if (!checkIfExistResourceServices.existResource(datasetModel.identifier)) {

            val dataset = DatasetEntity()

            dataset.id = UUID.nameUUIDFromBytes(datasetModel.id.toByteArray()).toString()
            dataset.type = DATASET_TYPE
            dataset.issued = LocalDateTime.parse(datasetModel.issued, dateFormatter)
            dataset.modified = LocalDateTime.parse(datasetModel.modified, dateFormatter)

            if(!datasetModel.license.isNullOrBlank()) dataset.license = datasetModel.license

            if (accrualPeriodicity.isNotEmpty()) {
                val ap = accrualPeriodicity.keys.elementAt(0) as AccrualPeriodicityJsonMapping
                dataset.accrualPeriodicity = ap.value
            }

            val publisher = createAuxiliarEntitiesServices.createPublisher(jsonFields,datasetModel.publisher)
            if(publisher != null) dataset.publisher = publisher

            val periodOfTime = createAuxiliarEntitiesServices.createPeriodOfTime(jsonFields,datasetModel.temporal)
            if(periodOfTime != null){
                dataset.temporalCoverageStart = LocalDateTime.parse(periodOfTime.start, dateFormatter)
                dataset.temporalCoverageEnd = LocalDateTime.parse(periodOfTime.end, dateFormatter)
            }

            datasetRepository.save(dataset)

            createAuxiliarEntitiesDataset(datasetModel,dataset,distributions,jsonFields)

            return dataset
        }
        return null

    }



    // Create entities related with DatasetEntity and other auxiliary entities related too, according to Json
    fun createAuxiliarEntitiesDataset(
        datasetModel: DatasetJsonMapping,
        dataset: DatasetEntity,
        distributions: MutableCollection<DistributionEntity>,
        jsonFields: MutableMap<ModelJsonMapping,String>
    ){

        createAuxiliarEntitiesServices.createIdentifier(datasetModel.identifier, dataset)

        val locations = createAuxiliarEntitiesServices.createLocation(datasetModel.spatial)

        createRelationsBetweenEntitiesServices.insertIntoDatasetLocation(locations, dataset)

        createRelationsBetweenEntitiesServices.insertIntoThemesResources(datasetModel.theme,dataset.id)

        createAuxiliarEntitiesServices.createResourceDescriptions(
            datasetModel.descriptionsText,datasetModel.descriptionsLang, dataset
        )
        createRelationsBetweenEntitiesServices.insertIntoDistributions(dataset, distributions)

        createAuxiliarEntitiesServices.createKeywords(jsonFields,dataset.id)

        val languages = createAuxiliarEntitiesServices.createLanguages(jsonFields)
        createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languages, dataset)

        createAuxiliarEntitiesServices.createTitle(datasetModel.titlesText,datasetModel.titlesLang, dataset)
    }
}
