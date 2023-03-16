package components.commmon.layout

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.Display
import csstype.Width
import csstype.number
import csstype.pct
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

val list = FC<Props> {

    Paper {
        sx{
            width = Sizes.BoxList.Width
            marginRight= Auto.auto
            marginLeft= Auto.auto
            marginTop = 10.pct
        }
        List {

            ListItemButton{
                CardList()
            }
            ListItemButton{
                CardList()
            }
        }
        Pagination()
    }



}