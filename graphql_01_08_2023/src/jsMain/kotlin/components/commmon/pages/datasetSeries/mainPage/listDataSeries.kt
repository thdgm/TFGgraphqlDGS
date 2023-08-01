package components.commmon.pages.datasetSeries.mainPage

import commonModels.SeriesModel
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.searcher.SearcherSeries
import components.commmon.selectFilter.selectFilter
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
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useEffect
import react.useRequiredContext
import react.useState

external interface ListDataSeriesProps: Props {
    var searchBy: String
    var datasetSeriesList: Collection<SeriesModel>
    var updateCatalogsList: suspend (event: ChangeEvent<*>, value: Number) -> Unit
    var numberOfSeries: Int
}
val listDataSeries = FC<ListDataSeriesProps> { props ->
    val navigate = useNavigate()
    var datasetSeriesList by useState(props.datasetSeriesList)
    var searchBy by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)


    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/datasetseries/${event.currentTarget.id}")
    }
    fun checkIfSelectedFiltersIsEmpty(): Boolean{
        selectedFilters["DatasetSeries"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }

    useEffect(selectedFilters){
        datasetSeriesList = props.datasetSeriesList
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
                    +"${props.numberOfSeries} "

                    ReactHTML.b {
                        className = ClassName("spanDatasets")
                        +"Dataset Series encontrados"
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
            SearcherSeries {
                this.filterList = datasetSeriesList
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

                selectedFilters["DatasetSeries"]?.map { valuesList ->
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
                                            if (key == "DatasetSeries") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
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
        if (datasetSeriesList.isEmpty()) {
            isDisabled = true
            LinearProgress {
                sx {
                    width = 100.pct
                    marginTop = 3.pct
                }
            }

        } else {
            isDisabled = false
            mui.material.List {
                datasetSeriesList.filter { if (props.searchBy.isNotEmpty()) it.title!!.contains(props.searchBy) || it.id!!.contains(searchBy) || it.description!!.contains(searchBy) else true }
                    .map {
                        ListItemButton {
                            onClick = handleOnClick

                            id = it.id
                            CardListDatasetSeries { this.seriesInfo = it }
                        }
                    }
            }
            Pagination{
                this.changePage = {e, v -> props.updateCatalogsList(e,v)}
                numberOfPages = props.numberOfSeries
                resType = "DatasetSeries"
            }
        }

    }
}