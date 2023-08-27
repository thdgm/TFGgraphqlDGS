package components.commmon.pages.api

import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsByPublisherQuery
import com.schema.DatasetsKeywordsQuery
import com.schema.DatasetsSomeInfoQuery
import com.schema.KeywordsByPublisherQuery
import com.schema.type.MapInput
import commonModels.ServicesModel
import components.commmon.Sizes
import components.commmon.pages.dataservice.mainPage.apolloClient
import csstype.Auto
import csstype.ClassName
import csstype.Color
import csstype.Display
import csstype.NamedColor
import csstype.Overflow
import csstype.Position
import csstype.pct
import csstype.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import models.ExtraQueryInfo
import mui.material.Box
import mui.material.Button
import mui.material.ButtonVariant
import mui.material.Chip
import mui.material.ChipColor
import mui.material.Divider
import mui.material.FormHelperText
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
import react.dom.events.ChangeEvent
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.onChange
import react.useEffect
import react.useRequiredContext
import react.useState



suspend fun getFirstQuery(filters: List<MapInput>, page: Int): List<ExtraQueryInfo>{
    console.log("PARAMETROOSSS111111 "+filters)
    console.log("PAGEEEEEEEEEEEEEEEEEEEEEEEEE "+page)
    val res =  apolloClient.query(DatasetsSomeInfoQuery(filter= Optional.present(filters), page = page, isDataset = true)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    console.log("ESTOOOOOOOOOOOO RESSSS Q1 ${res}")
    var queryInfo = res.map{
         if(it.onDataset != null){
            ExtraQueryInfo(
                it.onDataset.id,
                it.onDataset.publisher?.label,
                it.onDataset.publisher?.notation,
                null,
                it.onDataset.distributions?.map{ if(it.format?.type != null) "${it.format?.type}/${it.format?.subtype}" else null}?.filterNotNull(),
                it.onDataset.description?.map{it.literal},
                it.onDataset.title?.map{it.literal},
                null
            )

        }else{
            null
        }
    }?.filterNotNull()
    console.log("INFOOO")
    console.log(queryInfo)

    return queryInfo ?: emptyList()
}

suspend fun getSecondQuery(filters: List<MapInput>, page: Int): List<ExtraQueryInfo>{

    val res =  apolloClient.query(DatasetsByPublisherQuery(filter= Optional.present(filters), page = page, isDataset = false)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    console.log("ESTOOOOOOOOOOOO RESSSS Q2")
    console.log(res)
    var queryInfo = res.map{
        console.log( it)
        if(it.onDataset != null){
            var resources = it.onDataset.inCatalog?.map{it.resources}
            var services = resources?.map{it?.map{it.onDataService}}?.get(0)
            val distributions = services?.map{it?.isAccessedBy?.map{it.id}}?.filterNotNull()?.flatten()
            ExtraQueryInfo(
                it.onDataset.id,
                null,
                null,
                null,
                it.onDataset.distributions?.map{ if(it.format?.type != null) "${it.format?.type}/${it.format?.subtype}" else null},
               null,
                it.onDataset.title?.map{it.literal},
                distributions
            )
        }else{
            null
        }
    }?.filterNotNull()
    console.log("INFOOO")
    console.log(queryInfo)

    return queryInfo ?: emptyList()
}

suspend fun getThirdQuery(notation: String?, label: String?, page: Int): List<ExtraQueryInfo>{

    val res =  apolloClient.query(KeywordsByPublisherQuery(notation= Optional.present(notation), label= Optional.present(label), page = page)).execute().data?.publisher
    console.log("ESTOOOOOOOOOOOO RESSSS Q3")
    console.log(res)
    var queryInfo:ExtraQueryInfo?  = null
    if(res != null) {
        queryInfo = ExtraQueryInfo(
            null,
            res.notation,
            res.label,
            res.resources?.map { it.onDataset?.keywords?.map{it.literal}}?.filterNotNull()?.flatten(),
            null,
            null,
            null,
            null
        )
    }
    console.log("INFOOO")
    console.log(queryInfo)

    return if(queryInfo != null) listOf(queryInfo) else emptyList()
}

suspend fun getFourthQuery(filters: List<MapInput>, page: Int): List<ExtraQueryInfo>{

    val res =  apolloClient.query(DatasetsKeywordsQuery(filter= Optional.present(filters), page = page, isDataset = false)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    console.log("ESTOOOOOOOOOOOO RESSSS Q4")
    console.log(res)
    var queryInfo = res.map{
        console.log( it)
        if(it.onDataset != null){

            ExtraQueryInfo(
                it.onDataset.id,
                it.onDataset.publisher?.notation,
                it.onDataset.publisher?.label,
                it.onDataset.keywords?.map{it.literal},
                null,
                null,
                null,
                null
            )
        }else{
            null
        }
    }?.filterNotNull()
    console.log("INFOOO")
    console.log(queryInfo)

    return queryInfo ?: emptyList()
}

external interface ApiProps : Props {
    var getResultsFromQuery: (number: Int) -> Unit
}

var test = mutableListOf<ExtraQueryInfo>()

val endpointsList = FC<ApiProps>{props->
    var isLoading by useRequiredContext(IsLoadingContext)
    val coroutineScope = CoroutineScope(Dispatchers.Default)

    var inputs by useState(mutableListOf("", "", "", "", "",""))
    var pages by useState(mutableListOf(0, 0, 0, 0))
    var error by useState(mutableListOf(false, false, false, false))
    var resultList by useState(mutableListOf<ExtraQueryInfo>())

    val handleChange: FormEventHandler<HTMLDivElement>? = { event ->
        console.log((event.target as HTMLInputElement).value)
        console.log(event.currentTarget.id)
        error = mutableListOf(false, false, false, false, false)
        when(event.currentTarget.id){
            "ID1" -> {inputs[0] = (event.target as HTMLInputElement).value}
            "ID2" -> {inputs[1] = (event.target as HTMLInputElement).value}
            "ID3" -> {inputs[2] = (event.target as HTMLInputElement).value}
            "ID4" -> {inputs[3] = (event.target as HTMLInputElement).value}
            "ID5" -> {inputs[4] = (event.target as HTMLInputElement).value}
            "ID6" -> {inputs[5] = (event.target as HTMLInputElement).value}
        }
    }
    val handleChangePage: FormEventHandler<HTMLDivElement>? = { event ->
        console.log((event.target as HTMLInputElement).value)
        console.log(event.currentTarget.id)
        when(event.currentTarget.id){
            "Q1" -> {pages[0] = (event.target as HTMLInputElement).value.toInt()}
            "Q2" -> {pages[1] = (event.target as HTMLInputElement).value.toInt()}
            "Q3" -> {pages[2] = (event.target as HTMLInputElement).value.toInt()}
            "Q4" -> {pages[3] = (event.target as HTMLInputElement).value.toInt()}
        }
    }
    fun executeQuery(number: Int, param1: List<String>, param2: List<String>){
        coroutineScope.launch {
            isLoading = true
            console.log("PARAMETROOSSS111111 "+param1)
            console.log("PARAMETROOSSS111111 "+param2)
             val resInfo =  when (number) {
                0 -> {getFirstQuery(listOf(MapInput("Categoría", param1),MapInput("Publicador", param2)), pages[0])}
                1 -> {getSecondQuery(listOf(MapInput("Publicador", param1)), pages[1])}
                2 -> {getThirdQuery(param1[0], param2[0], pages[2])}
                3 -> {getFourthQuery(listOf(MapInput("Etiqueta", param1)), pages[3])}
                 else -> emptyList()
            }
            console.log("ESTO DEVUELVE1::: "+resInfo)
            resultList = resultList.filter {false} as MutableList<ExtraQueryInfo>
            resInfo.map{
                resultList.add(it)
            }

            isLoading = false
            console.log("FININNNNNNNNNNNNNNNNNNNN")
            console.log("ESTO DEVUELVE2::: "+resultList)
        }
    }

    val handleOnClick: (id: String, numberQ: Int) -> Unit = {id, numberQ->
        coroutineScope.launch {
            console.log("CLICK")
            when (id) {
                "Q1" -> {
                    if (inputs[0] == "" || inputs[1] == "") error[0] = true
                }

                "Q2" -> {
                    if (inputs[2] == "") error[1] = true
                }

                "Q3" -> {
                    if (inputs[3] == "" || inputs[4] == "") error[2] = true
                }

                "Q4" -> {
                    if (inputs[5] == "") error[3] = true
                }
            }
            if (!error[numberQ]) {
                console.log("OKEYYYYY")
                var param1 = inputs[numberQ].split("//")
                var param2 = emptyList<String>()
                if (numberQ == 0 || numberQ == 2) {
                    param2 = inputs[numberQ + 1].split("//")
                }
                //executeQuery(numberQ, param1, param2)

                isLoading = true
                console.log("PARAMETROOSSS111111 " + param1)
                console.log("PARAMETROOSSS111111 " + param2)
                val resInfo = when (numberQ) {
                    0 -> {
                        getFirstQuery(listOf(MapInput("Categoría", param1), MapInput("Publicador", param2)), pages[0])
                    }

                    1 -> {
                        getSecondQuery(listOf(MapInput("Publicador", param1)), pages[1])
                    }

                    2 -> {
                        getThirdQuery(param1[0], param2[0], pages[2])
                    }

                    3 -> {
                        getFourthQuery(listOf(MapInput("Etiqueta", param1)), pages[3])
                    }

                    else -> emptyList()
                }
                console.log("ESTO DEVUELVE1::: " + resInfo)
                resultList = resultList.filter { false } as MutableList<ExtraQueryInfo>
                test = test.filter { false } as MutableList<ExtraQueryInfo>
                resInfo.map {
                    test.add(it)
                    resultList.add(it)
                }

                isLoading = false
                console.log("FININNNNNNNNNNNNNNNNNNNN")
                console.log("ESTO DEVUELVE2::: " + resultList)
            }
        }
          /*  when (id) {
                "Q1" -> {
                    if (inputs[0] == "" || inputs[1] == "") error[0] = true
                }

                "Q2" -> {
                    if (inputs[2] == "") error[1] = true
                }

                "Q3" -> {
                    if (inputs[3] == "" || inputs[4] == "") error[2] = true
                }

                "Q4" -> {
                    if (inputs[5] == "") error[3] = true
                }
            }
            if (!error[numberQ]) {
                console.log("OKEYYYYY")
                var param1 = inputs[numberQ].split("//")
                var param2 = emptyList<String>()
                if (numberQ == 0 || numberQ == 2) {
                    param2 = inputs[numberQ + 1].split("//")
                }
                //executeQuery(numberQ, param1, param2)
            }

        */
        //inputs = mutableListOf("", "", "", "", "", "")

    }

    useEffect(isLoading){
        resultList = resultList.filter { false } as MutableList<ExtraQueryInfo>
        test.map{
            resultList.add(it)
        }
        console.log("CAMBIAAA RESSSSS::::::::: "+resultList)
    }
    Box {
        sx {
            marginLeft = 4.pct
        }
        Box{
            Stack {
                sx {
                    marginTop = 2.pct
                }
                direction = responsive(StackDirection.row)
                spacing = responsive(2.px)
                Button {
                    variant = ButtonVariant.contained
                    onClick = {handleOnClick("Q1",0)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener 10 datasets en función de una o más categorías y  uno o varios publicadores"
                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)
                if (error[0]) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
                }
                TextField {
                    id = "ID1"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce categorías separados por //")
                }
                TextField {
                    id = "ID2"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce publicadores separados por //")
                }
                TextField {
                    id = "Q1"
                    onChange = handleChangePage
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Número de página")
                    type = InputType.number
                }
            }
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
                if (!test.isNullOrEmpty()) {

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
                        test.map{
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
                                                        ReactHTML.div { +"--- $it" }
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
                                                        ReactHTML.div { +"--- $it" }
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
                                                        ReactHTML.div { +"--- $it" }
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
        Divider{
            sx{
                marginTop = 2.pct
            }
        }
        Box{
            Stack {
                sx {
                    marginTop = 2.pct
                }
                direction = responsive(StackDirection.row)
                spacing = responsive(2.px)
                Button {
                    variant = ButtonVariant.contained
                    onClick = {handleOnClick("Q2",1)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener servicios de datos contenidos en el catálogo al que pertenece un dataset de uno o varios publicadores"
                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)
                if (error[1]) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
                }
                TextField {
                    id = "ID3"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce publicadores separados por //")
                }
            }

        }
        Divider{
            sx{
                marginTop = 2.pct
            }
        }
        Box{
            Stack {
                sx {
                    marginTop = 2.pct
                }
                direction = responsive(StackDirection.row)
                spacing = responsive(2.px)
                Button {
                    variant = ButtonVariant.contained
                    onClick = {handleOnClick("Q3",2)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener palabras clave de un dataset ofrecido por uno o más publicadores"                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)
                if (error[2]) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
                }
                TextField {
                    id = "ID4"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce un identificador de un publicador")
                }
                TextField {
                    id = "ID5"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce un publicador")
                }
            }

        }
        Divider{
            sx{
                marginTop = 2.pct
            }
        }
        Box{
            Stack {
                sx {
                    marginTop = 2.pct
                }
                direction = responsive(StackDirection.row)
                spacing = responsive(2.px)
                Button {
                    variant = ButtonVariant.contained
                    onClick = {handleOnClick("Q4",3)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener publicadores que sirvan datasets con ciertas palabras clave"             }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)
                if (error[3]) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
                }
                TextField {
                    id = "ID6"
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce palabras clave separados por //")
                }
            }

        }
    }
}