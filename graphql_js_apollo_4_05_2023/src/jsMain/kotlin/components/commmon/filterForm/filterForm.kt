package components.commmon.filterForm

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.Optional
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.AdminLevelsQuery
import com.schema.FormatsQuery
import com.schema.FrequenciesQuery
import com.schema.KeywordsQuery
import com.schema.PublishersQuery
import com.schema.ThemesQuery


import commonModels.DatasetModel
import components.commmon.Sizes
import components.commmon.accordeon.filterInfo
import components.commmon.layout.FilterListContext
import components.commmon.searcher.Searcher
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.Height
import csstype.NamedColor
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.*
import mui.icons.material.Sort
import mui.material.Box
import mui.material.Divider
import mui.material.FormControl
import mui.material.FormControlVariant
import mui.material.FormLabel
import mui.material.Grid
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.events.ChangeEvent
import react.dom.html.ReactHTML.b
import react.useEffect
import react.useRequiredContext
import react.useState

//var okHttpClient = OkHttpClient.Builder().build()
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

val filtersTypes = listOf(
    "Categoría",
    "Formato",
    "Publicador",
    "Nivel de Administración",
    "Frecuencia de Actualización",
    "Etiqueta"
)
/*
val filtersTypesFields = mutableListOf<Collection<String>>(
    listOf(),
    listOf(),
    listOf(),
    listOf(),
    listOf(),
    listOf()
    /*listOf("Empleo","Medio ambiente"),
    listOf("CSV","JSON"),
    listOf("Agencia estatal de meteorología", "Agencia española de protección de datos"),
    listOf("Administración Local", "Universidades"),
    listOf("Diario", "Mensual"),
    listOf("Estadísticas", "Hombres", "Mujeres")*/
)
*/


suspend fun getAllThemes(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(ThemesQuery(page = 0, pageSize = -1)).execute().data?.getAllThemes?.filterNotNull() ?: emptyList()

    }
    return apolloClient.query(ThemesQuery(page = 0, pageSize = 3)).execute().data?.getAllThemes?.filterNotNull() ?: emptyList()
}


suspend fun getAllFrequencies(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(FrequenciesQuery(page = 0, pageSize = -1)).execute().data?.getAllFrequencies?.filterNotNull() ?: emptyList()
    }
    return apolloClient.query(FrequenciesQuery(page = 0, pageSize = 6)).execute().data?.getAllFrequencies?.filterNotNull() ?: emptyList()
}
suspend fun getAllPublishers(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(PublishersQuery(page = 0, pageSize = -1)).execute().data?.getAllPublishers?.filterNotNull() ?: emptyList()
    }
    return apolloClient.query(PublishersQuery(page = 0, pageSize = 3)).execute().data?.getAllPublishers?.filterNotNull() ?: emptyList()
}
suspend fun getAllAdminLevels(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(AdminLevelsQuery(page = 0, pageSize = -1)).execute().data?.getAllAdminLabel?.filterNotNull() ?: emptyList()
    }
    return apolloClient.query(AdminLevelsQuery(page = 0, pageSize = 6)).execute().data?.getAllAdminLabel?.filterNotNull() ?: emptyList()
}

suspend fun getAllKeywords(): Collection<String>{
    return apolloClient.query(KeywordsQuery(language = Optional.present(null))).execute().data?.getAllKeywords?.filterNotNull() ?: emptyList()
}

suspend fun getAllFormats(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(FormatsQuery(page = 0, pageSize = -1)).execute().data?.getAllFormats?.filterNotNull() ?: emptyList()
    }
    return apolloClient.query(FormatsQuery(page = 0, pageSize = 3)).execute().data?.getAllFormats?.filterNotNull() ?: emptyList()
}

external interface FilterFormProps:Props{
    var filterList: Collection<DatasetModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var addList: Collection<String>

}

val filterForm = FC<FilterFormProps> {props->

    var filtersTypesFields by useState(mutableListOf<Collection<String>>(listOf(),listOf(),listOf(),listOf(),listOf(),listOf()))

    useEffect(emptyList<Collection<String>>()) {
        GlobalScope.launch {

            filtersTypesFields = mutableListOf(
                getAllThemes(true),
                getAllFormats(true),
                getAllPublishers(true),
                getAllAdminLevels(true),
                getAllFrequencies(true),
                getAllKeywords()
            )
            console.log("FILTERSS: $filtersTypesFields")
        }

    }


    var datasetList by useState(props.filterList)

    //var testList by useState(props.addList)
    var searchFilter by useState("")

    var testList by useRequiredContext(FilterListContext)

    Paper {
        sx {
            width = Sizes.FilterFormPaper.Width
            marginRight = Auto.auto
            marginLeft = 3.pct//Auto.auto
            paddingBottom = 8.pct
           // boxShadow = None.none
            backgroundColor = NamedColor.white//rgba(249, 249, 249, 0.87)
            position = Position.relative
            borderRadius = 20.px

        }
        className = ClassName("paper-left")
        Box {
            sx {
                marginLeft = 5.pct
                marginRight = 5.pct
                boxShadow = None.none
            }
            Box{
                Searcher{
                    this.filterList = datasetList
                    this.handleOnChange = props.handleOnChange//{event -> searchFilter= (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/}

                }
            }
            Divider {}
            Grid {
                container
                sx {
                    display = Display.flex
                    paddingTop = 4.pct
                    paddingBottom = 4.pct
                }
                Grid {
                    item
                    Sort()
                }
                Grid {
                    item
                    sx {
                        marginLeft = 4.pct
                    }
                    Typography {
                        variant = TypographyVariant.subtitle1
                        b{
                            +"Filtros"
                        }
                    }
                }
            }
            Divider {}
           // RadioGroup()
            Divider {}
            FormControl {
                sx {
                    width = 100.pct
                }
                variant = FormControlVariant.standard
                filtersTypes.forEachIndexed{ index, value ->
                    FormLabel {
                        filterInfo{
                            this.filterName = value
                            this.filterFields = filtersTypesFields.elementAt(index)
                            this.updateFilterListMore = {filtersTypesFields = mutableListOf(
                                if (value == "Categoría") getAllThemes(false) else getAllThemes(true),
                                if (value == "Formato") getAllFormats(false) else getAllFormats(true),
                                if (value == "Publicador") getAllPublishers(false) else getAllPublishers(true),
                                if (value == "Nivel de Administración") getAllAdminLevels(false) else getAllAdminLevels(true),
                                if (value == "Frecuencia de Actualización") getAllFrequencies(false) else getAllFrequencies(true),
                                if (value == "Etiqueta") getAllKeywords() else getAllKeywords()
                            ); console.log(value) }
                            this.updateFilterListLess = {filtersTypesFields = mutableListOf(
                                getAllThemes(true),
                                getAllFormats(true),
                                getAllPublishers(true),
                                getAllAdminLevels(true),
                                getAllFrequencies(true),
                                getAllKeywords()
                            );console.log(filtersTypesFields) }
                        }
                    }
                }

            }
        }
    }
}