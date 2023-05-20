package components.commmon.pages.catalogRecord.infoPage


import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.CatalogRecordInfo
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.CircularProgress
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
import react.useEffect
import react.useState


external interface CatalogRecordInfoElementsProps : Props {
    var listTestCatalogRecordInfo: MutableList<CatalogRecordInfo>
}

val CatalogRecordInfoElements = FC<CatalogRecordInfoElementsProps> { props ->


    var catalogRecordInfo by useState(props.listTestCatalogRecordInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()
    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/catalogRecords")
    }
    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(9000)
            isLoading = false
            console.log("TIMEOUTTT")
        }
    }

    if (catalogRecordInfo.isNullOrEmpty()) {
        if (isLoading) {
            CircularProgress {
                className = ClassName("circularProgressInfo")
            }
        } else {
            +"No se ha encontrado información del elemento"
            PruebaInfo()
        }
    } else {
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
               // href = "/catalogrecords"
                onClick = handleOnClick
                +"/CatalogRecords"
            }

            Typography {
                if (catalogRecordInfo.elementAt(0)?.title!!.isNotEmpty()) {
                    +"${catalogRecordInfo.elementAt(0)?.title?.elementAt(0)}"
                }

            }
        }
        ReactHTML.h1 {
            className = ClassName("titleInit")
            if (catalogRecordInfo.elementAt(0)?.title!!.isNotEmpty()) {
                +"${catalogRecordInfo.elementAt(0)?.title?.elementAt(0)}"
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
                        if (!catalogRecordInfo.elementAt(0)?.contentType.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Content Type"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogRecordInfo.elementAt(0)?.contentType}"
                                }
                            }
                        }

                        if (!catalogRecordInfo.elementAt(0)?.contentURL.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Content URL"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogRecordInfo.elementAt(0)?.contentURL}"
                                }
                            }
                        }
                        if (!catalogRecordInfo.elementAt(0)?.pTId.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Primary Topic"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    if (catalogRecordInfo.elementAt(0)?.ptIdentifier.isNullOrEmpty()) {
                                        +"${catalogRecordInfo.elementAt(0)?.ptTitle?.elementAt(0)}"
                                    } else {
                                        +"${catalogRecordInfo.elementAt(0)?.ptIdentifier?.elementAt(0)}"
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }

        if (catalogRecordInfo.elementAt(0)?.title!!.size > 1) {
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
                catalogRecordInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {
                        ListItemButton {
                            +"$it"
                        }
                    }
                }

            }
        }
        if (catalogRecordInfo.elementAt(0)?.hints!!.isNotEmpty()) {
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
                    catalogRecordInfo.elementAt(0)?.hints?.map {
                        ListItemButton {
                            //className = ClassName("tableCell2")
                            +"$it"
                        }
                    }
                }
            }
        }
        if (catalogRecordInfo.elementAt(0)?.inCatalogID!!.isNotEmpty()) {
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
                    +"Resources"
                }
                List {
                    catalogRecordInfo.elementAt(0)?.inCatalogTitle?.map {
                        ListItemButton {
                            className = ClassName("distributionsList")
                            +"${it?.elementAt(0)}"

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
                //backgroundColor = NamedColor.transparent
                position = Position.relative
                display = Display.block
            }
            elevation = 0
            Typography {
                className = ClassName("subtitle_info")
                +"Content"
            }
            if (!catalogRecordInfo.elementAt(0)?.inCatalogID!!.isNullOrEmpty()) {
                Typography {
                    +"${catalogRecordInfo.elementAt(0)?.inCatalogID}"
                }
            }

        }
    }
}




