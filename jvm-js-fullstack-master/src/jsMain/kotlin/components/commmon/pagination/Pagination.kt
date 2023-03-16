package components.commmon.pagination


import mui.material.Box
import mui.material.Pagination
import mui.material.Size
import react.FC
import react.Props


val Pagination = FC<Props> {

     Box {
         Pagination {
             count = 10
             size = Size.small
         }
     }
}