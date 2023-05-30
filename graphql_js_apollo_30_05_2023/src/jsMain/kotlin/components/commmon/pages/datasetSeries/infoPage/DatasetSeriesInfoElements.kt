package components.commmon.pages.datasetSeries.infoPage


import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.selectedDataset.selectFilterDataset
import components.commmon.selectFilter.selectedDatasetSeries.selectFilterDSeries
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
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DatasetSeriesInfo
import mui.icons.material.Description
import mui.icons.material.RssFeed
import mui.icons.material.Title
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


external interface DatasetSeriesInfoElementsProps : Props {
    var listTestDatasetSeriesInfo: MutableList<DatasetSeriesInfo>
}

val DatasetSeriesInfoElements = FC<DatasetSeriesInfoElementsProps> { props->


    var dSeriesInfo by useState(props.listTestDatasetSeriesInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()
    var selectedFilters by useRequiredContext(FilterListContextAll)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/datasetseries")
    }
    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(2000)
            isLoading = false
            console.log("TIMEOUTTT")
        }
    }
    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["DatasetSeries"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    if (dSeriesInfo.isNullOrEmpty()){
        if (isLoading) {
            CircularProgress {
                className = ClassName("circularProgressInfo")
            }
        }else{
            +"No se ha encontrado información del elemento"
            PruebaInfo()
        }
    }else{
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
                    onClick = handleOnClick
                    underline = LinkUnderline.hover
                    color = "inherit"
                    //href = "/datasetseries"
                    +"/DatasetSeries"

                }

                Typography {
                    if (dSeriesInfo.elementAt(0)?.title!!.isNotEmpty()) {
                        +"${dSeriesInfo.elementAt(0)?.title?.elementAt(0)}"
                    }

                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectFilterDSeries()
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
                            if (key == "DatasetSeries") {
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
                selectedFilters["DatasetSeries"]?.map { valuesList ->
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
                                                if (key == "DatasetSeries") {
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
            if(dSeriesInfo.elementAt(0)?.title!!.isNotEmpty()){
                +"${dSeriesInfo.elementAt(0)?.title?.elementAt(0)}"
            }
        }
        if(dSeriesInfo.elementAt(0)?.theme!!.isNotEmpty()) {
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
                    dSeriesInfo.elementAt(0)?.theme?.map {chipValue->

                        Chip {
                            className = ClassName("themesChip")
                            label = ReactNode(chipValue)
                            color = ChipColor.success
                            onClick = {
                                selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                    if (key == "DatasetSeries") {
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
                        if(!dSeriesInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0)?.publisher}"
                                }
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
                        if(!dSeriesInfo.elementAt(0)?.license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0)?.license}"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(dSeriesInfo.elementAt(0)?.title!!.size > 1) {
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
                dSeriesInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {

                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "DatasetSeries") {
                                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                if (innerKey == "Títulos" && !filterVal.contains(it)) filterVal.plus(it)
                                                else if (filterVal.contains(it)) filterVal.filter { miVal -> miVal != it }
                                                else filterVal
                                            }.toMutableMap()
                                        } else {
                                            catalogMap
                                        }
                                    }.toMutableMap()
                                    ListItemAvatar {
                                        Title {
                                            className = ClassName("titleIcon")
                                        }
                                    }
                                    ListItemText {
                                        it
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }


        if(dSeriesInfo.elementAt(0)?.description!!.isNotEmpty()){
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
                    dSeriesInfo.elementAt(0)?.description?.map {

                        ListItem {

                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {
                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "DatasetSeries") {
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
                                +it
                            }
                        }
                    }
                }
            }
        }

        if(!dSeriesInfo.elementAt(0)?.servedDatasetID.isNullOrEmpty()) {
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
                    dSeriesInfo.elementAt(0)?.servedDatasetID?.mapIndexed { i, it ->

                        val valueToShow = if (!dSeriesInfo.elementAt(0)?.servedDatasetIdentifiers?.elementAt(i).isNullOrEmpty()){
                                    dSeriesInfo.elementAt(0)?.servedDatasetIdentifiers?.elementAt(i)?.elementAt(0)
                                }else{
                                    dSeriesInfo.elementAt(0)?.servedDatasetTitles?.elementAt(i)?.elementAt(0)
                                }

                        if (valueToShow != null){
                            ListItem {
                                className = ClassName("distributionsList")
                                secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "DatasetSeries") {
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
                                }

                                ListItemAvatar {
                                    RssFeed {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        valueToShow
                                    }
                                }
                            }
                        }

                    }
                }

            }
        }
        if(!dSeriesInfo.elementAt(0)?.seriesMembersID.isNullOrEmpty()) {
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
                    dSeriesInfo.elementAt(0)?.seriesMembersID?.mapIndexed { i, it ->

                        val valueToShow = if (!dSeriesInfo.elementAt(0)?.seriesMembersIdentifiers?.elementAt(i).isNullOrEmpty()){
                                    dSeriesInfo.elementAt(0)?.seriesMembersIdentifiers?.elementAt(i)?.elementAt(0)
                                }else{
                                    dSeriesInfo.elementAt(0)?.seriesMembersTitles?.elementAt(i)?.elementAt(0)
                                }

                        if (valueToShow != null){
                            ListItem {
                                className = ClassName("distributionsList")
                                secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "DatasetSeries") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "Dataset Members" && !filterVal.contains(valueToShow)) filterVal.plus(
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
                                }

                                ListItemAvatar {
                                    RssFeed {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        valueToShow
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

        if(!dSeriesInfo.elementAt(0)?.inCatalogID.isNullOrEmpty()) {

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
            }
            List {
                dSeriesInfo.elementAt(0)?.inCatalogTitle?.mapIndexed{ index, it ->
                   /* ListItemButton{
                        className = ClassName("tableCell2")
                        id = dSeriesInfo.elementAt(0)?.inCatalogID?.elementAt(index)
                        +"${it?.elementAt(0)}"
                    }*/
                    var valueToShow = it?.elementAt(0)
                    if(valueToShow != null) {
                        ListItem {
                            id = dSeriesInfo.elementAt(0)?.inCatalogID?.elementAt(index)
                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "DatasetSeries") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == "Catalogos" && !filterVal.contains(valueToShow)) filterVal.plus(
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
                            }

                            ListItemAvatar {
                                RssFeed {
                                    color = SvgIconColor.primary
                                }
                            }
                            ListItemText {
                                Link {
                                    valueToShow
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
                        if(!dSeriesInfo.elementAt(0)?.issued.isNullOrEmpty() && dSeriesInfo.elementAt(0)?.issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0)?.issued}"
                                }
                            }
                        }
                        if(!dSeriesInfo.elementAt(0)?.modified.isNullOrEmpty() && dSeriesInfo.elementAt(0)?.modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0)?.modified}"
                                }
                            }
                        }


                        if(!dSeriesInfo.elementAt(0)?.isPTOID.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = dSeriesInfo.elementAt(0)?.isPTOID
                                    Link{
                                        dSeriesInfo.elementAt(0)?.isPTOTitle
                                    }
                                }

                            }
                        }
                        if (dSeriesInfo.elementAt(0)?.language!!.isNotEmpty()) {
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
                                        dSeriesInfo.elementAt(0)?.language?.map {
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
}




