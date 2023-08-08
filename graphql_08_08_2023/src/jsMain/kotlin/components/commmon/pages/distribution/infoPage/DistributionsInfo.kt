package components.commmon.pages.distribution.infoPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetInfoQuery
import com.schema.DistributionInfoQuery
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.DistributionInfo
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

suspend fun getDistributionInfo(id_dist: String?): Collection<DistributionInfo> {
    var distInfo: DistributionInfoQuery.Distribution? = null
    val mediaTypeReverse: Map<String, String> = MediaTypeMap.MEDIA_TYPE.entries.associate { (key, value) -> value to key }
    if (id_dist != null){
        distInfo =  apolloClient.query(DistributionInfoQuery(id= id_dist!!)).execute().data?.distribution
    }

    if (distInfo != null) {
        println("-------<<<<<><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<${DistributionInfo(
            distInfo.id,
            distInfo.title?.map { it.literal },
            distInfo.accessUrl,
            if(!distInfo.identifier.isNullOrEmpty()) distInfo.identifier?.map{it} else null,
            mediaTypeReverse[distInfo.format?.type+ "/"+distInfo.format?.subtype],
            distInfo.byteSize.toString(),
            if(!distInfo.accessService.isNullOrEmpty()) distInfo.accessService?.map{ IsServedInfo(it.identifier,it.id) } else null
        )}")
        return listOf(
            DistributionInfo(
                distInfo.id,
                distInfo.title?.map { it.literal },
                distInfo.accessUrl,
                if(!distInfo.identifier.isNullOrEmpty()) distInfo.identifier?.map{it} else null,
                mediaTypeReverse[distInfo.format?.type+ "/"+distInfo.format?.subtype],
                distInfo.byteSize.toString(),
                if(!distInfo.accessService.isNullOrEmpty()) distInfo.accessService?.map{ IsServedInfo(it.identifier,it.id) } else null
            )
        )
    }
    println("NULLLLLL")
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
           // console.log("INFOOOOO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "+listTestDistribution)
        }

    }

    DistributionsInfoElements{
        listTestDistributionsInfo = listTestDistribution
    }

}




