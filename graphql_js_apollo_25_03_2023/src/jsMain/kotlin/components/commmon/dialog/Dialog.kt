package components.commmon.dialog


import mui.icons.material.Info
import mui.icons.material.Menu
import mui.material.Button
import mui.material.Dialog
import mui.material.DialogActions
import mui.material.DialogContent
import mui.material.DialogContentText
import mui.material.DialogTitle
import react.FC
import react.Props
import react.useState

external interface DialogProps:Props{
    var openInfo:Boolean
    var handleClickOpen: () -> Unit
    var handleClickClose: () -> Unit
}

val Dialog = FC<DialogProps> { props ->


    Button{
        onClick = {props.handleClickOpen()}
        Info()
    }
    if (props.openInfo) {

        Dialog {
            open = true
            onClose = { _, _ -> props.handleClickOpen() }
            DialogTitle {
                +"How to use"
            }
            DialogContent {
                DialogContentText {
                    +"Push the menu icon: "
                    Menu()
                    +" to open the filters tab.\n"
                    +"Put your request in the searcher and push the search icon."

                }
            }

            DialogActions {
                Button {
                    onClick = { props.handleClickClose() }
                    +"Cancel"
                }
                Button {
                    onClick = { props.handleClickClose() }
                    +"Continue"
                }
            }
        }
    }
}