package components.commmon.pages.catalog.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
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

suspend fun getCatalogInfo(id_catalog: String?): Collection<CatalogInfo> {
    return emptyList()
}



external interface CatalogInfoProps : Props {}

val catalogInfo = FC<CatalogInfoProps> {

    val params: Params = useParams()
    var listTestCatalogs by useState(mutableListOf<CatalogInfo>())



    useEffect(emptyList<CatalogInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getCatalogInfo(params["id"])

            listTestCatalogs = mutableListOf()
            datasetsInfo.map{
                listTestCatalogs.add(it)
            }
        }

    }

    CatalogInfoElements{
        listTestCatalogInfo = listTestCatalogs
    }

}




