package components.commmon.selectFilter


import components.commmon.filterForm.filterForm
import components.commmon.layout.ListFilterParams
import csstype.Auto
import csstype.ClassName
import csstype.MinWidth
import csstype.integer
import csstype.number
import csstype.pct
import csstype.px
import mui.icons.material.ExpandMore
import mui.material.Accordion
import mui.material.AccordionDetails
import mui.material.AccordionSummary
import mui.material.BaseSize
import mui.material.FormControl
import mui.material.InputLabel
import mui.material.MenuItem
import mui.material.Select
import mui.material.Size
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.events.ChangeEvent
import react.dom.html.ReactHTML.em
import react.useState

val selectFilter = FC<Props> {
    var orderVal by useState("")

    FormControl {
        sx { minWidth = 220.px }
        size = Size.small
        InputLabel {
            id = "demo-select-small"
            +"Ordenar por"
        }
        Select {
            labelId = "demo-select-small"
            id = "demo-select-small"
            value = orderVal
            label = ReactNode("Ordenar por")
            //onChange= onnChange()
            MenuItem {
                value = ""
                + "None"
            }

            MenuItem {
                value = "ASC"
                + "Ascendente"
            }
            MenuItem {
                value = "DESC"
                + "Descendente"
            }
        }
    }
}