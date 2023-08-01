package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

/*
 * Services for get DatasetInCatalog.
 */
interface DatasetInCatalogServices {
    fun getDatasetInCatalog(id: String): DatasetInCatalog?
}

@Service
class DatasetInCatalogServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val converter: ConvertersResourcesEntitiesTo,

) : DatasetInCatalogServices {

    // Return el DatasetInCatalog id or null
    override fun getDatasetInCatalog(id: String): DatasetInCatalog? {
        val resEntity = resourceRepository.findByIdAndTypeNot(id, "data_service")
        return if (resEntity != null) {
            converter.createDataset(resEntity)
        } else {
            null
        }
    }
}
