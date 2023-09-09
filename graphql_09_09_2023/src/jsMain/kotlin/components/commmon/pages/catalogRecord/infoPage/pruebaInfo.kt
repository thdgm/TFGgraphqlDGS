package components.commmon.pages.catalogRecord.infoPage

import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import models.CatalogInfo
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.aria.ariaLabel
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate


external interface PruebaElementsProps : Props {
    var listTestCatalogInfo: MutableList<CatalogInfo>
}

val PruebaInfo = FC<PruebaElementsProps> { props ->
    val navigate = useNavigate()
    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        //console.log("ID: "+event.currentTarget.id)
        navigate("/catalogRecords")
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
            //href = "/catalogrecords"
            onClick = handleOnClick
            +"/CatalogRecords"
        }

        Typography {
            +"CR TITLE"
        }
    }
    ReactHTML.h1 {
        className = ClassName("titleInit")

        +"CR TITLE"

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
                            +"Content Type"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"TEXT/CSV"
                        }
                    }



                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Content URL"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"HTTP://DATOS.GOB.ES"
                        }
                    }


                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Primary Topic"
                        }
                        TableCell {
                            className = ClassName("tableCell2")

                            +"IDENTIFIER 1"

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
            +"Hints"
        }
        List {
            ListItemButton {
                //className = ClassName("tableCell2")
                +"HTTP://DATOS.GOB.ES"
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
                +"In Catalog"
            }
            List {
                    ListItemButton {
                        className = ClassName("distributionsList")
                        +"CATALOG 1"
                    }
                    ListItemButton {
                        className = ClassName("distributionsList")
                        +"CATALOG 2"
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
            display = Display.block
        }
        elevation = 0
        Typography {
            className = ClassName("subtitle_info")
            +"Content"
        }

            Typography {

                +"CONTENIDOOO"
            }

    }
}






