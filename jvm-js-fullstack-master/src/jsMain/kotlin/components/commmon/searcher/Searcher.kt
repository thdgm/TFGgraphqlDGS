package components.commmon.searcher


import components.commmon.accordeon.filterInfo
import components.commmon.dialog.dialog
import components.commmon.layout.list
import components.commmon.layout.sideLeft
import components.commmon.themes.Themes
import csstype.AlignItems
import csstype.Auto
import csstype.Background
import csstype.BackgroundColor

import csstype.Color
import csstype.Display
import csstype.HtmlAttributes
import csstype.Length
import csstype.Percentage
import csstype.Position
import csstype.fitContent
import csstype.integer
import csstype.pct
import csstype.px
import kotlinx.js.jso
import mui.icons.material.Menu
import mui.icons.material.Save
import mui.icons.material.Search
import mui.material.AppBarColor
import mui.material.Box
import mui.material.Container
import mui.material.Icon
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.InputBase
import mui.material.Paper
import mui.material.Size
import mui.system.Theme
import mui.system.sx
import mui.system.useTheme
import react.FC
import react.Props
import react.dom.aria.AriaHasPopup
import react.dom.aria.ariaHasPopup
import react.dom.aria.ariaLabel
import react.dom.html.ButtonType
import react.useRequiredContext
import react.useState




val Searcher = FC<Props> {
    val (isOpen, setIsOpen) = useState(false)
    val theme = useTheme<Theme>()



    //sideLeft{openSide = isOpen}

    Container {
        sx {
            display = Display.flex
            alignItems = AlignItems.center
            marginRight= Auto.auto
            marginLeft = Auto.auto
            marginTop = 10.px

        }
        Paper {
            sx {
                display = Display.flex
                alignItems = AlignItems.center
                marginRight= Auto.auto
                marginLeft = Auto.auto
                marginTop = 10.px
                //zIndex = integer(1300)

            }
            IconButton {
                sx {
                    marginLeft = 2.pct

                }
                ariaLabel = "filter"
                edge = IconButtonEdge.start
                ariaHasPopup = AriaHasPopup.`false`
                size = Size.large
                color = IconButtonColor.inherit
                sideLeft()
            }
            InputBase {
                sx {
                    marginRight = 5.px
                }
                type = "search"
                placeholder = "Search your content"
            }
            IconButton {
                type = ButtonType.button
                ariaLabel = "search"

                Search()
            }
            IconButton {
                type = ButtonType.button
                ariaLabel = "info"

                dialog()
            }

        }
    }


}