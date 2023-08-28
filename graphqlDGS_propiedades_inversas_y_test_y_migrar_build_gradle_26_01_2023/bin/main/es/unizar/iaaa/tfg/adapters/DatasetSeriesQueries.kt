package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.DatasetSeriesService

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
        return datasetSeriesService.showDatasetSerie(id)
    }

    // @DgsData members: returns members field of the corresponding DatasetSeries
    @DgsData(parentType = "DatasetSeries")
    fun seriesMembers(filter:String?,dfe: DgsDataFetchingEnvironment): Collection<Dataset?> {
        val ds: DatasetSeries? = dfe.getSource()
        return datasetSeriesService.showSeriesMembers(filter,ds!!.id)
    }
}
