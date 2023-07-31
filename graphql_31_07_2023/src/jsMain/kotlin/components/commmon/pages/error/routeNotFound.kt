package components.commmon.pages.error


import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1


external interface RouteNotFoundProps : Props {}


val RouteNotFound = FC<RouteNotFoundProps> {

    div {
        h1 {
            +"404 - Página no encontrada"
        }
    }
}






