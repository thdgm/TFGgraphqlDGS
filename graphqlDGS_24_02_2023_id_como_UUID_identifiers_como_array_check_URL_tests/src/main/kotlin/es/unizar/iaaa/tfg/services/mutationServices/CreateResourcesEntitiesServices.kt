package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.CheckIfExistResourceServices
//import mu.KotlinLogging
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

    fun createDatasets(jsonFields: MutableMap<ModelJsonMapping,String>): DatasetEntity

    fun createCatalogRecords(jsonFields: MutableMap<ModelJsonMapping,String>, idCR: String?): CatalogRecordEntity
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
        datasetServicesRepository.save(dser)
        return mutableListOf(dser)
    }

    // Create DistributionEntity entities according to Json
    override fun createDistributions(
        jsonFields: MutableMap<ModelJsonMapping,String>,
        service: Collection<DataServiceEntity>
    ): MutableCollection<DistributionEntity> {
        val distributionsModel = jsonFields.filterValues { it == "Distribution" }
        val distributions = mutableListOf<DistributionEntity>()
        distributionsModel.forEach{
            val distribution = it.key as DistributionJsonMapping
            val dist = DistributionEntity()
            println("UUUUUUIIIIIIIDDDDDDDD DIST::-- ${UUID.nameUUIDFromBytes(distribution.id.toByteArray()).toString()} -:::::::::::::::::::::::::::::::::::::::::::::::")

            dist.id = UUID.nameUUIDFromBytes(distribution.id.toByteArray()).toString()//distribution.id
            println("UUUUUUIIIIIIIDDDDDDDD IDDD: :::: ${dist.id}")
            dist.accessService = service
            if(distribution.accessUrl != null) dist.accessUrl = distribution.accessUrl


            if(distribution.byteSize != null){
                dist.byteSize = distribution.byteSize.toUInt()
            }
            val format = createAuxiliarEntitiesServices.createFormat(jsonFields, distribution.format)
            if(format != null){
                dist.format = format
            }
            if (!checkIfExistResourceServices.existDistribution(distribution.identifier)){

                distributionRepository.save(dist)
                createAuxiliarEntitiesServices.createIdentifier(distribution.identifier, dist)
                distributions.add(dist)
                createAuxiliarEntitiesServices.createTitle(distribution.titlesText,distribution.titlesLang,dist)
            }
        }
        return distributions
    }

    override fun createCatalogRecords(jsonFields: MutableMap<ModelJsonMapping,String>, idCR: String?): CatalogRecordEntity {
        // Aqui tengo una duda: He pensado en generar el id pe: idPrimaryTopic+"/CatalogRecord
        // que pasa si existe ya? Puede ocurrir, sería el mismo CR? He supuesto que no pueden repetirse

        // De donde pillar el title del CR ??
        val dataset = jsonFields.filterValues { it == "Dataset" }.keys.elementAt(0)  as DatasetJsonMapping
        println("CRRRRRRRRRRRRRR:::::::::::::::::::::::::::::::::::::::::::::::::::::${UUID.nameUUIDFromBytes(dataset.id.toByteArray()).toString()}")
        val idPrimaryTopic = UUID.nameUUIDFromBytes(dataset.id.toByteArray()).toString()//dataset.id
        val cr = CatalogRecordEntity()
        val id: String = idCR ?: "$idPrimaryTopic/CatalogRecord"
        cr.id = id
        cr.title = "TitleCR"
        cr.resource = resourcesRepository.findById(idPrimaryTopic).get()
        catalogRecordsRepository.save(cr)
        return cr
    }

    override fun createDatasets(jsonFields: MutableMap<ModelJsonMapping,String>): DatasetEntity {
        val dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss")
        val datasetModel = jsonFields.filterValues { it == "Dataset" }.keys.elementAt(0) as DatasetJsonMapping
        val accrualPeriodicity = jsonFields.filterValues { it == "AccrualPeriodicity" }

        val datasetId = datasetModel.id
        val creacion = datasetModel.issued
        val modificacion = datasetModel.modified


        val dataset = DatasetEntity()
        var uuid = UUID.randomUUID()

        println("UUUUUUIIIIIIIDDDDDDDD::-- ${UUID.nameUUIDFromBytes(datasetId.toByteArray()).toString()} -:::::::::::::::::::::::::::::::::::::::::::::::${UUID.fromString(uuid.toString())}")

        dataset.id = UUID.nameUUIDFromBytes(datasetId.toByteArray()).toString()
        dataset.type = "dataset"
        dataset.fechaHoraCreacion = LocalDateTime.parse(creacion, dateFormatter)
        dataset.ultimaModificacion = LocalDateTime.parse(modificacion, dateFormatter)

        if(datasetModel.license != null){
            dataset.license = datasetModel.license
        }

        if (accrualPeriodicity.isNotEmpty()) {
            val ap = accrualPeriodicity.keys.elementAt(0) as AccrualPeriodicityJsonMapping
            dataset.accrualPeriodicity = ap.value
        }

        val publisher = createAuxiliarEntitiesServices.createPublisher(jsonFields,datasetModel.publisher)
        if(publisher != null){
            dataset.publisher = publisher
        }
        val periodOfTime = createAuxiliarEntitiesServices.createPeriodOfTime(jsonFields,datasetModel.temporal)
        if(periodOfTime != null){
            val start = periodOfTime.start
            val end = periodOfTime.end
            dataset.temporalCoverageStart = LocalDateTime.parse(start, dateFormatter)
            dataset.temporalCoverageEnd = LocalDateTime.parse(end, dateFormatter)
        }

        if (!checkIfExistResourceServices.existResource(datasetModel.identifier)) {
            datasetRepository.save(dataset)
            createAuxiliarEntitiesServices.createIdentifier(datasetModel.identifier, dataset)

            val locations = createAuxiliarEntitiesServices.createLocation(datasetModel.spatial)

            createRelationsBetweenEntitiesServices.insertIntoDatasetLocation(locations, dataset)

            createRelationsBetweenEntitiesServices.insertIntoThemesResources(datasetModel.theme,dataset.id)

            createAuxiliarEntitiesServices.createResourceDescriptions(datasetModel.descriptionsText,datasetModel.descriptionsLang, dataset)

            createAuxiliarEntitiesServices.createTitle(datasetModel.titlesText,datasetModel.titlesLang, dataset)

        }
        return dataset

    }
}
