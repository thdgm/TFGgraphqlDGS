package components.commmon.resourceInfo


import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import es.unizar.iaaa.tfg.constants.ConstantValues
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.Chip
import mui.material.ChipColor
import mui.material.CircularProgress
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItem
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
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.useState


external interface ResourceInfoElementsProps : Props {
    var listTestDatasetsInfo: MutableList<DatasetInfo>
}

val ResourceInfoElements = FC<ResourceInfoElementsProps> { props->


    var datasetInfo by useState(props.listTestDatasetsInfo)


    if (datasetInfo.isNullOrEmpty()){
        CircularProgress()
    }else{
        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginTop = 2.pct
            }
            ariaLabel = "breadcrumb"

            Link {
                underline = LinkUnderline.hover
                color = "inherit"
                href = "/"
                +"/Conjunto de datos"
            }

            Typography {
                if(datasetInfo.elementAt(0)?.title!!.isNotEmpty()){
                    +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
                }

            }
        }
        ReactHTML.h1 {
            className = ClassName("titleInit")
            if(datasetInfo.elementAt(0)?.title!!.isNotEmpty()){
                +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
            }
        }
        if(datasetInfo.elementAt(0)?.theme!!.isNotEmpty()) {
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
                    datasetInfo.elementAt(0)?.theme?.map {
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
                        if(!datasetInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Publicador"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.publisher}"
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
                        if(!datasetInfo.elementAt(0)?.license.isNullOrBlank()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Licencia"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.license}"
                                }
                            }
                        }
                        if(datasetInfo.elementAt(0)?.accrualPeriodicity != null) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Frecuencia de actualización"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    val period = datasetInfo.elementAt(0)?.accrualPeriodicity!!.period
                                    val range = datasetInfo.elementAt(0)?.accrualPeriodicity!!.range
                                    val duration = "time:${range} ${period}"
                                    val durationShow = ConstantValues.FREQUENCY_MAP[duration] ?: "Cada ${period?.toInt()} ${ConstantValues.FREQUENCY_TRANSLATOR[range]}"
                                    +"$durationShow"
                                }
                            }
                        }
                    }
                }
            }
        }

        if(datasetInfo.elementAt(0)?.title!!.size > 1) {
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
                datasetInfo.elementAt(0)?.title?.drop(1)?.map {
                    List {
                        ListItemButton {
                            +"$it"
                        }
                    }
                }

            }
        }
        if(datasetInfo.elementAt(0)?.description!!.isNotEmpty()){
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
                    datasetInfo.elementAt(0)?.description?.map {
                        ListItemButton {
                            //className = ClassName("tableCell2")
                            +"$it"
                        }
                    }
                }
            }
        }
       if(datasetInfo.elementAt(0)?.accessURl!!.isNotEmpty()) {
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
                   +"Distribuciones"
               }
               List {
                   datasetInfo.elementAt(0)?.accessURl?.map {
                       ListItem {
                           className = ClassName("distributionsList")
                           +"$it"
                       }
                   }
               }

           }
       }
        if(datasetInfo.elementAt(0)?.keywords!!.isNotEmpty()){
            Paper {
                sx {
                    width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    paddingRight = 10.pct
                    paddingLeft = 6.pct
                    backgroundColor = NamedColor.transparent
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
                    datasetInfo.elementAt(0)?.keywords?.map {
                        Chip {
                            className = ClassName("keywordsChip")
                            label = ReactNode("$it")
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
                        if(!datasetInfo.elementAt(0)?.issued.isNullOrEmpty() && datasetInfo.elementAt(0)?.issued != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha de creación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.issued}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.modified.isNullOrEmpty() && datasetInfo.elementAt(0)?.modified != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Fecha última modificación"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.modified}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.temporalStart.isNullOrEmpty() && datasetInfo.elementAt(0)?.temporalStart != "null") {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Cobertura temporal"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")
                                    +"${datasetInfo.elementAt(0)?.temporalStart} -- ${datasetInfo.elementAt(0)?.temporalEnd}"
                                }
                            }
                        }
                        if(!datasetInfo.elementAt(0)?.spatial.isNullOrEmpty()) {
                            TableRow {
                                TableCell {
                                    className = ClassName("tableCell1")
                                    +"Cobertura geográfica"
                                }
                                TableCell {
                                    className = ClassName("tableCell2")

                                    +"${datasetInfo.elementAt(0)?.spatial?.joinToString(separator = " / ")}"
                                }
                            }
                        }
                        if (datasetInfo.elementAt(0)?.language!!.isNotEmpty()) {
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
                                        datasetInfo.elementAt(0)?.language?.map {
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







/*












        /*    Paper {
        sx{
            width = Sizes.BoxList.Width
            marginRight= Auto.auto
            marginLeft= Auto.auto
            marginTop = 6.pct
            paddingBottom = 10.pct
            paddingTop = 6.pct
            paddingRight = 10.pct
            paddingLeft = 10.pct
            backgroundColor = rgba(249,249,249,0.87)
            position = Position.relative
        }

        Card {
            sx{
                width = Sizes.CardList.Width
                display= Display.flex
            }
            Box {
                /*CardActions{
                    IconButton{
                        sx{
                            fontSize = 250.pct
                        }
                        onClick ={handleClick()}
                        ReplyOutlined{
                            sx{
                                fontSize = 100.pct
                            }
                        }
                    }
                }*/
                CardContent{
                    Typography{
                        variant = TypographyVariant.h6
                        +"Titulo"
                    }
                    Typography{
                        variant = TypographyVariant.subtitle1
                        +"Otra info"
                    }
                }
            }
        }*/

 */
}




