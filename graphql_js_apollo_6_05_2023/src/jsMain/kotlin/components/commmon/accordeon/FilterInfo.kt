package components.commmon.accordeon

import components.commmon.filterForm.filterForm
import components.commmon.layout.FilterListContext
import csstype.Auto
import csstype.ClassName
import csstype.Color
import csstype.NamedColor
import csstype.None
import csstype.pct
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
import react.ReactNode
import react.create
import react.useRequiredContext
import react.useState

external interface FilterInfoProps:Props{
    var filterName:String
    var filterFields: Collection<String>
    var updateFilterListMore: suspend () -> Unit
    var updateFilterListLess: suspend () -> Unit

}

val filterInfo = FC<FilterInfoProps> { props ->
    var selectedFilters by useRequiredContext(FilterListContext)
    var showMoreOrLess by useState(false)
    val handleClickMore = {
        GlobalScope.launch {
            props.updateFilterListMore()
        }
    }
    val handleClickLess = {
        GlobalScope.launch {
            props.updateFilterListLess()
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
                        onClick = { _ ->
                            selectedFilters = selectedFilters.toMutableMap().mapValues { (key, filterVal) ->
                                if (key == props.filterName && !filterVal.contains(it)) filterVal.plus(it) else if (filterVal.contains(
                                        it
                                    )
                                ) filterVal.filter { miVal -> miVal != it } else filterVal
                            }.toMutableMap()
                        }

                        selected = selectedFilters.toMutableMap()[props.filterName]?.contains(it)
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
            /*ListFilterParams{
                this.filterFields = props.filterFields
                category = props.filterName
            }*/
        }
    }
}