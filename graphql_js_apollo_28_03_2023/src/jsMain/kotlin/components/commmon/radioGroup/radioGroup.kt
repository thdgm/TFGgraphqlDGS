package components.commmon.radioGroup

import csstype.ClassName
import csstype.pct
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.Paper
import mui.material.Radio
import mui.material.RadioGroup
import mui.material.Size
import mui.system.sx
import react.FC
import react.Props
import react.ReactNode
import react.create

val RadioGroup = FC<Props> {
    FormControl {

        RadioGroup {
            row= true
            name="row-radio-buttons-group"

            FormControlLabel {
                value="y"
                control= Radio.create()
                label= ReactNode("Y")
            }
            FormControlLabel {
                value="o"
                control= Radio.create()
                label= ReactNode("O")
            }

        }
    }

}