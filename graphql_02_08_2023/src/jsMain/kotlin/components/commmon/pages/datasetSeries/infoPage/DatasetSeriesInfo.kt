package components.commmon.pages.datasetSeries.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetInfoQuery
import es.unizar.iaaa.tfg.constants.ConstantValues
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.DataServiceInfo
import models.DatasetSeriesInfo
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

suspend fun getDataServiceInfo(id_dserv: String?,page: Int): Collection<DatasetSeriesInfo> {
    var seriesInfo: DatasetInfoQuery.OnDatasetSeries? = null

    if (id_dserv != null){
        seriesInfo =  apolloClient.query(DatasetInfoQuery(id= id_dserv!!, isDataset = false, isCatalog = false, page = page,isDataService = true, isDatasetSeries = false)).execute().data?.resource?.onDatasetSeries
    }

    if (seriesInfo != null) {
        return listOf(
            DatasetSeriesInfo(
                seriesInfo.id,
                seriesInfo.title?.map { it.literal },
                if(!seriesInfo.publisher?.label.isNullOrEmpty()) seriesInfo.publisher?.label else null,
                if (!seriesInfo.publisher?.notation.isNullOrBlank()) ConstantValues.ADMON_LEVEL[seriesInfo.publisher!!.notation[0]] else null,
                seriesInfo.description?.map { it.literal },
                seriesInfo.license,
                seriesInfo.issued.toString(),
                seriesInfo.modified.toString(),
                seriesInfo.numberOfMembersDatasets ?: 0,
                if(!seriesInfo.isPrimaryTopicOf.isNullOrEmpty()) seriesInfo.isPrimaryTopicOf?.map{ RecordsInfo(it.id, it.title) }?.first() else null,
                if(!seriesInfo.inCatalog.isNullOrEmpty()) seriesInfo.inCatalog?.map{ InCatalogInfo(it.identifier,it.id) } else null,
                if(!seriesInfo.seriesMembers.isNullOrEmpty()) seriesInfo.seriesMembers?.map{ ResourceInfo(it.identifier,it.id,it.__typename) } else null,
                if(!seriesInfo.isServedBy.isNullOrEmpty()) seriesInfo.isServedBy?.map{ IsServedInfo(it.identifier,it.id) } else null,

                )
        )
    }
    return emptyList()
}



external interface DatasetSeriesInfoProps : Props {}

val datasetSeriesInfo = FC<DatasetSeriesInfoProps> {

    val params: Params = useParams()
    var listTestDatasetSeries by useState(mutableListOf<DatasetSeriesInfo>())



    useEffect(emptyList<DataServiceInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getDataServiceInfo(params["id"],0)

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




