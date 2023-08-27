package components.commmon.pages.catalogRecord.mainPage


import components.commmon.FilterListContextAll
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
import react.useEffect
import react.useRequiredContext
import react.useState

external interface FilterInfoCRProps:Props{
    var filterName:String
    var filterFields: Collection<String>
    var updateFilterListMore: suspend () -> Unit
    var updateFilterListLess: suspend () -> Unit

}

val filterInfoCR = FC<FilterInfoCRProps> { props ->

    var showMoreOrLess by useState(false)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)
    var filterFields by useState(props.filterFields)


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

    useEffect(listOf(props.filterFields)) {
        filterFields = props.filterFields
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
                props.filterFields.forEachIndexed { index, value ->
                    ListItemButton {
                        disabled = isDisabled
                        onClick = { selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "CatalogRecords") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == props.filterName && !filterVal.contains(value)) filterVal.plus(value)
                                   // else if (filterVal.contains( value)) filterVal.filter { miVal -> miVal != value }
                                    else if (innerKey == "Page") filterVal.filter { false }.plus("1")
                                    else filterVal
                                }.toMutableMap()
                            } else { catalogMap }
                            }.toMutableMap()
                        }
                        selected = selectedFilters["CatalogRecords"]!!.toMutableMap()[props.filterName]?.contains(value)
                        +"$value"
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
                    disabled = isDisabled
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