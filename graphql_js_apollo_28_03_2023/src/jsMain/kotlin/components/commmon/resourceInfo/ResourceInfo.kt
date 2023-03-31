package components.commmon.resourceInfo

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.FlexDirection
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import mui.icons.material.ReplyOutlined
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.CardActions
import mui.material.CardContent
import mui.material.Chip
import mui.material.Grid
import mui.material.IconButton
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.SpeedDialIcon
import mui.material.Stack
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography

import mui.material.styles.TypographyVariant
import mui.system.Breakpoint
import mui.system.Theme
import mui.system.createSpacing
import mui.system.responsive
import mui.system.sx
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h1
import react.router.useNavigate
import react.useEffect



val resourceInfo = FC<Props> {

    val navigate = useNavigate()

    fun handleClick() {
        navigate("/")
    }
    Breadcrumbs {
        sx {
            marginLeft = 10.pct
            marginTop = 2.pct
        }
        ariaLabel = "breadcrumb"

        Link {
            underline = LinkUnderline.hover
            color = "inherit"
            href = "/"
            +"/Conjunto de datos"
        }

        Typography {
            +"Título dataset"
        }
    }
    ReactHTML.h1 {
        className = ClassName("titleInit")
        +"Titulo del Dataset"
    }





    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(249, 249, 249, 0.87)
            position = Position.relative
        }
        elevation = 0
        +"Themes"
    }
    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = NamedColor.transparent
            position = Position.relative
        }
        elevation = 0

        TableContainer {
            className = ClassName("tableContainerIntro")
            Table {
                TableBody {
                    TableRow{
                        TableCell{
                            + "Publicador"
                        }
                        TableCell{
                            + " ........... "
                        }
                    }
                    TableRow{
                        TableCell{
                            + "Nivel de administración"
                        }
                        TableCell{
                            + " ........... "
                        }
                    }
                    TableRow{
                        TableCell{
                            + "Licencia"
                        }
                        TableCell{
                            + " ........... "
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
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = NamedColor.transparent
            position = Position.relative
        }
        elevation = 0
        Typography {
            className = ClassName("subtitle_info")
            //variant = TypographyVariant.subtitle1
            + "Descripción"
        }

    }

    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = NamedColor.transparent
            position = Position.relative
        }
        elevation = 0
        List {
            ListItemButton {
                + "Distribución 1"
            }
            ListItemButton {
                + "Distribución 2"
            }
        }

    }

    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 2.pct
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = NamedColor.transparent
            position = Position.relative
        }
        elevation = 0

        Grid {
            container = true
            spacing = responsive(2)
            Grid {
                item = true

                Chip {
                    label = ReactNode("Keyword1")
                }
            }
            Grid {
                item = true

                Chip {
                    label = ReactNode("Keyword2")
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
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = NamedColor.transparent
            position = Position.relative
        }
        elevation = 0
        Typography {
            variant = TypographyVariant.subtitle1
            + "Información adicional"
        }
        TableContainer {
            className = ClassName("tableContainerExtra")
            Table {
                TableBody {
                    TableRow{
                        TableCell{
                            + "Fecha de creación"
                        }
                        TableCell{
                            + " ........... "
                        }
                    }
                    TableRow{
                        TableCell{
                            + "Fecha última modificación"
                        }
                        TableCell{
                            + " ........... "
                        }
                    }
                    TableRow{
                        TableCell{
                            + "Cobertura temporal"
                        }
                        TableCell{
                            + " ........... "
                        }
                    }
                    TableRow{
                        TableCell{
                            + "Idiomas"
                        }
                        TableCell{
                            TableRow{
                                + "Inglés"
                            }
                            TableRow{
                                + "Español"
                            }
                        }
                    }
                }
            }
        }

    }
    /*    Paper {
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
                /*CardActions{
                    IconButton{
                        sx{
                            fontSize = 250.pct
                        }
                        onClick ={handleClick()}
                        ReplyOutlined{
                            sx{
                                fontSize = 100.pct
                            }
                        }
                    }
                }*/
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
        }*/


}




