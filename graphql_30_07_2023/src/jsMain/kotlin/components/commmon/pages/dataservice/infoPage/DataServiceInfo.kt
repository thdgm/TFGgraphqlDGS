package components.commmon.pages.dataservice.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.DataServiceInfo
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

suspend fun getDataServiceInfo(id_dserv: String?): Collection<DataServiceInfo> {
    return emptyList()
}



external interface DataServiceInfoProps : Props {}

val dataServiceInfo = FC<DataServiceInfoProps> {

    val params: Params = useParams()
    var listTestDataServices by useState(mutableListOf<DataServiceInfo>())



    useEffect(emptyList<DataServiceInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getDataServiceInfo(params["id"])

            listTestDataServices = mutableListOf()
            datasetsInfo.map{
                listTestDataServices.add(it)
            }
        }

    }

    DataServiceInfoElements{
        listTestDServInfo = listTestDataServices
    }

}




