package components.commmon.filterForm

import csstype.pct
import mui.material.Box
import mui.material.Checkbox
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.FormControlVariant
import mui.material.FormGroup
import mui.material.FormLabel
import mui.system.sx
import react.ElementType
import react.FC
import react.Props
import react.ReactNode
import react.create

val filterForm = FC<Props> {

    Box {
        sx{
            marginLeft= 10.pct
        }
        FormControl {
            variant = FormControlVariant.standard
            FormLabel {
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

            }
        }

        FormControl {
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
        }
    }
}