package components.commmon.selectFilter.selectedDatasetSeries




import components.commmon.FilterListContextAll
import csstype.NamedColor
import csstype.px
import models.DatasetSeriesInfo
import mui.material.FormControl
import mui.material.FormHelperText
import mui.material.InputLabel
import mui.material.MenuItem
import mui.material.Select
import mui.material.Size
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLIElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.useRequiredContext
import react.useState

external interface SelectSearchByDSeriesProps : Props {
    var infoSeries: MutableList<DatasetSeriesInfo>
}
val selectSearchByDSeries = FC<SelectSearchByDSeriesProps> { props ->
    var seriesInfo by useState(props.infoSeries)
    var orderVal by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)

    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,child ->
       // console.log(child)
        //console.log(event)
        orderVal = event.target.value
    }
    fun checkIfSelectedFiltersIsEmpty(selectedVal: String): Boolean{
        selectedFilters["DatasetSeries"]?.map{
            if (it.key == selectedVal){
                if(it.value.isEmpty()){
                    return true
                }
            }
        }
        selectedFilters["DatasetSeries"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }
    FormControl {
        sx {
            minWidth = 220.px

        }
        size = Size.small
        InputLabel {
            id = "demo-select-small"
            +"Search by"
        }
        Select {
            sx {
                backgroundColor = NamedColor.white
            }
            labelId = "demo-select-small"
            id = "demo-select-small"
            value = if (checkIfSelectedFiltersIsEmpty(orderVal)) "" else orderVal
            label = ReactNode("Ordenar por")
            onChange = handleChange

            MenuItem {
                value = ""
                +"None"
            }
            if (!seriesInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "DatasetSeries") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Publicador"
                    accessKey = "Publicador"
                    id = "${seriesInfo.elementAt(0)?.publisher}"
                    +"Publicador"
                }
            }
            if (!seriesInfo.elementAt(0)?.license.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "DatasetSeries") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Licenses"
                    accessKey = "Licenses"
                    id = "${seriesInfo.elementAt(0)?.license}"
                    +"Licenses"
                }
            }
            if (!seriesInfo.elementAt(0)?.notation.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "DatasetSeries") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Nivel de Administración"
                    accessKey = "Nivel de Administración"
                    id = "${seriesInfo.elementAt(0)?.notation}"
                    +"Nivel de Administración"
                }
            }
            if (!seriesInfo.elementAt(0)?.issued.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "DatasetSeries") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Fecha creación" && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                                //else if (filterVal.contains("prueba")) filterVal.filter { miVal -> miVal != "prueba" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                    }
                    value = "Fecha creación"
                    accessKey = "Fecha creación"
                    id = "${seriesInfo.elementAt(0)?.issued}"

                    +"Fecha creación"
                }
            }
            if (!seriesInfo.elementAt(0)?.modified.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "DatasetSeries") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Fecha última modificación" && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                                //else if (filterVal.contains("prueba")) filterVal.filter { miVal -> miVal != "prueba" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                    }
                    value = "Fecha última modificación"
                    accessKey = "Fecha última modificación"
                    id = "${seriesInfo.elementAt(0)?.modified}"
                    +"Fecha última modificación"
                }
            }
        }
        FormHelperText{
            + "Look for similar content"
        }
    }
}