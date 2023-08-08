package components.commmon.pages.datasetSeries.infoPage.paginationsSeriesInfo

import csstype.ClassName
import csstype.pct
import mui.material.Pagination
import mui.material.Paper
import mui.system.sx
import react.FC
import react.Props
import react.dom.events.ChangeEvent
import react.useState
import kotlin.math.ceil


external interface PaginationIsServedBySeriesProps: Props {

    var pageServedBy: (event: ChangeEvent<*>, number: Number) -> Unit
    var numberOfPages: Int
}
val paginationIsServedBySeries = FC<PaginationIsServedBySeriesProps> { props ->

    var numberOfPages by useState(ceil(props.numberOfPages.toDouble() / 10).toInt())
   // console.log("SERVEDD NUUKMMMM: : "+ numberOfPages)

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
            onChange = props.pageServedBy
        }
    }
}
