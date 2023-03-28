package components.commmon.card

import components.commmon.Sizes
import components.commmon.layout.HeaderProps
import csstype.Display
import csstype.pct
import mui.material.Box
import mui.material.Card
import mui.material.CardActions
import mui.material.CardContent
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import react.Props

val CardList = FC<Props> {
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
                    +"Publicador: ....."
                }
                Typography{
                    variant = TypographyVariant.subtitle2
                    +"Description....."
                }
            }
            CardActions {
                + "CSV     JSON"
            }
        }
        /*Box {
            sx{
                marginLeft= 10.pct
            }
            CardContent{
                Typography{
                    variant = TypographyVariant.subtitle2
                    +"Fecha publicación"
                }
                Typography{
                    variant = TypographyVariant.subtitle2
                    +"Ultima actualización"
                }
            }
        }*/
    }
}