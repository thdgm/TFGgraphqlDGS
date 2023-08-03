package components.commmon.pages.dataservice.mainPage


import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import com.schema.NumberOfResourcesQuery
import com.schema.type.MapInput
import commonModels.CatalogModel
import commonModels.ServicesModel
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

suspend fun getServices(filters: MutableMap<String, MutableMap<String, Collection<String>>>, typeRes: String, page: Int): List<ServicesModel>{

    val selectedFilters = filters["DataServices"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }


    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}

    }

    val l =  apolloClient.query(DatasetsQuery(filter= Optional.present(filter), type=typeRes, page = page, isDataset = false, isCatalog = false,isDataService = true, isDatasetSeries = false)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    val ll =  l.map{
        if (it.onDataService != null) {
            val title = if(!it.onDataService.title.isNullOrEmpty()) it.onDataService.title?.elementAt(0)?.literal ?: "No tiene título" else "No tiene título"
            val description = if (!it.onDataService.description.isNullOrEmpty()) it.onDataService.description?.elementAt(0)?.literal ?: "No tiene descripción" else  "No tiene descripción"

            ServicesModel(it.onDataService.id, title, description,it.onDataService.issued.toString(),it.onDataService.modified.toString(), it.onDataService.numberOfServedResources ?: 0)
        }else{
            null
        }
    }.filterNotNull()
    console.log("ESTO CARGOOOOO: "+ll)
    return ll
}

suspend fun getServicesNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>,resType:String): Int {
    val selectedFilters = filters["DataServices"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }
    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val number =  apolloClient.query(NumberOfResourcesQuery(filter= Optional.present(filter),type=resType)).execute().data?.numberOfResources
    return number ?: 0
}

val IsLoadingContext = createContext<StateInstance<Boolean>>()
external interface DataServicesPageProps : Props {}


val DataServicesPage = FC<DataServicesPageProps> {
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var numberServices by useState(0)
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listServices by useState(mutableListOf<ServicesModel>())
    val state = useState(false)
    val (isDisabled) = state

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            val numPage = selectedFiltersContext["DataServices"]!!["Page"]
            val num = if(numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt()-1

            val newListServices = getServices(selectedFiltersContext, "data_service",num)

            listServices = mutableListOf()
            newListServices.map{
                listServices.add(it)
            }
        }
    }

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            console.log("TOTAL NUMBER")
            numberServices = getServicesNumber(selectedFiltersContext,"data_service")
        }
    }


    IsLoadingContext(state) {
        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Data Services"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/DataServices"
                }
            }
        }


        Box {
            sx {
                display = Display.flex
            }

            filterFormDataServ {
                filterList = listServices
            }
            listDataServ {
                dServList = listServices
                searchBy = ""
                numberOfServices = numberServices
            }
        }
    }
}






