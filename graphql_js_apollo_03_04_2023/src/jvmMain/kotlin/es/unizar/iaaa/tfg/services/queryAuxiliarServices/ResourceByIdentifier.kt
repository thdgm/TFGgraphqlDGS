package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface ResourcesByIdentifier {
    fun getResourceByIdentifier(id: String): Resource?
}

@Service
class ResourcesByIdentifierImpl(
    private val identifierRepository: IdentifierRepository,
    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo

) : ResourcesByIdentifier {

    // Return resourceInCatalog collection according to field value
    override fun getResourceByIdentifier(id: String): Resource? {
       // val d = identifierRepository.findById(id).get().resource
        return convertersResourcesEntitiesTo.createResource(identifierRepository.findById(id).get().resource)
    }




}
