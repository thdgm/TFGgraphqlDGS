package components.commmon.pages.catalogRecord.infoPage


import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.selectedCatalogRecord.selectSearchByCR
import components.commmon.selectFilter.selectedDataset.selectFilterDataset
import csstype.AlignItems
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.WordBreak
import csstype.pct
import csstype.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.CatalogRecordInfo
import mui.icons.material.Folder
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
import mui.material.Grid
import mui.material.GridDirection
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItem
import mui.material.ListItemAvatar
import mui.material.ListItemButton
import mui.material.ListItemText
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.SvgIconColor
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
import react.create
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
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "CatalogRecords") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "Page") filterVal.filter { false }.plus("1")
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()
        navigate("/catalogRecords")
    }


    if (catalogRecordInfo.isNullOrEmpty()) {

        CircularProgress {
            className = ClassName("circularProgressInfo")
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
                    if (!catalogRecordInfo.elementAt(0).title.isNullOrBlank()) {
                        +"${catalogRecordInfo.elementAt(0).title}"
                    }else{
                        +"${catalogRecordInfo.first().id}"
                    }
                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectSearchByCR{
                    infoCR = catalogRecordInfo
                }
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
                    onClick = handleOnClick
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
            if (!catalogRecordInfo.elementAt(0).title.isNullOrBlank()) {
                +"${catalogRecordInfo.elementAt(0).title}"
            }else{
                +"${catalogRecordInfo.first().id}"
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
                        if (catalogRecordInfo.elementAt(0)?.primaryTopic != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Primary Topic"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    val crId = catalogRecordInfo.elementAt(0).primaryTopic?.resourceId
                                    id = crId

                                    Grid {
                                        sx {
                                            display = Display.flex
                                        }
                                        container = true
                                        spacing = responsive(2.px)
                                        direction = responsive(GridDirection.row)
                                        Grid {
                                            sx {
                                                display = Display.flex
                                            }
                                            item = true
                                            direction = responsive(GridDirection.row)
                                            Link {
                                                if (catalogRecordInfo.elementAt(0).primaryTopic?.resourceIdentifier.isNullOrEmpty()) {
                                                    +"$crId"
                                                }
                                                else +"${catalogRecordInfo.elementAt(0).primaryTopic?.resourceIdentifier?.first()}"
                                            }
                                        }
                                        Grid {
                                            sx {
                                                display = Display.flex
                                                marginLeft = 5.pct
                                            }
                                            item = true
                                            direction = responsive(GridDirection.row)
                                            Chip {
                                                label = ReactNode("${catalogRecordInfo.elementAt(0).primaryTopic?.resourceType}")
                                                variant = ChipVariant.outlined
                                                color = ChipColor.primary
                                            }
                                        }
                                    }

                                }
                            }
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
        if (!catalogRecordInfo.elementAt(0).inCatalog.isNullOrEmpty()) {
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
                    catalogRecordInfo.elementAt(0).inCatalog?.mapIndexed { index, it ->
                        if (it.catalogId != null) {
                            ListItem {
                                className = ClassName("distributionsList")
                                ListItemAvatar {
                                    Folder {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        if (it.catalogIdentifiers.isNullOrEmpty()) +"${it.catalogId}"
                                        else +"${it.catalogIdentifiers.first()}"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (!catalogRecordInfo.elementAt(0)?.content.isNullOrBlank()) {
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
                    display = Display.block
                }
                elevation = 0
                Typography {
                    className = ClassName("subtitle_info")
                    +"Contenido"
                }
                Typography {
                    sx{
                        wordBreak = WordBreak.breakAll
                    }
                    +"${catalogRecordInfo.elementAt(0)?.content}"
                }
            }
        }
    }
}




