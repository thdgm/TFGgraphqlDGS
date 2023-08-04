package components.commmon.pages.distribution.mainPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.AdminLevelsQuery
import com.schema.FormatsQuery
import com.schema.FrequenciesQuery
import com.schema.KeywordsQuery
import com.schema.PublishersQuery
import com.schema.ThemesQuery


import commonModels.DatasetModel
import commonModels.DistributionsModel
import components.commmon.Sizes
import components.commmon.pages.catalog.mainPage.getAllAdminLevels
import components.commmon.pages.catalog.mainPage.getAllPublishers
import components.commmon.searcher.Searcher
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.NamedColor
import csstype.None
import csstype.Position
import csstype.pct
import csstype.px
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
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
    "Formato",
    "ByteSize",
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


suspend fun getAllFormats(more: Boolean): MutableCollection<String>{

    if(!more){
        return apolloClient.query(FormatsQuery(page = 0, pageSize = -1)).execute().data?.getAllFormats?.filterNotNull() as MutableCollection<String>? ?: mutableListOf()
    }
    return apolloClient.query(FormatsQuery(page = 0, pageSize = 6)).execute().data?.getAllFormats?.filterNotNull() as MutableCollection<String>? ?: mutableListOf()
}

external interface FilterFormDistributionsProps:Props{
    var filterList: Collection<DistributionsModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var addList: Collection<String>

}

val filterFormDistributions = FC<FilterFormDistributionsProps> {props->

    var filtersTypesFields by useState(mutableListOf<Collection<String>>(listOf(),listOf()))

    useEffect(emptyList<Collection<String>>()) {
        val coroutineScope = CoroutineScope(Dispatchers.Default)
        coroutineScope.launch {
            val formats = getAllFormats(true)
            filtersTypesFields = mutableListOf(
                formats,
                listOf("0 Bytes","Menos de 100 bytes", "Entre 100 y 1000 bytes", "Entre 1000 y 10.000 bytes", "Entre 10.000 y 100.000 bytes","Más de 100.000 bytes")
            )
        }
    }

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
                        filterInfoDistributions{
                            this.filterName = value
                            this.filterFields = filtersTypesFields.elementAt(index)
                            this.updateFilterListMore = {
                                filtersTypesFields = mutableListOf(
                                    if (value == "Formato") getAllFormats(false)
                                    else filtersTypesFields.elementAt(0),
                                    filtersTypesFields.elementAt(1)
                                )
                            }
                            this.updateFilterListLess = {
                                filtersTypesFields = mutableListOf(
                                    if (value == "Formato") getAllFormats(true)
                                    else filtersTypesFields.elementAt(0),
                                    filtersTypesFields.elementAt(1)
                                )
                            }
                        }
                    }
                }

            }
        }
    }
}