package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ResourcesByFilterServices
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ResourcesByIdentifier

@DgsComponent
class FindResourceByIdentifier(
    private val resourcesByIdentifier: ResourcesByIdentifier,
) {

    @DgsQuery
    fun findResourceByIdentifier(@InputArgument id: String): Resource?{
        return resourcesByIdentifier.getResourceByIdentifier(id)
    }
}