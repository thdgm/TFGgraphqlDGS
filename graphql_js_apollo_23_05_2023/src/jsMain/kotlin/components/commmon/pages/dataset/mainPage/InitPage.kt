package components.commmon.pages.dataset.mainPage

import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import commonModels.DatasetModel
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
import react.dom.events.ChangeEvent
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


suspend fun getDatasets(filter: String?, values: List<String>?, page: Int): List<DatasetModel>{
    console.log("CARGAAAAAANNNDDODDOOOOOO VALUES1")
    val l =  apolloClient.query(DatasetsQuery(filter=Optional.present(filter), value=Optional.present(values), page = page)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    console.log("CARGAAAAAANNNDDODDOOOOOO VALUES: $l")
    val ll =  l.map{
        if (it.onDataset != null) {
            val title = if(!it.onDataset.title.isNullOrEmpty()) it.onDataset.title?.elementAt(0)?.literal ?: "No tiene título" else "No tiene título"
            val description = if (!it.onDataset.description.isNullOrEmpty()) it.onDataset.description?.elementAt(0)?.literal ?: "No tiene descripción" else  "No tiene descripción"
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
    //var filterSelectedList by useState(selectedFiltersList)
    var listTestDatasets by useState(mutableListOf<DatasetModel>())

    var changePage: (event: ChangeEvent<*>, value: Number) -> Unit = { e, value ->
        console.log("PAGINAAA NUMERO:: $value")
    }
    console.log("CARGAAAAAANNNDDODDOOOOOO")

    useEffect(emptyList<DatasetModel>()) {
        GlobalScope.launch {
            val newListDatsets = getDatasets("all", listOf(),0)
            println("A VER1: $newListDatsets")

            listTestDatasets = mutableListOf()
            newListDatsets.map{
                listTestDatasets.add(it)
            }

            println("A VER: $listTestDatasets")
        }

    }

/*    val state = useState(filtersSelectedMap)
    val (listFiltersTest) = state

    FilterListContext(state) {*/

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
                        +"/datasets"
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
                   // deleteElement = { value -> filterSelectedList = filterSelectedList.filter { it != value } }
                    this.updateDatasetsList =  {e,v -> listTestDatasets = getDatasets("all", listOf(),v.toInt()) as MutableList<DatasetModel>}

                }


            }

}






