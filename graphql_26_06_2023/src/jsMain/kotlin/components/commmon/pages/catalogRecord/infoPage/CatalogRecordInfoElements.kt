package components.commmon.pages.catalogRecord.infoPage


import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.selectFilter.selectedDataset.selectFilterDataset
import csstype.AlignItems
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
import models.CatalogRecordInfo
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.List
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
import react.useRequiredContext
import react.useState


external interface CatalogRecordInfoElementsProps : Props {
    var listTestCatalogRecordInfo: MutableList<CatalogRecordInfo>
}

val CatalogRecordInfoElements = FC<CatalogRecordInfoElementsProps> { props ->


    var catalogRecordInfo by useState(props.listTestCatalogRecordInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()
    var selectedFilters by useRequiredContext(FilterListContextAll)

    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["CatalogRecords"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        //console.log("ID: "+event.currentTarget.id)
        navigate("/catalogRecords")
    }
    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(2000)
            isLoading = false
            //console.log("TIMEOUTTT")
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
        ReactHTML.div {
            className = ClassName("titleSelect")
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
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectFilterDataset()
            }
        }

        if (!checkIfSelectedFiltersIsEmpty()) {
            Stack {
                sx {
                    marginLeft = 10.pct
                }
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)
                Button {
                    variant = ButtonVariant.contained
                    color = ButtonColor.primary
                    +"Search"
                }
                Button {
                    variant = ButtonVariant.contained
                    color = ButtonColor.warning
                    onClick = {
                        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "CatalogRecords") {
                                catalogMap.toMutableMap().mapValues { (_, filterVal) ->
                                    filterVal.filter { false }
                                }.toMutableMap<String, Collection<String>>()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()

                    }
                    +"Clean"
                }
            }
            Stack {
                sx {
                    display = Display.block
                }
                className = ClassName("stackSelectedFilters")
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)
                selectedFilters["CatalogRecords"]?.map { valuesList ->
                    if (valuesList.value.isNotEmpty()) {
                        ReactHTML.span {
                            className = ClassName("chipsSelectedFilters")
                            +"${valuesList.key}: "
                            valuesList.value.map { value ->

                                Chip {
                                    id = value
                                    label = ReactNode(value)
                                    variant = ChipVariant.outlined
                                    color = ChipColor.primary
                                    onDelete = { _ ->
                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "CatalogRecords") {
                                                    catalogMap.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == valuesList.key) filterVal.filter { it != value }
                                                        else filterVal
                                                    }.toMutableMap()
                                                } else {
                                                    catalogMap
                                                }
                                            }.toMutableMap()
                                    }
                                    deleteIcon
                                }
                                +" "
                            }
                        }
                    }
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
                                        Link {
                                            +"${catalogRecordInfo.elementAt(0)?.ptTitle?.elementAt(0)}"
                                        }
                                    } else {
                                        Link {
                                            +"${catalogRecordInfo.elementAt(0)?.ptIdentifier?.elementAt(0)}"
                                        }
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




