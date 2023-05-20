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
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DistributionInfo
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Chip
import mui.material.CircularProgress
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
import react.useEffect
import react.useState


external interface DistributionsInfoElementsProps : Props {
    var listTestDistributionsInfo: MutableList<DistributionInfo>
}

val DistributionsInfoElements = FC<DistributionsInfoElementsProps> { props->


    var distInfo by useState(props.listTestDistributionsInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/dataservices")
    }
    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(9000)
            isLoading = false
            console.log("TIMEOUTTT")
        }
    }

    if (distInfo.isNullOrEmpty()){
        if (isLoading) {
            CircularProgress {
                className = ClassName("circularProgressInfo")
            }
        }else{
            +"No se ha encontrado información del elemento"
            PruebaInfo()
        }
    }else{
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
                if(distInfo.elementAt(0)?.title!!.isNotEmpty()){
                    +"${distInfo.elementAt(0)?.title?.elementAt(0)}"
                }

            }
        }
        ReactHTML.h1 {
            className = ClassName("titleInit")
            if(distInfo.elementAt(0)?.title!!.isNotEmpty()){
                +"${distInfo.elementAt(0)?.title?.elementAt(0)}"
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
                        if(!distInfo.elementAt(0)?.accessUrl.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"AccessUrl"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${distInfo.elementAt(0)?.accessUrl}"
                                }
                            }
                        }
                        if(!distInfo.elementAt(0)?.byteSize.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"ByteSize"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${distInfo.elementAt(0)?.byteSize}"
                                }
                            }
                        }
                        if (!distInfo.elementAt(0)?.format.isNullOrBlank()) {
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
                                            label = ReactNode("${distInfo.elementAt(0)?.format}")
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(distInfo.elementAt(0)?.title!!.size > 1) {
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
                distInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {
                        ListItemButton {
                            +"$it"
                        }
                    }
                }

            }
        }

        if(distInfo.elementAt(0)?.identifiers!!.isNotEmpty()){
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
                    distInfo.elementAt(0)?.identifiers?.map {
                        ListItemButton {
                            //className = ClassName("tableCell2")
                            +"$it"
                        }
                    }
                }
            }
        }

        if(!distInfo.elementAt(0)?.accessServiceID.isNullOrEmpty()) {
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
                    distInfo.elementAt(0)?.accessServiceID?.mapIndexed { i, it ->

                            if (!distInfo.elementAt(0)?.accessServiceIdentifiers?.elementAt(i).isNullOrEmpty()){
                                ListItemButton {
                                    +"${distInfo.elementAt(0)?.accessServiceIdentifiers?.elementAt(i)?.elementAt(0)}"
                                }
                            }else{
                                ListItemButton {
                                    +"${distInfo.elementAt(0)?.accessServiceTitles?.elementAt(i)?.elementAt(0)}"
                                }
                            }

                    }
                }

            }
        }

    }
}




