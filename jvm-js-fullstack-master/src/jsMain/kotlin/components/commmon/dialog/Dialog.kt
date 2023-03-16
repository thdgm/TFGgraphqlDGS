package components.commmon.dialog

import components.commmon.layout.HeaderProps
import mui.material.Button
import mui.material.Dialog
import mui.material.DialogActions
import mui.material.DialogContent
import mui.material.DialogContentText
import mui.material.DialogTitle
import react.FC
import react.Props

val dialog = FC<Props> {

    Dialog {
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
                + "Cancel"
            }
            Button {
                + "Continue"
            }
        }
    }
}