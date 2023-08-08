package components.commmon.pages.dataservice.mainPage

import commonModels.ServicesModel
import components.commmon.FilterListContextAll
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.searcher.SearcherServices
import components.commmon.selectFilter.selectedDataservice.selectFilterDServ
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

external interface ListDataServProps: Props {
    var searchBy: String
    var dServList: Collection<ServicesModel>
    var numberOfServices: Int

}
val listDataServ = FC<ListDataServProps> { props ->
    val navigate = useNavigate()
    var dataServicesList by useState(props.dServList)
    var searchBy by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)
    var isDisabled by useRequiredContext(IsLoadingContext)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        navigate("/dataservices/${event.currentTarget.id}")
    }

    fun checkIfSelectedFiltersIsEmpty(): Boolean{
        selectedFilters["DataServices"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }

    useEffect(selectedFilters){
        dataServicesList = props.dServList
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
                    +"${props.numberOfServices} "

                    ReactHTML.b {
                        className = ClassName("spanDatasets")
                        +"DataServices encontrados"
                    }

                }
            }
            Grid {
                sx {
                    marginLeft = Auto.auto
                    display = Display.flex
                }
                item = true
                selectFilterDServ()
            }
        }
        Box {
            SearcherServices{
                this.filterList = dataServicesList
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

                selectedFilters["DataServices"]?.map { valuesList ->
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
                                            if (key == "DataServices") {
                                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                                    if (innerKey == valuesList.key) filterVal.filter { it != value }
                                                    else if (innerKey == "Page") filterVal.filter { false }.plus("1")
                                                    else filterVal
                                                }.toMutableMap<String, Collection<String>>()
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

        if (dataServicesList.isEmpty()) { //Esto durante 4 segundos, luego muestra no se ha encontardo nada
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
                dataServicesList.filter { if (searchBy.isNotEmpty()) it.title!!.contains(searchBy) || it.id!!.contains(searchBy) || it.description!!.contains(searchBy) else true }
                    .map {
                        ListItemButton {
                            onClick = handleOnClick

                            id = it.id
                            CardListDataServ { this.datasetInfo = it }
                        }
                    }
            }
            Pagination{
                numberOfPages = props.numberOfServices
                resType = "DataServices"
            }
        }

    }
}