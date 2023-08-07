package components.commmon.pages.catalogRecord.mainPage


import commonModels.CatalogModel
import commonModels.CatalogRecordModel
import components.commmon.FilterListContextAll
import components.commmon.pages.catalog.mainPage.CatalogsPageProps
import components.commmon.pages.catalog.mainPage.getCatalogs
import components.commmon.pages.catalog.mainPage.getCatalogsNumber
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

suspend fun getCatalogRecords(filters: MutableMap<String, MutableMap<String, Collection<String>>>, page: Int): List<CatalogRecordModel>{

    /*val selectedFilters = filters["Catalogs"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }


    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}

    }

    val l =  apolloClient.query(DatasetsQuery(filter= Optional.present(filter), type=typeRes, page = page, isDataset = false, isCatalog = true,isDataService = false, isDatasetSeries = false)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
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
    return ll*/
    return emptyList()
}

suspend fun getCatalogRecordsNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>): Int {
    /*val selectedFilters = filters["Catalogs"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }
    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val number =  components.commmon.pages.catalog.mainPage.apolloClient.query(NumberOfResourcesQuery(filter= Optional.present(filter),type=resType)).execute().data?.numberOfResources
    return number ?: 0*/
    return 0
}
external interface CatalogRecordsPageProps : Props {}

val IsLoadingContext = createContext<StateInstance<Boolean>>()
val CatalogRecordsPage = FC<CatalogsPageProps> {
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var numberCatalogRecords by useState(0)
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listCatalogRecords by useState(mutableListOf<CatalogRecordModel>())

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            val numPage = selectedFiltersContext["CatalogRecords"]!!["Page"]
            val num = if(numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt()-1

            val newListCatalogs = getCatalogRecords(selectedFiltersContext,0)

            listCatalogRecords = mutableListOf()
            newListCatalogs.map{
                listCatalogRecords.add(it)
            }
        }
    }

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            console.log("TOTAL NUMBER")
            numberCatalogRecords = getCatalogRecordsNumber(selectedFiltersContext)
        }
    }

    val state = useState(false)
    val (isDisabled) = state

    IsLoadingContext(state) {


        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Catalog Records"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/CatalogRecords"
                }
            }
        }


        Box {
            sx {
                display = Display.flex
            }

            filterFormCR {
                filterList = listCatalogRecords
            }
            listCR {
                cRList = listCatalogRecords
                numberOfCR = numberCatalogRecords
                searchBy = ""
            }

        }
    }
}






