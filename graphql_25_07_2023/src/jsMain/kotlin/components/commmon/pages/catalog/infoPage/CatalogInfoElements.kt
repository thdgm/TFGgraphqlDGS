package components.commmon.pages.catalog.infoPage


import com.schema.DatasetInfoQuery
import com.schema.ResourcesFromCatalogQuery
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.selectFilter.catalogResourcesInfo
import components.commmon.selectFilter.selectResourcesType
import components.commmon.selectFilter.selectedCatalog.selectFilterCatalog
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
import models.CatalogInfo
import models.ResourceInfo
import mui.icons.material.Description
import mui.icons.material.Folder
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
import mui.icons.material.Title
import mui.icons.material.Topic
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
import mui.material.MuiListItem.Companion.secondaryAction
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



external interface CatalogInfoElementsProps : Props {
    var listTestCatalogInfo: MutableList<CatalogInfo>
}

val CatalogInfoElements = FC<CatalogInfoElementsProps> { props ->
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    val navigate = useNavigate()
    val catalogInfo by useState(props.listTestCatalogInfo)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isLoading by useState(true)
    var filterResourcesByType by useState("All")
    var newResources by useState(mutableListOf<ResourceInfo>())
    var numberPages by useState(if (catalogInfo.isNullOrEmpty()) 0 else catalogInfo.elementAt(0).numberOfResources)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event ->
        //console.log("ID: " + event.currentTarget.id)
        navigate("/catalogs")
    }
    useEffect(filterResourcesByType){
        console.log("FILTROOOO POR:::: "+filterResourcesByType)

       /* if (!catalogInfo.isNullOrEmpty()){
            catalogInfo.elementAt(0).resources = newResources
        }*/

    }


    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(2000)
            isLoading = false
            //console.log("TIMEOUTTT")
        }
    }
    val handleChangePage: (event: ChangeEvent<*>, number: Number) -> Unit = { event, number ->
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
        console.log("CAATTTTTTTTT:::::::::: "+catalogInfo)
        console.log("INCATALOGGGGGG:::::: "+catalogInfo.elementAt(0).records)
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
                selectFilterCatalog()
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
                                        //if(catalogInfo.elementAt(0).isPTO?.recordTitle.isNullOrEmpty()){
                                            +"${catalogInfo.elementAt(0).isPTO?.recordId}"
                                       // }else{
                                        //   +"${catalogInfo.elementAt(0).isPTO?.recordTitle}"
                                        //}
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
                                +it
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
                            this.filterResourcesByType = handleChangePage
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
                Typography {
                    className = ClassName("subtitle_info")
                    +"Records"
                }
                List {
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
                }

            }
        }
        if (!catalogInfo.elementAt(0).isServedBy.isNullOrEmpty()) {
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
                    +"Servido por: "
                }
                List {
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
                }

            }
        }

    }
}




