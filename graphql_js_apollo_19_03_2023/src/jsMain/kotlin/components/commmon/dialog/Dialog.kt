package components.commmon.dialog

import components.commmon.layout.HeaderProps
import csstype.rgb
import mui.icons.material.Info
import mui.material.Button
import mui.material.Dialog
import mui.material.DialogActions
import mui.material.DialogContent
import mui.material.DialogContentText
import mui.material.DialogTitle
import mui.system.sx
import react.FC
import react.Props
import react.useState

val dialog = FC<Props> {
    val (openInfo, setOpenInfo) = useState(false)

    Button{
        onClick = {setOpenInfo(true)}
        Info()
    }
    Dialog {
        open = openInfo
        onClose = {_,_ -> setOpenInfo(false)}
        DialogTitle {
            + "Atención"
        }
        DialogContent {
            DialogContentText {
                + "Va a realizar una búsqueda con los siguientes filtros:"
            }
        }

        DialogActions {
            Button {
                onClick = {setOpenInfo(false)}
                + "Cancel"
            }
            Button {
                onClick = {setOpenInfo(false)}
                + "Continue"
            }
        }
    }
}