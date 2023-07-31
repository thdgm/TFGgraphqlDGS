package components.commmon.searcher


import commonModels.CatalogModel
import commonModels.DatasetModel
import components.commmon.pages.dataset.mainPage.IsLoadingContext
import csstype.AlignItems
import csstype.Auto
import csstype.ClassName

import csstype.Display
import csstype.NamedColor
import csstype.pct
import csstype.px
import csstype.rgba
import mui.icons.material.Search
import mui.material.Container
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.InputBase
import mui.material.Paper
import mui.material.Size
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.aria.AriaHasPopup
import react.dom.aria.ariaHasPopup
import react.dom.aria.ariaLabel
import react.dom.events.ChangeEvent
import react.useRequiredContext
import react.useState


external interface SearcherCatalogsProps:Props{
    var filterList: Collection<CatalogModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit

}

val SearcherCatalogs = FC<SearcherCatalogsProps> { props->


    var openDialog by useState(false)

    val handleChange: (event: react.dom.events.ChangeEventHandler<org.w3c.dom.HTMLElement>?) -> Unit = {event ->
        console.log(event)
    //props.filterList.filter { it.title!!.contains(event.target.value) }
        //console.log("FILTRO: "+ props.filterList.filter { it.title!!.contains(event.target.value) })
    }
    /*val handleChange2: (event: ChangeEvent<HTMLElement>) -> Unit = {event ->
        console.log(event.target.value)
    }*/
    fun onChangee(){
        //console.log("HOLA")
    }

    Container {
        sx {
            display = Display.flex
            alignItems = AlignItems.center
            marginRight= Auto.auto
            marginLeft = Auto.auto
            marginTop = 10.px
            marginBottom = 6.pct


        }
        className = ClassName("search-container")
        Paper {
            sx {
                display = Display.flex
                alignItems = AlignItems.center
                marginRight= Auto.auto
                marginLeft = Auto.auto
                marginTop = 10.px
                marginBottom= 10.px
                width= 100.pct
                borderRadius = 30.px
                backgroundColor = NamedColor.white//rgba(247, 247, 247, 1.0)
                //zIndex = integer(1300)

            }

            IconButton {
                sx {
                    marginLeft = 2.pct

                }

                ariaLabel = "filter"
                edge = IconButtonEdge.start
                ariaHasPopup = AriaHasPopup.`false`
                size = Size.large
                color = IconButtonColor.inherit
                Search()
            }
            /*Search {

                Search()
                InputBase {
                    placeholder = "Search..."
                    onChange = {onChangee()}
                }

            }*/
           InputBase {
                sx {
                    width= 100.pct
                }
               // type = "search"
                placeholder = "Search in this page"
                onChange = props.handleOnChange //{event: ChangeEvent<HTMLElement> -> console.log(props.filterList.filter { it.title!!.contains((event.target as HTMLInputElement).value) })}
            }
            /*IconButton {
                type = ButtonType.button
                ariaLabel = "search"

                Search()
            }*/
            /*IconButton {
                type = ButtonType.button
                ariaLabel = "info"

                Dialog{
                    this.openInfo = openDialog
                    this.handleClickOpen = {openDialog = true}
                    this.handleClickClose = {openDialog = false}
                }
            }*/

        }
    }


}