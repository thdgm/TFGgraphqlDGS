package components.commmon.pages.catalog.infoPage

import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pages.dataset.infoPage.addToFiltersButton
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
import models.CatalogInfo
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
import mui.material.Tooltip
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
import react.useRequiredContext


external interface PruebaElementsProps : Props {
    var listTestCatalogInfo: MutableList<CatalogInfo>
}

val PruebaInfo = FC<PruebaElementsProps> { propsPrueba->


    val navigate = useNavigate()

    var selectedFilters by useRequiredContext(FilterListContextAll)
    //var selectedFilters by useState(selectedAllFilters["Catalogs"])
    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        //console.log("ID: "+event.currentTarget.id)
        //navigate("/info/${event.currentTarget.id}?id=${event.currentTarget.id}")
        navigate("/catalogs")

    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean{

        selectedFilters["Catalogs"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }


    div {
        className = ClassName("titleSelect")

        Breadcrumbs {
            sx {
                marginLeft = 10.pct

            }
            ariaLabel = "breadcrumb"

            Link {
                sx {
                    cursor = Cursor.pointer
                }
                underline = LinkUnderline.hover
                color = "inherit"
                //href = "/"
                onClick = handleOnClick
                +"/Catalogs"
            }

            Typography {
                +"CATALOG TITLE"
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
                onClick ={
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                filterVal.filter { false }
                            }.toMutableMap<String, Collection<String>>()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()

                }
                   // { selectedFilters = selectedFilters?.keys?.associateWith { emptyList<String>() }?.toMutableMap() }
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
            //console.log(selectedFilters?.
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
                                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                        if (key == "Catalogs") {
                                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                if (innerKey == valuesList.key) filterVal.filter { it != value }
                                                else filterVal
                                            }.toMutableMap<String, Collection<String>>()
                                        } else {
                                            catalogMap
                                        }
                                    }.toMutableMap()
                                    /*selectedFilters = selectedFilters!!.toMutableMap().mapValues { (key, filterVal) ->
                                        if (key == valuesList.key) filterVal.filter { it != value } else filterVal //value.plus()
                                    }.toMutableMap()*/
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
        +"CATALOG TITLE"

    }
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

            Chip {
                className = ClassName("themesChip")
                label = ReactNode("THEME1")
                color = ChipColor.success
                onClick = {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Categoría" && !filterVal.contains("THEME1")) filterVal.plus("THEME1")
                                else if (filterVal.contains( "THEME1")) filterVal.filter { miVal -> miVal != "THEME1" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                clickable
            }
            Chip {
                className = ClassName("themesChip")
                label = ReactNode("THEME2")
                color = ChipColor.success
                onClick = {console.log("hola")}
                clickable
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

                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Publicador"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"PUBLICADOR"
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

                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Licencia"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"LICENSE"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Otros títulos"
        }

        List {
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Título" && !filterVal.contains("TITULO 2")) filterVal.plus("TITULO 2")
                                else if (filterVal.contains( "TITULO 2")) filterVal.filter { miVal -> miVal != "TITULO 2" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()


                    /*selectedFilters= selectedFilters!!.toMutableMap().mapValues { (key, filterVal) ->
                        if (key == "Título" && !filterVal.contains("TITULO 2")) filterVal.plus("TITULO 2") else if (filterVal.contains(
                                "TITULO 2"
                            )
                        ) filterVal.filter { miVal -> miVal != "TITULO 2" } else filterVal
                    }.toMutableMap()*/
                    }
                }

                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    +"TITULO 2"
                }

            }
            ListItem {
                id = "textTitle"
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Título" && !filterVal.contains("TITULO 3")) filterVal.plus("TITULO 3")
                                else if (filterVal.contains( "TITULO 3")) filterVal.filter { miVal -> miVal != "TITULO 3" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }
                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    +"TITULO 3"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Descripción"
        }
        List {
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Descripciones" && !filterVal.contains("DESCRIPCION 1")) filterVal.plus("DESCRIPCION 1")
                                else if (filterVal.contains("DESCRIPCION 1")) filterVal.filter { miVal -> miVal != "DESCRIPCION 1" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()

                }
                }

                ListItemAvatar{
                    Description{
                        color= SvgIconColor.primary
                    }
                }
                ListItemText {
                    +"DESCRIPCION 1"
                }
            }
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Descripciones" && !filterVal.contains("DESCRIPCION 2")) filterVal.plus("DESCRIPCION 2")
                                else if (filterVal.contains("DESCRIPCION 2")) filterVal.filter { miVal -> miVal != "DESCRIPCION 2" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Description{
                       color= SvgIconColor.primary
                    }
                }
                ListItemText {
                    +"DESCRIPCION 2"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Resources"
        }
        List {

            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Resources" && !filterVal.contains("RESOURCE1 DATASET")) filterVal.plus("RESOURCE1 DATASET")
                                else if (filterVal.contains("RESOURCE1 DATASET")) filterVal.filter { miVal -> miVal != "RESOURCE1 DATASET" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Tooltip {
                        title = ReactNode("Dataset")
                        //TODO(DISTINGUIR SI ES RESOURCE; DATASET; DATASERVICE)
                        TextSnippet {
                            color = SvgIconColor.primary
                        }
                    }
                }
                ListItemText {
                    Link {
                        +"RESOURCE1 DATASET"
                    }
                }
            }
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Resources" && !filterVal.contains("RESOURCE2 CATALOG")) filterVal.plus("RESOURCE2 CATALOG")
                                else if (filterVal.contains("RESOURCE2 CATALOG")) filterVal.filter { miVal -> miVal != "RESOURCE2 CATALOG" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Tooltip {
                        title = ReactNode("Catalog")
                        //TODO(DISTINGUIR SI ES RESOURCE; DATASET; DATASERVICE)
                        Folder{
                            color= SvgIconColor.primary
                        }
                    }

                }
                ListItemText {
                    Link {
                        +"RESOURCE2 CATALOG"
                    }
                }
            }
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Resources" && !filterVal.contains("RESOURCE3 DATASERVICE")) filterVal.plus("RESOURCE3 DATASERVICE")
                                else if (filterVal.contains("RESOURCE3 DATASERVICE")) filterVal.filter { miVal -> miVal != "RESOURCE3 DATASERVICE" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Tooltip {
                        title = ReactNode("Dataservice")
                        //TODO(DISTINGUIR SI ES RESOURCE; DATASET; DATASERVICE)
                        RssFeed {
                            color = SvgIconColor.primary
                        }
                    }
                }
                ListItemText {
                    Link {
                        +"RESOURCE3 DATASERVICE"
                    }
                }
            }
            ListItem {
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Resources" && !filterVal.contains("RESOURCE4 DATSETSERIES")) filterVal.plus("RESOURCE4 DATSETSERIES")
                                else if (filterVal.contains("RESOURCE4 DATSETSERIES")) filterVal.filter { miVal -> miVal != "RESOURCE4 DATSETSERIES" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Tooltip {
                        title = ReactNode("DatasetSeries")
                        //TODO(DISTINGUIR SI ES RESOURCE; DATASET; DATASERVICE)
                        Source {
                            color = SvgIconColor.primary
                        }
                    }
                }
                ListItemText {
                    Link {
                        +"RESOURCE4 DATSETSERIES"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Records"
        }
        List {
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "CatalogRecords" && !filterVal.contains("RECORDS1")) filterVal.plus("RECORDS1")
                                else if (filterVal.contains("RECORDS1")) filterVal.filter { miVal -> miVal != "RECORDS1" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    Link {
                        +"RECORDS1"
                    }
                }
            }
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "CatalogRecords" && !filterVal.contains("RECORDS2")) filterVal.plus("RECORDS2")
                                else if (filterVal.contains("RECORDS2")) filterVal.filter { miVal -> miVal != "RECORDS2" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    Link {
                        +"RECORDS2"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Servido por: "
        }
        List {
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "DataServices" && !filterVal.contains("DATASERVICE1")) filterVal.plus("DATASERVICE1")
                                else if (filterVal.contains("DATASERVICE1")) filterVal.filter { miVal -> miVal != "DATASERVICE1" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    Link {
                        +"DATASERVICE1"
                    }
                }
            }
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "DataServices" && !filterVal.contains("DATASERVICE2")) filterVal.plus("DATASERVICE2")
                                else if (filterVal.contains("DATASERVICE2")) filterVal.filter { miVal -> miVal != "DATASERVICE2" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Title{
                        className = ClassName("titleIcon")
                    }
                }
                ListItemText {
                    Link {
                        +"DATASERVICE2"
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
        Typography {
            className = ClassName("subtitle_info")
            +"Catalogos contenedores"
        }
        List {
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Catalogs" && !filterVal.contains("CATALOG1")) filterVal.plus("CATALOG1")
                                else if (filterVal.contains("CATALOG1")) filterVal.filter { miVal -> miVal != "CATALOG1" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()
                }
                }

                ListItemAvatar{
                    Folder{
                        color= SvgIconColor.primary
                    }
                }
                ListItemText {
                    Link {
                        +"CATALOG1"
                    }
                }
            }
            ListItem {
                className = ClassName("distributionsList")
                secondaryAction =  addToFiltersButton.create{addToFilters= {
                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Catalogs") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Catalogs" && !filterVal.contains("CATALOG2")) filterVal.plus("CATALOG2")
                                else if (filterVal.contains("CATALOG2")) filterVal.filter { miVal -> miVal != "CATALOG2" }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap()

                }
                }

                ListItemAvatar{
                    Folder{
                        color= SvgIconColor.primary
                    }
                }
                ListItemText {
                    Link {
                        +"CATALOG2"
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
                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Fecha de creación"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"fecha modificacion"
                        }
                    }

                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Fecha última modificación"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            +"fecha creacion"
                        }
                    }

                    TableRow {
                        TableCell {
                            className = ClassName("tableCell1")
                            +"Catalog Record"
                        }
                        TableCell {
                            className = ClassName("tableCell2")
                            id = "CR ID"
                            Link {
                                +"CR TITLE"
                            }
                        }

                    }


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

                                Chip {
                                    className = ClassName("languagesChip")
                                    label = ReactNode("ES")
                                }
                                Chip {
                                    className = ClassName("languagesChip")
                                    label = ReactNode("EU")
                                }


                            }
                        }
                    }

                }
            }
        }

    }
}






