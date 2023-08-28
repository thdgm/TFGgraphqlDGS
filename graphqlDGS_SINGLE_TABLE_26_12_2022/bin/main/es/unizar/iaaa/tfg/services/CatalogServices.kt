package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

interface CatalogServices {
    fun showCatalogs(): Collection<Catalog?>
    fun showCatalog(id: String): Catalog?
    fun showCalogsCatalog(id: String): Collection<Catalog?>
    fun showRecordsCatalog(id: String): Collection<CatalogRecord?>
    fun showServicesCatalog(id: String): Collection<DataService?>
    fun showResourcesCatalog(id: String): Collection<ResourceInCatalog?>
    fun showDatasetsCatalog(id: String): Collection<DatasetInCatalog?>
}

@Service
class CatalogServicesImpl(
    private val converter: Converters,
    private val catalogRepository: CatalogRepository

) : CatalogServices {

    // Return list with all Catalogs
    override fun showCatalogs(): Collection<Catalog?> {
        val cEntity = catalogRepository.findAll()
        var catalogs = listOf<Catalog?>()
        cEntity.forEach {
            catalogs += it.toCatalog()
        }
        return catalogs
    }

    // Return Catalog id or null
    override fun showCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toCatalog()
        }
        return null
    }

    // Return list with catalogs belonging to catalg id
    override fun showCalogsCatalog(id: String): Collection<Catalog?> {
        /*val catalogsEntity = relationshipsRepository.findByIdCatalogAndTypes(id, "Catalog")
        var catalogs = listOf<Catalog?>()
        catalogsEntity.forEach {
            catalogs += Catalog(it?.resource!!.id, it.resource.title)
        }
        return catalogs*/
        return listOf()
    }

    // Return list with records belonging to catalg id
    override fun showRecordsCatalog(id: String): Collection<CatalogRecord> =
        catalogRepository.findByIdOrNull(id)
            ?.records
            ?.map {
                converter.toCatalogRecord(it)
            }?: emptyList()

    // Return list with services belonging to catalg id
    override fun showServicesCatalog(id: String): Collection<DataService?> {
       /* val catalogsEntity = relationshipsRepository.findByIdCatalogAndTypes(id, "DataService")
        var services = listOf<DataService?>()
        catalogsEntity.forEach {
            services += DataService(it?.resource!!.id, it.resource.title)
        }
        return services*/
        return listOf()
    }

    // Return list with resources belonging to catalg id
    override fun showResourcesCatalog(id: String): Collection<ResourceInCatalog?> {
       /* val relationsEntity = relationshipsRepository.findByIdCatalog(id)
        var resources = listOf<ResourceInCatalog?>()
        relationsEntity.forEach {
            resources += converter.createResource(it!!.resource)
        }
        return resources*/
        return listOf()
    }

    // Return list with resources belonging to catalg id
    override fun showDatasetsCatalog(id: String): Collection<DatasetInCatalog?> {
        /*val relationsEntity = relationshipsRepository.findByIdCatalogAndTypesNot(id, "DataService")
        var datasets = listOf<DatasetInCatalog?>()
        relationsEntity.forEach {
            datasets += converter.createDataset(it!!.resource)
        }
        return datasets*/
        return listOf()
    }
}
