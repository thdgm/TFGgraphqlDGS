package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.DataServicesServices

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
        return dataServicesServices.showDataService(id)
    }

    // @DgsData servesDataset: returns servesDataset field of the corresponding DataService
    @DgsData(parentType = "DataService")
    fun servesDataset(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {

        val dserv: DataService? = dfe.getSource()
        return dataServicesServices.showServesDataset(dserv!!.id)
    }
}
