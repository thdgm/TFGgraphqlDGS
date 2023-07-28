package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ResourcesByFilterServices

@DgsComponent
class ResourcesByFilter(
    private val resourcesByFilterServices: ResourcesByFilterServices,
    ) {

    // @DgsQuery resourcesByFilter: return resources filtered by filters values
    @DgsQuery
    fun resourcesByFilter(@InputArgument filters: Collection<MapInput>, @InputArgument type: String, @InputArgument page: Int,@InputArgument isDataset: Boolean,@InputArgument isCatalog: Boolean): Collection<Resource?>{
        println("ENTRA::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
        return resourcesByFilterServices.getResourcesByFilters(filters,type,page)
    }

}