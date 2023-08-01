package components.commmon.pages.datasetSeries.mainPage


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

external interface FilterInfoDatasetSeriesProps:Props{
    var filterName:String
    var filterFields: Collection<String>
    var updateFilterListMore: suspend () -> Unit
    var updateFilterListLess: suspend () -> Unit

}

val filterInfoDatasetSeries = FC<FilterInfoDatasetSeriesProps> { props ->

    var selectedFilters by useRequiredContext(FilterListContextAll)
    var showMoreOrLess by useState(false)
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
                        disabled = if (selectedFilters["DatasetSeries"]!!["Número de datasets"]?.isNotEmpty() == true && props.filterName != "Número de datasets") true else isDisabled
                        onClick = {
                            selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                if (key == "DatasetSeries") {
                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                        if (innerKey == props.filterName && !filterVal.contains(value)){
                                            if(props.filterName == "Número de datasets") {
                                                filterVal.filter{false}.plus(value)
                                            }else{
                                                filterVal.plus(value)
                                            }
                                        }
                                        //else if (filterVal.contains(value)) filterVal.filter { miVal -> miVal != value }
                                        else filterVal
                                    }.toMutableMap()
                                } else {
                                    catalogMap
                                }
                            }.toMutableMap()

                            selected = selectedFilters["DatasetSeries"]!!.toMutableMap()[props.filterName]?.contains(value)
                            value
                        }

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