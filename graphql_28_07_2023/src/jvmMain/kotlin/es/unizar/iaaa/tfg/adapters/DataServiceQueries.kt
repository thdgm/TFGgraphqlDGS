package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryServices.DataServicesServices

/*
 * Query Graphql implementation. Here there are the different fields of DataService type.
 * For one another, we call different services which return the corresponding type value.
 */
@DgsComponent
class DataServiceQueries(
    private val dataServicesServices: DataServicesServices,
) {
    // @DgsQuery dataService: returns the dataService which id is the @InputArgument id
    @DgsQuery
    fun dataService(@InputArgument id: String?): DataService? {
        if (id == null) {
            return null
        }
        return dataServicesServices.getDataService(id)
    }

    // @DgsData servesDataset: returns servesDataset field of the corresponding DataService
    @DgsData(parentType = "DataService")
    fun servesDataset(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
        val dserv: DataService = dfe.getSource()
        return dataServicesServices.getServesDataset(dserv.id)
    }

    // @DgsData isAccessedBy: returns the inverse of accessService metadata in Distribution
    @DgsData(parentType = "DataService")
    fun isAccessedBy(dfe: DgsDataFetchingEnvironment): Collection<Distribution> {
        val dserv: DataService = dfe.getSource()
        return dataServicesServices.getDistributions(dserv.id)
    }
}
