package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ResourcesByFilterServices

@DgsComponent
class ResourcesByFilter(
    private val resourcesByFilterServices: ResourcesByFilterServices,
    ) {

    // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
    @DgsQuery
    fun resourcesByFilter(@InputArgument filter: String?, @InputArgument value: Collection<String>, @InputArgument page: Int): Collection<Resource?>{
        if (filter == null || value == null) {
            return emptyList()
        }
        return resourcesByFilterServices.getResourcesByField(filter,value,page)
    }

}