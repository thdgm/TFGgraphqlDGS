package components.commmon.pages.distribution.mainPage


import csstype.ClassName
import csstype.Color
import csstype.NamedColor
import csstype.None
import csstype.rgb
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import mui.icons.material.ExpandMore
import mui.material.Accordion
import mui.material.AccordionDetails
import mui.material.AccordionSummary
import mui.material.ListItemButton
import mui.material.Typography
import mui.system.sx
import react.FC
import react.Props
import react.create
import react.useState

external interface FilterInfoDistributionsProps:Props{
    var filterName:String
    var filterFields: Collection<String>
    var updateFilterListMore: suspend () -> Unit
    var updateFilterListLess: suspend () -> Unit

}

val filterInfoDistributions = FC<FilterInfoDistributionsProps> { props ->

    var showMoreOrLess by useState(false)
    val handleClickMore = {
        GlobalScope.launch {
            //props.updateFilterListMore()
        }
    }
    val handleClickLess = {
        GlobalScope.launch {
           // props.updateFilterListLess()
        }
    }

    Accordion {
        sx {
            boxShadow = None.none
            backgroundColor = NamedColor.white
        }

        AccordionSummary{
            sx {
                boxShadow = None.none
            }
            className = ClassName("accordionHeader")
            expandIcon = ExpandMore.create()
            Typography {
                + "${props.filterName}"
            }
        }

        AccordionDetails{
            sx {
                boxShadow = None.none
            }
            mui.material.List {
                className = ClassName("scrollUlFilters")
                props.filterFields.forEachIndexed { index, it ->
                    ListItemButton {
                        +"$it"

                    }

                }

            }
            mui.material.List {
                ListItemButton {
                    sx {
                        color = Color("white")
                        backgroundColor = rgb(247, 160, 93)
                    }
                    className = ClassName("addMoreFilters")

                    if (!showMoreOrLess){
                        onClick = {handleClickMore(); showMoreOrLess = true}
                        +"Mostrar más"
                    }else{
                        onClick = {handleClickLess(); showMoreOrLess = false}
                        +"Mostrar menos"
                    }

                }
            }

        }
    }
}