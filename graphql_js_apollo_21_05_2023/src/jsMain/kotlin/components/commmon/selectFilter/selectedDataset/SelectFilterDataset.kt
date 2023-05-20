package components.commmon.selectFilter.selectedDataset




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

val selectFilterDataset = FC<Props> {
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
            +"Search by"
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
                value = "publisherValue"
                + "Publisher"
            }
            MenuItem {
                value = "licenseValue"
                + "License"
            }
            MenuItem {
                value = "admonLevelValue"
                + "Admon level"
            }
            MenuItem {
                value = "issuedValue"
                + "Issued"
            }
            MenuItem {
                value = "modifiedValue"
                + "Modified"
            }
        }
    }
}