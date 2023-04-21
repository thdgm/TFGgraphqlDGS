package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

/*
 * Services for get Catalog fields and entity.
 */

interface CatalogServices {
    fun getCatalog(id: String): Catalog?
    fun getCalogsCatalog(id: String): Collection<Catalog?>
    fun getRecordsCatalog(id: String): Collection<CatalogRecord?>
    fun getServicesCatalog(id: String): Collection<DataService?>
    fun getResourcesCatalog(id: String): Collection<ResourceInCatalog?>
    fun getDatasetsCatalog(id: String): Collection<DatasetInCatalog?>
}

@Service
class CatalogServicesImpl(
    private val converter: ConvertersResourcesEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val resourceRepository: ResourceRepository

) : CatalogServices {

    // Return Catalog id or null
    override fun getCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        return if (!c.isEmpty) converter.toCatalog(c.get()) else null
    }

    // Return list with catalogs belonging to catalg id
    override fun getCalogsCatalog(id: String): Collection<Catalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type == "catalog" }
            .map {
                converter.toCatalog(it)
            }

    // Return list with records belonging to catalg id
    override fun getRecordsCatalog(id: String): Collection<CatalogRecord> {
        val cre = catalogRepository.findByIdOrNull(id)
        return cre?.records?.map {
            converter.toCatalogRecord(it)
        }.orEmpty()
    }

    // Return list with services belonging to catalg id
    override fun getServicesCatalog(id: String): Collection<DataService?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type == "data_service" }
            .map {
                converter.toDataService(it)
            }

    // Return list with resources belonging to catalg id
    override fun getResourcesCatalog(id: String): Collection<ResourceInCatalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .map {
                converter.createResource(it)
            }

    // Return list with resources belonging to catalg id
    override fun getDatasetsCatalog(id: String): Collection<DatasetInCatalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type != "data_service" }
            .map {
                converter.createDataset(it)
            }
}
