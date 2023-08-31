package components.commmon.pages.dataset.mainPage

import commonModels.DatasetModel
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.searcher.Searcher
import components.commmon.selectFilter.selectedDataset.selectFilter
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import mui.material.Box
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.Grid
import mui.material.GridDirection
import mui.material.LinearProgress
import mui.material.List
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
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.b

import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState


external interface ListProps:Props{

    var searchBy: String
    var filterList: Collection<DatasetModel>
    var updateDatasetsList: suspend (event: ChangeEvent<*>, value: Number) -> Unit
    var numberOfDatasets: Int
    var flag: Int

}

val list = FC<ListProps> { props ->
    val navigate = useNavigate()
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var datasetList by useState(props.filterList)
    var searchBy by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)
    var endLoading by useState(false)
    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/datasets/${event.currentTarget.id}")
    }


    fun checkIfSelectedFiltersIsEmpty(): Boolean{

        selectedFilters["Datasets"]?.map{
            if (!it.value.isEmpty()){
               return false
            }
        }
        return true
    }

    useEffect(selectedFilters){
        //console.log("CAMBIA EL SELECTED FILTERSSSSS")
        datasetList = props.filterList
    }
    useEffect(selectedFilters){
        //console.log("CAMBIA EL SELECTED FILTERSSSSS CATALOGS: "+selectedFilters)
        endLoading = false
        coroutineScope.launch{
            delay(8000)
            endLoading = true
        }
    }




    Paper {
        sx{
            width = Sizes.BoxList.Width
            marginRight= Auto.auto
            marginLeft= Auto.auto
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(240,240,240,0.0)
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

                sx{
                    display= Display.flex
                }
                item = true
                direction = responsive(GridDirection.row)
                Typography{


                    className = ClassName("countDatasets")
                        + "${props.numberOfDatasets} "

                        b{
                            className = ClassName("spanDatasets")
                            +"Datasets encontrados"
                        }

                }
            }
            Grid {
                sx {
                    marginLeft = Auto.auto
                    display = Display.flex
                }
                item = true
                selectFilter()
            }


        }
        Box {
            Searcher {
                this.filterList = datasetList
                this.handleOnChange = { event ->
                    searchBy =
                        (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/
                }

            }
        }
        if (!checkIfSelectedFiltersIsEmpty()){

            Stack {
                sx {
                    display = Display.block
                }
                className = ClassName("stackSelectedFilters")
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)
                selectedFilters["Datasets"]?.map { valuesList ->
                    if (valuesList.value.isNotEmpty() && valuesList.key != "Page") {
                        ReactHTML.span {
                            className = ClassName("chipsSelectedFilters")
                            +"${valuesList.key}: "
                            valuesList.value.map { value ->
                                if (valuesList.key == "OrderBy" || valuesList.key == "SortBy"){
                                    Chip {
                                        id = value
                                        label = ReactNode(value)
                                        variant = ChipVariant.outlined
                                        color = ChipColor.success
                                    }
                                }else {
                                    Chip {
                                        id = value
                                        label = ReactNode(value)
                                        variant = ChipVariant.outlined
                                        color = ChipColor.primary
                                        disabled = isDisabled
                                        onDelete = { _ ->
                                            selectedFilters =
                                                selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                                                    if (key == "Datasets") {
                                                        catalogMap.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                            if (innerKey == valuesList.key) filterVal.filter { it != value }
                                                            else if (innerKey == "Page") filterVal.filter { false }
                                                                .plus("1")
                                                            else filterVal
                                                        }.toMutableMap()
                                                    } else {
                                                        catalogMap
                                                    }
                                                }.toMutableMap()
                                        }
                                        deleteIcon
                                    }
                                }
                                +" "
                            }
                        }
                    }
                }
            }
        }

        if (datasetList.isEmpty()){
            if (!endLoading) {
                isDisabled = true
                LinearProgress {
                    sx {
                        width = 100.pct
                        marginTop = 3.pct
                    }
                }
            } else {
                isDisabled = false
                Typography{
                    className = ClassName("elementsNotFound")
                    +"No se ha encontrado ningún elemento"
                }
            }
        }else{

            isDisabled = false
            List {
                datasetList.filter{if (searchBy.isNotEmpty())it.title!!.contains(searchBy) || it.description!!.contains(searchBy) else true}
                    .map{
                        ListItemButton{
                            onClick = handleOnClick

                            id = it.id
                            CardList{this.datasetInfo = it}
                        }
                    }
            }
            Pagination{
                //this.changePage = {e, v -> props.updateDatasetsList(e,v)}
                numberOfPages = props.numberOfDatasets
                resType = "Datasets"
            }
            //val v = selectedFilters.filter { it.key == "Datasets" }
           // console.log("PAAGINASSSS1: "+ selectedFilters["Datasets"]?.get("Page")?.firstOrNull()?.toInt() ?: 1)

        }

    }



}






