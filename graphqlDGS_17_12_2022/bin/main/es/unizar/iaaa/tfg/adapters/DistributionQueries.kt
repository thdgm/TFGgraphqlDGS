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
import es.unizar.iaaa.tfg.services.converts.ConvertersEntityTo

@DgsComponent
class DistributionQueries(
    private val initService: InitService,
    private val initServiceById: InitServiceById,
    private val getFieldService: GetFieldService,
    private val convertersEntityTo: ConvertersEntityTo
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
    // Puedo buscar en DataService aquellos con distribution_id igual al dfe.getSource().id
    @DgsData(parentType = "Distribution")
    fun accessService(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val dist: Distribution? = dfe.getSource()
        val servicesEntities = initService.showDataServices().filter {
            1==1
            //it?.distribution?.id == dist!!.id
            //it?.id in getFieldService.loadDistributions(dist!!.id, Properties.ACCESSSERVICE.n)
        }
        return convertersEntityTo.toDataServices(servicesEntities)

    }
}
