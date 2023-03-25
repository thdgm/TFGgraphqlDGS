package components.commmon.pagination


import components.commmon.Sizes
import csstype.Auto
import csstype.Position
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Pagination
import mui.material.Paper
import mui.material.Size
import mui.system.sx
import react.FC
import react.Props


val Pagination = FC<Props> {

     Paper {
         sx{
             marginLeft= 60.pct
             paddingBottom = 6.pct
             paddingBottom = 1.pct

         }
         elevation=0
         Pagination {
             count = 10
             size = Size.small
         }
     }
}