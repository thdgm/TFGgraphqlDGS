package components.commmon.pages.catalogRecord.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.CatalogRecordInfo
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

suspend fun getCatalogRecordInfo(id_catalog_record: String?): Collection<CatalogRecordInfo> {
    return emptyList()
}



external interface CatalogRecordInfoProps : Props {}

val catalogRecordInfo = FC<CatalogRecordInfoProps> {

    val params: Params = useParams()
    var listTestCatalogRecords by useState(mutableListOf<CatalogRecordInfo>())



    useEffect(emptyList<CatalogInfo>()) {
        GlobalScope.launch {
            val catalogRecordsInfo = getCatalogRecordInfo(params["id"])

            listTestCatalogRecords = mutableListOf()
            catalogRecordsInfo.map{
                listTestCatalogRecords.add(it)
            }
        }

    }

    CatalogRecordInfoElements{
        listTestCatalogRecordInfo = listTestCatalogRecords
    }

}




