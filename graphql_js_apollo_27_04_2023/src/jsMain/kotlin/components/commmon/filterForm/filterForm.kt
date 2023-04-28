package components.commmon.filterForm

import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.accordeon.filterInfo
import components.commmon.layout.FilterListContext
import components.commmon.radioGroup.RadioGroup
import components.commmon.searcher.Searcher
import csstype.Auto
import csstype.Display
import csstype.NamedColor
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import mui.icons.material.Sort
import mui.material.Box
import mui.material.Checkbox
import mui.material.Divider
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.FormControlVariant
import mui.material.FormGroup
import mui.material.FormLabel
import mui.material.Grid
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import react.ElementType
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.events.ChangeEvent
import react.dom.html.ReactHTML.b
import react.useRequiredContext
import react.useState


val filtersTypes = listOf(
    "Categoría",
    "Formato",
    "Publicador",
    "Nivel de Administración",
    "Frecuencia de Actualización",
    "Etiqueta"
)

val filtersTypesFields = listOf<Collection<String>>(
    listOf("Empleo","Medio ambiente"),
    listOf("CSV","JSON"),
    listOf("Agencia estatal de meteorología", "Agencia española de protección de datos"),
    listOf("Administración Local", "Universidades"),
    listOf("Diario", "Mensual"),
    listOf("Estadísticas", "Hombres", "Mujeres")
)



external interface FilterFormProps:Props{
    var filterList: Collection<DatasetModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var addList: Collection<String>

}

val filterForm = FC<FilterFormProps> {props->
    var datasetList by useState(props.filterList)
    //var testList by useState(props.addList)
    var searchFilter by useState("")
    var testList by useRequiredContext(FilterListContext)

    Paper {
        sx {
            width = Sizes.FilterFormPaper.Width
            marginRight = Auto.auto
            marginLeft = 3.pct//Auto.auto
            paddingBottom = 8.pct
            boxShadow = None.none
            backgroundColor = NamedColor.white//rgba(249, 249, 249, 0.87)
            position = Position.relative
            borderRadius = 20.px
        }

        Box {
            sx {
                marginLeft = 5.pct
                marginRight = 5.pct
                boxShadow = None.none
            }
            Box{
                Searcher{
                    this.filterList = datasetList
                    this.handleOnChange = props.handleOnChange//{event -> searchFilter= (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/}

                }
            }
            Divider {}
            Grid {
                container
                sx {
                    display = Display.flex
                    paddingTop = 4.pct
                    paddingBottom = 4.pct
                }
                Grid {
                    item
                    Sort()
                }
                Grid {
                    item
                    sx {
                        marginLeft = 4.pct
                    }
                    Typography {
                        variant = TypographyVariant.subtitle1
                        b{
                            +"Filtros"
                        }
                    }
                }
            }
            Divider {}
           // RadioGroup()
            Divider {}
            FormControl {
                sx {
                    width = 100.pct
                }
                variant = FormControlVariant.standard
                filtersTypes.forEachIndexed{ index, value ->
                    FormLabel {
                        filterInfo{
                            this.filterName = value
                            this.filterFields = filtersTypesFields.elementAt(index)
                        }
                    }
                }

            }
        }
    }
}