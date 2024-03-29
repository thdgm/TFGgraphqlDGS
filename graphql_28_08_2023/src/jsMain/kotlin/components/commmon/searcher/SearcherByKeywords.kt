package components.commmon.searcher


import commonModels.DatasetModel
import components.commmon.FilterListContextAll
import components.commmon.pages.dataset.mainPage.IsLoadingContext
import csstype.AlignItems
import csstype.Auto
import csstype.ClassName

import csstype.Display
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
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.aria.AriaHasPopup
import react.dom.aria.ariaHasPopup
import react.dom.aria.ariaLabel
import react.dom.events.ChangeEvent
import react.useRequiredContext
import react.useState


external interface SearcherByKeywordsProps:Props{
    var filterList: Collection<DatasetModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit

}

val SearcherByKeywords = FC<SearcherByKeywordsProps> { props->


    var openDialog by useState(false)
    var searchBy by useState("")
    var isDisabled by useRequiredContext(IsLoadingContext)
    var selectedFilters by useRequiredContext(FilterListContextAll)



    Container {
        sx {
            display = Display.flex
            alignItems = AlignItems.center
            marginRight = Auto.auto
            marginLeft = Auto.auto
            marginTop = 10.px
            marginBottom = 6.pct


        }
        className = ClassName("search-container")
        Paper {
            sx {
                display = Display.flex
                alignItems = AlignItems.center
                marginRight = Auto.auto
                marginLeft = Auto.auto
                marginTop = 10.px
                marginBottom = 10.px
                width = 100.pct
                borderRadius = 30.px
                backgroundColor = rgba(247, 247, 247, 1.0)
                //zIndex = integer(1300)

            }

            IconButton {
                sx {
                    marginLeft = 2.pct

                }
                disabled = isDisabled
                ariaLabel = "filter"
                edge = IconButtonEdge.start
                ariaHasPopup = AriaHasPopup.`false`
                size = Size.large
                color = IconButtonColor.inherit
                onClick = {

                    selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                        if (key == "Datasets") {
                            catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                if (innerKey == "Etiqueta" && !filterVal.contains(searchBy)) filterVal.plus(searchBy)
                                else if (filterVal.contains(searchBy)) filterVal.filter { miVal -> miVal != searchBy }
                                else filterVal
                            }.toMutableMap()
                        } else {
                            catalogMap
                        }
                    }.toMutableMap();
                    // console.log("SEARCH BY: "+ searchBy)}
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
                        width = 100.pct
                    }
                    // type = "search"
                    placeholder = "Search by keywords"
                    onChange = { event ->
                        searchBy =
                            (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/
                    } //{event: ChangeEvent<HTMLElement> -> console.log(props.filterList.filter { it.title!!.contains((event.target as HTMLInputElement).value) })}
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

}