package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServicesImpl
import es.unizar.iaaa.tfg.services.mutationServices.CreateResourcesEntitiesServices
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import java.time.OffsetDateTime
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter
import java.util.*

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>

    fun createEntitiesAndCR(
        fieldsMap:MutableMap<String, Any>,
        idCR:String?,
        idCatalog:String
    ):CatalogRecord
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createResourcesEntitiesServices: CreateResourcesEntitiesServices


    ) : CatalogRecordsServices {


    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findById(id)
        return if (crE.isEmpty) null else converter.toCatalogRecord(crE.get())
    }

    // Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {
        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
            .map {
                converter.toCatalogRecord(it!!)
            }
        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }
    // Return Catalogs which contains id CR in their records
    override fun getInCatalog(id: String): Collection<Catalog?> = catalogRepository.findCatalogsByRecordsId(id)
            .map{
                converter.catalogEntitytoCatalog(it)
            }
    // Return new CatalogRecord and creates entities
    override fun createEntitiesAndCR(
        fieldsMap:MutableMap<String, Any>,
        idCR:String?,
        idCatalog:String
    ):CatalogRecord{

        val catalog = catalogRepository.findById(idCatalog).get()

        val languages = createAuxiliarEntitiesServices.createLanguages(fieldsMap)
        val keywords = createAuxiliarEntitiesServices.createKeywords(fieldsMap)
        val services = createResourcesEntitiesServices.createDataservices()
        val distributions = createResourcesEntitiesServices.createDistributions(fieldsMap,services)
        val dataset = createResourcesEntitiesServices.createDatasets(fieldsMap)

        services.forEach{
            createRelationsBetweenEntitiesServices.insertIntoServesDataset(it,dataset)
            createRelationsBetweenEntitiesServices.insertIntoAccessInService(distributions,it)
            createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog,it)
            createRelationsBetweenEntitiesServices.insertIntoServesDataset(it,catalog)
        }

        createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog,dataset)
        createRelationsBetweenEntitiesServices.insertIntoLanguagesResources(languages,dataset)
        createRelationsBetweenEntitiesServices.insertIntoKeywordsDataset(keywords,dataset)
        createRelationsBetweenEntitiesServices.insertIntoDistributions(dataset,distributions)

        val cr = createResourcesEntitiesServices.createCatalogRecords(fieldsMap,idCR)

        createRelationsBetweenEntitiesServices.insertIntoCatalogRecord(cr,idCatalog)
        return converter.toCatalogRecord(cr)
    }

}
