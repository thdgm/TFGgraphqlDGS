package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface ResourcesByFilterServices {
    fun getResourcesByField(filter: String, value: String): Collection<Resource?>
}

@Service
class ResourcesByFilterServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo

) : ResourcesByFilterServices {

    // Return resourceInCatalog collection according to field value
    override fun getResourcesByField(filter: String, value: String): Collection<Resource?> =
        when(filter){
            "publisher" -> resourceRepository.findAll().filter { it.publisher?.notation == value }
                .map {  convertersResourcesEntitiesTo.createResource(it)}
            else -> emptyList()
        }




}
