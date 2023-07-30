package components.commmon.pages.distribution.mainPage


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


external interface DistributionsPageProps : Props {}


val DistributionsPage = FC<DistributionsPageProps> {

    Box {
        className = ClassName("box-init-page")

        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"Distributions"
        }
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginBottom = 1.pct
            }
            ariaLabel = "breadcrumb"
            Typography {
                +"/Distributions"
            }
        }
    }


    Box {
        sx {
            display = Display.flex
        }
        filterFormDistributions{
            filterList = emptyList()
        }
        listDistributions{
            distributionsList = emptyList()
            searchBy = ""
        }

    }
}






