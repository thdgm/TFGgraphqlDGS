package components.commmon.pages.dataservice.infoPage


import com.schema.DatasetsServedByServiceQuery
import com.schema.IsServedByFromCatalogQuery
import com.schema.ResourcesFromCatalogQuery
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.catalog.infoPage.catalogResourcesInfo
import components.commmon.pages.dataservice.infoPage.paginationResourcesServices.paginationResourcesService
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.selectResourcesType
import components.commmon.selectFilter.selectedCatalog.selectFilterCatalog
import components.commmon.selectFilter.selectedDataservice.selectFilterDServ
import components.commmon.selectFilter.selectedDataservice.selectSearchByDServ
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
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.DataServiceInfo
import models.IsServedInfo
import models.RecordsInfo
import models.ResourceInfo
import mui.icons.material.Description
import mui.icons.material.Folder
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
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
import mui.material.Tooltip
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
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

suspend fun getServicesResources(id_service: String?, page: Int, type: String): Collection<ResourceInfo> {

    var resourceInfo: List<DatasetsServedByServiceQuery.ServesDataset>? = null
    if (id_service != null){
        resourceInfo =  apolloClient.query(DatasetsServedByServiceQuery(id= id_service!!, page = page, type=type)).execute().data?.dataService?.servesDataset
    }
    console.log("NEW RESOURCESSS:: "+resourceInfo)
    return resourceInfo?.map{ ResourceInfo(it.identifier, it.id, it.__typename) } ?: emptyList()

}

external interface DataServiceInfoElementsProps : Props {
    var listTestDServInfo: MutableList<DataServiceInfo>
}

val DataServiceInfoElements = FC<DataServiceInfoElementsProps> { props->

    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var dServInfo by useState(props.listTestDServInfo)
    var isLoading by useState(true)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    val navigate = useNavigate()
    var filterResourcesByType by useState("All")
    var newResources by useState(mutableListOf<ResourceInfo>())
    var newServedBy by useState(mutableListOf<IsServedInfo>())

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/dataservices")
    }

    val handleChangePageResources: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->

        coroutineScope.launch {

            val newRes = getServicesResources(dServInfo.first().id, number.toInt(), filterResourcesByType)
            newResources = newResources.filter { it == null } as MutableList<ResourceInfo>
            newRes.map {
                newResources.add(it)
            }
            dServInfo.elementAt(0).resources = newResources
            console.log("NEW ASISGNEDDD BY PAGEEE::: " + dServInfo.elementAt(0).resources)

        }
    }

    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = { event, _ ->

        coroutineScope.launch {

            val newRes = getServicesResources(dServInfo.first().id, 0, event.target.value)
            newResources = newResources.filter{it == null} as MutableList<ResourceInfo>
            newRes.map{
                newResources.add(it)
            }
            filterResourcesByType = event.target.value
            dServInfo.elementAt(0).resources = newResources

            console.log("NEW ASISGNEDDD::: "+ dServInfo.elementAt(0).resources)
        }
    }
    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["DataServices"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    if (dServInfo.isNullOrEmpty()){

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
                    //href = "/dataservices"
                    onClick = handleOnClick
                    +"/DataServices"
                }

                Typography {
                    if (!dServInfo.elementAt(0).title.isNullOrEmpty()) {
                        +"${dServInfo.elementAt(0).title?.elementAt(0)}"
                    }else{
                        +"${dServInfo.first().id}"
                    }
                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectSearchByDServ{infoServices = dServInfo}
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
                            if (key == "DataServices") {
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
                selectedFilters["DataServices"]?.map { valuesList ->
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
                                                if (key == "DataServices") {
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
            if (dServInfo.elementAt(0).title!!.isNotEmpty()) {
                +"${dServInfo.elementAt(0).title?.elementAt(0)}"
            }else{
                +"${dServInfo.first().id}"
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
                        if(!dServInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dServInfo.elementAt(0)?.publisher}"
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre el publicador"
                                }
                            }
                        }
                        if(!dServInfo.elementAt(0)?.notation.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Nivel de administración"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dServInfo.elementAt(0)?.notation}"
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre el nivel de administración"
                                }
                            }
                        }
                        if(!dServInfo.elementAt(0)?.license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dServInfo.elementAt(0)?.license}"
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre la licencia"
                                }
                            }
                        }
                        if (!dServInfo.elementAt(0).issued.isNullOrEmpty() && dServInfo.elementAt(0).issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dServInfo.elementAt(0).issued}"
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre la fecha de creación"
                                }
                            }
                        }
                        if (!dServInfo.elementAt(0).modified.isNullOrEmpty() && dServInfo.elementAt(0).modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${dServInfo.elementAt(0).modified}"
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre la fecha de última modificación"
                                }
                            }
                        }

                        if (dServInfo.elementAt(0).isPTO != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = dServInfo.elementAt(0).isPTO?.recordId
                                    Link {
                                        +"${dServInfo.elementAt(0).isPTO?.recordId}"
                                    }
                                }
                            }
                        }else{
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"No hay información sobre el catalog record"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(dServInfo.elementAt(0)?.title!!.size > 1) {
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
                dServInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {
                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "DataServices") {
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


        if(dServInfo.elementAt(0)?.description!!.isNotEmpty()){
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
                    dServInfo.elementAt(0)?.description?.map {
                        ListItem {

                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {
                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "DataServices") {
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

       // if(dServInfo.elementAt(0)?.datasets!!.isNotEmpty()) {
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
                            +"Datasets servidos"
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
                            label = when(filterResourcesByType){
                                "All" -> ReactNode("${dServInfo.elementAt(0).numberOfResources}")
                                "dataset" ->ReactNode("${dServInfo.elementAt(0).numberOfDatasets}")
                                "catalog" -> ReactNode("${dServInfo.elementAt(0).numberOfCatalogs}")
                                "dataset_series" -> ReactNode("${dServInfo.elementAt(0).numberOfDatasetSeries}")
                                else -> ReactNode("0")
                            }
                            variant = ChipVariant.outlined
                            color = ChipColor.primary
                        }
                    }
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        selectResourcesType{
                            this.filterResourcesByType = handleChange
                        }
                    }
                    Grid {
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        paginationResourcesService {
                            this.filterResourcesByType = handleChangePageResources
                            this.numberOfPages = dServInfo.elementAt(0).numberOfResources
                            this.filterType = filterResourcesByType
                            this.serviceInfo = dServInfo
                            //catalogInfo.elementAt(0).numberOfResources
                        }
                    }
                }
                serviceResourcesInfo {
                    listResourcesInfo = dServInfo.elementAt(0).resources
                }
            }

               /* List {
                    dServInfo.elementAt(0).datasets?.map{

                        var valueToShow = if (it.datasetIdentifier.isNullOrEmpty()) {
                            if (!it.datasetTitles.isNullOrEmpty()) {
                                it.datasetTitles.elementAt(0)
                            } else {
                                "Sin título o identificador"
                            }
                        } else it.datasetIdentifier.elementAt(0)

                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "DataServices") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == "Datasets" && !filterVal.contains(valueToShow)) filterVal.plus(
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
                                Tooltip {
                                    title = ReactNode(it.datasetType)

                                    if (it.datasetType == "dataset") {
                                        TextSnippet {
                                            color = SvgIconColor.primary
                                        }
                                    } else if (it.datasetType == "catalog") {
                                        Folder {
                                            color = SvgIconColor.primary
                                        }
                                    } else if (it.datasetType == "datasetSeries") {
                                        Source {
                                            color = SvgIconColor.primary
                                        }
                                    }
                                }
                            }
                            ListItemText {
                                Link {
                                    +valueToShow
                                }
                            }
                        }

                    }
                }

            }*/
        //}

        //if(!dServInfo.elementAt(0)?.inCatalogID.isNullOrEmpty()) {

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
                dServInfo.elementAt(0).inCatalog?.mapIndexed { index, it ->
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
}




