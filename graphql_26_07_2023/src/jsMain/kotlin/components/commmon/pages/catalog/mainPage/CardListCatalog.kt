package components.commmon.pages.catalog.mainPage

import commonModels.DatasetModel
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
    var datasetInfo: DatasetModel
    var handleClickOpen: () -> Unit
    var handleClickClose: () -> Unit
}


val CardListCatalog = FC<CardProps> { props->
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
                    //+"${props.datasetInfo.title}"
                    + "CATALOG TITLE"
                }

                Typography {
                    variant = TypographyVariant.subtitle1
                    sx {
                        color = rgb(10,72,241)

                    }
                    //+"${props.datasetInfo.publisher}"
                    + "CATALOG PUBLISHER"
                }

                Typography {
                    variant = TypographyVariant.subtitle2
                    className = ClassName("description-content")
                    //+"${props.datasetInfo.description}"
                    + "CATALOG DESCRIPTION"
                }

            }
            CardActions {
                Stack {
                    sx{
                        display= Display.flex
                    }
                    direction = responsive(StackDirection.row)


                    spacing = responsive(4.px)
                    direction = responsive(StackDirection.row)
                    Chip {
                        label = react.ReactNode("10 resources")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.primary

                    }
                    Chip {
                        label = react.ReactNode("5 datasets")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.secondary
                    }
                    Chip {
                        label = react.ReactNode("4 dataservices")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.warning
                    }
                    Chip {
                        label = react.ReactNode("10 CR")
                        variant = mui.material.ChipVariant.outlined
                        color = ChipColor.success
                    }


                }
            }
        }

    }
}


