package components.commmon.selectFilter.selectedCatalogRecord




import csstype.NamedColor
import csstype.px
import mui.material.FormControl
import mui.material.InputLabel
import mui.material.MenuItem
import mui.material.Select
import mui.material.Size
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.events.ChangeEvent
import react.useState

val selectFilterCR = FC<Props> {
    var orderVal by useState("")

    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        orderVal = event.target.value
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
            value = orderVal
            label = ReactNode("Ordenar por")
            onChange= handleChange
            MenuItem {
                value = ""
                + "None"
            }

            MenuItem {
                value = "contentTypeValue"
                + "ContentType"
            }
            MenuItem {
                value = "contentUrlValue"
                + "ContentUrl"
            }
            MenuItem {
                value = "ptValue"
                + "Primary Topic"
            }
        }
    }
}