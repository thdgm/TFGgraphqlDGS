package components.commmon.pages.catalog.mainPage

import commonModels.CatalogModel
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.searcher.SearcherCatalogs
import components.commmon.selectFilter.selectedCatalog.selectFilterCatalog
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import mui.material.Box
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.Grid
import mui.material.GridDirection
import mui.material.LinearProgress
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState

external interface ListCatalogProps: Props {
    var searchBy: String
    var catalogsList: Collection<CatalogModel>
   // var updateCatalogsList: suspend (event: ChangeEvent<*>, value: Number) -> Unit
    var numberOfCatalogs: Int
}
val listCatalog = FC<ListCatalogProps> { props ->
    val navigate = useNavigate()
    var searchBy by useState("")
    var catalogsList by useState(props.catalogsList)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/catalogs/${event.currentTarget.id}")
    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean{
        selectedFilters["Catalogs"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }

    useEffect(selectedFilters){
        console.log("CAMBIA EL SELECTED FILTERSSSSS CATALOGS: "+selectedFilters)
        catalogsList = props.catalogsList
    }

    Paper {
        sx {
            width = Sizes.BoxList.Width
            marginRight = Auto.auto
            marginLeft = Auto.auto
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(240, 240, 240, 0.0)
            boxShadow = None.none
            position = Position.relative
        }
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


                    className = ClassName("countDatasets")
                    +"${props.numberOfCatalogs} "

                    ReactHTML.b {
                        className = ClassName("spanDatasets")
                        +"Catalogs encontrados"
                    }

                }
            }
            Grid {
                sx {
                    marginLeft = Auto.auto
                    display = Display.flex
                }
                item = true
                selectFilterCatalog()
            }

        }
        Box {
            SearcherCatalogs {
                this.filterList = catalogsList
                this.handleOnChange = { event ->
                    searchBy =
                        (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/
                }
            }
        }
        if (!checkIfSelectedFiltersIsEmpty()) {

            Stack {
                sx {
                    display = Display.block
                }
                className = ClassName("stackSelectedFilters")
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)

                selectedFilters["Catalogs"]?.map { valuesList ->
                    if (valuesList.value.isNotEmpty() && valuesList.key != "Page") {
                        ReactHTML.span {
                            className = ClassName("chipsSelectedFilters")
                            +"${valuesList.key}: "
                            valuesList.value.map { value ->

                                Chip {
                                    id = value
                                    label = ReactNode(value)
                                    variant = ChipVariant.outlined
                                    color = ChipColor.primary
                                    disabled = isDisabled
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
        //console.log(catalogsList)
        if (catalogsList.isEmpty()) { //Esto durante 4 segundos, luego muestra no se ha encontardo nada
            //if (isLoading) {
            isDisabled = true
            LinearProgress {
                sx {
                    width = 100.pct
                    marginTop = 3.pct
                }
            }
            /*} else {
                +"No se ha encontrado ningún elemento"
            }*/

        }
        else {
            isDisabled = false
            mui.material.List {
                catalogsList.filter { if (searchBy.isNotEmpty()) it.title!!.contains(searchBy) || it.id!!.contains(searchBy) || it.description!!.contains(searchBy) else true }
                    .map {
                        ListItemButton {
                            onClick = handleOnClick

                            id = it.id
                            CardListCatalog { this.catalogInfo = it }
                        }
                    }
            }
            Pagination{
                //this.changePage = {e, v -> props.updateCatalogsList(e,v)}
                numberOfPages = props.numberOfCatalogs
                resType = "Catalogs"
            }
            //Pagination()
        }



    }

    /* useEffect(listOf(isLoading)) {
         MainScope().launch {
             delay(3000)
             isLoading = false
             //console.log("TIMEOUTTT")
         }
     }


     /*
     var cRList by useState(props.filterList)
     var isLoading by useState(true)
 */



         if (!checkIfSelectedFiltersIsEmpty()) {

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
         //console.log(catalogsList)
         if (catalogsList.isEmpty()) { //Esto durante 4 segundos, luego muestra no se ha encontardo nada
             if (isLoading) {
                 LinearProgress {
                     sx {
                         width = 100.pct
                         marginTop = 3.pct
                     }
                 }
             } else {
                 +"No se ha encontrado ningún elemento"
                 mui.material.List {

                     ListItemButton {
                         onClick = handleOnClick

                         id = "id1"
                         CardListCatalog()
                     }
                     ListItemButton {
                         onClick = handleOnClick

                         id = "id2"
                         CardListCatalog()
                     }
                     ListItemButton {
                         onClick = handleOnClick

                         id = "id3"
                         CardListCatalog()
                     }

                 }
             }

         }
         else {
             mui.material.List {
                 catalogsList.filter { if (props.searchBy.isNotEmpty()) it.title!!.contains(props.searchBy) else true }
                     .map {
                         ListItemButton {
                             onClick = handleOnClick

                             id = it.id
                             CardListCatalog { this.datasetInfo = it }
                         }
                     }
             }
             Pagination()
         }

     }*/
}