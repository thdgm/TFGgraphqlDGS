package components.commmon.resourceInfo

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.ApolloResponse
import com.apollographql.apollo3.api.Optional
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetInfoQuery
import com.schema.DatasetsQuery
import commonModels.DatasetModel
import commonModels.FrequencyAdapterScalar
import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.layout.getDatasets
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.FlexDirection
import csstype.HtmlAttributes
import csstype.NamedColor
import csstype.Position
import csstype.pct
import csstype.px
import csstype.rgba
import kotlinx.browser.window
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
//import kotlinx.datetime.LocalDateTime
import mui.icons.material.ReplyOutlined
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.List
import mui.material.CardActions
import mui.material.CardContent
import mui.material.Chip
import mui.material.ChipColor
import mui.material.ChipVariant
import mui.material.Grid
import mui.material.IconButton
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.SpeedDialIcon
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography

import mui.material.styles.TypographyVariant
import mui.system.Breakpoint
import mui.system.Theme
import mui.system.createSpacing
import mui.system.responsive
import mui.system.sx
import org.w3c.dom.url.URLSearchParams
import react.FC
import react.Props
import react.ReactNode
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h1
import react.router.Params
import react.router.useNavigate
import react.router.useParams
import react.useEffect
import react.useState


data class DatasetInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val description: Collection<String>?,
    val license: String?,
    val keywords: Collection<String>?,
    val theme: Collection<String>?,
    val language: Collection<String>?,
    val issued: String?,
    val modified: String?,
    val accrualPeriodicity: FrequencyAdapterScalar?,
    //val accrualPeriodicityPeriod: Float?,
    val spatial: Collection<String>?,
    val temporalStart:String?,
    val temporalEnd: String?,
    val accessURl: Collection<String>?,
    val format: Collection<String>?
)


val apolloClient = ApolloClient.Builder()
    .serverUrl("http://localhost:8081/graphql")
    //.okHttpClient(okHttpClient)
    .httpMethod(HttpMethod.Post)
    .httpHeaders(
        listOf(
            HttpHeader("Access-Control-Allow-Origin","*"),
            HttpHeader("Access-Control-Allow-Methods", "POST"),
            HttpHeader("Content-Type", "application/json;"),
        )
    )
    .build()

suspend fun getResourceInfo(id_dataset: String?): Collection<DatasetInfo> {
    var datasetInfo: DatasetInfoQuery.OnDataset? = null
    if (id_dataset != null){
        datasetInfo =  components.commmon.filterForm.apolloClient.query(DatasetInfoQuery(id= id_dataset!!)).execute().data?.resource?.onDataset
    }
    if (datasetInfo != null) {
        return listOf(DatasetInfo(
            datasetInfo.id,
            datasetInfo.title?.map { it.literal },
            datasetInfo.publisher?.label,
            datasetInfo.description?.map { it.literal },
            datasetInfo.license,
            datasetInfo.keywords?.map { it.literal },
            datasetInfo.theme,
            datasetInfo.language,
            datasetInfo.issued.toString(),
            datasetInfo.modified.toString(),
            datasetInfo.accrualPeriodicity,
            datasetInfo.spatial,
            datasetInfo.temporal?.start.toString(),
            datasetInfo.temporal?.end.toString(),
            datasetInfo.distributions?.map{it.accessUrl!!},
            datasetInfo.distributions?.map{it.format!!.subtype},
        ))

    }
    return emptyList()
}
suspend fun getDatasets(filter: String?, values: List<String>?): List<DatasetModel>{
    val l =  components.commmon.filterForm.apolloClient.query(DatasetsQuery(filter=Optional.present(filter), value=Optional.present(values))).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()

    val ll =  l.map{
        if (it.onDataset != null) {
            val title = it.onDataset.title?.elementAt(0)?.literal ?: "No tiene título"
            val description = it.onDataset.description?.elementAt(0)?.literal ?: "No tiene descripción"
            val formats = if (!it.onDataset.distributions.isNullOrEmpty()) it.onDataset.distributions.map { it.format?.subtype } else emptyList()
            DatasetModel(it.onDataset.id, title, it.onDataset.publisher?.label, description, formats)
        }else{
            null
        }
    }.filterNotNull()
    println("DATSETS: $ll")
    return ll
}
external interface ResourceInfoProps : Props {}

val resourceInfo = FC<ResourceInfoProps> {

    val navigate = useNavigate()
    val params: Params = useParams()

    fun handleClick() {
        navigate("/")
    }

    //var datasetInfo by useState( DatasetInfo("",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null))
    var datasetInfo by useState(mutableListOf<DatasetInfo>())
    var datasetInfoS by useState("")
    /*useEffect(emptyList<DatasetInfo>()) {
        val id = params["id"]

        GlobalScope.launch {

            val datasetsInfo = getResourceInfo(id)

            datasetsInfo.map{
                datasetInfo.add(it)
            }
            println("INFOOOO2 $datasetInfo")
        }
        println("INFOOOO $datasetInfo")

    }*/
    var listTestDatasets by useState(mutableListOf<DatasetInfo>())

    useEffect(emptyList<DatasetInfo>()) {
        GlobalScope.launch {
            val datasetsInfo = getResourceInfo(params["id"])

            listTestDatasets = mutableListOf()
            datasetsInfo.map{
                listTestDatasets.add(it)
            }

            println("A VER: $listTestDatasets")
        }

    }

    ResourceInfoElements{
        listTestDatasetsInfo = listTestDatasets
    }

/*
    if (datasetInfo.size > 0) {
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

                +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
            }
        }
        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"${datasetInfo.elementAt(0)?.title?.elementAt(0)}"
        }





        Paper {
            sx {
                width = Sizes.BoxList.Width
                marginRight = Auto.auto
                marginLeft = Auto.auto
                marginTop = 2.pct
                //paddingBottom = 10.pct
                //paddingTop = 6.pct
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
                        label = ReactNode("$it")
                        color = ChipColor.success
                    }
                }

                /* Chip {
                    label = ReactNode("Theme2")
                    color = ChipColor.success
                }*/
            }


            /*Grid {
            container = true
            spacing = responsive(2)
            Grid {
                item = true

                Chip {
                    label = ReactNode("Theme1")
                }
            }
            Grid {
                item = true

                Chip {
                    label = ReactNode("Theme2")
                }
            }
        }*/
        }
        Paper {
            sx {
                width = Sizes.BoxList.Width
                marginRight = Auto.auto
                marginLeft = Auto.auto
                marginTop = 2.pct
                //paddingBottom = 10.pct
                //paddingTop = 6.pct
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
                        TableRow {
                            TableCell {
                                className = ClassName("tableCell1")
                                +"Frecuencia de actualización"
                            }
                            TableCell {
                                className = ClassName("tableCell2")
                                +"${datasetInfo.elementAt(0)?.accrualPeriodicityRange} -- ${datasetInfo.elementAt(0)?.accrualPeriodicityPeriod}"
                            }
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
                //variant = TypographyVariant.subtitle1
                +"Otros títulos"
            }
            datasetInfo.drop(1).elementAt(0)?.title?.map {
                List {
                    ListItemButton {
                        //className = ClassName("tableCell2")
                        +"$it"
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
                //variant = TypographyVariant.subtitle1
                +"Descripción"
            }

            datasetInfo.elementAt(0)?.description?.map {
                List {
                    ListItemButton {
                        //className = ClassName("tableCell2")
                        +"$it"
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
                //variant = TypographyVariant.subtitle1
                +"Distribuciones"
            }
            datasetInfo.elementAt(0)?.accessURl?.map {
                List {
                    ListItemButton {
                        +"$it"
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
                //paddingBottom = 10.pct
                //paddingTop = 6.pct
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
                        //color = NamedColor.lime
                    }
                }

            }
            /* Grid {
            container = true
            spacing = responsive(2)
            Grid {
                item = true

                Chip {
                    label = ReactNode("Keyword1")
                }
            }
            Grid {
                item = true

                Chip {
                    label = ReactNode("Keyword2")
                }
            }
        }
*/

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
                        TableRow {
                            TableCell {
                                className = ClassName("tableCell1")
                                +"Cobertura geográfica"
                            }
                            TableCell {
                                className = ClassName("tableCell2")
                                +"${datasetInfo.elementAt(0)?.spatial}"
                            }
                        }
                        TableRow {
                            TableCell {
                                className = ClassName("tableCell1")
                                +"Idiomas"
                            }
                            TableCell {
                                className = ClassName("tableCell2")
                                /* TableRow{
                                 + "Inglés"
                             }
                             TableRow{
                                 + "Español"
                             }*/
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
                                            //color = NamedColor.lime
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
            }

        }
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

    }else{
        +"NO HAY ELEMENTOS"
        + "${datasetInfo}"
    }*/
}




