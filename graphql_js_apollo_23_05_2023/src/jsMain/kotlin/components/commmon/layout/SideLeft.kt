package components.commmon.layout


import components.commmon.pages.dataset.mainPage.filterForm
import csstype.ClassName
import mui.system.Box
import mui.system.sx
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import csstype.pct
import mui.icons.material.Menu
import mui.material.Button
import mui.material.Drawer
import mui.material.DrawerAnchor

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



