package components.commmon.layout

import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.Optional
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.DatasetsQuery
import commonModels.DatasetModel
import components.commmon.filterForm.filterForm
import csstype.ClassName
import csstype.Display
import csstype.pct
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.StateInstance
import react.createContext
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.useState
import react.useEffect

/*val listTestDatasets = listOf<DatasetModel>(
    DatasetModel("Titulo1", "Publisher1","Description1",listOf("JSON","CSV") ),
    DatasetModel("Titulo2", "Publisher2","Description2",listOf("JSON","CSV") )
)*/


var selectedFiltersList = listOf<String>("CSV", "Ayuntamiento", "Diario")
val filtersSelectedMap = mutableMapOf<String,Collection<String>>(
    "Categoría" to listOf(),
    "Formato" to listOf(),
    "Publicador" to listOf(),
    "Nivel de Administración" to listOf(),
    "Fecuencia de Actualización" to listOf(),
    "Etiqueta" to listOf()
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

external interface InitPageProps : Props {}



//val FilterListContext = createContext<StateInstance<List<String>>>()
val FilterListContext = createContext<StateInstance<MutableMap<String,Collection<String>>>>()

val InitPage = FC<InitPageProps> { props->



    var searchFilter by useState("")
    var filterSelectedList by useState(selectedFiltersList)
    var listTestDatasets by useState(mutableListOf<DatasetModel>())

    useEffect(emptyList<DatasetModel>()) {
        GlobalScope.launch {
            val newListDatsets = getDatasets("all", listOf())

            listTestDatasets = mutableListOf()
            newListDatsets.map{
                listTestDatasets.add(it)
            }
            println("A VER1: $newListDatsets")
            println("A VER: $listTestDatasets")
        }

    }

    val state = useState(filtersSelectedMap)
    val (listFiltersTest) = state

    FilterListContext(state) {

            Box {
                className = ClassName("box-init-page")

                ReactHTML.h1 {
                    className = ClassName("titleInit")
                    +"Catálogo de datos"
                }
                Breadcrumbs {
                    sx {
                        marginLeft = 10.pct
                        marginBottom = 1.pct
                    }
                    ariaLabel = "breadcrumb"
                    Typography {
                        +"/Conjunto de datos"
                    }
                }
            }


            Box {
                sx {
                    display = Display.flex
                }
                filterForm {
                    filterList = listTestDatasets
                    this.handleOnChange = { event ->
                        searchFilter =
                            (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/
                    }
                    //addList = listFiltersTest//filterSelectedList
                }

                list {
                    //listSelectedFilters = listFiltersTest//filterSelectedList
                    searchBy = searchFilter
                    filterList = listTestDatasets
                    deleteElement = { value -> filterSelectedList = filterSelectedList.filter { it != value } }
                }


            }
    }
}






