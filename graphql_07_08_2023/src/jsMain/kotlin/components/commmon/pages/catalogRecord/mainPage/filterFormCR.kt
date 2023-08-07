package components.commmon.pages.catalogRecord.mainPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.AdminLevelsQuery
import com.schema.FormatsQuery
import com.schema.FrequenciesQuery
import com.schema.KeywordsQuery
import com.schema.PublishersQuery
import com.schema.ThemesQuery
import commonModels.CatalogRecordModel


import commonModels.DatasetModel
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
    "Hints",
    "Tipo de contenido",
)



suspend fun getAllContentTypes(more: Boolean): Collection<String>{
    return emptyList()
}
suspend fun getAllHints(more: Boolean): Collection<String>{
    return emptyList()
}

external interface FilterFormProps:Props{
    var filterList: Collection<CatalogRecordModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var addList: Collection<String>

}

val filterFormCR = FC<FilterFormProps> {props->

    var filtersTypesFields by useState(mutableListOf<Collection<String>>(listOf(),listOf()))

    useEffect(emptyList<Collection<String>>()) {
        val coroutineScope = CoroutineScope(Dispatchers.Default)
        coroutineScope.launch {
            val types = getAllContentTypes(true)
            val hints = getAllHints(true)
            filtersTypesFields = mutableListOf(hints,types)
        }
    }


    Paper {
        sx {
            width = Sizes.FilterFormPaper.Width
            marginRight = Auto.auto
            marginLeft = 3.pct//Auto.auto
            paddingBottom = 8.pct
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
            Divider {}
            FormControl {
                sx {
                    width = 100.pct
                }
                variant = FormControlVariant.standard
                filtersTypes.forEachIndexed{ index, value ->
                    FormLabel{
                        filterInfoCR {
                            this.filterName = value
                            this.filterFields = filtersTypesFields.elementAt(index)
                            this.updateFilterListMore = {
                                console.log("MOREEE2: "+value)
                                filtersTypesFields = mutableListOf(
                                    if (value == "Hints") getAllHints(false) else filtersTypesFields.elementAt(0),
                                    if (value == "Tipo de contenido") getAllContentTypes(false) else filtersTypesFields.elementAt(1)
                                )
                            }
                            this.updateFilterListLess = {
                                filtersTypesFields = mutableListOf(
                                    if (value == "Hints") getAllHints(true)
                                    else filtersTypesFields.elementAt(0),
                                    if (value == "Tipo de contenido") getAllContentTypes(true)
                                    else filtersTypesFields.elementAt(1)
                                    )
                            }
                        }
                    }
                }

            }
        }
    }
}