package components.commmon.searcher


import components.commmon.dialog.Dialog
import components.commmon.layout.sideLeft
import csstype.AlignItems
import csstype.Auto

import csstype.Display
import csstype.pct
import csstype.px
import mui.icons.material.Search
import mui.material.Container
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
import react.useState




val Searcher = FC<Props> {
    val (isOpen, setIsOpen) = useState(false)
    val theme = useTheme<Theme>()

    var openDialog by useState(false)


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

                Dialog{
                    this.openInfo = openDialog
                    this.handleClickOpen = {openDialog = true}
                    this.handleClickClose = {openDialog = false}
                }
            }

        }
    }


}