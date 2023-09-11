package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.csvDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.HintsRepository
import es.unizar.iaaa.tfg.repository.ResourceRepositoryExtra
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import es.unizar.iaaa.tfg.services.csvServices.CsvCatalogRecordModelService
import es.unizar.iaaa.tfg.services.csvServices.CsvDataServiceModelServices
import es.unizar.iaaa.tfg.services.csvServices.CsvDatasetModelServices
import es.unizar.iaaa.tfg.services.csvServices.CsvDistributionModelServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateResourcesEntitiesServices
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory.getLogger
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDateTime

/*
 * Services for get Dataset fields and entity.
 */

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>
    fun getContent(id: String): String?
    fun getContentUrl(id: String): String?
    fun getContentType(id: String): String?
    fun getHints(id: String): Collection<String?>
    fun createEntitiesAndCRFromJson(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput
    fun createEntitiesAndCRFromCsv(
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput

    fun createEntitiesAndCRFromCsvVersion2(
        input: DatasetCSVModel,
        cRInput: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput

    fun getNumberOfCatalogRecords(filters: Collection<MapInput>): Int
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createResourcesEntitiesServices: CreateResourcesEntitiesServices,
    private val hintsRepository: HintsRepository,
    private val csvCatalogRecordModelServices: CsvCatalogRecordModelService,
    private val csvDataServiceModelServices: CsvDataServiceModelServices,
    private val csvDatasetModelServices: CsvDatasetModelServices,
    private val csvDistributionModelServices: CsvDistributionModelServices,
    private val repoCriteria: ResourceRepositoryExtra

    ) : CatalogRecordsServices {

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findCRById(id)
        return if (crE == null) null else converter.toCatalogRecord(crE)
    }

    // Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {

        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id, PageRequest.of(0,Integer.MAX_VALUE))
                .map {
                        if (it != null) converter.toCatalogRecord(it) else null
                }.filterNotNull()

        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }

    // Return Catalogs which contains id CR in their records
    override fun getInCatalog(id: String): Collection<Catalog?> {
        println("LETSSSS 223")
        val v = catalogRepository.findCatalogsByRecordsId(id).filterNotNull()
            .map {
                converter.catalogIdtoCatalog(it)
            }
        println("LETSSSS 224")
        return v
    }

    // Return content field of Catalog Record id or null if it doesn't exist
    override fun getContent(id: String): String? = catalogRecordsRepository.findCRById(id)?.content

    // Return contentUrl field of Catalog Record id or null if it doesn't exist
    override fun getContentUrl(id: String): String? = catalogRecordsRepository.findCRById(id)?.contentUrl

    // Return contentType field of Catalog Record id or null if it doesn't exist
    override fun getContentType(id: String): String? = catalogRecordsRepository.findCRById(id)?.contentType

    // Return hints field of Catalog Record id
    override fun getHints(id: String): Collection<String?> =
        hintsRepository.findByCatalogRecordHintsId(id).map { it.id.hintId }

    // Return new CatalogRecord and creates entities
    override fun createEntitiesAndCRFromJson(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput {
        getLogger("logger").debug("START create CR")
        var err: Error? = null
        var cr: CatalogRecordEntity? = null
        val catalog = catalogRepository.findById(idCatalog).get()
        val services = createResourcesEntitiesServices.createDataservices()
        val distributions = createResourcesEntitiesServices.createDistributions(fieldsMap, services)
        val dataset = createResourcesEntitiesServices.createDatasets(fieldsMap,distributions)

        if (dataset != null){
            services.forEach {
                createRelationsBetweenEntitiesServices.insertIntoServesDataset(it, dataset)
                createRelationsBetweenEntitiesServices.insertIntoAccessInService(distributions, it)
                createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, it)
                createRelationsBetweenEntitiesServices.insertIntoServesDataset(it, catalog)
            }
            createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, dataset)
            cr = createResourcesEntitiesServices.createCatalogRecords(fieldsMap, input, idCatalog)
        }else{
            err = Error("No se ha creado el Dataset")
        }

        return err ?:  if(cr != null) converter.toCatalogRecord(cr) else Error("No se ha creado el Catalog Record")
    }

    override fun createEntitiesAndCRFromCsv(
        input: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput{

        val catalog = catalogRepository.findById(idCatalog).get()
        if (catalog == null) {
            val newCatalog = CatalogEntity()
            newCatalog.id  = idCatalog
            newCatalog.issued = LocalDateTime.now()
            newCatalog.modified = LocalDateTime.now()
            catalogRepository.save(newCatalog)
        }
        val datasetFields = converterAuxiliar.toDatasetCsvModeFromString(input.content!!)

        val dServ = csvDataServiceModelServices.createDataservice(catalog)
        val distributions = csvDistributionModelServices.createDistribution(datasetFields,dServ)

        val dataset = csvDatasetModelServices.createDataset(datasetFields,distributions,dServ,idCatalog,catalog)
        val cr =  csvCatalogRecordModelServices.createCatalogRecord(input, idCatalog,datasetFields,dataset)

        return if(cr != null) converter.toCatalogRecord(cr) else Error("No se ha creado el Catalog Record")

    }

    override fun createEntitiesAndCRFromCsvVersion2(
        input: DatasetCSVModel,
        cRInput: CatalogRecordInput,
        idCatalog: String
    ): CatalogRecordOutput{


        val catalog = CatalogEntity()
        catalog.id  = idCatalog
        catalog.issued = LocalDateTime.now()
        catalog.modified = LocalDateTime.now()
        if (!catalogRepository.existsById(catalog.id)) catalogRepository.save(catalog)

        /*if (catalog == null) {
            val newCatalog = CatalogEntity()
            newCatalog.id  = idCatalog
            newCatalog.issued = LocalDateTime.now()
            newCatalog.modified = LocalDateTime.now()
           catalogRepository.save(newCatalog)
        }*/
        val datasetFields = input

        val dServ = csvDataServiceModelServices.createDataservice(catalog)


        val distributions = csvDistributionModelServices.createDistribution(datasetFields, dServ)

        val primaryTopic = csvDatasetModelServices.createDataset(datasetFields,distributions,dServ,idCatalog,catalog)

        val cr = csvCatalogRecordModelServices.createCatalogRecord(cRInput, idCatalog,datasetFields, primaryTopic)

        return if(cr != null) converter.toCatalogRecord(cr!!) else Error("No se ha creado el Catalog Record")

        //return Error("No se ha creado el Catalog Record")
    }

    override fun getNumberOfCatalogRecords(filters: Collection<MapInput>): Int{
        var appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val formats = appliedFilters.find { it.key == "Tipo de contenido" }?.values ?: listOf()
        return if (appliedFilters.isEmpty() || checkIfSelectedFiltersIsEmpty(appliedFilters)) {
            catalogRecordsRepository.count().toInt()
        }else{
            repoCriteria.findNumberOfCRByFilter(appliedFilters,formats)?.toInt() ?: 0
        }
    }
    fun checkIfSelectedFiltersIsEmpty(selectedFilters: Collection<MapInput>?): Boolean{
        if (selectedFilters.isNullOrEmpty()){
            return true
        }
        selectedFilters?.map{
            if (it.values.isNotEmpty()){
                return false
            }
        }
        return true
    }
}
