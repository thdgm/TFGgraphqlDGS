package components.commmon.pagination


import components.commmon.FilterListContextAll
import csstype.ClassName
import csstype.Position
import csstype.pct
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import mui.material.Pagination
import mui.material.Paper
import mui.material.Size
import mui.system.sx
import react.FC
import react.Props
import react.dom.events.ChangeEvent
import react.useRequiredContext
import react.useState
import kotlin.math.ceil

external interface PaginationProps:Props{

    var changePage: suspend (event: ChangeEvent<*>, value: Number) -> Unit
    var numberOfPages: Int

}
val Pagination = FC<PaginationProps> { props ->
    var selectedFilters by useRequiredContext(FilterListContextAll)
   console.log("NUMBER: "+ ceil(props.numberOfPages.toDouble() / 10).toInt())
    var numberOfPages by useState( ceil(props.numberOfPages.toDouble() / 10).toInt())
    val handleChange:(event: ChangeEvent<*>, value: Number) -> Unit =  {e,v ->
        GlobalScope.launch {
            props.changePage(e,v)
        }
    }
     Paper {
         sx{
            // marginLeft= 60.pct

             paddingBottom = 6.pct
             paddingBottom = 1.pct

         }
        className = ClassName("pagination")
         elevation=0
         Pagination {
             sx {
                 position = Position.absolute
                 marginLeft = 50.pct
             }
             count = numberOfPages
             size = Size.small
             onChange = {e,v ->
                 selectedFilters = selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                     if (key == "Datasets") {
                         catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                             if (innerKey == "Page") filterVal.filter { false }.plus(
                                 v.toString()
                             )
                             else filterVal
                         }.toMutableMap()
                     } else {
                         catalogMap
                     }
                 }.toMutableMap()
             }//{e,v -> handleChange(e,v)}//{e,v -> changePage(e,v)}
         }
     }
}