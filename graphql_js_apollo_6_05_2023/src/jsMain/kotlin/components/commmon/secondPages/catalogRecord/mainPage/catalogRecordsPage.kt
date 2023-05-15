package components.commmon.secondPages.catalogRecord.mainPage


import components.commmon.filterForm.filterForm
import components.commmon.secondPages.catalog.mainPage.filterFormCatalog
import components.commmon.secondPages.catalog.mainPage.listCatalog
import csstype.ClassName
import csstype.Display
import csstype.pct
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML


external interface CatalogRecordsPageProps : Props {}


val CatalogRecordsPage = FC<CatalogRecordsPageProps> {

    Box {
        className = ClassName("box-init-page")

        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"Catalog Records"
        }
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginBottom = 1.pct
            }
            ariaLabel = "breadcrumb"
            Typography {
                +"/Catalog Records"
            }
        }
    }


    Box {
        sx {
            display = Display.flex
        }

        filterFormCR{
            filterList = emptyList()
        }
        listCR{
            cRList = emptyList()
            searchBy = ""
        }

    }
}






