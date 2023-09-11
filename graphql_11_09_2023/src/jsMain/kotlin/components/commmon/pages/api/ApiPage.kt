package components.commmon.pages.api

import com.apollographql.apollo3.api.Optional
import com.schema.DatasetsByPublisherQuery
import com.schema.DatasetsKeywordsQuery
import com.schema.DatasetsQuery
import com.schema.DatasetsSomeInfoQuery
import com.schema.KeywordsByPublisherQuery
import com.schema.type.MapInput
import commonModels.ServicesModel
import components.commmon.pages.dataservice.mainPage.apolloClient
import components.commmon.pages.dataset.mainPage.checkIfSelectedFiltersIsEmpty
import csstype.ClassName
import csstype.Display
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import mui.material.Box
import mui.system.sx
import react.FC
import react.Props
import react.StateInstance
import react.createContext
import react.dom.html.ReactHTML
import react.useEffect
import react.useState



val IsLoadingContext = createContext<StateInstance<Boolean>>()
val ApiPage = FC<Props> {


    val state = useState(false)
    val (isDisabled) = state

    IsLoadingContext(state) {
        Box {
            className = ClassName("box-init-page")

            ReactHTML.h1 {
                className = ClassName("titleInit")
                +"API"
            }
        }


        Box {
            sx {
                display = Display.flex
            }
            endpointsList()

        }
    }
}