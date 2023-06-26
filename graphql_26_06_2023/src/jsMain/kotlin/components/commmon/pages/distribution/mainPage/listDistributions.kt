package components.commmon.pages.distribution.mainPage

import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.pagination.Pagination
import components.commmon.selectFilter.selectFilter
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
import mui.material.Grid
import mui.material.GridDirection
import mui.material.LinearProgress
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useEffect
import react.useState

external interface ListDistributionsProps: Props {

    var searchBy: String
    //var listSelectedFilters: Collection<String>
    var distributionsList: Collection<DatasetModel>
    //var deleteElement: (String) -> Unit
    //var updateDatasetsList: suspend (event: ChangeEvent<*>, value: Number) -> Unit

}
val listDistributions = FC<ListDistributionsProps> { props ->
    val navigate = useNavigate()
    var distributionsList by useState(props.distributionsList)
    var isLoading by useState(true)

    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(9000)
            isLoading = false
           // console.log("TIMEOUTTT")
        }
    }

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
       // console.log("ID: "+event.currentTarget.id)
        navigate("/distributions/${event.currentTarget.id}")
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
                    +"1000 "

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
                selectFilter()
            }

        }
        /*if (!checkIfSelectedFiltersIsEmpty()) {

            Stack {
                sx {
                    display = Display.block
                }
                className = ClassName("stackSelectedFilters")
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)

                selectedFilters.map { valuesList ->
                    if (valuesList.value.isNotEmpty()) {
                        ReactHTML.span {
                            className = ClassName("chipsSelectedFilters")
                            +"${valuesList.key}: "
                            valuesList.value.map { value ->

                                Chip {
                                    id = value
                                    label = ReactNode(value)
                                    variant = ChipVariant.outlined
                                    color = ChipColor.success
                                    onDelete = { _ ->
                                        selectedFilters = selectedFilters.toMutableMap().mapValues { (key, filterVal) ->
                                            if (key == valuesList.key) filterVal.filter { it != value } else filterVal //value.plus()
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
        }*/

        if (distributionsList.isEmpty()) { //Esto durante 4 segundos, luego muestra no se ha encontardo nada
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

                        id = "id"
                        CardListDistribution()
                    }
                    ListItemButton {
                        onClick = handleOnClick

                        id = "id"
                        CardListDistribution()
                    }
                    ListItemButton {
                        onClick = handleOnClick

                        id = "id"
                        CardListDistribution()
                    }

                }
            }

        } else {
            mui.material.List {
                distributionsList.filter { if (props.searchBy.isNotEmpty()) it.title!!.contains(props.searchBy) else true }
                    .map {
                        ListItemButton {
                            onClick = handleOnClick

                            id = it.id
                            CardListDistribution { this.datasetInfo = it }
                        }
                    }
            }
            Pagination ()
        }

    }
}