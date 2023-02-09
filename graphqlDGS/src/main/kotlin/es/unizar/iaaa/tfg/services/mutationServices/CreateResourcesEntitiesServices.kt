package es.unizar.iaaa.tfg.services.mutationServices

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.json.JSONObject
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*

interface CreateResourcesEntitiesServices {
    fun createDataservices():Collection<DataServiceEntity>
    fun createDistributions(
        jsonFields: MutableMap<String, Any>,
        service: Collection<DataServiceEntity>
    ):MutableCollection<DistributionEntity>

    fun createDatasets(jsonFields: MutableMap<String, Any>):DatasetEntity

    fun createCatalogRecords(jsonFields: MutableMap<String, Any>,idCR:String?): CatalogRecordEntity

}


@Service
class CreateResourcesEntitiesServicesImpl(
    private val resourcesRepository:ResourceRepository,
    private val datasetServicesRepository: DataServiceRepository,
    private val distributionRepository: DistributionRepository,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val datasetRepository:DatasetRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val catalogRepository:CatalogRepository
): CreateResourcesEntitiesServices{

    //Create LanguageEntity entities according to Json
    override fun createDataservices():Collection<DataServiceEntity>{
        val dser = DataServiceEntity()
        dser.id = UUID.randomUUID().toString()
        datasetServicesRepository.save(dser)

        return mutableListOf(dser)
    }

    //Create KeywordEntity entities according to Json
    override fun createDistributions(
        jsonFields: MutableMap<String, Any>,
        service: Collection<DataServiceEntity>
    ):MutableCollection<DistributionEntity>{

        val distributions = mutableListOf<DistributionEntity>()

        val idsDist =  jsonFields.getValue("idDistribution") as Collection<String>
        idsDist.forEachIndexed { i, it ->

            val accessUrl = jsonFields.getValue("accessURL") as Collection<String>
            val title = jsonFields.getValue("titleDistribution") as Collection<JSONObject>

            val dist = DistributionEntity()
            dist.id = it
            dist.accessService = service
            dist.accessUrl = accessUrl.elementAt(i)
            distributions.add(dist)
            distributionRepository.save(dist)

            createAuxiliarEntitiesServices.createTitle(title.elementAt(i),dist)
        }
        return distributions
    }

    override fun createCatalogRecords(jsonFields: MutableMap<String, Any>,idCR:String?):CatalogRecordEntity {
        //Aqui tengo una duda: He pensado en generar el id pe: idPrimaryTopic+"/CatalogRecord
        // que pasa si existe ya? Puede ocurrir, sería el mismo CR? He supuesto que no pueden repetirse

        //De donde pillar el title del CR ??

        val idPrimaryTopic = jsonFields.getValue("id") as String
        val cr = CatalogRecordEntity()
        var id: String = idCR ?: "$idPrimaryTopic/CatalogRecord"
        cr.id = id
        cr.title = "TitleCR"
        cr.resource = resourcesRepository.findById(idPrimaryTopic).get()
        catalogRecordsRepository.save(cr)
        return cr
    }

    override fun createDatasets(jsonFields: MutableMap<String, Any>):DatasetEntity{

        var dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss")

        val datasetId = jsonFields.getValue("id") as String
        val title = jsonFields.getValue("title") as JSONObject
        val creacion = jsonFields.getValue("issued") as String
        val modificacion = jsonFields.getValue("modified") as String
        val start = jsonFields.getValue("start") as String
        val end = jsonFields.getValue("end") as String


        val dataset = DatasetEntity()
        dataset.id = datasetId
        dataset.type = "dataset"
        dataset.fechaHoraCreacion = LocalDateTime.parse(creacion, dateFormatter)
        dataset.ultimaModificacion = LocalDateTime.parse(modificacion, dateFormatter)
        dataset.temporalCoverageStart = LocalDateTime.parse(start, dateFormatter)
        dataset.temporalCoverageEnd = LocalDateTime.parse(end, dateFormatter)
        datasetRepository.save(dataset)

        val locations = createAuxiliarEntitiesServices.createLocation(jsonFields)

        createRelationsBetweenEntitiesServices.insertIntoDatasetLocation(locations,dataset)

        createAuxiliarEntitiesServices.createResourceDescriptions(jsonFields,dataset)
        createAuxiliarEntitiesServices.createTitle(title,dataset)
        return dataset
    }

}