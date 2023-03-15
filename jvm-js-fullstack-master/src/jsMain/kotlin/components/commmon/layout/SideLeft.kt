package components.commmon.layout


import components.commmon.Sizes
import csstype.Cursor.Companion.pointer
import csstype.GridArea
import csstype.HtmlAttributes
import csstype.None
import csstype.ZIndex
import mui.system.Box
import mui.system.sx
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import csstype.ident
import csstype.integer
import csstype.number
import csstype.px
import mui.material.Checkbox
import mui.material.Drawer
import mui.material.DrawerAnchor
import mui.material.DrawerVariant
import mui.material.FormControlLabel
import mui.material.FormGroup
import mui.material.Toolbar
import mui.material.List
import mui.material.ListItem
import mui.material.ListItemButton
import mui.material.ListItemIcon
import mui.material.ListItemText
import mui.material.ListSubheader
import react.ReactNode
import react.dom.html.ReactHTML.label

import react.useRef
import react.useState
external interface SideLeftProps : Props {
    var openSide: Boolean
}

val sideLeft = FC<SideLeftProps> {props->

    var isOpen = props.openSide

    console.log("Open $isOpen")

        Drawer {
            sx {
                zIndex = integer(-2)
                marginTop = 10.px

            }
      
            anchor = DrawerAnchor.left
            open = props.openSide
            onClick = {
                console.log("CLICKO")
            }
            Box {
                sx {
                    zIndex = integer(2)
                }

                onClick = {
                    console.log("CLICKO 2")
                }
                Toolbar()
                List {
                    sx {
                        width = Sizes.Sidebar.Width
                    }

                    ListItemButton {
                        ListItemIcon {
                            Checkbox{
                            }
                        }
                        ListItemText{
                            primary= ReactNode("Filtro1")
                        }
                    }

                    ListItemButton {
                        ListItemIcon {
                            Checkbox{
                            }
                        }
                        ListItemText{
                            primary= ReactNode("Filtro2")
                        }
                    }

                    ListItemButton {
                        ListItemIcon {
                            Checkbox{
                            }
                        }
                        ListItemText{
                            primary= ReactNode("Filtro3")
                        }
                    }
                }
            }
        }


}