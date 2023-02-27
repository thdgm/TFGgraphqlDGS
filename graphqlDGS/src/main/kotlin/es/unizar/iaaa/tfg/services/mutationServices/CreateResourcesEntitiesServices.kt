package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.constants.ConstantValues.ACCRUAL_PERIODICITY
import es.unizar.iaaa.tfg.constants.ConstantValues.CR_ID
import es.unizar.iaaa.tfg.constants.ConstantValues.DATASET
import es.unizar.iaaa.tfg.constants.ConstantValues.DATASET_TYPE
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN
import es.unizar.iaaa.tfg.constants.ConstantValues.DISTRIBUTION
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.CheckIfExistResourceServices
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*

interface CreateResourcesEntitiesServices {
    fun createDataservices(): Collection<DataServiceEntity>
    fun createDistributions(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        service: Collection<DataServiceEntity>
    ): MutableCollection<DistributionEntity>

    fun createDatasets(
        sonFields: MutableMap<ModelJsonMapping,String>,
        distributions: MutableCollection<DistributionEntity>
    ): DatasetEntity?

    fun createCatalogRecords(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
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
    private val checkIfExistResourceServices: CheckIfExistResourceServices,

    ) : CreateResourcesEntitiesServices {

    // Create LanguageEntity entities according to Json
    //private val logger = KotlinLogging.logger {}

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

    override fun createCatalogRecords(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
        idCatalog: String
    ): CatalogRecordEntity? {

        val dataset = jsonFields.filterValues { it == DATASET }.keys.elementAt(0)  as DatasetJsonMapping
        val idPrimaryTopic = UUID.nameUUIDFromBytes(dataset.id.toByteArray()).toString()//dataset.id
        val id: String = idCR ?: "$idPrimaryTopic$CR_ID"
        if(!resourcesRepository.existsById(id)){
            val cr = CatalogRecordEntity()
            cr.id = id
            cr.title = "TitleCR"
            cr.resource = resourcesRepository.findById(idPrimaryTopic).get()
            catalogRecordsRepository.save(cr)
            createRelationsBetweenEntitiesServices.insertIntoCatalogRecord(cr, idCatalog)
            return cr
        }
        return null
    }

    override fun createDatasets(
        sonFields: MutableMap<ModelJsonMapping,String>,
        distributions: MutableCollection<DistributionEntity>
    ): DatasetEntity? {

        val dateFormatter = DateTimeFormatter.ofPattern(DATE_PATTERN)

        val datasetModel = sonFields.filterValues { it == DATASET}.keys.elementAt(0) as DatasetJsonMapping
        val accrualPeriodicity = sonFields.filterValues { it == ACCRUAL_PERIODICITY }

        if (!checkIfExistResourceServices.existResource(datasetModel.identifier)) {

            val dataset = DatasetEntity()

            dataset.id = UUID.nameUUIDFromBytes(datasetModel.id.toByteArray()).toString()
            dataset.type = DATASET_TYPE
            dataset.fechaHoraCreacion = LocalDateTime.parse(datasetModel.issued, dateFormatter)
            dataset.ultimaModificacion = LocalDateTime.parse(datasetModel.modified, dateFormatter)

            if(!datasetModel.license.isNullOrBlank()) dataset.license = datasetModel.license

            if (accrualPeriodicity.isNotEmpty()) {
                val ap = accrualPeriodicity.keys.elementAt(0) as AccrualPeriodicityJsonMapping
                dataset.accrualPeriodicity = ap.value
            }

            val publisher = createAuxiliarEntitiesServices.createPublisher(sonFields,datasetModel.publisher)
            if(publisher != null) dataset.publisher = publisher

            val periodOfTime = createAuxiliarEntitiesServices.createPeriodOfTime(sonFields,datasetModel.temporal)
            if(periodOfTime != null){
                dataset.temporalCoverageStart = LocalDateTime.parse(periodOfTime.start, dateFormatter)
                dataset.temporalCoverageEnd = LocalDateTime.parse(periodOfTime.end, dateFormatter)
            }

            datasetRepository.save(dataset)

            createAuxiliarEntitiesDataset(datasetModel,dataset,distributions,sonFields)

            return dataset
        }
        return null

    }



    /*
     * Finish the creation of the entity Dataset
     */
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
        createRelationsBetweenEntitiesServices.insertIntoLanguagesResources(languages, dataset)

        createAuxiliarEntitiesServices.createTitle(datasetModel.titlesText,datasetModel.titlesLang, dataset)
    }
}
