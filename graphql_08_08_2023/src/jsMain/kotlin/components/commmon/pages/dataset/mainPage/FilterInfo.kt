package components.commmon.pages.dataset.mainPage

import Store.AppState
import Store.SetLoadingFalse
import Store.SetLoadingTrue

import commonModels.DatasetModel
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
import react.dom.html.ReactHTML.div
import react.useEffect
import react.useRequiredContext
import react.useState
import redux.RAction
import redux.Store
import redux.WrapperAction

external interface FilterInfoProps:Props{
    var filterName:String
    var filterFields: MutableCollection<String>
    var updateFilterListMore: suspend () -> Unit
    var updateFilterListLess: suspend () -> Unit



}

val filterInfo = FC<FilterInfoProps> { props ->
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var filterFields by useState(props.filterFields)
    var filterFieldsIsEmpty by useState(props.filterFields.isEmpty())
    var showMoreOrLess by useState(false)
    var isDisabled by useRequiredContext(IsLoadingContext)

    //console.log("UNO: "+disbledButtons)
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

    //console.log("ESTADOOOOOOOOOOOOOOOOOOOOOOOOOOOOO:::::::: "+state)
    useEffect(listOf(props.filterFields)) {
        //console.log("ESTO RECIBO:: "+ props.filterFields)
        filterFields = props.filterFields


        //console.log("CAMBIA STORE: "+store.getState().isLoading)

    }
    val disable = SetLoadingFalse()
    val enable = SetLoadingTrue()

/*


    val handleOnClick: () -> Unit = {  isLoading = store.getState().isLoading
    }

 */

    /*useEffect(selectedFilters) {
        console.log("CAMBIA STORE2: "+store.getState().isLoading)
    }
    useEffect(listOf(selectedFilters)) {
        console.log("CAMBIA STORE3: "+store.getState().isLoading)
    }
    useEffect(arrayOf(selectedFilters)) {
        console.log("CAMBIA STORE4: "+store.getState().isLoading)
    }*/





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
        //console.log("ESTO RECIBO2:: "+ props.filterFields)


        AccordionDetails{
            sx {
                boxShadow = None.none
            }

            mui.material.List {
                className = ClassName("scrollUlFilters")

                   // console.log("SELECTED: " + disbledButtons)
                    if (!filterFields.isEmpty()) {
                        filterFields.forEachIndexed { index, value ->

                            ListItemButton {
                                disabled = isDisabled
                                onClick = {
                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "Datasets") {
                                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                if (innerKey == props.filterName && !filterVal.contains(value)) filterVal.plus(
                                                    value
                                                )
                                                else if (innerKey == "Page") filterVal.filter { false }.plus("1")
                                                else if (filterVal.contains(value)) filterVal.filter { miVal -> miVal != value }
                                                else filterVal
                                            }.toMutableMap()
                                        } else {
                                            catalogMap
                                        }
                                    }.toMutableMap();



                                }
                                selected =
                                    selectedFilters["Datasets"]!!.toMutableMap()[props.filterName]?.contains(value)
                                +"$value"

                            }
                        }
                    }
                }

            }
        if (props.filterName != "Etiquetas más comunes"){
            mui.material.List {
                ListItemButton {
                    sx {
                        color = Color("white")
                        backgroundColor = rgb(247, 160, 93)
                    }
                    className = ClassName("addMoreFilters")

                        if (!showMoreOrLess) {
                            onClick = { handleClickMore(); showMoreOrLess = true }
                            +"Mostrar más"
                        } else {
                            onClick = { handleClickLess(); showMoreOrLess = false }
                            +"Mostrar menos"
                        }
                }
            }
        }
            /*ListFilterParams{
                this.filterFields = props.filterFields
                category = props.filterName
            }*/

    }
}