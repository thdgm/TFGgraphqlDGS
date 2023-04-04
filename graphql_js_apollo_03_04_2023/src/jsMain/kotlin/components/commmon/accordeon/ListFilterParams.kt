package components.commmon.accordeon

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.BackgroundColor
import csstype.ClassName
import csstype.Display
import csstype.Position
import csstype.Width
import csstype.number
import csstype.pct
import csstype.rgba
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.List
import mui.material.ListItem
import mui.material.ListItemButton
import mui.material.Paper
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import react.Props
import react.dom.html.ReactHTML.h1
import react.router.useNavigate

external interface ListFilterParamsProps:Props{

    var filterFields: Collection<String>

}
val ListFilterParams = FC<ListFilterParamsProps> { props ->

        List {
            props.filterFields.forEach {
                ListItemButton{
                    + "$it"
                }
            }


        }
}