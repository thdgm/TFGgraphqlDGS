package components.commmon.pages.distribution.mainPage

import commonModels.DatasetModel
import commonModels.DistributionsModel
import components.commmon.Sizes
import csstype.ClassName
import csstype.Display
import csstype.FontWeight
import csstype.px
import csstype.rgb
import mui.material.Box
import mui.material.Card
import mui.material.CardActions
import mui.material.CardContent
import mui.material.Chip
import mui.material.ChipColor
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.responsive
import mui.system.sx
import react.FC
import react.Props

external interface CardProps:Props{
    var distributionsInfo: DistributionsModel
    var handleClickOpen: () -> Unit
    var handleClickClose: () -> Unit
}


val CardListDistribution = FC<CardProps> { props->
    Card {
        sx{
            width = Sizes.CardList.Width
            display= Display.flex
            borderRadius = 10.px
        }
        Box {
            CardContent{
                Typography {
                    variant = TypographyVariant.h6
                    sx {
                        color = rgb(34,24,117)
                        fontWeight = FontWeight.bold
                    }
                    +"${props.distributionsInfo.title}"

                }

                Typography {
                    variant = TypographyVariant.subtitle1
                    sx {
                        color = rgb(10,72,241)

                    }
                    +"${props.distributionsInfo.accessUrl}"

                }

            }
            CardActions {
                Stack {
                    sx{
                        display = Display.block
                    }
                    direction = responsive(StackDirection.row)

                    className = ClassName("stackSelectedFilters")
                    spacing = responsive(4.px)
                    direction = responsive(StackDirection.row)
                    Chip {
                        label = react.ReactNode("${props.distributionsInfo.byteSize} bytes")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.success

                    }
                }
                Stack {
                    sx{
                        display = Display.block
                    }
                    direction = responsive(StackDirection.row)
                    className = ClassName("stackSelectedFilters")
                    spacing = responsive(4.px)
                    direction = responsive(StackDirection.row)
                    Chip {
                        label = react.ReactNode("${props.distributionsInfo.format}")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.primary
                    }
                    /*props.datasetInfo.format.distinct().map{
                        if(it != null){

                            className = ClassName("stackSelectedFilters")
                            spacing = responsive(4.px)
                            direction = responsive(StackDirection.row)
                            Chip {
                                label = react.ReactNode(it)
                                variant = mui.material.ChipVariant.outlined
                                color = ChipColor.primary

                            }
                        }
                    }*/
                }
            }
        }

    }
}




