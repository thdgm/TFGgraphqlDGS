package components.commmon.layout

import commonModels.DatasetModel
import components.commmon.Sizes
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
import mui.material.ChipVariant
import mui.material.Grid
import mui.material.GridDirection
import mui.material.IconButton
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
import react.router.useNavigate
import react.useState

val listTestDataset = listOf<DatasetModel>(
    DatasetModel("Titulo1", "Publisher1","Description1",listOf("JSON","CSV") ),
    DatasetModel("Titulo2", "Publisher2","Description2",listOf("JSON","CSV") )
)

//val listSelectedFilters = listOf<String>("CSV", "Ayuntamiento", "Diario")

external interface ListProps:Props{
    var filterList: Collection<DatasetModel>
    var listSelectedFilters:Collection<String>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var searchBy: String
    var handleOnDelete:(value: String) -> Unit
}

val list = FC<ListProps> { props ->
    val navigate = useNavigate()
   // var datasetsList by useState(props.filterList)
    var datasetList by useState(listTestDataset)
    var selectedFilters by useState(props.listSelectedFilters)
    var searchFilter by useState("")
    //var searchFilter by useState(props.searchFilter)
    console.log("FILTERBY:: "+props.searchBy)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/info/"+event.currentTarget.id)
    }

    var openDialog by useState(false)

    val handleChange: (event: react.dom.events.ChangeEventHandler<org.w3c.dom.HTMLElement>?) -> Unit = { event ->
        console.log(event)
    }

    fun handleClick(id: String){
        console.log(id)

       //navigate("/info/1")
    }

    Paper {
        sx{
            width = Sizes.BoxList.Width
            marginRight= Auto.auto
            marginLeft= Auto.auto
            //marginTop = 1.pct
            //paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            //backgroundColor = rgba(249,249,249,0.87)
            backgroundColor = rgba(240,240,240,0.0)
            boxShadow = None.none
            position = Position.relative
        }
        /*Box{
            Searcher{
                this.filterList = datasetList
                this.handleOnChange = {event -> searchFilter= (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/}

            }
        }*/

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
        if (selectedFilters.isNotEmpty()){
            Stack{
                spacing = responsive(4.px)
                direction = responsive(StackDirection.row)
                selectedFilters.mapIndexed{ index, value ->
                    Chip {
                        id = value
                        label = ReactNode(value)
                        variant = ChipVariant.outlined
                        onDelete = props.handleOnDelete//{ _ ->  selectedFilters = selectedFilters.filter{it != value}}
                        deleteIcon
                    }
                }

            }
        }

        /*Box {
           sx {
               display = Display.flex
           }
            Box {
                Typography{
                    + "${datasetList.size} datasets encontrados"
                }
            }
            Box {
                sx {
                    marginLeft = 50.pct
                    display = Display.flex
                }
                /*IconButton {
                    type = ButtonType.button
                    ariaLabel = "info"

                    Dialog{
                        this.openInfo = openDialog
                        this.handleClickOpen = {openDialog = true}
                        this.handleClickClose = {openDialog = false}
                    }
                }*/
                selectFilter()
            }

        }*/

        List {
            /*datasetList*/
            datasetList.filter{if (props.searchBy.isNotEmpty())it.title!!.contains(props.searchBy) else true}
                .map{
                ListItemButton{
                    onClick = handleOnClick

                    id = it.title
                    CardList{this.datasetInfo = it}
                }
            }
            /*ListItemButton{
                onClick ={
                    handleClick()
                }
                CardList()
            }
            ListItemButton{
                onClick ={
                    handleClick()
                }
                CardList()
            }*/
        }
        Pagination()
    }



}


