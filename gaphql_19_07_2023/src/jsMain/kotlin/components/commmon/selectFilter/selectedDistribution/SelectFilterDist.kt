package components.commmon.selectFilter.selectedDistribution




import components.commmon.FilterListContextAll
import csstype.NamedColor
import csstype.px
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

val selectFilterDist = FC<Props> {
    var orderVal by useState("")

    var selectedFilters by useRequiredContext(FilterListContextAll)
    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        orderVal = event.target.value
    }
    fun checkIfSelectedFiltersIsEmpty(selectedVal: String): Boolean{
        selectedFilters["Distributions"]?.map{
            if (it.key == selectedVal){
                if(it.value.isEmpty()){
                    return true
                }
            }
        }
        selectedFilters["Distributions"]?.map{
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
            +"Ordenar por"
        }
        Select {
            sx {
                backgroundColor = NamedColor.white
            }
            labelId = "demo-select-small"
            id = "demo-select-small"
            value = if(checkIfSelectedFiltersIsEmpty(orderVal)) "" else orderVal
            label = ReactNode("Ordenar por")
            onChange = handleChange

            MenuItem {
                value = ""
                + "None"
            }

            MenuItem {

                onClick= {event: MouseEvent<HTMLLIElement, *> -> orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                    if (key == "Distributions") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "ByteSize"
                accessKey = "ByteSize"
                id = "bytesizeValue"
                + "ByteSize"
            }
            MenuItem {
                onClick= {event: MouseEvent<HTMLLIElement, *> -> orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                    if (key == "Distributions") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "Format"
                accessKey = "Format"
                id = "formatValue"
                + "Format"
            }
            MenuItem {
                onClick= {event: MouseEvent<HTMLLIElement, *> -> orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                    if (key == "Distributions") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "AccessUrl"
                accessKey = "AccessUrl"
                id = "accessUrlValue"
                + "AccessUrl"
            }
        }
        FormHelperText{
            + "Look for similar content"
        }
    }
}