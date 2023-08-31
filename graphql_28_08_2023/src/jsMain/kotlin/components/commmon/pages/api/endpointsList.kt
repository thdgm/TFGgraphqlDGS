package components.commmon.pages.api

import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsByPublisherQuery
import com.schema.DatasetsKeywordsQuery
import com.schema.DatasetsSomeInfoQuery
import com.schema.KeywordsByPublisherQuery
import com.schema.type.MapInput
import components.commmon.pages.dataservice.mainPage.apolloClient
import csstype.Auto
import csstype.ClassName
import csstype.Color
import csstype.Display
import csstype.MarginTop
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
import mui.material.CircularProgress
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
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.onChange
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

    val res =  apolloClient.query(DatasetsByPublisherQuery(filter= Optional.present(filters), page = page, isDataset = true)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
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

suspend fun getThirdQuery(label: String?,notation: String?, page: Int): List<ExtraQueryInfo>{
console.log("PARAMSSSSSSSSS::: "+ notation + " -- "+label)
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
    console.log("PARAMSSSSSSSSS::: "+ filters)
    console.log("PAGEEEEEE:::::::: "+page)
    val res =  apolloClient.query(DatasetsKeywordsQuery(filter= Optional.present(filters), page = page, isDataset = true)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
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

var result1 = mutableListOf<ExtraQueryInfo>()
var result2 = mutableListOf<ExtraQueryInfo>()
var result3 = mutableListOf<ExtraQueryInfo>()
var result4 = mutableListOf<ExtraQueryInfo>()
var error = mutableListOf(false, false, false, false)

val endpointsList = FC<Props>{
    var isLoading by useRequiredContext(IsLoadingContext)
    val coroutineScope = CoroutineScope(Dispatchers.Default)

    var inputs by useState(mutableListOf("", "", "", "", "",""))
    var pages by useState(mutableListOf(0, 0, 0, 0))
    var error1 by useState(false)
    var error2 by useState(false)
    var error3 by useState(false)
    var error4 by useState(false)
    var input3 by useState("")
    var input4 by useState("")
    var queryActual by useState("")
    val handleChange: FormEventHandler<HTMLDivElement>? = { event ->
        //error = mutableListOf(false, false, false, false, false)
        error1 = false
        error2 = false
        error3 = false
        error4 = false
        when(event.currentTarget.id){
            "ID1" -> {inputs[0] = (event.target as HTMLInputElement).value}
            "ID2" -> {inputs[1] = (event.target as HTMLInputElement).value}
            "ID3" -> {inputs[2] = (event.target as HTMLInputElement).value}
            "ID4" -> {

                inputs[3] = (event.target as HTMLInputElement).value
                inputs[4] = ""
                input3 = (event.target as HTMLInputElement).value
                input4 = ""
                console.log(inputs[3])
            }
            "ID5" -> {
                inputs[3] = ""
                inputs[4] = (event.target as HTMLInputElement).value
                input4 = (event.target as HTMLInputElement).value
                input3 = ""
            }
            "ID6" -> {inputs[5] = (event.target as HTMLInputElement).value}
        }
    }
    val handleChangePage: FormEventHandler<HTMLDivElement>? = { event ->
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
             val resInfo =  when (number) {
                0 -> {getFirstQuery(listOf(MapInput("Categoría", param1),MapInput("Publicador", param2)), pages[0])}
                1 -> {getSecondQuery(listOf(MapInput("Publicador", param1)), pages[1])}
                2 -> {getThirdQuery(param2[0],param1[0], pages[2])}
                3 -> {getFourthQuery(listOf(MapInput("Etiqueta", param1)), pages[3])}
                 else -> emptyList()
            }
            when (number) {
                0 -> {
                    result1 = result1.filter {false} as MutableList<ExtraQueryInfo>
                    resInfo.map{
                        result1.add(it)
                    }
                }
                1 -> {
                    result2 = result2.filter {false} as MutableList<ExtraQueryInfo>
                    resInfo.map{
                        result2.add(it)
                    }
                }
                2 -> {
                    result3 = result3.filter {false} as MutableList<ExtraQueryInfo>
                    resInfo.map{
                        result3.add(it)
                    }
                }
                3 -> {
                    result4 = result4.filter {false} as MutableList<ExtraQueryInfo>
                    resInfo.map{
                        result4.add(it)
                    }
                }
            }
            isLoading = false
            queryActual = ""
        }
    }

    val handleOnClick: (id: String, numberQ: Int) -> Unit = { id, numberQ ->
        var isOk = true
        when (id) {
            "Q1" -> {
                if (inputs[0] == "" || inputs[1] == "") {
                    error1 = true
                    isOk = false
                }
                queryActual = "Q1"
            }

            "Q2" -> {
                if (inputs[2] == "") {
                    error2 = true
                    isOk = false
                }
                queryActual = "Q2"
            }

            "Q3" -> {
                if (inputs[3] == "" && inputs[4] == "") {
                    error3 = true
                    isOk = false
                }
                queryActual = "Q3"
            }

            "Q4" -> {
                if (inputs[5] == "") {
                    isOk = false
                    error4 = true
                }
                queryActual = "Q4"
            }
        }

        console.log("ERORRRESSSSS::::::::::: "+error)
        if (isOk) {
            var param1 = inputs[numberQ].split("//")
            if(numberQ != 0 && numberQ != 3){
                param1 = inputs[numberQ+1].split("//")
            }else if(numberQ == 3){
                param1 = inputs[5].split("//")
            }
            var param2 = emptyList<String>()
            console.log("NUMBERRRRRR:: :"+numberQ)
            console.log("IINNPUTTTSSSS:: :"+inputs)
            if (numberQ == 0) {
                param2 = inputs[1].split("//")
            }else if(numberQ == 2){
                param2 = inputs[4].split("//")
            }
            console.log("PARAMETROSSSSS__________ "+param1+" - - "+param2)
            executeQuery(numberQ, param1, param2)
        }

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


                TextField {
                    id = "ID1"
                    disabled = isLoading
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce categorías separados por //. Ej: Deporte//Hacienda")
                }
                TextField {
                    id = "ID2"
                    disabled = isLoading
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce publicadores separados por //. Ej: Agencia Estatal de Meteorología")
                }
                TextField {
                    id = "Q1"
                    disabled = isLoading
                    onChange = handleChangePage
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Número de página")
                    type = InputType.number
                }
                if (error1) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
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
                if (isLoading && queryActual == "Q1") {
                    CircularProgress {
                        className = ClassName("circularProgressInfo")
                    }
                }
                if ((!result1.isNullOrEmpty() && !isLoading) || (!result1.isNullOrEmpty() && isLoading && queryActual != "Q1")) {
                    Paper {
                        sx {
                            marginRight = Auto.auto
                            marginLeft = Auto.auto
                            marginTop = 2.pct
                            backgroundColor = NamedColor.white
                            position = Position.relative
                        }
                        elevation = 0
                        result1.map{
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
                                    }
                                }
                            }
                            Divider()
                            Divider()
                        }
                    }
                }else if(result1.isNullOrEmpty() && !isLoading){
                    Typography{
                        sx {
                            marginTop = 2.pct
                        }
                        className = ClassName("EmptyAPIMsg")
                        + "No se han encontrado resultados"
                    }
                    Typography{
                        className = ClassName("EmptyAPIMsg")
                        + "Realiza una consulta"
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
                    +"Obtener 10 servicios de datos contenidos en el catálogo al que pertenece un dataset de uno o varios publicadores"
                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)

                TextField {
                    id = "ID3"
                    disabled=isLoading
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce publicadores separados por //. Ej: Agencia Estatal de Meteorología")
                }
                TextField {
                    id = "Q2"
                    disabled=isLoading
                    onChange = handleChangePage
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Número de página")
                    type = InputType.number
                }
                if (error2) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
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
                if (isLoading && queryActual == "Q2") {
                    CircularProgress {
                        className = ClassName("circularProgressInfo")
                    }
                }
                if ((!result2.isNullOrEmpty() && !isLoading)  || (!result2.isNullOrEmpty() && isLoading && queryActual != "Q2")) {
                    Paper {
                        sx {
                            marginRight = Auto.auto
                            marginLeft = Auto.auto
                            marginTop = 2.pct
                            backgroundColor = NamedColor.white
                            position = Position.relative
                        }
                        elevation = 0
                        result2.map{
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
                                    }
                                }
                            }
                            Divider()
                            Divider()
                        }
                    }
                }
                else if(result2.isNullOrEmpty() && !isLoading){
                    Typography{
                        sx {
                            marginTop = 2.pct
                        }
                        className = ClassName("EmptyAPIMsg")
                        + "No se han encontrado resultados"
                    }
                    Typography{
                        className = ClassName("EmptyAPIMsg")
                        + "Realiza una consulta"
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
                    onClick = {handleOnClick("Q3",2)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener palabras clave de un dataset ofrecido por un publicador"
                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)

                TextField {
                    id = "ID4"
                    disabled=isLoading
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce un identificador de un publicador. Ej: A02002834")
                    value = input3
                }
                Typography{
                    + "O"
                }
                TextField {
                    id = "ID5"
                    disabled=isLoading
                    onChange = handleChange
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce un publicador. Ej: Agencia Estatal de Meteorología")
                    value = input4
                }
                if (error3) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
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
                if (isLoading && queryActual == "Q3") {
                    CircularProgress {
                        className = ClassName("circularProgressInfo")
                    }
                }
                if ((!result3.isNullOrEmpty() && !isLoading) || (!result3.isNullOrEmpty() && isLoading && queryActual != "Q3")) {
                    Paper {
                        sx {
                            marginRight = Auto.auto
                            marginLeft = Auto.auto
                            marginTop = 2.pct
                            backgroundColor = NamedColor.white
                            position = Position.relative
                        }
                        elevation = 0
                        result3.map{
                            TableContainer {
                                className = ClassName("tableContainerIntro")
                                Table {
                                    className = ClassName("tableInfo")
                                    TableBody {

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
                else if(result3.isNullOrEmpty() && !isLoading){
                    Typography{
                        sx {
                            marginTop = 2.pct
                        }
                        className = ClassName("EmptyAPIMsg")
                        + "No se han encontrado resultados"
                    }
                    Typography{
                        className = ClassName("EmptyAPIMsg")
                        + "Realiza una consulta"
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
                    onClick = {handleOnClick("Q4",3)}
                    +"GET"
                }
                Typography {
                    className = ClassName("endpoint_info")
                    +"Obtener 10 publicadores que sirvan datasets con ciertas palabras clave"
                }
            }
            Stack {
                sx {
                    marginBottom = 2.pct
                    marginTop = 2.pct

                }
                direction = responsive(StackDirection.column)
                spacing = responsive(2.px)

                TextField {
                    id = "ID6"
                    onChange = handleChange
                    disabled=isLoading
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Introduce palabras clave separados por //. Ej: Legislación//ePUB")
                }
                TextField {
                    id = "Q4"
                    disabled=isLoading
                    onChange = handleChangePage
                    className = ClassName("textFieldApiParam")
                    label = ReactNode("Número de página")
                    type = InputType.number
                }
                if (error4) {
                    FormHelperText {
                        sx {
                            color = Color("red")
                        }
                        +"Introduce un valor válido para los parámetros"
                    }
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
                if (isLoading && queryActual == "Q4") {
                    CircularProgress {
                        className = ClassName("circularProgressInfo")
                    }
                }
                if ((!result4.isNullOrEmpty() && !isLoading) || (!result4.isNullOrEmpty() && isLoading && queryActual != "Q4")) {
                    Paper {
                        sx {
                            marginRight = Auto.auto
                            marginLeft = Auto.auto
                            marginTop = 2.pct
                            backgroundColor = NamedColor.white
                            position = Position.relative
                        }
                        elevation = 0
                        result4.map{
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
                else if(result4.isNullOrEmpty() && !isLoading){
                    Typography{
                        sx {
                            marginTop = 2.pct
                        }
                        className = ClassName("EmptyAPIMsg")
                        + "No se han encontrado resultados"
                    }
                    Typography{
                        className = ClassName("EmptyAPIMsg")
                        + "Realiza una consulta"
                    }
                }
            }

        }
    }
}