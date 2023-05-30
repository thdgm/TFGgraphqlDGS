package components.commmon.pages.distribution.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.DistributionInfo
//import kotlinx.datetime.LocalDateTime

import react.FC
import react.Props
import react.router.Params
import react.router.useParams
import react.useEffect
import react.useState



val apolloClient = ApolloClient.Builder()
    .serverUrl("http://localhost:8081/graphql")
    //.okHttpClient(okHttpClient)
    .httpMethod(HttpMethod.Post)
    .httpHeaders(
        listOf(
            HttpHeader("Access-Control-Allow-Origin","*"),
            HttpHeader("Access-Control-Allow-Methods", "POST"),
            HttpHeader("Content-Type", "application/json;"),
        )
    )
    .build()

suspend fun getDistributionInfo(id_dist: String?): Collection<DistributionInfo> {
    return emptyList()
}



external interface DistributionsInfoProps : Props {}

val distributionsInfo = FC<DistributionsInfoProps> {

    val params: Params = useParams()
    var listTestDistribution by useState(mutableListOf<DistributionInfo>())



    useEffect(emptyList<DistributionInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getDistributionInfo(params["id"])

            listTestDistribution = mutableListOf()
            datasetsInfo.map{
                listTestDistribution.add(it)
            }
        }

    }

    DistributionsInfoElements{
        listTestDistributionsInfo = listTestDistribution
    }

}




