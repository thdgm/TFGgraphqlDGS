package components.commmon.pages.catalog.infoPage


import com.schema.IsServedByFromCatalogQuery
import com.schema.RecordsFromCatalogQuery
import com.schema.ResourcesFromCatalogQuery
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.selectResourcesType
import components.commmon.selectFilter.selectedCatalog.selectFilterCatalog
import components.commmon.selectFilter.selectedCatalog.selectSearchByCatalog
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
import models.CatalogInfo
import models.IsServedInfo
import models.RecordsInfo
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
import org.w3c.dom.HTMLInputElement
import paginationIsServedByCatalog
import paginationRecordsCatalog
import paginationResourcesCatalog
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.aria.ariaLabel
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState

suspend fun getCatalogResources(id_catalog: String?, page: Int, type: String): Collection<ResourceInfo> {

    var resourceInfo: List<ResourcesFromCatalogQuery.Resource>? = null
    if (id_catalog != null){
        resourceInfo =  apolloClient.query(ResourcesFromCatalogQuery(id= id_catalog!!, page = page, type=type)).execute().data?.catalog?.resources
    }
    console.log("NEW RESOURCESSS:: "+resourceInfo)
    return resourceInfo?.map{ResourceInfo(it.identifier, it.id, it.__typename)} ?: emptyList()
}

suspend fun getCatalogRecords(id_catalog: String?, page: Int): Collection<RecordsInfo> {

    var recordsInfo: List<RecordsFromCatalogQuery.Record>? = null
    if (id_catalog != null){
        recordsInfo =  apolloClient.query(RecordsFromCatalogQuery(id= id_catalog!!, page = page)).execute().data?.catalog?.records
    }
    console.log("NEW RECORDSSS:: "+recordsInfo)
    return recordsInfo?.map{RecordsInfo(it.id, it.title)} ?: emptyList()
}
suspend fun getCatalogServedBy(id_catalog: String?, page: Int): Collection<IsServedInfo> {

    var servedByInfo: List<IsServedByFromCatalogQuery.IsServedBy>? = null
    console.log("PAGEEE LOOK:::: "+ page)
    if (id_catalog != null){
        servedByInfo =  apolloClient.query(IsServedByFromCatalogQuery(id= id_catalog!!, page = page)).execute().data?.catalog?.isServedBy
    }
    console.log("NEW SERVED BYYY:: "+servedByInfo)
    return servedByInfo?.map{IsServedInfo(it.identifier, it.id)} ?: emptyList()
}

external interface CatalogInfoElementsProps : Props {
    var listTestCatalogInfo: MutableList<CatalogInfo>
}

val CatalogInfoElements = FC<CatalogInfoElementsProps> { props ->
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    val navigate = useNavigate()
    val catalogInfo by useState(props.listTestCatalogInfo)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var filterResourcesByType by useState("All")
    var newResources by useState(mutableListOf<ResourceInfo>())
    var newRecords by useState(mutableListOf<RecordsInfo>())
    var newServedBy by useState(mutableListOf<IsServedInfo>())

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event ->
        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
            if (key == "Catalogs") {
                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                    if (innerKey == "Page") filterVal.filter { false }.plus("1")
                    else filterVal
                }.toMutableMap()
            } else {
                catalogMap
            }
        }.toMutableMap()
        navigate("/catalogs")
    }




    val handleChangePageResources: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->
        console.log("NUMBER: "+ number)
        console.log("EVENT: "+event)
        coroutineScope.launch {

            val newRes = getCatalogResources(catalogInfo.first().id, number.toInt(), filterResourcesByType)
            newResources = newResources.filter { it == null } as MutableList<ResourceInfo>
            newRes.map {
                newResources.add(it)
            }
            catalogInfo.elementAt(0).resources = newResources
            console.log("NEW ASISGNEDDD BY PAGEEE::: " + catalogInfo.elementAt(0).resources)

        }
    }
    val handleChangePageRecords: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->
        coroutineScope.launch {
            val newRes = getCatalogRecords(catalogInfo.first().id, number.toInt())
            newRecords = newRecords.filter { it == null } as MutableList<RecordsInfo>
            newRes.map {
                newRecords.add(it)
            }
            catalogInfo.elementAt(0).records = newRecords
            console.log("NEW ASISGNEDDD BY PAGEEE RECORDDSS::: " + catalogInfo.elementAt(0).records)
        }
    }
    val handleChangePageServedBy: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->
        coroutineScope.launch {
            val newRes = getCatalogServedBy(catalogInfo.first().id, number.toInt())
            newServedBy = newServedBy.filter { it == null } as MutableList<IsServedInfo>
            newRes.map {
                newServedBy.add(it)
            }
            catalogInfo.elementAt(0).isServedBy = newServedBy
            console.log("NEW ASISGNEDDD BY PAGEEE::: " + catalogInfo.elementAt(0).isServedBy)
        }
    }
    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = { event, _ ->

        coroutineScope.launch {

            val newRes = getCatalogResources(catalogInfo.first().id, 0, event.target.value)
            newResources = newResources.filter{it == null} as MutableList<ResourceInfo>
            newRes.map{
                newResources.add(it)
            }
            filterResourcesByType = event.target.value
            catalogInfo.elementAt(0).resources = newResources

            console.log("NEW ASISGNEDDD::: "+ catalogInfo.elementAt(0).resources)
        }
    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean {

        selectedFilters["Catalogs"]?.map {
            if (!it.value.isEmpty()) {
                return false
            }
        }
        return true
    }

    if (catalogInfo.isNullOrEmpty()) {
       // if (isLoading) {
        CircularProgress {
            className = ClassName("circularProgressInfo")
        }
        //}
    } else {
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
                    // href = "/catalogs"
                    onClick = handleOnClick
                    +"/Catalogs"
                }

                Typography {
                    if (!catalogInfo.elementAt(0).title.isNullOrEmpty()) {
                        +"${catalogInfo.elementAt(0).title?.elementAt(0)}"
                    }else{
                        +"${catalogInfo.first().id}"
                    }
                }
            }
            Box {
                sx {
                    marginRight = 10.pct
                    alignItems = AlignItems.center
                }
                selectSearchByCatalog{infoCatalog = catalogInfo}
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
                            if (key == "Catalogs") {
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
                selectedFilters["Catalogs"]?.map { valuesList ->
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
                                                if (key == "Catalogs") {
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
            if (catalogInfo.elementAt(0).title!!.isNotEmpty()) {
                +"${catalogInfo.elementAt(0).title?.elementAt(0)}"
            }else{
                +"${catalogInfo.first().id}"
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
                        if (!catalogInfo.elementAt(0).publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0).publisher}"
                                }
                            }
                        }
                        if (!catalogInfo.elementAt(0).notation.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Nivel de administración"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0)?.notation}"
                                }
                            }
                        }
                        if (!catalogInfo.elementAt(0).license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0).license}"
                                }
                            }
                        }
                        if (!catalogInfo.elementAt(0).issued.isNullOrEmpty() && catalogInfo.elementAt(0).issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0).issued}"
                                }
                            }
                        }
                        if (!catalogInfo.elementAt(0).modified.isNullOrEmpty() && catalogInfo.elementAt(0).modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0).modified}"
                                }
                            }
                        }


                        if (catalogInfo.elementAt(0).isPTO != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = catalogInfo.elementAt(0).isPTO?.recordId
                                    Link {
                                        href = "/catalogrecords/#/${catalogInfo.elementAt(0).isPTO?.recordId}"
                                        +"${catalogInfo.elementAt(0).isPTO?.recordId}"
                                    }

                                }

                            }
                        }
                    }
                }
            }
        }

        if (catalogInfo.elementAt(0).title!!.size > 1) {
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
                catalogInfo.elementAt(0).title?.map {
                    List {
                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "Catalogs") {
                                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                if (innerKey == "Título" && !filterVal.contains(it)) filterVal.plus(it)
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
        if (catalogInfo.elementAt(0).description!!.isNotEmpty()) {
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
                    catalogInfo.elementAt(0).description?.map {

                        ListItem {

                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {
                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "Catalogs") {
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

       // if(!catalogInfo.elementAt(0).resources.isNullOrEmpty()) {
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
                    Grid{
                        sx {
                            display = Display.flex
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        Typography {
                            className = ClassName("subtitle_info")
                            +"Resources"
                        }
                    }
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        Chip {
                            label = when(filterResourcesByType){
                                "All" -> ReactNode("${catalogInfo.elementAt(0).numberOfResources}")
                                "data_service" -> ReactNode("${catalogInfo.elementAt(0).numberOfDataServices}")
                                "dataset" ->ReactNode("${catalogInfo.elementAt(0).numberOfDatasets}")
                                "catalog" -> ReactNode("${catalogInfo.elementAt(0).numberOfCatalogs}")
                                "dataset_series" -> ReactNode("${catalogInfo.elementAt(0).numberOfDatasetSeries}")
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
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        paginationResourcesCatalog{
                            this.filterResourcesByType = handleChangePageResources
                           this.numberOfPages = catalogInfo.elementAt(0).numberOfResources
                            this.filterType = filterResourcesByType
                            this.catalogInfo = catalogInfo
                        //catalogInfo.elementAt(0).numberOfResources
                        }
                    }

                }
                catalogResourcesInfo{
                    listResourcesInfo = catalogInfo.elementAt(0).resources
                }
                /*List {
                    catalogInfo.elementAt(0).resources?.map {
                        ListItem {
                            className = ClassName("distributionsList")

                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "Catalogs") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == "Resources" && !filterVal.contains(it.resourceId)) filterVal.plus(
                                                        it.resourceId
                                                    )
                                                    else if (filterVal.contains(it.resourceId)) filterVal.filter { miVal -> miVal != it.resourceId }
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
                                    title = ReactNode(it.resourceType)

                                    if (it.resourceType == "Dataset") {
                                        TextSnippet {
                                            color = SvgIconColor.primary
                                        }
                                    } else if (it.resourceType == "Catalog") {
                                        Folder {
                                            color = SvgIconColor.primary
                                        }
                                    } else if (it.resourceType == "DatasetSeries") {
                                        Source {
                                            color = SvgIconColor.primary
                                        }
                                    } else {
                                        RssFeed {
                                            color = SvgIconColor.primary
                                        }
                                    }
                                }
                            }
                            ListItemText {
                                Link {
                                    if (it.resourceIdentifier.isNullOrEmpty()) +"${it.resourceId}"
                                    else +"${it.resourceIdentifier.first()}"
                                }
                            }
                            ListItemAvatar {
                                Chip {
                                    className = ClassName("keywordsChip")
                                    label = ReactNode("${it.resourceType}")
                                }

                            }
                        }

                    }
                }*/
            }
       // }
        if (!catalogInfo.elementAt(0).inCatalog.isNullOrEmpty()) {
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
                    catalogInfo.elementAt(0).inCatalog?.mapIndexed { index, it ->
                        if (it.catalogId != null) {
                            ListItem {
                                className = ClassName("distributionsList")
                                secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "Catalogs") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "Catalogs" && !filterVal.contains(
                                                                it.catalogId
                                                            )
                                                        ) filterVal.plus(
                                                            it.catalogId
                                                        )
                                                        else if (filterVal.contains(it.catalogId)) filterVal.filter { miVal ->
                                                            miVal != it.catalogId
                                                        }
                                                        else filterVal
                                                    }.toMutableMap()
                                                } else {
                                                    catalogMap
                                                }
                                            }.toMutableMap()
                                    }
                                }

                                ListItemAvatar {
                                    Folder {
                                        color = SvgIconColor.primary
                                    }
                                }
                                ListItemText {
                                    Link {
                                        href = "/catalogs/#/${it.catalogId}"
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
        if (catalogInfo.elementAt(0).records!!.isNotEmpty()) {
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
                            +"Records"
                        }
                    }
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        Chip {
                            label = ReactNode("${catalogInfo.elementAt(0).numberOfRecords}")
                            variant = ChipVariant.outlined
                            color = ChipColor.primary
                        }
                    }
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 10.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        paginationRecordsCatalog{
                            this.filterResourcesByType = handleChangePageRecords
                            this.numberOfPages = catalogInfo.elementAt(0).numberOfRecords
                            this.filterType = filterResourcesByType
                            this.catalogInfo = catalogInfo
                            //catalogInfo.elementAt(0).numberOfResources
                        }
                    }
                }
                catalogRecordsInfo{
                    listRecordsInfo = catalogInfo.elementAt(0).records
                }
                /*List {
                    catalogInfo.elementAt(0).records?.map {
                        ListItem {
                            className = ClassName("distributionsList")
                            secondaryAction = addToFiltersButton.create {
                                addToFilters = {

                                    selectedFilters =
                                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                            if (key == "Catalogs") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == "CatalogRecords" && !filterVal.contains(it.recordId)) filterVal.plus(
                                                        it.recordId
                                                    )
                                                    else if (filterVal.contains(it.recordId)) filterVal.filter { miVal -> miVal != it.recordId }
                                                    else filterVal
                                                }.toMutableMap()
                                            } else {
                                                catalogMap
                                            }
                                        }.toMutableMap()
                                }
                            }

                            ListItemAvatar {
                                Topic {
                                    color = SvgIconColor.primary
                                }
                            }
                            ListItemText {
                                Link {
                                     +"${it.recordId}"

                                }
                            }
                        }
                    }
                }*/

            }
        }
        //if (!catalogInfo.elementAt(0).isServedBy.isNullOrEmpty()) {
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
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 5.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        Chip {
                            label = ReactNode("${catalogInfo.elementAt(0).numberOfServedBy}")
                            variant = ChipVariant.outlined
                            color = ChipColor.primary
                        }
                    }
                    Grid{
                        sx {
                            display = Display.flex
                            marginLeft = 10.pct
                        }
                        item = true
                        direction = responsive(GridDirection.row)
                        paginationIsServedByCatalog{
                            this.filterResourcesByType = handleChangePageServedBy
                            this.numberOfPages = catalogInfo.elementAt(0).numberOfServedBy
                            this.filterType = filterResourcesByType
                            this.catalogInfo = catalogInfo
                            //catalogInfo.elementAt(0).numberOfResources
                        }
                    }
                }
                catalogIsServedByInfo{
                    listIsServedInfo = catalogInfo.elementAt(0).isServedBy
                }
                /*List {
                    catalogInfo.elementAt(0).isServedBy?.mapIndexed { index, it ->
                        if (it.serviceId != null) {
                            ListItem {
                                className = ClassName("distributionsList")
                                secondaryAction = addToFiltersButton.create {
                                    addToFilters = {

                                        selectedFilters =
                                            selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                if (key == "Catalogs") {
                                                    catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                        if (innerKey == "DataServices" && !filterVal.contains(it.serviceId)) filterVal.plus(
                                                            it.serviceId
                                                        )
                                                        else if (filterVal.contains(it.serviceId)) filterVal.filter { miVal -> miVal != it.serviceId }
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
                                        if (it.serviceIdentifiers.isNullOrEmpty()) +"${it.serviceId}"
                                        else +"${it.serviceIdentifiers?.first()}"
                                    }
                                }
                            }
                        }
                    }
                }*/

            //}
        }

    }
}




