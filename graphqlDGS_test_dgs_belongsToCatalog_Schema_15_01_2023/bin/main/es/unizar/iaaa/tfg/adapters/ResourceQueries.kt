package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.*
import es.unizar.iaaa.tfg.services.CatalogServices
import es.unizar.iaaa.tfg.services.ResourceServices

@DgsComponent
class ResourceQueries(
    private val resourceServices: ResourceServices,

) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun resource(@InputArgument id: String?): Resource? {
        if (id == null) {
            return null
        }
        return resourceServices.showResources(id)
    }



}
