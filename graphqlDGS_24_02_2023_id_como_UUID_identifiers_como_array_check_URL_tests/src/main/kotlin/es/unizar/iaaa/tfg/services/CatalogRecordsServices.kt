package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateResourcesEntitiesServices
import org.springframework.stereotype.Service

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>

    fun createEntitiesAndCR(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
        idCatalog: String
    ): CatalogRecord
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
        .map {
            converter.catalogEntitytoCatalog(it)
        }

    // Return new CatalogRecord and creates entities
    override fun createEntitiesAndCR(
        fieldsMap: MutableMap<ModelJsonMapping,String>,
        idCR: String?,
        idCatalog: String
    ): CatalogRecord {
        println("START create CR")
        val catalog = catalogRepository.findById(idCatalog).get()
        println("ENTRA1")
        val languages = createAuxiliarEntitiesServices.createLanguages(fieldsMap)
        println("ENTRA2")
        println("ENTRA3")
        val services = createResourcesEntitiesServices.createDataservices()
        println("ENTRA4")
        val distributions = createResourcesEntitiesServices.createDistributions(fieldsMap, services)
        println("ENTRA5")
        val dataset = createResourcesEntitiesServices.createDatasets(fieldsMap)
        createAuxiliarEntitiesServices.createKeywords(fieldsMap,dataset.id)
        println("ENTRA6")
        services.forEach {
            createRelationsBetweenEntitiesServices.insertIntoServesDataset(it, dataset)
            createRelationsBetweenEntitiesServices.insertIntoAccessInService(distributions, it)
            createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, it)
            createRelationsBetweenEntitiesServices.insertIntoServesDataset(it, catalog)
        }

        createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, dataset)
        createRelationsBetweenEntitiesServices.insertIntoLanguagesResources(languages, dataset)
        //createRelationsBetweenEntitiesServices.insertIntoKeywordsDataset(keywords, dataset)
        createRelationsBetweenEntitiesServices.insertIntoDistributions(dataset, distributions)

        val cr = createResourcesEntitiesServices.createCatalogRecords(fieldsMap, idCR)

        createRelationsBetweenEntitiesServices.insertIntoCatalogRecord(cr, idCatalog)
        return converter.toCatalogRecord(cr)
    }
}
