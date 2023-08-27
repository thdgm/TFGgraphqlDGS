package components.commmon.pages.dataservice.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetInfoQuery
import es.unizar.iaaa.tfg.constants.ConstantValues
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.DataServiceInfo
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

suspend fun getDataServiceInfo(id_dserv: String?, page: Int): Collection<DataServiceInfo> {
    var serviceInfo: DatasetInfoQuery.OnDataService? = null

    if (id_dserv != null){
        serviceInfo =  apolloClient.query(DatasetInfoQuery(id= id_dserv!!, isDataset = false, isCatalog = false, page = page,isDataService = true, isDatasetSeries = false)).execute().data?.resource?.onDataService
    }

    if (serviceInfo != null) {
        return listOf(
            DataServiceInfo(
                serviceInfo.id,
                serviceInfo.title?.map { it.literal },
                if(!serviceInfo.publisher?.label.isNullOrEmpty()) serviceInfo.publisher?.label else null,
                if (!serviceInfo.publisher?.notation.isNullOrBlank()) ConstantValues.ADMON_LEVEL[serviceInfo.publisher!!.notation[0]] else null,
                serviceInfo.description?.map { it.literal },
                serviceInfo.license,
                serviceInfo.issued.toString(),
                serviceInfo.modified.toString(),
                serviceInfo.numberOfServedResources ?: 0,
                serviceInfo.numberOfServedCatalogs ?: 0,
                serviceInfo.numberOfServedDatasets ?: 0,
                serviceInfo.numberOfServedDatasetSeries ?: 0,
                if(!serviceInfo.servesDataset.isNullOrEmpty()) serviceInfo.servesDataset?.map{ ResourceInfo(it.identifier, it.id, it.__typename) } else null,
                if(!serviceInfo.inCatalog.isNullOrEmpty()) serviceInfo.inCatalog?.map{ InCatalogInfo(it.identifier,it.id) } else null,
                if(!serviceInfo.isPrimaryTopicOf.isNullOrEmpty()) serviceInfo.isPrimaryTopicOf?.map{ RecordsInfo(it.id, it.title) }?.first() else null,
            )
        )
    }
    return emptyList()
}



external interface DataServiceInfoProps : Props {}

val dataServiceInfo = FC<DataServiceInfoProps> {

    val params: Params = useParams()
    var listTestDataServices by useState(mutableListOf<DataServiceInfo>())



    useEffect(emptyList<DataServiceInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getDataServiceInfo(params["id"],0)

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




