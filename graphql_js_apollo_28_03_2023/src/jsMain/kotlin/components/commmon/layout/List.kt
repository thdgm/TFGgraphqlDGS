package components.commmon.layout

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import components.commmon.searcher.Searcher
import components.commmon.selectFilter.selectFilter
import csstype.Auto
import csstype.BackgroundColor
import csstype.ClassName
import csstype.Display
import csstype.Position
import csstype.Width
import csstype.number
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.List
import mui.material.ListItem
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.router.useNavigate

val list = FC<Props> {
    val navigate = useNavigate()

    fun handleClick(){
       navigate("/info/1")
    }

    Paper {
        sx{
            width = Sizes.BoxList.Width
            marginRight= Auto.auto
            marginLeft= Auto.auto
            //marginTop = 1.pct
            paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(249,249,249,0.87)
            position = Position.relative
        }
        Box{
            Searcher()
        }
        Box {
           sx {
               display = Display.flex
           }
            Box {
                Typography{
                    + "66.000 datasets encontrados"
                }
            }
            Box {
                sx {
                    marginLeft = 50.pct

                }
                selectFilter()
            }

        }

        List {

            ListItemButton{
                onClick ={
                    handleClick()
                }
                CardList()
            }
            ListItemButton{
                onClick ={
                    handleClick()
                }
                CardList()
            }
        }
        Pagination()
    }



}