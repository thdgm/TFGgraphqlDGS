package components.commmon.layout


import components.commmon.Sizes
import components.commmon.ThemeContext
import components.commmon.accordeon.filterInfo
import components.commmon.filterForm.filterForm
import components.commmon.themes.Themes
import csstype.ClassName
import csstype.Contain.Companion.style
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
import csstype.pct
import csstype.px
import mui.base.ClickAwayListener
import mui.icons.material.Info
import mui.icons.material.Menu
import mui.material.Button
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
import mui.material.styles.Theme
import org.w3c.dom.events.MouseEvent
import react.ReactNode
import react.StateInstance
import react.createContext
import react.dom.html.ReactHTML.label
import react.useEffect

import react.useRef
import react.useRequiredContext
import react.useState
external interface SideLeftProps : Props {
    var openSide: Boolean
}



val sideLeft = FC<SideLeftProps> {props->

    var isOpen = props.openSide
    val (isOpenn, setIsOpenn) = useState(false)
    val (buttonApply, setbuttonAply) = useState(false)



    console.log("Open $isOpen")
        Button{
            onClick = {setIsOpenn(true)}
            disabled = isOpenn
            Menu()
        }

        Drawer {


            anchor = DrawerAnchor.left
            open = isOpenn
            onClick = {
                console.log("CLICKO")
            }



                Box {
                    sx{
                        marginTop = 35.pct
                        paddingBottom = 100.pct
                    }
                    div {
                        className= ClassName("row")
                        filterForm()
                    }
                    div {

                        className= ClassName("row buttonsFilter")

                        Button {
                            onClick = {setIsOpenn(false)}
                            + "Cancel"
                        }
                        Button {
                            onClick = {setIsOpenn(false)}
                            + "Continue"
                        }
                    }





                }


        }

}



