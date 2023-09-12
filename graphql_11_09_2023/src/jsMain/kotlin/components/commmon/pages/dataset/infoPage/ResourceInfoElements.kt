package components.commmon.pages.dataset.infoPage


import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.selectFilter.selectedCatalog.selectFilterCatalog
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
import csstype.rgba
import es.unizar.iaaa.tfg.constants.ConstantValues
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DatasetInfo
import mui.icons.material.Description
import mui.icons.material.DownloadForOffline
import mui.icons.material.Folder
import mui.icons.material.Podcasts
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
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
import mui.material.ListItemIcon
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
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState


external interface ResourceInfoElementsProps : Props {
    var listTestDatasetsInfo: MutableList<DatasetInfo>
}

val ResourceInfoElements = FC<ResourceInfoElementsProps> { props->


    var datasetInfo by useState(props.listTestDatasetsInfo)

    var isLoading by useState(true)
    val navigate = useNavigate()
    var selectedFilters by useRequiredContext(FilterListContextAll)
    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        //console.log("ID: "+event.currentTarget.id)
        navigate("/")
    }
    val handleOnClickSearch: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        //console.log("ID: "+event.currentTarget.id)
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "Datasets") {
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
        navigate("/")
    }
   // console.log("ESTOOOO::: "+ datasetInfo)
    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(60000)
            isLoading = false
           // console.log("TIMEOUTTT")
        }
    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["Datasets"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    if (datasetInfo.isNullOrEmpty()){
        //if (isLoading) {
            CircularProgress {
                className = ClassName("circularProgressInfo")
            }
        //}
    }else{
        div {
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
                    onClick = handleOnClickSearch
                    +"/datasets"
                }

                Typography {
                    if (datasetInfo.elementAt(0)?.title!!.isNotEmpty()) {
                        +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
                    }

                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectFilterDataset{infoDataset = datasetInfo}
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
                    onClick = handleOnClickSearch
                    +"Search"
                }
                Button {
                    variant = ButtonVariant.contained
                    color = ButtonColor.warning
                    onClick = {
                        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
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
                selectedFilters["Datasets"]?.map { valuesList ->
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
                                                if (key == "Datasets") {
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
            if(datasetInfo.elementAt(0)?.title!!.isNotEmpty()){
                +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
            }else{
                +"No tiene ningún título"
            }
        }

        if(datasetInfo.elementAt(0)?.theme!!.isNotEmpty()) {
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
                    datasetInfo.elementAt(0)?.theme?.map {chipValue ->
                        Chip {
                            className = ClassName("themesChip")
                            label = ReactNode("$chipValue")
                            color = ChipColor.success
                            onClick = {
                                selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                    if (key == "Datasets") {
                                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                            if (innerKey == "Categoría" && !filterVal.contains(chipValue)) filterVal.plus(chipValue)
                                            else if (filterVal.contains(chipValue)) filterVal.filter { miVal -> miVal != chipValue }
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
                        if(!datasetInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.publisher}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.notation.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Nivel de administración"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.notation}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    Link {
                                        href = "${datasetInfo.elementAt(0)?.license}"
                                        +"${datasetInfo.elementAt(0)?.license}"
                                    }
                                }
                            }
                        }
                        if(datasetInfo.elementAt(0)?.accrualPeriodicity != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Frecuencia de actualización"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    val period = datasetInfo.elementAt(0)?.accrualPeriodicity!!.period
                                    val range = datasetInfo.elementAt(0)?.accrualPeriodicity!!.range
                                    val duration = "time:${range} ${period}"
                                    val durationShow = ConstantValues.FREQUENCY_MAP[duration] ?: "Cada ${period?.toInt()} ${ConstantValues.FREQUENCY_TRANSLATOR[range]}"
                                    +"$durationShow"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(datasetInfo.elementAt(0)?.title!!.size > 1) {
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
                datasetInfo.elementAt(0)?.title?.drop(1)?.map {
                    console.log("TITULOS::: "+ it)
                    List {
                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "Datasets") {
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
        if(datasetInfo.elementAt(0)?.identifiers!!.isNotEmpty()){
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
                    //console.log("IDENTIFIERS: "+datasetInfo.elementAt(0)?.identifiers)
                    datasetInfo.elementAt(0)?.identifiers?.map { value ->
                        ListItem {
                            className = ClassName("distributionsList")

                            ListItemAvatar {
                                VpnKey {
                                    color = SvgIconColor.primary
                                }
                            }
                            ListItemText {
                                Link{
                                    href = "${value}"
                                    + "$value"
                                }
                            }
                        }
                    }

                }
            }
        }
        if(datasetInfo.elementAt(0)?.description!!.isNotEmpty()){
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
                    datasetInfo.elementAt(0)?.description?.map {

                        ListItem {

                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {
                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "Datasets") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == "Descripciones" && !filterVal.contains(it)) filterVal.plus(
                                                        it
                                                    )
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
                                Description {
                                    color = SvgIconColor.primary
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
        if(!datasetInfo.elementAt(0)?.servedByID.isNullOrEmpty()) {
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
                     +"Served By"
                 }
                 List {
                     datasetInfo.elementAt(0)?.servedByID?.map { valueToShow ->


                         if (valueToShow != null){
                             ListItem {
                                 className = ClassName("distributionsList")
                                 /*secondaryAction = addToFiltersButton.create {
                                     addToFilters = {

                                         selectedFilters =
                                             selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                 if (key == "Datasets") {
                                                     catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                         if (innerKey == "DataServices" && !filterVal.contains(valueToShow)) filterVal.plus(
                                                             valueToShow
                                                         )
                                                         else if (filterVal.contains(valueToShow)) filterVal.filter { miVal -> miVal != valueToShow }
                                                         else filterVal
                                                     }.toMutableMap()
                                                 } else {
                                                     catalogMap
                                                 }
                                             }.toMutableMap()
                                     }
                                 }*/

                                 ListItemAvatar {
                                     RssFeed {
                                         color = SvgIconColor.primary
                                     }
                                 }
                                 ListItemText {
                                     Link {
                                         href = "/#/dataservices/$valueToShow"
                                         +"$valueToShow"
                                     }
                                 }
                             }
                         }


                     }
                 }

             }
         }
        if(!datasetInfo.elementAt(0)?.inSeriesID.isNullOrEmpty()) {
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
                    +"In Series"
                }
                List {
                    datasetInfo.elementAt(0)?.inSeriesID?.map { valueToShow ->


                        if (valueToShow != null){
                            ListItem {
                                className = ClassName("distributionsList")
                                /*secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "Datasets") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "DatasetSeries" && !filterVal.contains(valueToShow)) filterVal.plus(
                                                            valueToShow
                                                        )
                                                        else if (filterVal.contains(valueToShow)) filterVal.filter { miVal -> miVal != valueToShow }
                                                        else filterVal
                                                    }.toMutableMap()
                                                } else {
                                                    catalogMap
                                                }
                                            }.toMutableMap()
                                    }
                                }*/

                                ListItemAvatar {
                                    Source {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        href = "/#/datasetseries/$valueToShow"
                                        +"$valueToShow"
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
        if(!datasetInfo.elementAt(0)?.inCatalogID.isNullOrEmpty()) {
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
                    datasetInfo.elementAt(0)?.inCatalogID?.map { valueToShow ->

                        if (valueToShow != null){
                            ListItem {
                                className = ClassName("distributionsList")
                                /*secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "Datasets") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "Catalogs" && !filterVal.contains(valueToShow)) filterVal.plus(
                                                            valueToShow
                                                        )
                                                        else if (filterVal.contains(valueToShow)) filterVal.filter { miVal -> miVal != valueToShow }
                                                        else filterVal
                                                    }.toMutableMap()
                                                } else {
                                                    catalogMap
                                                }
                                            }.toMutableMap()
                                    }
                                }*/

                                ListItemAvatar {
                                    Folder {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        href = "/#/catalogs/$valueToShow"
                                        +"$valueToShow"
                                    }
                                }
                            }
                        }


                    }
                }

            }
        }
         if(datasetInfo.elementAt(0)?.formats!!.isNotEmpty()){
             Paper {
                 sx {
                     width = Sizes.BoxList.Width
                     marginRight = Auto.auto
                     marginLeft = Auto.auto
                     marginTop = 2.pct
                     paddingRight = 10.pct
                     paddingLeft = 6.pct
                     backgroundColor = NamedColor.transparent
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
                     datasetInfo.elementAt(0)?.formats?.map {chipValue->
                         Chip {
                             className = ClassName("keywordsChip")
                             label = ReactNode("$chipValue")
                             onClick = {
                                 selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                     if (key == "Datasets") {
                                         catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                             if (innerKey == "Formato" && !filterVal.contains(chipValue)) filterVal.plus(chipValue)
                                             else if (filterVal.contains(chipValue)) filterVal.filter { miVal -> miVal != chipValue }
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
        if(datasetInfo.elementAt(0)?.distInfo!!.isNotEmpty()) {
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
                    +"Distribuciones"
                }
                List {
                   // datasetInfo.elementAt(0)?.accessURl?.mapIndexed { i,valueToShow->
                    datasetInfo.elementAt(0)?.distInfo?.mapIndexed { i,dist->
                        var valueToShow = dist.accessURl
                        if(!valueToShow.isNullOrBlank()) {
                            ListItem {
                                className = ClassName("distributionsList2")
                                /*secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "Datasets") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "Distribuciones" && !filterVal.contains(
                                                                valueToShow
                                                            )
                                                        ) filterVal.plus(
                                                            valueToShow
                                                        )
                                                        else if (filterVal.contains(valueToShow)) filterVal.filter { miVal -> miVal != valueToShow }
                                                        else filterVal
                                                    }.toMutableMap()
                                                } else {
                                                    catalogMap
                                                }
                                            }.toMutableMap()
                                    }
                                }*/

                                ListItemAvatar {
                                    Podcasts {
                                        color = SvgIconColor.primary
                                    }

                                }

                                ListItemText {
                                    Link {
                                        className = ClassName("distributionsList")

                                        href = "/#/distributions/${dist.id}"
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
                        }else{
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

                                        href = "/#/distributions/${dist.id}"
                                        +"${dist.id}"
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

         if(!datasetInfo.elementAt(0)?.isPTOID.isNullOrEmpty()) {
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
                     +"Catalog Records"
                 }
                 List {
                     datasetInfo.elementAt(0)?.isPTOID?.mapIndexed { i, valueToShow ->

                         if (valueToShow != null){
                             ListItem {
                                 className = ClassName("distributionsList")
                                 /*secondaryAction = addToFiltersButton.create {
                                     addToFilters = {

                                         selectedFilters =
                                             selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                 if (key == "Datasets") {
                                                     catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                         if (innerKey == "PrimaryTopic" && !filterVal.contains(valueToShow)) filterVal.plus(
                                                             valueToShow
                                                         )
                                                         else if (filterVal.contains(valueToShow)) filterVal.filter { miVal -> miVal != valueToShow }
                                                         else filterVal
                                                     }.toMutableMap()
                                                 } else {
                                                     catalogMap
                                                 }
                                             }.toMutableMap()
                                     }
                                 }*/

                                 ListItemAvatar {
                                     Folder {
                                         color = SvgIconColor.primary
                                     }
                                 }
                                 ListItemText {
                                     Link {
                                         href = "/#/catalogrecords/${valueToShow.replace("/","\\")}"
                                         +"$valueToShow"
                                     }
                                 }
                             }
                         }
                     }
                 }
             }
         }

        if(datasetInfo.elementAt(0)?.keywords!!.isNotEmpty()){
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    backgroundColor = NamedColor.transparent
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
                    datasetInfo.elementAt(0)?.keywords?.map {chipValue->
                        Chip {
                            className = ClassName("keywordsChip")
                            label = ReactNode("$chipValue")
                            onClick = {
                                selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                    if (key == "Datasets") {
                                        catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                            if (innerKey == "Etiquetas más comunes" && !filterVal.contains(chipValue)) filterVal.plus(chipValue)
                                            else if (filterVal.contains(chipValue)) filterVal.filter { miVal -> miVal != chipValue }
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
                        if(!datasetInfo.elementAt(0)?.issued.isNullOrEmpty() && datasetInfo.elementAt(0)?.issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.issued}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.modified.isNullOrEmpty() && datasetInfo.elementAt(0)?.modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.modified}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.temporalStart.isNullOrEmpty() && datasetInfo.elementAt(0)?.temporalStart != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Cobertura temporal"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.temporalStart} -- ${datasetInfo.elementAt(0)?.temporalEnd}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.spatial.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Cobertura geográfica"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")

                                    +"${datasetInfo.elementAt(0)?.spatial?.joinToString(separator = " / ")}"
                                }
                            }
                        }

                        if (datasetInfo.elementAt(0)?.language!!.isNotEmpty()) {
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
                                        datasetInfo.elementAt(0)?.language?.map {
                                            Chip {
                                                className = ClassName("languagesChip")
                                                label = ReactNode("$it")
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

    }







/*












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

 */
}




