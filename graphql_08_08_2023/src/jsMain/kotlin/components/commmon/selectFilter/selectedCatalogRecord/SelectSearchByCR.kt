package components.commmon.selectFilter.selectedCatalogRecord




import components.commmon.FilterListContextAll
import csstype.NamedColor
import csstype.px
import models.CatalogRecordInfo
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

external interface SelectSearchByCRProps : Props {
    var infoCR: MutableList<CatalogRecordInfo>
}
val selectSearchByCR = FC<SelectSearchByCRProps> { props ->
    var crInfo by useState(props.infoCR)
    var orderVal by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)


    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,child ->
       // console.log(child)
        //console.log(event)
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
            if (!crInfo.elementAt(0)?.title.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "CatalogRecords") {
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
                    value = "Título"
                    accessKey = "Título"
                    id = "${crInfo.elementAt(0)?.title}"
                    +"Título"
                }
            }
            if (!crInfo.elementAt(0)?.contentURL.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "CatalogRecords") {
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
                    value = "ContentUrl"
                    accessKey = "ContentUrl"
                    id = "${crInfo.elementAt(0)?.contentURL}"
                    +"ContentUrl"
                }
            }
            if (!crInfo.elementAt(0)?.contentType.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "CatalogRecords") {
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
                    value = "Tipo de contenido"
                    accessKey = "Tipo de contenido"
                    id = "${crInfo.elementAt(0)?.contentType}"
                    +"Tipo de contenido"
                }
            }
        }
        FormHelperText{
            + "Look for similar content"
        }
    }
}