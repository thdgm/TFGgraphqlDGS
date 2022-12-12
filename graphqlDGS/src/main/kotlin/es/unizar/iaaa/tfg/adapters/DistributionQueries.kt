package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.domain.Properties
import es.unizar.iaaa.tfg.services.GetFieldService
import es.unizar.iaaa.tfg.services.InitService
import es.unizar.iaaa.tfg.services.InitServiceById

@DgsComponent
class DistributionQueries(
    private val initService: InitService,
    private val initServiceById: InitServiceById,
    private val getFieldService: GetFieldService
) {

    // @DgsQuery distribution: returns the distribution which id is the @InputArgument id
    @DgsQuery
    fun distribution(@InputArgument id: String?): Distribution? {
        if (id == null) {
            return null
        }
        return initServiceById.showDistribution(id)
    }

    // @DgsData accessService: returns accessService field of the corresponding Distribution
    @DgsData(parentType = "Distribution")
    fun accessService(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val dist: Distribution? = dfe.getSource()
        return initService.showDataServices().filter {
            it?.id in getFieldService.loadDistributions(dist!!.id, Properties.ACCESSSERVICE.n)
        }
    }
}
