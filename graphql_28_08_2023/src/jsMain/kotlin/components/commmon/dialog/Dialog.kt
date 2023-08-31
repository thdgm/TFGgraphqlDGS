package components.commmon.dialog


import csstype.ClassName
import csstype.NamedColor
import mui.icons.material.Info
import mui.icons.material.Menu
import mui.material.Button
import mui.material.Dialog
import mui.material.DialogActions
import mui.material.DialogContent
import mui.material.DialogContentText
import mui.material.DialogTitle
import mui.material.SvgIconColor
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
        className = ClassName("infoButton2")
        Info{
            className = ClassName("infoIcon")
            color = SvgIconColor.inherit
        }
    }
    if (props.openInfo) {

        Dialog {
            open = true
            onClose = { _, _ -> props.handleClickOpen() }
            DialogTitle {
                +"Sobre la aplicación"
            }
            DialogContent {
                DialogContentText {
                    + "A través de esta interfaz es posible navegar entre los diferentes recursos "
                    + "que el modelo DCAT ofrece: Catálogos, Series de Datos, Conjuntos de Datos"
                    + "Servicios de Datos, Distribuciones y Registros de Catálogo."
                    + "\n"
                    + "También cuenta con múltiples filtros para localizar exclusivamente lo que se necesita."
                    + "\n"
                    + "Los datos se han obtenido del Portal de Datos Abiertos del Gobierno de España. "
                    + "\n"
                    + "Con el fin de facilitar la organización y el acceso a los datos, se utiliza GraphQL, "
                    + "un lenguaje de consulta para API. Su mayor ventaja, la flexibilidad a la hora de realizar consultas, "
                    + "solicitando únicamente los campos requeridos."
                }
            }

            DialogActions {
                Button {
                    onClick = { props.handleClickClose() }
                    +"Cerrar"
                }
            }
        }
    }
}