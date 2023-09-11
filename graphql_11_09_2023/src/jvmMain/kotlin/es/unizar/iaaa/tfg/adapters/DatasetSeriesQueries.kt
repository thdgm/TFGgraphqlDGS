package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryServices.DatasetSeriesService


/*
 * Query Graphql implementation. Here there are the different fields of DatasetSeries type.
 * For one another, we call different services which return the corresponding type value.
 */
@DgsComponent
class DatasetSeriesQueries(
    private val datasetSeriesService: DatasetSeriesService,
) {

    // @DgsQuery dataSeries: returns the dataSeries which id is the @InputArgument id
    @DgsQuery
    fun datasetSeries(@InputArgument id: String?): DatasetSeries? {
        if (id == null) {
            return null
        }
        println("SERIESSSSSSSS")
        return datasetSeriesService.getDatasetSerie(id)
    }

    // @DgsData members: returns members field of the corresponding DatasetSeries
    @DgsData(parentType = "DatasetSeries")
    fun seriesMembers(filter: String?, dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<Dataset?> {
        val ds: DatasetSeries = dfe.getSource()
        println("SERIESSSSSSSS MEMBERSSSSSS")
        return datasetSeriesService.getSeriesMembers(filter, ds.id, page, pageSize)
    }

    // @DgsData numberOfMembersDatasets: returns number of datasets within the dataset series
    @DgsData(parentType = "DatasetSeries")
    fun numberOfMembersDatasets(dfe: DgsDataFetchingEnvironment): Int? {
        val ds: DatasetSeries = dfe.getSource()
        return datasetSeriesService.getNumberOfMembersDatasets(ds.id)
    }
}
