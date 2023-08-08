package components.commmon.pages.datasetSeries.infoPage


import com.schema.DatasetsServedByServiceQuery
import com.schema.ResourcesMembersFromSeriesQuery
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.pages.datasetSeries.infoPage.paginationsSeriesInfo.paginationDatasetsSeries
import components.commmon.pages.datasetSeries.infoPage.paginationsSeriesInfo.paginationIsServedBySeries
import components.commmon.selectFilter.selectedDatasetSeries.selectSearchByDSeries
import csstype.AlignItems
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DatasetSeriesInfo
import models.ResourceInfo
import mui.icons.material.Description
import mui.icons.material.Folder
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
import mui.material.Grid
import mui.material.GridDirection
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItem
import mui.material.ListItemAvatar
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
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState

suspend fun getSeriesMembers(id_service: String?, page: Int): Collection<ResourceInfo> {

    var resourceInfo: List<ResourcesMembersFromSeriesQuery.SeriesMember>? = null
    if (id_service != null){
        resourceInfo =  apolloClient.query(ResourcesMembersFromSeriesQuery(id= id_service!!, page = page)).execute().data?.datasetSeries?.seriesMembers
    }
   // console.log("NEW RESOURCESSS:: "+resourceInfo)
    return resourceInfo?.map{ ResourceInfo(it.identifier, it.id, it.__typename) } ?: emptyList()

}
external interface DatasetSeriesInfoElementsProps : Props {
    var listTestDatasetSeriesInfo: MutableList<DatasetSeriesInfo>
}

val DatasetSeriesInfoElements = FC<DatasetSeriesInfoElementsProps> { props->

    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var dSeriesInfo by useState(props.listTestDatasetSeriesInfo)
    var isLoading by useState(true)
    val navigate = useNavigate()
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var newDatasets by useState(mutableListOf<ResourceInfo>())

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "DatasetSeries") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "Page") filterVal.filter { false }.plus("1")
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()
        navigate("/datasetseries")
    }

    val handleChangePageDatasets: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->

        coroutineScope.launch {

            val newRes = getSeriesMembers(dSeriesInfo.first().id, number.toInt())
            newDatasets = newDatasets.filter { it == null } as MutableList<ResourceInfo>
            newRes.map {
                newDatasets.add(it)
            }
            dSeriesInfo.elementAt(0).resources = newDatasets
            //console.log("NEW ASISGNEDDD BY PAGEEE::: " + dSeriesInfo.elementAt(0).resources)

        }
    }

    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(2000)
            isLoading = false
            //console.log("TIMEOUTTT")
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

        CircularProgress {
            className = ClassName("circularProgressInfo")
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
                    if (!dSeriesInfo.elementAt(0).title.isNullOrEmpty()) {
                        +"${dSeriesInfo.elementAt(0).title?.elementAt(0)}"
                    }else{
                        +"${dSeriesInfo.first().id}"
                    }
                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectSearchByDSeries{infoSeries = dSeriesInfo}
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
            if (dSeriesInfo.elementAt(0).title!!.isNotEmpty()) {
                +"${dSeriesInfo.elementAt(0).title?.elementAt(0)}"
            }else{
                +"${dSeriesInfo.first().id}"
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
                        if (!dSeriesInfo.elementAt(0)?.publisher.isNullOrBlank()) {
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
                        if (!dSeriesInfo.elementAt(0)?.notation.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Nivel de administración"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0)?.notation}"
                                }
                            }
                        }
                        if (!dSeriesInfo.elementAt(0)?.license.isNullOrBlank()) {
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

                        if (!dSeriesInfo.elementAt(0).issued.isNullOrEmpty() && dSeriesInfo.elementAt(0).issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0).issued}"
                                }
                            }
                        }
                        if (!dSeriesInfo.elementAt(0).modified.isNullOrEmpty() && dSeriesInfo.elementAt(0).modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dSeriesInfo.elementAt(0).modified}"
                                }
                            }
                        }


                        if (dSeriesInfo.elementAt(0).isPTO != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = dSeriesInfo.elementAt(0).isPTO?.recordId
                                    Link {
                                        +"${dSeriesInfo.elementAt(0).isPTO?.recordId}"
                                    }
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
                    +"Títulos"
                }
                dSeriesInfo.elementAt(0)?.title?.map {
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
                                +"$it"
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
                    Typography {
                        className = ClassName("subtitle_info")
                        +"Datasets"
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
                        label = ReactNode("${dSeriesInfo.elementAt(0).numberOfDatasets}")
                        variant = ChipVariant.outlined
                        color = ChipColor.primary
                    }
                }

                Grid {
                    sx {
                        display = Display.flex
                        marginLeft = 5.pct
                    }
                    item = true
                    direction = responsive(GridDirection.row)
                    paginationDatasetsSeries {
                        this.pageDatasets = handleChangePageDatasets
                        this.numberOfPages = dSeriesInfo.elementAt(0).numberOfDatasets

                        //catalogInfo.elementAt(0).numberOfResources
                    }
                }

            }
            seriesDatasetsInfo {
                listDatasetsInfo = dSeriesInfo.elementAt(0).resources
            }
        }

        if (!dSeriesInfo.elementAt(0).inCatalog.isNullOrEmpty()) {
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
                    dSeriesInfo.elementAt(0).inCatalog?.mapIndexed { index, it ->
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
                    Typography {
                        className = ClassName("subtitle_info")
                        +"Servido por: "
                    }
                }
                /*Grid {
                    sx {
                        display = Display.flex
                        marginLeft = 5.pct
                    }
                    item = true
                    direction = responsive(GridDirection.row)
                    Chip {
                        label = ReactNode("${dSeriesInfo.elementAt(0).numberOfServedBy}")
                        variant = ChipVariant.outlined
                        color = ChipColor.primary
                    }
                }
                Grid {
                    sx {
                        display = Display.flex
                        marginLeft = 10.pct
                    }
                    item = true
                    direction = responsive(GridDirection.row)
                    paginationIsServedBySeries {
                        this.pageServedBy = handleChangePageServedBy
                        this.numberOfPages = dSeriesInfo.elementAt(0).numberOfServedBy

                        //catalogInfo.elementAt(0).numberOfResources
                    }
                }*/
            }
            seriesIsServedByInfo {
                listIsServedInfo = dSeriesInfo.elementAt(0).isServedBy
            }
        }
    }
}




