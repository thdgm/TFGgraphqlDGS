package components.commmon.pages.datasetSeries.mainPage


import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import com.schema.NumberOfResourcesQuery
import com.schema.type.MapInput
import commonModels.CatalogModel
import commonModels.SeriesModel
import components.commmon.FilterListContextAll
import components.commmon.pages.catalog.mainPage.IsLoadingContext
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

suspend fun getSeries(filters: MutableMap<String, MutableMap<String, Collection<String>>>, typeRes: String, page: Int): List<SeriesModel>{

    val selectedFilters = filters["DatasetSeries"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }

    val filter = if (components.commmon.pages.dataset.mainPage.checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */ })){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val l =  components.commmon.pages.catalog.mainPage.apolloClient.query(DatasetsQuery(filter= Optional.present(filter), type=typeRes, page = page, isDataset = false, isCatalog = false,isDataService = false, isDatasetSeries = true)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
    val ll =  l.map{
        if (it.onDatasetSeries != null) {
            val title = if(!it.onDatasetSeries.title.isNullOrEmpty()) it.onDatasetSeries.title?.elementAt(0)?.literal ?: "No tiene título" else "No tiene título"
            val description = if (!it.onDatasetSeries.description.isNullOrEmpty()) it.onDatasetSeries.description?.elementAt(0)?.literal ?: "No tiene descripción" else  "No tiene descripción"

            SeriesModel(it.onDatasetSeries.id, title, description,it.onDatasetSeries.issued.toString(),it.onDatasetSeries.modified.toString(), it.onDatasetSeries.numberOfMembersDatasets ?: 0)
        }else{
            null
        }
    }.filterNotNull()
    console.log("ESTO CARGOOOOO: "+ll)
    return ll
}

suspend fun getSeriesNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>,resType:String): Int {
    val selectedFilters = filters["DatasetSeries"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }
    val filter = if (components.commmon.pages.dataset.mainPage.checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */ })){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val number =  components.commmon.pages.catalog.mainPage.apolloClient.query(NumberOfResourcesQuery(filter= Optional.present(filter),type=resType)).execute().data?.numberOfResources
    return number ?: 0
}

val IsLoadingContext = createContext<StateInstance<Boolean>>()

external interface DatasetSeriesPageProps : Props {}

val DatasetSeriesPage = FC<DatasetSeriesPageProps> {

    var numberSeries by useState(0)
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listSeries by useState(mutableListOf<SeriesModel>())

    val state = useState(false)
    val (isDisabled) = state
    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            val numPage = selectedFiltersContext["DatasetSeries"]!!["Page"]
            val num = if(numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt()-1

            val newListSeries = getSeries(selectedFiltersContext, "dataset_series",num)

            listSeries = mutableListOf()
            newListSeries.map{
                listSeries.add(it)
            }
        }
    }

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            console.log("TOTAL NUMBER")
            numberSeries = getSeriesNumber(selectedFiltersContext,"dataset_series")
        }
    }
    IsLoadingContext(state) {
        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Data Series"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/DatasetSeries"
                }
            }
        }


        Box {
            sx {
                display = Display.flex
            }
            filterFormDataSeries {
                filterList = listSeries
            }
            listDataSeries {
                datasetSeriesList = listSeries
                searchBy = ""
                numberOfSeries = numberSeries
            }

        }
    }
}






