package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

interface CatalogServices {
    fun showCatalog(id: String): Catalog?
    fun showCalogsCatalog(id: String): Collection<Catalog?>
    fun showRecordsCatalog(id: String): Collection<CatalogRecord?>
    fun showServicesCatalog(id: String): Collection<DataService?>
    fun showResourcesCatalog(id: String): Collection<ResourceInCatalog?>
    fun showDatasetsCatalog(id: String): Collection<DatasetInCatalog?>
    fun getCatalogOfResource(id: String): Collection<Catalog?>
}

@Service
class CatalogServicesImpl(
    private val converter: Converters,
    private val catalogRepository: CatalogRepository,
    private val resourceRepository: ResourceRepository,
    private val datasetRepository: DatasetRepository,

) : CatalogServices {

    // Return Catalog id or null
    override fun showCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        return if (!c.isEmpty) converter.toCatalog(c.get()) else null
    }

    // Return list with catalogs belonging to catalg id
    override fun showCalogsCatalog(id: String): Collection<Catalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type == "catalog" }
            .map {
                converter.toCatalog(it)
            }

    // Return list with records belonging to catalg id
    override fun showRecordsCatalog(id: String): Collection<CatalogRecord> =
        catalogRepository.findByIdOrNull(id)
            ?.records
            ?.map {
                converter.toCatalogRecord(it)
            } ?: emptyList()

    // Return list with services belonging to catalg id
    override fun showServicesCatalog(id: String): Collection<DataService?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type == "data_service" }
            .map {
                converter.toDataService(it)
            }

    // Return list with resources belonging to catalg id
    override fun showResourcesCatalog(id: String): Collection<ResourceInCatalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .map {
                var periodicidad: String? = null
                var temporal: CoberturaTemporal? = null
                if (it is DatasetEntity) {
                    val dataset = datasetRepository.findById(it.id).get()
                    periodicidad = dataset.accrualPeriodicity
                    temporal = converter.toCoberturaTemporal(dataset.temporalCoverageStart, dataset.temporalCoverageEnd)
                }
                converter.createResource(it, periodicidad, temporal)
            }

    // Return list with resources belonging to catalg id
    override fun showDatasetsCatalog(id: String): Collection<DatasetInCatalog?> =
        resourceRepository.findResourcesCatalogByCatalogResourcesId(id)
            .filter { it.type != "data_service" }
            .map {
                var periodicidad: String? = null
                var temporal: CoberturaTemporal? = null
                if (it is DatasetEntity) {
                    val dataset = datasetRepository.findById(it.id).get()
                    periodicidad = dataset.accrualPeriodicity
                    temporal = converter.toCoberturaTemporal(
                        dataset.temporalCoverageStart,
                        dataset.temporalCoverageEnd
                    )
                }
                converter.createDataset(it, periodicidad, temporal)
            }

    // Return de catalog which contains de resource id
    override fun getCatalogOfResource(id: String): Collection<Catalog?> = catalogRepository.findCatalogResourcesByResourcesCatalogId(
        "d1"
    )
        ?.map {
            converter.catalogEntitytoCatalog(it)
        } ?: emptyList()
}
