package components.commmon.pages.api

import com.schema.type.MapInput
import components.commmon.Sizes
import csstype.Auto
import csstype.ClassName
import csstype.Color
import csstype.Display
import csstype.NamedColor
import csstype.Overflow
import csstype.Position
import csstype.pct
import csstype.px
import es.unizar.iaaa.tfg.constants.ConstantValues
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import models.ExtraQueryInfo
import mui.material.Box
import mui.material.Button
import mui.material.ButtonVariant
import mui.material.Chip
import mui.material.ChipColor
import mui.material.CircularProgress
import mui.material.Divider
import mui.material.FormHelperText
import mui.material.Link
import mui.material.Paper
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.TextField
import mui.material.Typography
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.html.ReactHTML.div
import react.dom.onChange
import react.useEffect
import react.useRequiredContext
import react.useState

external interface ResultInfoProps : Props {
    var queryResult: Collection<ExtraQueryInfo>
}

val resultInfo = FC<ResultInfoProps>{props->
   // var resultList by useState(props.queryResult)
  //  var isLoading by useRequiredContext(IsLoadingContext)


    Paper {
        sx {
            overflow = Overflow.scroll
            height = 300.px
            width =  100.pct
            marginRight = Auto.auto
            paddingBottom = 8.pct
            backgroundColor = NamedColor.white//rgba(249, 249, 249, 0.87)
            position = Position.relative
            borderRadius = 20.px
        }
        Typography{
            className = ClassName("endpoint_result")
            + "Resultados"
        }
        /*if (resultList.isNullOrEmpty()){
            if (isLoading) {
                console.log("CARGANNNNNNNNNNNNNNNNNNNNDOOOOOOO")
                CircularProgress {
                    className = ClassName("circularProgressInfo")
                }
            }
            console.log("SIN CARGARRRRRRRRRRRRRRRRRRRRRR")
        }else{*/
        if (!props.queryResult.isNullOrEmpty()) {
            console.log("MOSTRARRRRRRRRRR "+props.queryResult)
            //console.log("MOSTRARRRRRRRRRR2 "+resultList)
            Paper {
                sx {

                   // width = Sizes.BoxList.Width
                    marginRight = Auto.auto
                    marginLeft = Auto.auto
                    marginTop = 2.pct
                    //paddingRight = 10.pct
                    //paddingLeft = 6.pct
                    //paddingTop = 2.pct
                   // paddingBottom = 5.pct
                    backgroundColor = NamedColor.white
                    position = Position.relative
                }
                elevation = 0
                props.queryResult.map{
                    TableContainer {
                        className = ClassName("tableContainerIntro")
                        Table {
                            className = ClassName("tableInfo")
                            TableBody {
                                if(it.id != null) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"ID"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            +"${it.id}"
                                        }
                                    }
                                }
                                if(it.notation != null || it.label != null) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Publicador"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            +"${it.notation ?: ""}-${it.label ?: ""}"
                                        }
                                    }
                                }
                                if(!it.formats.isNullOrEmpty()) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Formatos"
                                        }
                                    }
                                    TableRow {

                                        Stack {
                                            sx {
                                                display = Display.block
                                            }
                                            className = ClassName("stackSelectedFilters")
                                            spacing = responsive(4.px)
                                            direction = responsive(StackDirection.row)
                                            it.formats?.map { chipValue ->
                                                Chip {
                                                    className = ClassName("themesChip")
                                                    label = ReactNode("$chipValue")
                                                    color = ChipColor.success
                                                }
                                            }
                                        }
                                    }
                                }
                                if(!it.descriptions.isNullOrEmpty()) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Descripciones"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            it.descriptions?.map {
                                                div { +"--- $it" }
                                            }
                                        }
                                    }
                                }
                                if(!it.title.isNullOrEmpty()) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Títulos"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            it.title?.map {
                                                div { +"--- $it" }
                                            }
                                        }
                                    }
                                }
                                if(!it.distributions.isNullOrEmpty()) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Distribuciones"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            it.distributions?.map {
                                                div { +"--- $it" }
                                            }
                                        }
                                    }
                                }
                                if(!it.keywords.isNullOrEmpty()) {
                                    TableRow {
                                        TableCell {
                                            className = ClassName("tableCell1")
                                            +"Palabras clave"
                                        }
                                        TableCell {
                                            className = ClassName("tableCell2")
                                            it.keywords?.map { chipValue ->
                                                Chip {
                                                    className = ClassName("themesChip")
                                                    label = ReactNode("$chipValue")
                                                    color = ChipColor.success
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    Divider()
                    Divider()
                }
            }
        }
    }
}