package components.commmon.pages.catalog.mainPage


import FiltersMap.FiltersMapKeys
import components.commmon.pages.dataset.mainPage.FilterListContext
import components.commmon.pages.dataset.mainPage.filtersSelectedMap
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
import react.useState


external interface CatalogsPageProps : Props {}


val CatalogsPage = FC<CatalogsPageProps> {


        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Catalogs"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/Catalogs"
                }
            }
        }


        Box {
            sx {
                display = Display.flex
            }
            filterFormCatalog {
                filterList = emptyList()
            }
            listCatalog {
                catalogsList = emptyList()
                searchBy = ""
            }

        }
}






