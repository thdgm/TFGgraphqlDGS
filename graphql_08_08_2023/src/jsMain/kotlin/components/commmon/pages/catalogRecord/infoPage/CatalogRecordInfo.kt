package components.commmon.pages.catalogRecord.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.CatalogRecordInfoQuery
import com.schema.DatasetInfoQuery
import es.unizar.iaaa.tfg.constants.ConstantValues
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.CatalogRecordInfo
import models.InCatalogInfo
import models.IsServedInfo
import models.RecordsInfo
import models.ResourceInfo
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
    var crInfo: CatalogRecordInfoQuery.CatalogRecord? = null

    if (id_catalog_record != null){
        crInfo =  apolloClient.query(CatalogRecordInfoQuery(id= id_catalog_record)).execute().data?.catalogRecord
    }

    if (crInfo != null) {
        return listOf(
            CatalogRecordInfo(
                crInfo.id,
                crInfo.title,
                crInfo.contentType,
                crInfo.content,
                crInfo.contentURL,
                crInfo.hints,
                if(crInfo.primaryTopic.id != null) ResourceInfo(crInfo.primaryTopic.identifier,crInfo.primaryTopic.id,crInfo.primaryTopic.__typename) else null,
                if(!crInfo.inCatalog.isNullOrEmpty()) crInfo.inCatalog?.map{ InCatalogInfo(it.identifier,it.id) } else null,
                )
        )
    }
    return emptyList()
}



external interface CatalogRecordInfoProps : Props {}

val catalogRecordInfo = FC<CatalogRecordInfoProps> {

    val params: Params = useParams()
    var listTestCatalogRecords by useState(mutableListOf<CatalogRecordInfo>())



    useEffect(emptyList<CatalogInfo>()) {
        GlobalScope.launch {
            val catalogRecordsInfo = getCatalogRecordInfo(params["id"]?.replace("\\","/"))

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




