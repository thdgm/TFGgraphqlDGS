package components.commmon.pages.distribution.mainPage


import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsQuery
import com.schema.DistributionsQuery
import com.schema.NumberOfDistributionsQuery
import com.schema.NumberOfResourcesQuery
import com.schema.type.MapInput
import commonModels.CatalogModel
import commonModels.DistributionsModel
import components.commmon.FilterListContextAll
import components.commmon.pages.catalog.mainPage.getCatalogs
import components.commmon.pages.catalog.mainPage.getCatalogsNumber
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

suspend fun getDistributions(filters: MutableMap<String, MutableMap<String, Collection<String>>>, page: Int): List<DistributionsModel>{

    val selectedFilters = filters["Distributions"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }

    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }

    val l =  apolloClient.query(DistributionsQuery(filter= Optional.present(filter), page = page)).execute().data?.distributionsByFilters?.filterNotNull() ?: emptyList()
    val ll =  l.map{
        val title = if(!it.title.isNullOrEmpty()) it.title?.elementAt(0)?.literal ?: "No tiene título" else "No tiene título"
        DistributionsModel(it.id, title, it.accessUrl,it.byteSize.toString(),it.format?.subtype ?: null)
    }
    //console.log("ESTO CARGOOOOO: "+ll)
    return ll
}

suspend fun getDistributionsNumber(filters: MutableMap<String, MutableMap<String, Collection<String>>>): Int {
    val selectedFilters = filters["Distributions"]?.map { (key, values) -> MapInput(key = key, values = values as List<String>) }
    val filter = if (checkIfSelectedFiltersIsEmpty(selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */})){
        emptyList()
    }else{
        selectedFilters?.filter { it.key != "Page" /*&&  it.key != "OrderBy" && it.key != "SortBy" */}
    }
    val number =  apolloClient.query(NumberOfDistributionsQuery(filter= Optional.present(filter))).execute().data?.numberOfDistributions
    return number ?: 0
}

val IsLoadingContext = createContext<StateInstance<Boolean>>()
external interface DistributionsPageProps : Props {}


val DistributionsPage = FC<DistributionsPageProps> {
    val coroutineScope = CoroutineScope(Dispatchers.Default)
    var numberDistributions by useState(0)
    var selectedFiltersContext by useRequiredContext(FilterListContextAll)
    var listDistributions by useState(mutableListOf<DistributionsModel>())
    val state = useState(false)
    val (isDisabled) = state

    useEffect(selectedFiltersContext) {
        coroutineScope.launch {
            val numPage = selectedFiltersContext["Distributions"]!!["Page"]
            val num = if(numPage.isNullOrEmpty()) 0 else numPage.elementAt(0).toInt()-1

            val newListCatalogs = getDistributions(selectedFiltersContext,num)

            listDistributions = mutableListOf()
            newListCatalogs.map{
                listDistributions.add(it)
            }
        }
        coroutineScope.launch {
            //console.log("TOTAL NUMBER")
            numberDistributions = getDistributionsNumber(selectedFiltersContext)
        }
    }

    IsLoadingContext(state) {
        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"Distributions"
            }
            Breadcrumbs {
                sx {
                    marginLeft = 10.pct
                    marginBottom = 1.pct
                }
                ariaLabel = "breadcrumb"
                Typography {
                    +"/Distributions"
                }
            }
        }

        Box {
            sx {
                display = Display.flex
            }
            filterFormDistributions {
                filterList = listDistributions
            }
            listDistributions {
                distributionsList = listDistributions
                searchBy = ""
                numberOfDistributions = numberDistributions
            }
        }
    }
}






