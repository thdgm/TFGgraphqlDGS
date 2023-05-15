package components.commmon.secondPages.dataservice.mainPage


import components.commmon.secondPages.catalog.mainPage.filterFormCatalog
import components.commmon.secondPages.catalog.mainPage.listCatalog
import components.commmon.secondPages.catalogRecord.mainPage.filterFormCR
import components.commmon.secondPages.catalogRecord.mainPage.listCR
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
                +"/Data Services"
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






