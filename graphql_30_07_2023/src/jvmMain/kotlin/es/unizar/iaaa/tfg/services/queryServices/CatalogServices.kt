package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

/*
 * Services for get Catalog fields and entity.
 */

interface CatalogServices {
    fun getCatalog(id: String): Catalog?
    fun getCalogsCatalog(id: String,page: Int, pageSize: Int): Collection<Catalog?>
    fun getRecordsCatalog(id: String,page: Int, pageSize: Int): Collection<CatalogRecord?>
    fun getServicesCatalog(id: String,page: Int, pageSize: Int): Collection<DataService?>
    fun getResourcesCatalog(id: String,page: Int, pageSize: Int, type: String): Collection<ResourceInCatalog?>
    fun getDatasetsCatalog(id: String,page: Int, pageSize: Int): Collection<DatasetInCatalog?>
    fun getNumberResourcesCatalog(id: String): Int?
}

@Service
class CatalogServicesImpl(
    private val converter: ConvertersResourcesEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val resourceRepository: ResourceRepository

) : CatalogServices {

    // Return Catalog id or null
    override fun getCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        return if (!c.isEmpty) converter.toCatalog(c.get()) else null
    }

    // Return list with catalogs belonging to catalg id
    override fun getCalogsCatalog(id: String,page: Int, pageSize: Int): Collection<Catalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .filter { it.type == "catalog" }
            .map {
                converter.toCatalog(it)
            }.toList()

    // Return list with records belonging to catalg id
    override fun getRecordsCatalog(id: String,page: Int, pageSize: Int): Collection<CatalogRecord> {
        val crIds = catalogRecordsRepository.findRecordsByCatalogsId(id, PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
        return crIds.filterNotNull().map{catalogRecordsRepository.findById(it)}
            .map {
                converter.toCatalogRecord(it.get())
            }
    }

        /*val cre = catalogRepository.findByIdOrNull(id,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
        return cre?.records?.map {
            converter.toCatalogRecord(it)
        }.orEmpty()*/


    // Return list with services belonging to catalg id
    override fun getServicesCatalog(id: String,page: Int, pageSize: Int): Collection<DataService?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .filter { it.type == "data_service" }
            .map {
                converter.toDataService(it)
            }.toList()

    // Return list with resources belonging to catalg id
    override fun getResourcesCatalog(id: String,page: Int, pageSize: Int, type: String): Collection<ResourceInCatalog?> {
        val id_catalog = id
        println("IDDDD:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: $id")
        //println("RESOURCESSSSSS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ${resourceRepository.findResourcesCatalogByCatalogResourcesIdAndType(id_catalog,"dataset",PageRequest.of(0,5))}")
        return if (type == "All"){
            resourceRepository.findResourcesCatalogByCatalogResourcesId(id_catalog,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).map {converter.createResource(it) }.distinct().toList()//resourceRepository.findResourcesCatalog(id).map {converter.createResource(it) }
        }else{
            resourceRepository.findResourcesCatalogByCatalogResourcesIdAndType(id_catalog,type,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).map {converter.createResource(it) }.distinct().toList()
        }
    }


    // Return list with resources belonging to catalog id
    override fun getDatasetsCatalog(id: String,page: Int, pageSize: Int): Collection<DatasetInCatalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id,PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .filter { it.type != "data_service" }
            .map {
                converter.createDataset(it)
            }.toList()

    // Return the number of resources inside the Catalog id
    override fun getNumberResourcesCatalog(id: String): Int? =
        catalogRepository.findNumberOfResourcesById(id)
}
