package components.commmon.layout

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.BackgroundColor
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
            marginTop = 6.pct
            paddingBottom = 10.pct
            paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(249,249,249,0.87)
            position = Position.relative
        }
        Pagination()
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

    }



}