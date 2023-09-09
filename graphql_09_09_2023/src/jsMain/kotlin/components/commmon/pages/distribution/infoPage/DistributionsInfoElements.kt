package components.commmon.pages.distribution.infoPage


import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.selectedDataset.selectFilterDataset
import components.commmon.selectFilter.selectedDistribution.selectFilterDist
import components.commmon.selectFilter.selectedDistribution.selectSearchByDist
import csstype.AlignItems
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DistributionInfo
import mui.icons.material.DownloadForOffline
import mui.icons.material.Podcasts
import mui.icons.material.RssFeed
import mui.icons.material.Title
import mui.icons.material.VpnKey
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.List
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.CircularProgress
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


external interface DistributionsInfoElementsProps : Props {
    var listTestDistributionsInfo: MutableList<DistributionInfo>
}

val DistributionsInfoElements = FC<DistributionsInfoElementsProps> { props->

    var distInfo by useState(props.listTestDistributionsInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()
    var selectedFilters by useRequiredContext(FilterListContextAll)


    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "Distributions") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "Page") filterVal.filter { false }.plus(
                        "1"
                    )
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()
        navigate("/distributions")
    }
    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["Distributions"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(60000)
            isLoading = false
           // console.log("TIMEOUTTT")
        }
    }

    if (distInfo.isNullOrEmpty()){

        CircularProgress {
            className = ClassName("circularProgressInfo")
        }

    }else{
        //console.log("INFOOOOOOOOOOOO::::::"+distInfo)

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
                    //href = "/distributions"
                    onClick = handleOnClick
                    +"/Distributions"
                }

                Typography {
                    if (!distInfo.elementAt(0).title.isNullOrEmpty()) {
                        +"${distInfo.elementAt(0).title?.elementAt(0)}"
                    }else{
                        +"${distInfo.first().id}"
                    }
                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectSearchByDist{infoDist = distInfo}
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
                            if (key == "Distributions") {
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
                selectedFilters["Distributions"]?.map { valuesList ->
                    if (valuesList.value.isNotEmpty() && valuesList.key != "Page" && valuesList.key != "OrderBy" && valuesList.key != "SortBy") {
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
                                                if (key == "Distributions") {
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
            if (!distInfo.elementAt(0).title.isNullOrEmpty()) {
                +"${distInfo.elementAt(0).title?.elementAt(0)}"
            }else{
                +"${distInfo.first().id}"
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
                            val chipValue = distInfo.elementAt(0).format
                            if (chipValue != null) {
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
                                                label = ReactNode(chipValue)
                                                onClick = {
                                                    selectedFilters =
                                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                            if (key == "Distributions") {
                                                                catalogMap!!.toMutableMap()
                                                                    .mapValues { (innerKey, filterVal) ->
                                                                        if (innerKey == "Formato" && !filterVal.contains(
                                                                                chipValue
                                                                            )
                                                                        ) filterVal.plus(chipValue)
                                                                        //else if (filterVal.contains(chipValue)) filterVal.filter { miVal -> miVal != chipValue }
                                                                        else filterVal
                                                                    }.toMutableMap()
                                                            } else {
                                                                catalogMap
                                                            }
                                                        }.toMutableMap()
                                                }
                                                clickable
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
        if(distInfo.elementAt(0)?.accessUrl!!.isNotEmpty()) {
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
                    +"Access Url"
                }
                List {
                    var valueToShow = distInfo.elementAt(0)?.accessUrl


                        ListItem {
                            className = ClassName("distributionsList2")


                            ListItemAvatar {
                                Podcasts {
                                    color = SvgIconColor.primary
                                }

                            }

                            ListItemText {

                                Link {
                                    className = ClassName("distributionsList")
                                    href = "${valueToShow}"
                                    +"$valueToShow"
                                }
                            }

                            ListItemAvatar {
                                className = ClassName("downloadIcon")
                                onClick = { window.location.href = "$valueToShow" }
                                DownloadForOffline {
                                    color = SvgIconColor.primary
                                }
                            }

                        }

                }

            }
        }
        if(!distInfo.elementAt(0)?.title.isNullOrEmpty()) {
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
                    +"Títulos"
                }
                distInfo.elementAt(0)?.title?.map {
                    List {

                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "Distributions") {
                                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                if (innerKey == "Títulos" && !filterVal.contains(it)) filterVal.plus(it)
                                                else if (filterVal.contains(it)) filterVal.filter { miVal -> miVal != it }
                                                else filterVal
                                            }.toMutableMap()
                                        } else {
                                            catalogMap
                                        }
                                    }.toMutableMap()

                                }
                            }
                            ListItemAvatar {
                                Title {
                                    className = ClassName("titleIcon")
                                }
                            }
                            ListItemText {
                                +"$it"
                            }
                        }
                    }
                }

            }
        }

        if(!distInfo.elementAt(0)?.identifiers.isNullOrEmpty()){
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
                    distInfo.elementAt(0)?.identifiers?.map {value ->
                        ListItem {
                            className = ClassName("distributionsList")

                            ListItemAvatar {
                                VpnKey {
                                    color = SvgIconColor.primary
                                }
                            }
                            ListItemText {
                                Link{
                                    href = "$value"
                                    +"$value"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(!distInfo.elementAt(0)?.accessService.isNullOrEmpty()) {
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
                    distInfo.elementAt(0)?.accessService?.mapIndexed { i, it ->
                        if (it.serviceId != null){
                            ListItem {
                                className = ClassName("distributionsList")

                                ListItemAvatar {
                                    RssFeed {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        href = "/#/dataservices/${it.serviceId}"
                                        if (it.serviceIdentifiers.isNullOrEmpty()) +"${it.serviceId}"
                                        else +"${it.serviceIdentifiers?.first()}"
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




