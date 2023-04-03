package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.Resource
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import org.springframework.stereotype.Service

/*
 * Services for get Identifiers.
 */
interface ReferenceWithinExternalContextServices {

    fun getIdentifiers(id: Any?): Collection<String?>
}

@Service
class ReferenceWithinExternalContextServicesImpl(
    private val identifierRepository: IdentifierRepository

    ) : ReferenceWithinExternalContextServices {

    // Return identifier resource id
    override fun getIdentifiers(resDist: Any?): Collection<String?> =
        when(resDist){
            is Distribution -> identifierRepository.findByDistributionId(resDist.id).map { it?.id }
            is Resource -> identifierRepository.findByResourceId(resDist.id).map { it?.id }
            else -> emptyList()
        }


}
