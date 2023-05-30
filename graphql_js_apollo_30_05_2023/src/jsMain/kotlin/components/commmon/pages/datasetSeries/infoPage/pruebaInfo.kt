package components.commmon.pages.datasetSeries.infoPage

import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Chip
import mui.material.ChipColor
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
        navigate("/datasetseries")
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
                    onClick = handleOnClick
                    underline = LinkUnderline.hover
                    color = "inherit"
                    //href = "/datasetseries"
                    +"/DatasetSeries"
                }

                Typography {
                    +"DATSERVICE TITLE"
                }
            }
            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"DATSERVICE TITLE"

            }

            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    paddingTop = 1.pct
                    paddingBottom = 1.pct
                    backgroundColor = rgba(249, 249, 249, 0.87)
                    position = Position.relative
                }
                elevation = 0
                Stack {
                    sx {
                        display = Display.block
                    }
                    className = ClassName("stackSelectedFilters")
                    spacing = responsive(4.px)
                    direction = responsive(StackDirection.row)

                    Chip {
                        className = ClassName("themesChip")
                        label = ReactNode("THEME1")
                        color = ChipColor.success
                    }
                    Chip {
                        className = ClassName("themesChip")
                        label = ReactNode("THEME2")
                        color = ChipColor.success
                    }

                }
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
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"PUBLICADOR"
                                }
                            }

                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Nivel de administración"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +" ........... "
                                }
                            }

                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"LICENSE"
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
                        +"TITULO 2"
                    }
                    ListItemButton {
                        +"TITULO 3"
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
                    +"Descripción"
                }
                List {

                    ListItemButton {
                        //className = ClassName("tableCell2")
                        +"DESCRIPCION 1"
                    }
                    ListItemButton {
                        //className = ClassName("tableCell2")
                        +"DESCRIPCION 2"
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
                    +"IDENTIFICADOR DATASERVICE1"
                }
                ListItemButton {
                    +"IDENTIFICADOR DATASERVICE2"
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
                +"Miembros"
            }
            List {
                ListItemButton {
                    +"IDENTIFICADOR DATASET1"
                }
                ListItemButton {
                    +"IDENTIFICADOR DATASET2"
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
                +"Catalogos contenedores"
            }
            List {
                ListItemButton {
                    id = "CATALOGID1"
                    +"CATALOG1"
                }
                ListItemButton {
                    id = "CATALOGID2"
                    +"CATALOG2"
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
                    //backgroundColor = NamedColor.transparent
                    position = Position.relative
                }
                elevation = 0
                Typography {
                    className = ClassName("subtitle_info")
                    +"Información adicional"
                }
                TableContainer {

                    Table {
                        className = ClassName("tableInfo")
                        TableBody {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"fecha modificacion"
                                }
                            }

                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"fecha creacion"
                                }
                            }

                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = "CR ID"
                                    +"CR TITLE"
                                }

                            }


                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Idiomas"
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
                                            label = ReactNode("ES")
                                        }
                                        Chip {
                                            className = ClassName("languagesChip")
                                            label = ReactNode("EU")
                                        }


                                    }
                                }
                            }

                        }
                    }
                }

            }

        }






