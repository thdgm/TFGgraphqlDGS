package components.commmon.pages.api

import models.CatalogInfo
import models.ExtraQueryInfo
import react.FC
import react.Props
import react.useEffect
import react.useState

external interface ResultProps : Props {
    var listResult: MutableList<ExtraQueryInfo>
}

val Result = FC<ResultProps> { props ->

    val resInfo by useState(props.listResult)

    resultInfo{
        queryResult = resInfo
    }
}