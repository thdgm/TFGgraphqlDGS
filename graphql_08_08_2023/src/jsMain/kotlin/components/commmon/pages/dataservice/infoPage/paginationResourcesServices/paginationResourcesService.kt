package components.commmon.pages.dataservice.infoPage.paginationResourcesServices


import components.commmon.FilterListContextAll
import csstype.ClassName
import csstype.Position
import csstype.pct
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.CatalogInfo
import models.DataServiceInfo
import mui.material.Pagination
import mui.material.PaginationColor
import mui.material.Paper
import mui.material.Size
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.events.ChangeEvent
import react.useEffect
import react.useRequiredContext
import react.useState
import kotlin.math.ceil


external interface PaginationResourcesServiceProps: Props {

    var filterResourcesByType: (event: ChangeEvent<*>, number: Number) -> Unit
    var numberOfPages: Int
    var filterType: String
    var serviceInfo: MutableList<DataServiceInfo>


}
val paginationResourcesService = FC<PaginationResourcesServiceProps> { props ->

    var numberOfPages by useState(ceil(props.numberOfPages.toDouble() / 10).toInt())
    //var filterTest by useState(props.filterType)

    useEffect(props.filterType){
        //console.log("F1: "+props.filterType)
        if(props.serviceInfo.isNotEmpty()) {
            val num = when (props.filterType) {
                "All" -> props.serviceInfo.elementAt(0).numberOfResources
                "dataset" -> props.serviceInfo.elementAt(0).numberOfDatasets
                "catalog" -> props.serviceInfo.elementAt(0).numberOfCatalogs
                "dataset_series" -> props.serviceInfo.elementAt(0).numberOfDatasetSeries
                else -> 0
            }
            numberOfPages = ceil(num.toDouble() / 10).toInt()
        }
    }


    Paper {
        sx {
            paddingBottom = 1.pct
        }
        className = ClassName("pagination")
        elevation = 0
        Pagination {
            sx {
                position = csstype.Position.absolute
            }
            // val v = selectedFilters.filter { it.key == "Datasets" }.filter{it.key == "Page"}.values.first()
            //  page = selectedFilters.filter { it.key == "Datasets" }.filter{it.key == "Page"}.values.first().toInt()
            // page = selectedFilters["${props.resType}"]?.get("Page")?.firstOrNull()?.toInt() ?: 1
            color = mui.material.PaginationColor.primary
            count = numberOfPages
            size = mui.material.Size.small
            onChange = props.filterResourcesByType
        }
    }
}
