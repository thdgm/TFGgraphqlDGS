package components.commmon.pagination


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

external interface PaginationProps:Props{

    var changePage: suspend (event: ChangeEvent<*>, value: Number) -> Unit

}
val Pagination = FC<PaginationProps> { props ->

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
             count = 10
             size = Size.small
             onChange = {e,v -> handleChange(e,v)}//{e,v -> changePage(e,v)}
         }
     }
}