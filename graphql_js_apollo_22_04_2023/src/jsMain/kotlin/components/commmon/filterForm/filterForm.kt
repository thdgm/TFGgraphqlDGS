package components.commmon.filterForm

import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.accordeon.filterInfo
import components.commmon.layout.listTestDataset
import components.commmon.radioGroup.RadioGroup
import components.commmon.searcher.Searcher
import csstype.Auto
import csstype.Display
import csstype.NamedColor
import csstype.None
import csstype.Position
import csstype.pct
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

val listTestDataset = listOf<DatasetModel>(
    DatasetModel("Titulo1", "Publisher1","Description1",listOf("JSON","CSV") ),
    DatasetModel("Titulo2", "Publisher2","Description2",listOf("JSON","CSV") )
)

external interface FilterFormProps:Props{
    var filterList: Collection<DatasetModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit

}

val filterForm = FC<FilterFormProps> {props->
    var datasetList by useState(listTestDataset)
    var searchFilter by useState("")
    Paper {
        sx {
            width = Sizes.FilterFormPaper.Width
            marginRight = Auto.auto
            marginLeft = 3.pct//Auto.auto
            paddingBottom = 10.pct
            boxShadow = None.none
            //paddingTop = 6.pct

            backgroundColor = NamedColor.white//rgba(249, 249, 249, 0.87)
            position = Position.relative
            borderRadius = 20.pct
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
               /* FormLabel {
                    filterInfo()
                }
                FormLabel {
                    filterInfo()
                }
                FormLabel {
                    filterInfo()
                }
                FormLabel {
                    filterInfo()
                }
                FormLabel {
                    filterInfo()
                }
                FormLabel {
                    filterInfo()
                }*/
                /* FormLabel {
                + "Filters 1"
                FormGroup {
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 1.1")
                    }
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 1.2")
                    }
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 1.3")
                    }
                }

            }*/
            }

            /*FormControl {
            sx{
                marginLeft= 20.pct
            }
            variant = FormControlVariant.standard
            FormLabel {
                + "Filters 2"
                FormGroup {
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 2.1")
                    }
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 2.2")
                    }
                    FormControlLabel {
                        control = Checkbox.create()
                        label = ReactNode("Filter 2.3")
                    }
                }
            }
        }*/
        }
    }
}