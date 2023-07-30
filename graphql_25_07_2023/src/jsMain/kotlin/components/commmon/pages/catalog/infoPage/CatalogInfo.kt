package components.commmon.pages.catalog.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetInfoQuery
import components.commmon.FilterListContextAll
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.DatasetInfo
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
import react.useRequiredContext
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

suspend fun getCatalogInfo(id_catalog: String?, page: Int): Collection<CatalogInfo> {
    var catalogInfo: DatasetInfoQuery.OnCatalog? = null

    if (id_catalog != null){
        catalogInfo =  apolloClient.query(DatasetInfoQuery(id= id_catalog!!, isDataset = false, isCatalog = true, page = page)).execute().data?.resource?.onCatalog
    }

    if (catalogInfo != null) {
        console.log("INFOOOOOO1  "+ catalogInfo)
        console.log("INFOOOOOO2  "+  catalogInfo.id)
        console.log("INFOOOOOO3"+ if(!catalogInfo.publisher?.label.isNullOrEmpty()) catalogInfo.publisher?.label else null)
        console.log("INFOOOOOO4   "+ if (!catalogInfo.publisher?.notation.isNullOrBlank()) ConstantValues.ADMON_LEVEL[catalogInfo.publisher!!.notation[0]] else null)
        console.log("INFOOOOOO5   "+ catalogInfo.description?.map { it.literal })
        console.log("INFOOOOOO6   "+ catalogInfo.license)
        console.log("INFOOOOOO7   "+ catalogInfo.issued.toString())
        console.log("INFOOOOOO8   "+ catalogInfo.modified.toString())
        console.log("INFOOOOOO9   "+ catalogInfo.resources?.map{ ResourceInfo(it.identifier, it.id, it.__typename)})
        console.log("INFOOOOOO10   "+ catalogInfo.inCatalog?.map{ InCatalogInfo(it.identifier,it.id) })
        console.log("INFOOOOOO11  "+ if(!catalogInfo.isPrimaryTopicOf.isNullOrEmpty()) catalogInfo.isPrimaryTopicOf?.map{ RecordsInfo(it.id, it.title) }?.first() else null)
        console.log("INFOOOOOO12  "+ catalogInfo.records)
        console.log("INFOOOOOO13  "+ catalogInfo.isServedBy)



        return listOf(
            CatalogInfo(
                catalogInfo.id,
                catalogInfo.title?.map { it.literal },
                if(!catalogInfo.publisher?.label.isNullOrEmpty()) catalogInfo.publisher?.label else null,
                if (!catalogInfo.publisher?.notation.isNullOrBlank()) ConstantValues.ADMON_LEVEL[catalogInfo.publisher!!.notation[0]] else null,
                catalogInfo.description?.map { it.literal },
                catalogInfo.license,
                catalogInfo.issued.toString(),
                catalogInfo.modified.toString(),
                if(!catalogInfo.resources.isNullOrEmpty()) catalogInfo.resources?.map{ ResourceInfo(it.identifier, it.id, it.__typename)} else null,
                if(!catalogInfo.records.isNullOrEmpty()) catalogInfo.records?.map{RecordsInfo(it.id, it.title)} else null,
                if(!catalogInfo.inCatalog.isNullOrEmpty()) catalogInfo.inCatalog?.map{ InCatalogInfo(it.identifier,it.id) } else null,
                if(!catalogInfo.isServedBy.isNullOrEmpty()) catalogInfo.isServedBy?.map{ IsServedInfo(it.identifier,it.id) } else null,
                if(!catalogInfo.isPrimaryTopicOf.isNullOrEmpty()) catalogInfo.isPrimaryTopicOf?.map{ RecordsInfo(it.id, it.title) }?.first() else null,
                catalogInfo.numberOfResources ?: 0,
                catalogInfo.numberOfCatalogs ?: 0,
                catalogInfo.numberOfDataServices ?: 0,
                catalogInfo.numberOfDatasets ?: 0,
                catalogInfo.numberOfDatasetSeries ?: 0
            )
        )

    }
    return emptyList()
}



external interface CatalogInfoProps : Props {}

val catalogInfo = FC<CatalogInfoProps> {

    val params: Params = useParams()
    var listTestCatalogs by useState(mutableListOf<CatalogInfo>())
    var selectedFilters by useRequiredContext(FilterListContextAll)
    //console.log("ESTOO: "+ selectedFilters)

    useEffect(emptyList<CatalogInfo>()) {
        GlobalScope.launch {
            val catalogsInfo = getCatalogInfo(params["id"],0)

            listTestCatalogs = mutableListOf()
            catalogsInfo.map{
                listTestCatalogs.add(it)
            }
            console.log("CATALOGGG INFOOOO::::: "+ listTestCatalogs)
        }

    }

    CatalogInfoElements{
        listTestCatalogInfo = listTestCatalogs
    }

}




