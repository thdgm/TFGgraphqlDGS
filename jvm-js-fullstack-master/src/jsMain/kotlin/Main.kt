import components.commmon.Application
import kotlinx.browser.document
import react.create
import react.dom.client.createRoot
import kotlinext.js.require

fun main() {
    //require("jvm-js-fullstack-master/src/commonMain/resources/styles.css")
    val container = document.getElementById("root")?: error("Couldn't find root container!")
    createRoot(container).render(Application.create{name = "Localiza tu Dataset"})

}
