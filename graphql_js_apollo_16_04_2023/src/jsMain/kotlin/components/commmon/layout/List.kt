package components.commmon.layout

import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import components.commmon.searcher.Searcher
import components.commmon.selectFilter.selectFilter
import csstype.Auto
import csstype.BackgroundColor
import csstype.ClassName
import csstype.Display
import csstype.Position
import csstype.Width
import csstype.number
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.List
import mui.material.ListItem
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.Node
import react.FC
import react.Props
import react.dom.events.MouseEvent

import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.router.useNavigate
import react.useState

val listTestDataset = listOf<DatasetModel>(
    DatasetModel("Titulo1", "Publisher1","Description1",listOf("JSON","CSV") ),
    DatasetModel("Titulo2", "Publisher2","Description2",listOf("JSON","CSV") )
)


val list = FC<Props> {
    val navigate = useNavigate()
    var datasetList by useState(listTestDataset)
    var searchFilter by useState("")

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/info/"+event.currentTarget.id)
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
            paddingBottom = 10.pct
            //paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(249,249,249,0.87)
            position = Position.relative
        }
        Box{
            Searcher{
                this.filterList = datasetList
                this.handleOnChange = {event -> searchFilter= (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/}

            }
        }
        Box {
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

                }
                selectFilter()
            }

        }

        List {
            datasetList.filter{if (searchFilter.isNotEmpty())it.title!!.contains(searchFilter) else true}
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