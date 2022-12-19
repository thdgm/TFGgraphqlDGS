package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.InitServiceById

@DgsComponent
class ResourceQueries(
    private val initServiceById: InitServiceById,
) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun resource(@InputArgument id: String?): Resource? {
        if (id == null) {
            return null
        }

        return initServiceById.showResourceInCatalog(id)
    }
}
