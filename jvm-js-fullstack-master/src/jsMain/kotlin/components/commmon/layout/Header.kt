package components.commmon.layout


import components.commmon.ThemeContext
import components.commmon.themes.Themes
import csstype.Auto
import csstype.FlexGrow
import csstype.number
import csstype.ident
import kotlinx.browser.localStorage

import mui.icons.material.Brightness4
import mui.icons.material.Brightness7
import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Box
import mui.material.IconButton
import mui.material.Toolbar
import mui.icons.material.Menu
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.Size
import mui.material.Switch
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.sx
import org.w3c.dom.HTMLButtonElement
import react.FC
import react.Props
import react.create
import react.dom.aria.AriaHasPopup
import react.dom.aria.ariaHasPopup
import react.dom.aria.ariaLabel
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.onChange
import react.useMemo
import react.useRequiredContext
import react.useState

external interface HeaderProps : Props {
    var title: String
}

fun toggleColorMode(){
    val myTheme = useTheme<Theme>()
    var themeMode = myTheme.palette.mode
    val darkMode = Themes.Dark.palette.mode
    val newMode = if (themeMode == darkMode) "light" else "dark"
    localStorage.clear()
    localStorage.setItem("theme",newMode)
}

val header = FC<HeaderProps> { props->
    var title by useState(props.title)
    val (isOpen, setIsOpen) = useState(false)
    val myTheme = useTheme<Theme>()
    val themeMode = myTheme.palette.mode
    val darkMode = Themes.Dark.palette.mode
    val lightMode = Themes.Light.palette.mode
    var theme by useRequiredContext(ThemeContext)

    Box{
        sx { flexGrow= number(1.0) }
        onClick = {
            console.log("CLOSE 2")

        }
        onKeyDown={
            console.log("CLOSE 3")
            if(isOpen){

                setIsOpen(false)
            }
        }
        AppBar{
            position= AppBarPosition.static
            Toolbar{

                IconButton{
                    ariaLabel = "sidebar"
                    edge= IconButtonEdge.start
                    ariaHasPopup = AriaHasPopup.`false`
                    size = Size.large
                    color = IconButtonColor.inherit
                    onClick = {
                        setIsOpen(!isOpen)
                        console.log("CLICK $isOpen")
                    }
                    Menu()
                }

                Typography {
                    variant = TypographyVariant.h6
                    sx {
                        flexGrow = number(0.0)
                        margin = Auto.auto
                    }
                    noWrap = true

                    component = div
                    +"Search your dataset"
                }

                Switch {
                    icon = Brightness7.create()
                    checkedIcon = Brightness4.create()
                    checked = theme == Themes.Dark
                    ariaLabel = "theme"

                    onChange = { _, checked ->
                        theme = if (checked) Themes.Dark else Themes.Light
                    }
                }
            }

        }

    }

    sideLeft{openSide = isOpen}



}


