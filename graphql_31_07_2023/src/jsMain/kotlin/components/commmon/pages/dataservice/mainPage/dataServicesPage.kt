package components.commmon.pages.dataservice.mainPage


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


external interface DataServicesPageProps : Props {}


val DataServicesPage = FC<DataServicesPageProps> {

    Box {
        className = ClassName("box-init-page")

        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"Data Services"
        }
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginBottom = 1.pct
            }
            ariaLabel = "breadcrumb"
            Typography {
                +"/DataServices"
            }
        }
    }


    Box {
        sx {
            display = Display.flex
        }

        filterFormDataServ{
            filterList = emptyList()
        }
        listDataServ{
            dServList = emptyList()
            searchBy = ""
        }

    }
}






