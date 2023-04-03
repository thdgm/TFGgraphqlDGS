package components.commmon.filterForm

import components.commmon.Sizes
import components.commmon.accordeon.filterInfo
import components.commmon.radioGroup.RadioGroup
import csstype.Auto
import csstype.Position
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Checkbox
import mui.material.Divider
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.FormControlVariant
import mui.material.FormGroup
import mui.material.FormLabel
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.ElementType
import react.FC
import react.Props
import react.ReactNode
import react.create


val filtersTypes = listOf(
    "Catagoría",
    "Formato",
    "Publicador",
    "Nivel de Administración",
    "Frecuencia de Aztualización",
    "Etiqueta"
)

val filterForm = FC<Props> {

    Paper {
        sx {
            width = Sizes.FilterFormPaper.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
           // marginTop = 1.pct
            paddingBottom = 10.pct
            paddingTop = 6.pct

            backgroundColor = rgba(249, 249, 249, 0.87)
            position = Position.relative
        }

        Box {
            sx {
                marginLeft = 5.pct
                marginRight = 5.pct
            }
            Typography {
                variant = TypographyVariant.subtitle1
                +"Configuración de búsqueda"
            }
            Divider {}
            RadioGroup()
            Divider {}
            FormControl {
                sx {
                    width = 100.pct
                }
                variant = FormControlVariant.standard
                filtersTypes.forEach{
                    FormLabel {
                        filterInfo()
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