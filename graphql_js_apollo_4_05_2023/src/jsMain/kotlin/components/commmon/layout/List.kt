package components.commmon.layout

import com.schema.type.LocalDateTime
import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.ThemeContext
import components.commmon.card.CardList
import components.commmon.dialog.Dialog
import components.commmon.pagination.Pagination
import components.commmon.searcher.Searcher
import components.commmon.selectFilter.selectFilter
import csstype.Auto
import csstype.BackgroundColor
import csstype.ClassName
import csstype.Display
import csstype.None
import csstype.Position
import csstype.Width
import csstype.number
import csstype.pct
import csstype.px
import csstype.rgba
import kotlinx.serialization.json.Json
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.Grid
import mui.material.GridDirection
import mui.material.IconButton
import mui.material.LinearProgress
import mui.material.List
import mui.material.ListItem
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.TypographyVariant

import mui.system.Breakpoint
import mui.material.styles.createTheme
import mui.system.ResponsiveStyleValue
import mui.system.createBreakpoints
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.Node
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.dom.html.ButtonType
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.b

import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.pre
import react.dom.html.ReactHTML.span
import react.router.useNavigate
import react.useRequiredContext
import react.useState

/*val listTestDataset = listOf<DatasetModel>(
    DatasetModel("Titulo1", "Publisher1","Description1",listOf("JSON","CSV") ),
    DatasetModel("Titulo2", "Publisher2","Description2",listOf("JSON","CSV") )
)*/



external interface ListProps:Props{

    var searchBy: String
    var listSelectedFilters: Collection<String>
    var filterList: Collection<DatasetModel>
    var deleteElement: (String) -> Unit
    var updateDatasetsList: suspend (event: ChangeEvent<*>, value: Number) -> Unit

}

val list = FC<ListProps> { props ->
    val navigate = useNavigate()

    var datasetList by useState(props.filterList)
    //var selectedFilters by useState(props.listSelectedFilters)

    var selectedFilters by useRequiredContext(FilterListContext)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        //navigate("/info/"+event.currentTarget.id)
        navigate("/info/${event.currentTarget.id}?id=${event.currentTarget.id}")
    }
    fun handleListChange() {
        props.deleteElement("CSV")
    }
    var handleChangePage: (event: ChangeEvent<*>, value: Number) -> Unit = { e,value ->
        console.log("PAGINAAA:: $value")
    }
    fun assignMap(newMap: MutableMap<String, Collection<String>>, categoria: String, valor: String): MutableMap<String, Collection<String>>{
        newMap[categoria] = listOf(valor)
        console.log("MAPA: "+ newMap)
        return newMap
    }
    //Returns true if all of its list are empties
    fun checkIfSelectedFiltersIsEmpty(): Boolean{

        selectedFilters.map{
            if (!it.value.isEmpty()){
               return false
            }
        }
        return true
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
                        + "${datasetList.size} "

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
        if (!checkIfSelectedFiltersIsEmpty()){

            Stack{
                sx{
                    display = Display.block
                }
                className = ClassName("stackSelectedFilters")
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)

                selectedFilters.map { valuesList ->
                    if (valuesList.value.isNotEmpty()){
                        span {
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
        }

        if (datasetList.isEmpty()){
            LinearProgress{
                sx{
                    width = 100.pct
                    marginTop = 3.pct
                }
            }
        }else{
            List {
                datasetList.filter{if (props.searchBy.isNotEmpty())it.title!!.contains(props.searchBy) else true}
                    .map{
                        ListItemButton{
                            onClick = handleOnClick

                            id = it.id
                            CardList{this.datasetInfo = it}
                        }
                    }
            }
            Pagination{
                this.changePage = {e, v -> props.updateDatasetsList(e,v)}
            }
        }

    }



}


