package components.commmon.pages.distribution.mainPage

import SearcherDistributions
import commonModels.DatasetModel
import commonModels.DistributionsModel
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.searcher.SearcherCatalogs
import components.commmon.selectFilter.selectedDataset.selectFilter
import components.commmon.selectFilter.selectedDistribution.selectFilterDist
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
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

external interface ListDistributionsProps: Props {

    var searchBy: String
    var distributionsList: Collection<DistributionsModel>
    var numberOfDistributions: Int

}
val listDistributions = FC<ListDistributionsProps> { props ->
    val navigate = useNavigate()
    var distributionsList by useState(props.distributionsList)
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var searchBy by useState("")
    var isDisabled by useRequiredContext(IsLoadingContext)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/distributions/${event.currentTarget.id}")
    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean{
        selectedFilters["Distributions"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }

    useEffect(selectedFilters){
        distributionsList = props.distributionsList
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
                    +"${props.numberOfDistributions} "

                    ReactHTML.b {
                        className = ClassName("spanDatasets")
                        +"Distributions encontrados"
                    }

                }
            }
            Grid {
                sx {
                    marginLeft = Auto.auto
                    display = Display.flex
                }
                item = true
                selectFilterDist()
            }

        }
        Box {
            SearcherDistributions {
                this.filterList = distributionsList
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

                selectedFilters["Distributions"]?.map { valuesList ->
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
                                            if (key == "Distributions") {
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

        if (distributionsList.isEmpty()) { //Esto durante 4 segundos, luego muestra no se ha encontardo nada
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
                distributionsList.filter { if (props.searchBy.isNotEmpty()) it.title!!.contains(props.searchBy) || it.id!!.contains(searchBy) else true }
                    .map {
                        ListItemButton {
                            onClick = handleOnClick

                            id = it.id
                            CardListDistribution { this.distributionsInfo = it }
                        }
                    }
            }
            Pagination{
                numberOfPages = props.numberOfDistributions
                resType = "Distributions"
            }
        }

    }
}