package components.commmon.pages.catalog.infoPage


import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Cursor
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import models.CatalogInfo
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Chip
import mui.material.ChipColor
import mui.material.CircularProgress
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.events.MouseEvent
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useEffect
import react.useState


external interface CatalogInfoElementsProps : Props {
    var listTestCatalogInfo: MutableList<CatalogInfo>
}

val CatalogInfoElements = FC<CatalogInfoElementsProps> { props->

    val navigate = useNavigate()
    var catalogInfo by useState(props.listTestCatalogInfo)
    var isLoading by useState(true)

    val handleOnClick: (event: MouseEvent<HTMLElement, *>) -> Unit = { event->
        console.log("ID: "+event.currentTarget.id)
        navigate("/catalogs")
    }

    useEffect(listOf(isLoading)) {
        MainScope().launch {
            delay(3000)
            isLoading = false
            console.log("TIMEOUTTT")
        }
    }

    if (catalogInfo.isNullOrEmpty()){
        if (isLoading) {
            CircularProgress {
                className = ClassName("circularProgressInfo")
            }
        }else{
            +"No se ha encontrado información del elemento"
            PruebaInfo()
        }
    }else{
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginTop = 2.pct
            }
            ariaLabel = "breadcrumb"

            Link {
                sx {
                    cursor = Cursor.pointer
                }
                underline = LinkUnderline.hover
                color = "inherit"
               // href = "/catalogs"
                onClick = handleOnClick
                +"/Catalogs"
            }

            Typography {
                if(catalogInfo.elementAt(0)?.title!!.isNotEmpty()){
                    +"${catalogInfo.elementAt(0)?.title?.elementAt(0)}"
                }

            }
        }
        ReactHTML.h1 {
            className = ClassName("titleInit")
            if(catalogInfo.elementAt(0)?.title!!.isNotEmpty()){
                +"${catalogInfo.elementAt(0)?.title?.elementAt(0)}"
            }
        }
        if(catalogInfo.elementAt(0)?.theme!!.isNotEmpty()) {
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    paddingTop = 1.pct
                    paddingBottom = 1.pct
                    backgroundColor = rgba(249, 249, 249, 0.87)
                    position = Position.relative
                }
                elevation = 0
                Stack {
                    sx {
                        display = Display.block
                    }
                    className = ClassName("stackSelectedFilters")
                    spacing = responsive(4.px)
                    direction = responsive(StackDirection.row)
                    catalogInfo.elementAt(0)?.theme?.map {
                        Chip {
                            className = ClassName("themesChip")
                            label = ReactNode("$it")
                            color = ChipColor.success
                        }
                    }
                }
            }
        }

        Paper {
            sx {
                width = Sizes.BoxList.Width
                marginRight = Auto.auto
                marginLeft = Auto.auto
                marginTop = 2.pct
                paddingRight = 10.pct
                paddingLeft = 6.pct
                paddingTop = 2.pct
                paddingBottom = 5.pct
                backgroundColor = NamedColor.white
                position = Position.relative
            }
            elevation = 0

            TableContainer {
                className = ClassName("tableContainerIntro")
                Table {
                    className = ClassName("tableInfo")
                    TableBody {
                        if(!catalogInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0)?.publisher}"
                                }
                            }
                        }
                        TableRow {
                            TableCell {
                                className = ClassName("tableCell1")
                                +"Nivel de administración"
                            }
                            TableCell {
                                className = ClassName("tableCell2")
                                +" ........... "
                            }
                        }
                        if(!catalogInfo.elementAt(0)?.license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0)?.license}"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(catalogInfo.elementAt(0)?.title!!.size > 1) {
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingTop = 2.pct
                    paddingBottom = 5.pct
                    backgroundColor = NamedColor.white
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    position = Position.relative
                }
                elevation = 0
                Typography {
                    className = ClassName("subtitle_info")
                    +"Otros títulos"
                }
                catalogInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {
                        ListItemButton {
                            +"$it"
                        }
                    }
                }

            }
        }
        if(catalogInfo.elementAt(0)?.description!!.isNotEmpty()){
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingTop = 2.pct
                    paddingBottom = 5.pct
                    backgroundColor = NamedColor.white
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    position = Position.relative
                }
                elevation = 0
                Typography {
                    className = ClassName("subtitle_info")
                    +"Descripción"
                }
                List {
                    catalogInfo.elementAt(0)?.description?.map {
                        ListItemButton {
                            //className = ClassName("tableCell2")
                            +"$it"
                        }
                    }
                }
            }
        }
       if(catalogInfo.elementAt(0)?.resources!!.isNotEmpty()) {
           Paper {
               sx {
                   width = Sizes.BoxList.Width
                   marginRight = Auto.auto
                   marginLeft = Auto.auto
                   marginTop = 2.pct
                   paddingTop = 2.pct
                   paddingBottom = 5.pct
                   backgroundColor = NamedColor.white
                   paddingRight = 10.pct
                   paddingLeft = 6.pct
                   position = Position.relative
               }
               elevation = 0
               Typography {
                   className = ClassName("subtitle_info")
                   +"Resources"
               }
               List {
                   catalogInfo.elementAt(0)?.resources?.map {
                       ListItemButton {
                           className = ClassName("distributionsList")
                           +"$it"
                           //TODO(DISTINGUIR SI ES RESOURCE; DATASET; DATASERVICE)
                       }
                   }
               }

           }
       }
        if(catalogInfo.elementAt(0)?.records!!.isNotEmpty()) {
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingTop = 2.pct
                    paddingBottom = 5.pct
                    backgroundColor = NamedColor.white
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    position = Position.relative
                }
                elevation = 0
                Typography {
                    className = ClassName("subtitle_info")
                    +"Records"
                }
                List {
                    catalogInfo.elementAt(0)?.records?.map {
                        ListItemButton {
                            className = ClassName("distributionsList")
                            +"$it"
                        }
                    }
                }

            }
        }


        Paper {
            sx {
                width = Sizes.BoxList.Width
                marginRight = Auto.auto
                marginLeft = Auto.auto
                marginTop = 2.pct
                paddingTop = 2.pct
                paddingBottom = 5.pct
                backgroundColor = NamedColor.white
                paddingRight = 10.pct
                paddingLeft = 6.pct
                //backgroundColor = NamedColor.transparent
                position = Position.relative
            }
            elevation = 0
            Typography {
                className = ClassName("subtitle_info")
                +"Información adicional"
            }
            TableContainer {

                Table {
                    className = ClassName("tableInfo")
                    TableBody {
                        if(!catalogInfo.elementAt(0)?.issued.isNullOrEmpty() && catalogInfo.elementAt(0)?.issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0)?.issued}"
                                }
                            }
                        }
                        if(!catalogInfo.elementAt(0)?.modified.isNullOrEmpty() && catalogInfo.elementAt(0)?.modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${catalogInfo.elementAt(0)?.modified}"
                                }
                            }
                        }
                        if(!catalogInfo.elementAt(0)?.isServedByID.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Servido por: "
                                }
                                TableCell{
                                    List {
                                        catalogInfo.elementAt(0)?.isServedByTitle?.mapIndexed { index, it ->
                                            ListItemButton{
                                                className = ClassName("tableCell2")
                                                id = catalogInfo.elementAt(0)?.isServedByID?.elementAt(index)
                                                +"${it?.elementAt(0)}"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if(!catalogInfo.elementAt(0)?.inCatalogID.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalogos contenedores"
                                }
                                TableCell{
                                    List {
                                        catalogInfo.elementAt(0)?.inCatalogTitle?.mapIndexed{ index, it ->
                                            ListItemButton{
                                                className = ClassName("tableCell2")
                                                id = catalogInfo.elementAt(0)?.inCatalogID?.elementAt(index)
                                                +"${it?.elementAt(0)}"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if(!catalogInfo.elementAt(0)?.isPTOID.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Catalog Record"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    id = catalogInfo.elementAt(0)?.isPTOID
                                    +"${catalogInfo.elementAt(0)?.isPTOTitle}"
                                }

                            }
                        }
                        if (catalogInfo.elementAt(0)?.language!!.isNotEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Idiomas"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    Stack {
                                        sx {
                                            display = Display.block
                                        }
                                        className = ClassName("stackLanguagesChip")
                                        spacing = responsive(4.px)
                                        direction = responsive(StackDirection.row)
                                        catalogInfo.elementAt(0)?.language?.map {
                                            Chip {
                                                className = ClassName("languagesChip")
                                                label = ReactNode("$it")
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }

        }

    }
}




