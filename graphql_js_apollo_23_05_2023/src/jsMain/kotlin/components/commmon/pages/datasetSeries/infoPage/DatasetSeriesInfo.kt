package components.commmon.pages.datasetSeries.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.DataServiceInfo
import models.DatasetSeriesInfo
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

suspend fun getDataServiceInfo(id_dserv: String?): Collection<DatasetSeriesInfo> {
    return emptyList()
}



external interface DatasetSeriesInfoProps : Props {}

val datasetSeriesInfo = FC<DatasetSeriesInfoProps> {

    val params: Params = useParams()
    var listTestDatasetSeries by useState(mutableListOf<DatasetSeriesInfo>())



    useEffect(emptyList<DataServiceInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getDataServiceInfo(params["id"])

            listTestDatasetSeries = mutableListOf()
            datasetsInfo.map{
                listTestDatasetSeries.add(it)
            }
        }

    }

    DatasetSeriesInfoElements{
        listTestDatasetSeriesInfo = listTestDatasetSeries
    }

}




