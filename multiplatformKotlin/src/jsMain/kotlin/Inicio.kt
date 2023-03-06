import csstype.px
import csstype.rgb
import react.FC
import react.Props
import emotion.react.css
import react.dom.html.InputType
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.useState
import mui.*

external interface TitleProps : Props {
    var name: String
}

val Inicio = FC<TitleProps> { props ->
    var name by useState(props.name)
    div {
        css{
            marginLeft = 500.px
        }
        h1 {
            css {
                padding = 5.px
            }
            +name
        }
    }
    div {
        css{
            marginLeft = 500.px
        }
        input {
            css {
                marginTop = 5.px
                marginBottom = 5.px
                fontSize = 14.px

            }
            type = InputType.search
            placeholder = "Introduce un dataset"
            // value = name
            onChange = { event ->
                name = event.target.value
            }
        }
        button {
            + "Search"
        }
    }
}