package components.commmon.filterForm

import components.commmon.accordeon.filterInfo
import components.commmon.radioGroup.RadioGroup
import csstype.pct
import mui.material.Box
import mui.material.Checkbox
import mui.material.Divider
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.FormControlVariant
import mui.material.FormGroup
import mui.material.FormLabel
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.ElementType
import react.FC
import react.Props
import react.ReactNode
import react.create

val filterForm = FC<Props> {

    Box {
        sx{
            marginLeft= 5.pct
            marginRight= 5.pct
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
                width= 100.pct
            }
            variant = FormControlVariant.standard
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
            }
            FormLabel {
                filterInfo()
            }
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