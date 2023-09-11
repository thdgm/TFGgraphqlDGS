package components.commmon.pages.dataset.mainPage

import FiltersMap.FiltersMapKeys
import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import com.schema.NumberOfResourcesQuery
import com.schema.type.MapInput
import commonModels.DatasetModel
import components.commmon.FilterListContextAll
import csstype.ClassName
import csstype.Display
import csstype.pct
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
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
import react.useRequiredContext





suspend fun getDatasets(filters: MutableMap<String, MutableMap<String, Collection<String>>>, values: String, page: Int): List<DatasetModel>{

    val selectedFilters = filters["Datasets"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>)}


    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}

    }
    //console.log("FILTROO: "+selectedFilters)
    //console.log("PAGEEE: "+page)
    val l =  apolloClient.query(DatasetsQuery(filter=Optional.present(filter), type=values, page = page, isDataset = true, isCatalog = false,isDataService = false, isDatasetSeries = false)).execute().data?.resourcesByFilter?.filterNotNull() ?: emptyList()
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
   // console.log("ESTO CARGOOOOO: "+ll)
    return ll
}

suspend fun getResourcesNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>,resType:String): Int {
    val selectedFilters = filters["Datasets"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>)}
    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}

    }
    val number =  apolloClient.query(NumberOfResourcesQuery(filter=Optional.present(filter),type=resType)).execute().data?.numberOfResources
    console.log("NFILTERSSSSSS::: "+ filter)

    val v =  number ?: 0
    console.log("NUM DATASETTSSSS::: "+ v)
    return v
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
external interface InitPageProps : Props {}

val IsLoadingContext = createContext<StateInstance<Boolean>>()

val InitPage = FC<InitPageProps> { props->
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var searchFilter by useState("")
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listTestDatasets by useState(mutableListOf<DatasetModel>())
    var numberDatasets by useState(0)
    var pageNumber by useState(0)
    var cargandoNum by useState(false)

   /* var miVariable: MutableMap<String, MutableMap<String, Collection<String>>> =
        selectedFiltersContext.mapValues { it.value.toMutableMap() }.toMutableMap()*/
    useEffect(selectedFiltersContext) {

        coroutineScope.launch {
            val numPage = selectedFiltersContext["Datasets"]!!["Page"]

            var num = if (numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt() - 1
            /*if (!numPage.isNullOrEmpty()){

                if (numPage?.first()?.toInt() != pageNumber) {
                    pageNumber = numPage?.first()?.toInt()!!
                } else {
                    num = 0
                }
            }*/

            val newListDatsets = getDatasets(selectedFiltersContext, "dataset",num)

            listTestDatasets = mutableListOf()
            newListDatsets.map{
                listTestDatasets.add(it)
            }
        }
    }



    useEffect(selectedFiltersContext) {
        //coroutineScope.launch {
        kotlinx.coroutines.GlobalScope.launch {
            cargandoNum = true
            val n = getResourcesNumber(selectedFiltersContext, "dataset")
            numberDatasets = n
            cargandoNum = false
            console.log("TOTAL NUMBER_ " + numberDatasets + " - " + n)
        }

    }


    val filtersMap = FiltersMapKeys()


    val state = useState(filtersMap.disabled)
    val (isDisabled) = state

    IsLoadingContext(state) {



            Box {
                className = ClassName("box-init-page")

                ReactHTML.h1 {
                    className = ClassName("titleInit")
                    +"Conjuntos de datos"
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
                    /*this.handleOnChange = { event ->
                        searchFilter =
                            (event.target as HTMLInputElement).value/*datasetList = datasetList.filter { it.title!!.contains((event.target as HTMLInputElement).value)}*/
                    }*/
                }

                list {
                   // flag = pageNumber
                    numberOfDatasets = numberDatasets
                  //  searchBy = searchFilter
                    cargando = cargandoNum
                    filterList = listTestDatasets
                    //this.updateDatasetsList = {e,v -> pageNumber = v.toInt()}
                }
            }
    }

}






