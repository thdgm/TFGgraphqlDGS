package components.commmon.pages.distribution.infoPage

import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Chip
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate


external interface PruebaElementsProps : Props

val PruebaInfo = FC<PruebaElementsProps> {
    val navigate = useNavigate()

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/dataservices")
    }
    Breadcrumbs {
        sx {
            marginLeft = 10.pct
            marginTop = 2.pct
        }
        ariaLabel = "breadcrumb"

        Link {
            sx {
                cursor = Cursor.pointer
            }
            underline = LinkUnderline.hover
            color = "inherit"
            //href = "/distributions"
            onClick = handleOnClick
            +"/Distributions"
        }

        Typography {
            +"DISTRIBUTION TITLE"
        }
    }
    ReactHTML.h1 {
        className = ClassName("titleInit")
        +"DISTRIBUTION TITLE"
    }


    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            paddingRight = 10.pct
            paddingLeft = 6.pct
            paddingTop = 2.pct
            paddingBottom = 5.pct
            backgroundColor = NamedColor.white
            position = Position.relative
        }
        elevation = 0

        TableContainer {
            className = ClassName("tableContainerIntro")
            Table {
                className = ClassName("tableInfo")
                TableBody {

                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"AccessUrl"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"HTTP://ACCESSURL"
                        }
                    }


                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"ByteSize"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"1400"
                        }
                    }


                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Formato"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            Stack {
                                sx {
                                    display = Display.block
                                }
                                className = ClassName("stackLanguagesChip")
                                spacing = responsive(4.px)
                                direction = responsive(StackDirection.row)
                                Chip {
                                    className = ClassName("languagesChip")
                                    label = ReactNode("CSV")
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            paddingTop = 2.pct
            paddingBottom = 5.pct
            backgroundColor = NamedColor.white
            paddingRight = 10.pct
            paddingLeft = 6.pct
            position = Position.relative
        }
        elevation = 0
        Typography {
            className = ClassName("subtitle_info")
            +"Otros títulos"
        }

        List {
            ListItemButton {
                +"TITLE 2"
            }
            ListItemButton {
                +"TITLE 3"
            }
        }
    }


    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            paddingTop = 2.pct
            paddingBottom = 5.pct
            backgroundColor = NamedColor.white
            paddingRight = 10.pct
            paddingLeft = 6.pct
            position = Position.relative
        }
        elevation = 0
        Typography {
            className = ClassName("subtitle_info")
            +"Identificadores"
        }
        List {

            ListItemButton {
                //className = ClassName("tableCell2")
                +"IDENTIFICADOR1"
            }
            ListItemButton {
                //className = ClassName("tableCell2")
                +"IDENTIFICADOR2"
            }

        }
    }



    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            paddingTop = 2.pct
            paddingBottom = 5.pct
            backgroundColor = NamedColor.white
            paddingRight = 10.pct
            paddingLeft = 6.pct
            position = Position.relative
        }
        elevation = 0
        Typography {
            className = ClassName("subtitle_info")
            +"Data Services"
        }
        List {
            ListItemButton {
                +"DATASERVICE 1"
            }
            ListItemButton {
                +"DATASERVICE 2"
            }
        }

    }


}






