package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.InitService

@DgsComponent
class DataSeriesQueries(
    private val initService: InitService
) {

    // @DgsQuery dataSeries: returns the dataSeries which id is the @InputArgument id
    @DgsQuery
    fun dataSeries(@InputArgument id: String?): DatasetSeries? {
        if (id == null) {
            return null
        }
        return initService.showDatasetSeries().firstOrNull { it?.id == id }
    }
}
