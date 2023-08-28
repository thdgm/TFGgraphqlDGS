package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.InitService

@DgsComponent
class ResourceQueries(
    private val initService: InitService
) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun resource(@InputArgument id: String?): Resource? {
        if (id == null) {
            return null
        }

        return initService.showResourcesInCatalog().firstOrNull {
            when (it) {
                is Dataset -> it.id == id
                is Catalog -> it.id == id
                is DatasetSeries -> it.id == id
                is DataService -> it.id == id
                else -> false
            }
        } as
            Resource?
    }

    // @DgsQuery resources: returns the resourceInCatalog which id is the @InputArgument id
    @DgsQuery
    fun resources(@InputArgument id: String?): ResourceInCatalog? {
        if (id == null) {
            return null
        }

        return initService.showResourcesInCatalog().firstOrNull {
            when (it) {
                is Dataset -> it.id == id
                is Catalog -> it.id == id
                is DatasetSeries -> it.id == id
                is DataService -> it.id == id
                else -> false
            }
        }
    }
}
