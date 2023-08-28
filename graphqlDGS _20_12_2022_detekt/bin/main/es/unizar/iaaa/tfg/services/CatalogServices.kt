package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.CatalogInRecordRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.RelationshipsRepository
import es.unizar.iaaa.tfg.services.converts.Converters
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
    private val relationshipsRepository: RelationshipsRepository,
    private val converter: Converters,
    private val catalogInRecordRepository: CatalogInRecordRepository,
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
        val catalogsEntity = relationshipsRepository.findByIdIdSourceAndTypes(id, "Catalog")
        var catalogs = listOf<Catalog?>()
        catalogsEntity.forEach {
            catalogs += Catalog(it?.idTarget!!.id, it.idTarget.title)
        }
        return catalogs
    }

    // Return list with records belonging to catalg id
    override fun showRecordsCatalog(id: String): Collection<CatalogRecord?> {
        val recordsEntity = catalogInRecordRepository.findByIdResourceId(id)
        var records = listOf<CatalogRecord?>()
        recordsEntity.forEach {
            records += converter.toCatalogRecord(it!!.catalogRecordId)
        }
        return records
    }

    // Return list with services belonging to catalg id
    override fun showServicesCatalog(id: String): Collection<DataService?> {
        val catalogsEntity = relationshipsRepository.findByIdIdSourceAndTypes(id, "DataService")
        var services = listOf<DataService?>()
        catalogsEntity.forEach {
            services += DataService(it?.idTarget!!.id, it.idTarget.title)
        }
        return services
    }

    // Return list with resources belonging to catalg id
    override fun showResourcesCatalog(id: String): Collection<ResourceInCatalog?> {
        val relationsEntity = relationshipsRepository.findByIdIdSource(id)
        var resources = listOf<ResourceInCatalog?>()
        relationsEntity.forEach {
            resources += converter.createResource(it!!.idTarget)
        }
        return resources
    }

    // Return list with resources belonging to catalg id
    override fun showDatasetsCatalog(id: String): Collection<DatasetInCatalog?> {
        val relationsEntity = relationshipsRepository.findByIdIdSourceAndTypesNot(id, "DataService")
        var datasets = listOf<DatasetInCatalog?>()
        relationsEntity.forEach {
            datasets += converter.createDataset(it!!.idTarget)
        }
        return datasets
    }
}
