package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.services.queryServices.CatalogRecordsServices
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ReferenceWithinExternalContextServices
import es.unizar.iaaa.tfg.services.queryServices.ResourceServices
import java.time.LocalDateTime

/*
 * Query Graphql implementation. Here there are the different fields of Resource type.
 * For one another, we call different services which return the corresponding type value.
 */
@DgsComponent
class NumberOfResourcesQueries(
    private val resourceServices: ResourceServices,
    private val catalogRecordsServices: CatalogRecordsServices,
    private val referenceWithinExternalContextServices: ReferenceWithinExternalContextServices,


    ) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun numberOfResources(@InputArgument type: String): Int {
        return resourceServices.getNumberOfResources(type)
    }


}
