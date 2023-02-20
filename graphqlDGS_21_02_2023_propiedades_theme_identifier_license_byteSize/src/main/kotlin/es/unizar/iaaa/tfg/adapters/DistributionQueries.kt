package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.NonNegativeInt
import es.unizar.iaaa.tfg.services.DistributionServices

@DgsComponent
class DistributionQueries(
    private val distributionServices: DistributionServices,

) {

    // @DgsQuery distribution: returns the distribution which id is the @InputArgument id
    @DgsQuery
    fun distribution(@InputArgument id: String?): Distribution? {
        if (id == null) {
            return null
        }
        return distributionServices.showDistribution(id)
    }

    // @DgsData title: returns title as LangString collection
    @DgsData(parentType = "Distribution")
    fun title(dfe: DgsDataFetchingEnvironment): Collection<LangString?> {
        val dist: Distribution? = dfe.getSource()
        return distributionServices.getDistributionTitles(dist!!.id)
    }

    // @DgsData accessService: returns accessService field of the corresponding Distribution
    @DgsData(parentType = "Distribution")
    fun accessService(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val dist: Distribution? = dfe.getSource()
        return distributionServices.showDistributionAccessService(dist!!.id)
    }

    // @DgsData accessUrl: returns accessUrl field of the corresponding Distribution
    @DgsData(parentType = "Distribution")
    fun accessUrl(dfe: DgsDataFetchingEnvironment): String? {
        val dist: Distribution? = dfe.getSource()
        return distributionServices.showDistributionAccessUrl(dist!!.id)
    }

    // @DgsQuery identifier: returns the identifier field of Distribution
    @DgsData(parentType = "Distribution")
    fun identifier(dfe: DgsDataFetchingEnvironment): String? {
        val res: Distribution? = dfe.getSource()
        return distributionServices.getIdentifier(res!!.id)
    }

    // @DgsQuery byteSize: returns the identifier field of Distribution
    @DgsData(parentType = "Distribution")
    fun byteSize(dfe: DgsDataFetchingEnvironment): NonNegativeInt? {
        val res: Distribution? = dfe.getSource()
        return distributionServices.getByteSize(res!!.id)
    }
    // @DgsQuery format: returns the format field of Distribution
    @DgsData(parentType = "Distribution")
    fun format(dfe: DgsDataFetchingEnvironment): String? {
        val res: Distribution? = dfe.getSource()
        return distributionServices.getFormat(res!!.id)
    }
}
