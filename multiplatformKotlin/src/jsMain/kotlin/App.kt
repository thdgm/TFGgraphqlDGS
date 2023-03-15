import csstype.px
import emotion.react.css
import kotlinx.browser.document
import react.create
import react.dom.client.createRoot
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1



fun main() {
    val container = document.createElement("root")
    document.body!!.appendChild(container)
    val inicio = Inicio.create {
        name = "Localiza tu Dataset"
    }


    createRoot(container).render(inicio)
}