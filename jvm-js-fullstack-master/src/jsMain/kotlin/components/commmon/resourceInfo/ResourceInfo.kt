package components.commmon.resourceInfo

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.Display
import csstype.Position
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import react.Props
import react.useEffect


val resourceInfo = FC<Props> {

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
        Card {
            sx{
                width = Sizes.CardList.Width
                display= Display.flex
            }
            Box {
                CardContent{
                    Typography{
                        variant = TypographyVariant.h6
                        +"Titulo"
                    }
                    Typography{
                        variant = TypographyVariant.subtitle1
                        +"Otra info"
                    }
                }
            }
        }

    }
}