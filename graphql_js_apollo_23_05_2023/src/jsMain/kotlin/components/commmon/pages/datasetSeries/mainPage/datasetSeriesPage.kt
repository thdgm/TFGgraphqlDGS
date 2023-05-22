package components.commmon.pages.datasetSeries.mainPage


import csstype.ClassName
import csstype.Display
import csstype.pct
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Typography
import mui.system.sx
import react.FC
import react.Props
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML


external interface DatasetSeriesPageProps : Props {}


val DatasetSeriesPage = FC<DatasetSeriesPageProps> {

    Box {
        className = ClassName("box-init-page")

        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"Data Series"
        }
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginBottom = 1.pct
            }
            ariaLabel = "breadcrumb"
            Typography {
                +"/DatasetSeries"
            }
        }
    }


    Box {
        sx {
            display = Display.flex
        }
        filterFormDataSeries{
            filterList = emptyList()
        }
        listDataSeries{
            datasetSeriesList = emptyList()
            searchBy = ""
        }

    }
}






