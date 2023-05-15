package components.commmon.secondPages.datasetSeries.mainPage


import components.commmon.secondPages.dataservice.mainPage.filterFormDataServ
import components.commmon.secondPages.dataservice.mainPage.listDataServ
import csstype.ClassName
import csstype.Display
import csstype.pct
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Typography
import mui.system.sx
import react.FC
import react.Props
import react.StateInstance
import react.createContext
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
                +"/Data Series"
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






