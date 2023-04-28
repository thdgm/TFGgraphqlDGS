package components.commmon.layout


import components.commmon.ThemeContext
import components.commmon.dialog.Dialog
import components.commmon.searcher.Searcher
import components.commmon.themes.Themes
import csstype.Auto
import csstype.ClassName
import csstype.FlexGrow
import csstype.NamedColor
import csstype.number
import csstype.ident
import csstype.rgba
import kotlinx.browser.localStorage

import mui.icons.material.Brightness4
import mui.icons.material.Brightness7
import mui.icons.material.GitHub
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
import react.dom.html.ButtonType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.onChange
import react.useMemo
import react.useRequiredContext
import react.useState

external interface HeaderProps : Props {
    var title: String
}



val header = FC<HeaderProps> { props->

    var theme by useRequiredContext(ThemeContext)
    var openDialog by useState(false)

    Box {
        sx { flexGrow = number(1.0) }

        AppBar {
            position = AppBarPosition.static
            Toolbar {

                IconButton {
                    ariaLabel = "githubIcon"
                    edge = IconButtonEdge.start
                    ariaHasPopup = AriaHasPopup.`false`
                    size = Size.large
                    color = IconButtonColor.inherit

                    GitHub()
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
                IconButton {
                    type = ButtonType.button
                    ariaLabel = "info"
                    className = ClassName("infoButton")
                    Dialog{
                        this.openInfo = openDialog
                        this.handleClickOpen = {openDialog = true}
                        this.handleClickClose = {openDialog = false}
                    }
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
}





