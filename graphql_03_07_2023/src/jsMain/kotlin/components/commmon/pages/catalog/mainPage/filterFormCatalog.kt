package components.commmon.pages.catalog.mainPage

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.AdminLevelsQuery
import com.schema.PublishersQuery
import commonModels.CatalogModel
import components.commmon.Sizes
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
    "Publicador",
    "Nivel de administración",
    "Número de recursos",
)


suspend fun getAllPublishers(more: Boolean): Collection<String>{
    if(!more){
        return apolloClient.query(PublishersQuery(page = 0, pageSize = -1)).execute().data?.getAllPublishers?.filterNotNull() ?: emptyList()
    }
    return apolloClient.query(PublishersQuery(page = 0, pageSize = 6)).execute().data?.getAllPublishers?.filterNotNull() ?: emptyList()
}
suspend fun getAllAdminLevels(more: Boolean): Collection<String>{
    console.log("AQUÍIIIIIIIII11111")
    if(!more){
        return apolloClient.query(AdminLevelsQuery(page = 0, pageSize = -1)).execute().data?.getAllAdminLabel?.filterNotNull() ?: emptyList()
    }
    val res = apolloClient.query(AdminLevelsQuery(page = 0, pageSize = 6)).execute().data?.getAllAdminLabel?.filterNotNull() ?: emptyList()
    console.log("AQUÍIIIIIIIII "+ res)
    return res
}



external interface FilterFormCatalogProps:Props{
    var filterList: Collection<CatalogModel>
    var handleOnChange: (event: ChangeEvent<HTMLElement>) -> Unit
    var addList: Collection<String>

}

val filterFormCatalog = FC<FilterFormCatalogProps> {props->

    var filtersTypesFields by useState(mutableListOf<Collection<String>>(listOf(),listOf(),listOf()))

    useEffect(emptyList<Collection<String>>()) {
        val coroutineScope = CoroutineScope(Dispatchers.Default)
        coroutineScope.launch {
            val publishers = getAllPublishers(true)
            val adminLevels = getAllAdminLevels(true)
            filtersTypesFields = mutableListOf(publishers,
                adminLevels,
                listOf("Ningún recurso","Menos de 100", "Entre 100 y 1000", "Entre 1000 y 10.000", "Más de 10.000")
                )
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
                        filterInfoCatalog {
                            this.filterName = value
                            this.filterFields = filtersTypesFields.elementAt(index)
                            this.updateFilterListMore = {
                                console.log("MOREEE2: "+value)
                                filtersTypesFields = mutableListOf(
                                    if (value == "Publicador") getAllPublishers(false) else filtersTypesFields.elementAt(0),
                                    if (value == "Nivel de administración") getAllAdminLevels(false) else filtersTypesFields.elementAt(1),
                                    filtersTypesFields.elementAt(2),
                                )
                            }
                            this.updateFilterListLess = {
                                filtersTypesFields = mutableListOf(
                                    if (value == "Publicador") getAllPublishers(true)
                                    else filtersTypesFields.elementAt(0),
                                    if (value == "Nivel de administración")getAllAdminLevels(true)
                                    else filtersTypesFields.elementAt(1),
                                    filtersTypesFields.elementAt(2),

                                )
                            }

                        }
                    }
                }

            }
        }
    }
}