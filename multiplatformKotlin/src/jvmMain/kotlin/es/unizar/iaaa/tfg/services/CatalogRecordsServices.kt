package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateResourcesEntitiesServices
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>

    fun createEntitiesAndCR(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
        idCatalog: String
    ): CatalogRecordOutput
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createResourcesEntitiesServices: CreateResourcesEntitiesServices,
) : CatalogRecordsServices {

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findById(id)
        return if (crE.isEmpty) null else converter.toCatalogRecord(crE.get())
    }

    // Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {

        var catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
                .map {
                        if (it != null) converter.toCatalogRecord(it) else null
                }

        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }

    // Return Catalogs which contains id CR in their records
    override fun getInCatalog(id: String): Collection<Catalog?> = catalogRepository.findCatalogsByRecordsId(id)
        .map {
            converter.catalogEntitytoCatalog(it)
        }

    // Return new CatalogRecord and creates entities
    override fun createEntitiesAndCR(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
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
            cr = createResourcesEntitiesServices.createCatalogRecords(fieldsMap, idCR, idCatalog)
        }else{
            err = Error("No se ha creado el Dataset")
        }

        return err ?:  if(cr != null) converter.toCatalogRecord(cr) else Error("No se ha creado el Catalog Record")
    }
}
