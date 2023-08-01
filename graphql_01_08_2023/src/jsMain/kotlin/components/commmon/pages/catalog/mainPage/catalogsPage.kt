package components.commmon.pages.catalog.mainPage

import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import com.schema.NumberOfResourcesQuery
import com.schema.type.MapInput
import commonModels.CatalogModel
import components.commmon.FilterListContextAll
import components.commmon.pages.dataset.mainPage.checkIfSelectedFiltersIsEmpty
import csstype.ClassName
import csstype.Display
import csstype.pct
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Typography
import mui.system.sx
import react.FC
import react.Props
import react.StateInstance
import react.createContext

import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.useEffect
import react.useRequiredContext
import react.useState

suspend fun getCatalogs(filters: MutableMap<String, MutableMap<String, Collection<String>>>, typeRes: String, page: Int): List<CatalogModel>{

    val selectedFilters = filters["Catalogs"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }


    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}

    }

    val l =  apolloClient.query(DatasetsQuery(filter= Optional.present(filter), type=typeRes, page = page, isDataset = false, isCatalog = true)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    val ll =  l.map{
        if (it.onCatalog != null) {
            val title = if(!it.onCatalog.title.isNullOrEmpty()) it.onCatalog.title?.elementAt(0)?.literal ?: "No tiene título" else "No tiene título"
            val description = if (!it.onCatalog.description.isNullOrEmpty()) it.onCatalog.description?.elementAt(0)?.literal ?: "No tiene descripción" else  "No tiene descripción"

            CatalogModel(it.onCatalog.id, title, description,it.onCatalog.issued.toString(),it.onCatalog.modified.toString(), it.onCatalog.numberOfResources ?: 0)
        }else{
            null
        }
    }.filterNotNull()
    console.log("ESTO CARGOOOOO: "+ll)
    return ll
}

suspend fun getCatalogsNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>,resType:String): Int {
    val selectedFilters = filters["Catalogs"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }
    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val number =  apolloClient.query(NumberOfResourcesQuery(filter= Optional.present(filter),type=resType)).execute().data?.numberOfResources
    return number ?: 0
}

fun checkIfSelectedFiltersIsEmpty(selectedFilters: Collection<MapInput>?): Boolean{
    if (selectedFilters.isNullOrEmpty()){
        return true
    }
    selectedFilters?.map{
        if (it.values.isNotEmpty()){
            return false
        }
    }
    return true
}

external interface CatalogsPageProps : Props {}

val IsLoadingContext = createContext<StateInstance<Boolean>>()
val CatalogsPage = FC<CatalogsPageProps> {
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var numberCatalogs by useState(0)
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listCatalogs by useState(mutableListOf<CatalogModel>())

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
           val numPage = selectedFiltersContext["Catalogs"]!!["Page"]
           val num = if(numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt()-1

            val newListCatalogs = getCatalogs(selectedFiltersContext, "catalog",num)

            listCatalogs = mutableListOf()
            newListCatalogs.map{
                listCatalogs.add(it)
            }
        }
    }

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            console.log("TOTAL NUMBER")
            numberCatalogs = getCatalogsNumber(selectedFiltersContext,"catalog")
        }
    }

    val state = useState(false)
    val (isDisabled) = state

    IsLoadingContext(state) {
        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Catalogs"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/Catalogs"
                }
            }
        }


        Box {
            sx {
                display = Display.flex
            }
            filterFormCatalog {
                filterList = listCatalogs
            }
            listCatalog {
                numberOfCatalogs = numberCatalogs
                catalogsList = listCatalogs
                searchBy = ""
            }

        }
    }
}






