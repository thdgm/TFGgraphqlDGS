package components.commmon.selectFilter.selectedCatalogRecord




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

val selectFilterCR = FC<Props> {
    var orderVal by useState("")

    var selectedFilters by useRequiredContext(FilterListContextAll)
    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        orderVal = event.target.value
    }
    fun checkIfSelectedFiltersIsEmpty(selectedVal: String): Boolean{
        selectedFilters["CatalogRecords"]?.map{
            if (it.key == selectedVal){
                if(it.value.isEmpty()){
                    return true
                }
            }
        }
        selectedFilters["CatalogRecords"]?.map{
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
                    if (key == "CatalogRecords") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "Tipo del contenido"
                accessKey = "Tipo del contenido"
                id = "contentTypeValue"
                + "Tipo del contenido"
            }
            MenuItem {
                onClick= {event: MouseEvent<HTMLLIElement, *> -> orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                    if (key == "CatalogRecords") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "ContentUrl"
                accessKey = "ContentUrl"
                id = "contentUrlValue"
                + "ContentUrl"
            }
            MenuItem {
                onClick= {event: MouseEvent<HTMLLIElement, *> -> orderVal = "Titulo"; selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                    if (key == "CatalogRecords") {
                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                            if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(event.currentTarget.id)
                            else if (filterVal.contains( event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                            else filterVal
                        }.toMutableMap()
                    } else {
                        catalogMap
                    }
                }.toMutableMap()}
                value = "PrimaryTopic"
                accessKey = "PrimaryTopic"
                id = "ptValue"
                + "PrimaryTopic"
            }
        }
        FormHelperText{
            + "Look for similar content"
        }
    }
}