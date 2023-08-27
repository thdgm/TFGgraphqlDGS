package components.commmon.selectFilter.selectedDataservice




import components.commmon.FilterListContextAll
import components.commmon.pages.dataservice.mainPage.IsLoadingContext
import csstype.FlexDirection
import csstype.FontSize
import csstype.NamedColor
import csstype.pct
import csstype.px
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.FormHelperText
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
import org.w3c.dom.HTMLLIElement
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.useRequiredContext
import react.useState

val selectFilterDServ = FC<Props> {

    var orderBy by useState("")
    var sortBy by useState("asc")
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)
   // var selectedFilters by useState(selectedAllFilters["Catalogs"])

    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        orderBy = event.target.value

        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "DataServices") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "SortBy") filterVal.filter { false }.plus(
                        event.target.value
                    )
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()

    }

    val handleChangeRadio: (event: ChangeEvent<HTMLInputElement>, child: String) -> Unit = {event,value ->
        sortBy = value
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "DataServices") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "OrderBy") filterVal.filter { false }.plus(
                        value
                    )
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()

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
            disabled = isDisabled
            labelId = "demo-select-small"
            id = "demo-select-small"
            value = orderBy
            label = ReactNode("Ordenar por")
            onChange= handleChange
            MenuItem {
                value = ""
                + "None"
            }

            MenuItem {
                value = "issued"
                + "Fecha creación"
            }
            MenuItem {
                value = "modified"
                + "Última modificación"
            }
            MenuItem {
                value = "label"
                + "Publicador"
            }

            MenuItem {
                value = "notation"
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
            value = sortBy
            onChange= handleChangeRadio
            FormControlLabel{

                value="asc"
                control= Radio.create{
                    size = Size.small
                    disabled = isDisabled
                }
                label= Typography.create{
                    sx{
                        fontSize = FontSize.smaller
                    }
                    + "ASC"
                }
                labelPlacement= LabelPlacement.start
            }
            FormControlLabel{

                value="desc"
                control= Radio.create{
                    sx{
                        marginLeft = 6.pct
                    }
                    disabled = isDisabled
                    size = Size.small
                }
                label= Typography.create{
                    sx{
                        fontSize = FontSize.smaller
                    }
                    + "DESC"
                }
                labelPlacement= LabelPlacement.end
            }
        }
    }
}