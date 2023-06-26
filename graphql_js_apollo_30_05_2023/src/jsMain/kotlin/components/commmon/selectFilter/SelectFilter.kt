package components.commmon.selectFilter




import csstype.FlexDirection
import csstype.FontSize
import csstype.NamedColor
import csstype.pct
import csstype.px
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.InputLabel
import mui.material.LabelPlacement
import mui.material.MenuItem
import mui.material.Radio
import mui.material.RadioGroup
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
import react.useState

val selectFilter = FC<Props> {
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
                value = "0"
                + "Fecha creación"
            }
            MenuItem {
                value = "1"
                + "Última modificación"
            }
            MenuItem {
                value = "2"
                + "Publicador"
            }
            MenuItem {
                value = "3"
                + "Título"
            }
            MenuItem {
                value = "4"
                + "Categoria"
            }
            MenuItem {
                value = "5"
                + "Nivel de Admon"
            }
        }

    }
    FormControl{
        RadioGroup{
            sx {
                flexDirection = FlexDirection.row
            }
            row = true
            defaultValue="asc"

            FormControlLabel{

                value="asc"
                control= Radio.create{
                    size = Size.small
                }
                label=Typography.create{
                    sx{
                        fontSize = FontSize.smaller
                    }
                    + "ASC"
                }
                labelPlacement=LabelPlacement.start
            }
            FormControlLabel{

                value="desc"
                control= Radio.create{
                    sx{
                        marginLeft = 6.pct
                    }
                    size = Size.small
                }
                label=Typography.create{
                    sx{
                        fontSize = FontSize.smaller
                    }
                    + "DESC"
                }
                labelPlacement=LabelPlacement.end
            }
        }
    }
}