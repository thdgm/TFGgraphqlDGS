package components.commmon.card

import commonModels.DatasetModel
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

external interface CardProps:Props{
    var datasetInfo:DatasetModel
    var handleClickOpen: () -> Unit
    var handleClickClose: () -> Unit
}


val CardList = FC<CardProps> { props->
    console.log("ESTOO "+ props.datasetInfo)
    Card {
        sx{
            width = Sizes.CardList.Width
            display= Display.flex
        }
        Box {
            CardContent{
                Typography{
                    variant = TypographyVariant.h6

                    +"${props.datasetInfo.title}"
                }
                Typography{
                    variant = TypographyVariant.subtitle1

                    +"${props.datasetInfo.publisher}"
                }
                Typography{
                    variant = TypographyVariant.subtitle2

                    +"${props.datasetInfo.description}"
                }
            }
            CardActions {
                props.datasetInfo.format.map{
                    Box {
                        sx{
                            display= Display.flex
                        }
                        Typography{
                            variant = TypographyVariant.subtitle2
                            +"$it"
                        }

                    }
                }
                //+ "CSV     JSON"
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