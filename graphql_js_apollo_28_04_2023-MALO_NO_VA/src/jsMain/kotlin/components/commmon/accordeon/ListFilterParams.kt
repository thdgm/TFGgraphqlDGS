package components.commmon.accordeon

import components.commmon.Sizes
import components.commmon.card.CardList
import components.commmon.layout.FilterListContext
import components.commmon.pagination.Pagination
import csstype.Auto
import csstype.BackgroundColor
import csstype.ClassName
import csstype.Color
import csstype.Display
import csstype.Position
import csstype.Width
import csstype.number
import csstype.pct
import csstype.rgb
import csstype.rgba
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.CircularProgress
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
import react.useEffect
import react.useRequiredContext
import react.useState

external interface ListFilterParamsProps:Props{

    var filterFields: Collection<String>
    var category: String

}
val ListFilterParams = FC<ListFilterParamsProps> { props ->
    var selectedFilters by useRequiredContext(FilterListContext)
    var selectedField by useState(MutableList(props.filterFields.size){false})



        List {
            props.filterFields.forEachIndexed{ index, it ->
                ListItemButton{
                    + "$it"
                    onClick = { _ -> selectedFilters = selectedFilters.toMutableMap().mapValues { (key, filterVal) ->
                        if (key == props.category && !filterVal.contains(it)) filterVal.plus(it) else if(filterVal.contains(it)) filterVal.filter{miVal -> miVal != it} else filterVal
                    }.toMutableMap()}

                    selected = selectedFilters.toMutableMap()[props.category]?.contains(it)
                }

            }
            ListItem{
                sx {
                    color = Color("white")
                    backgroundColor = rgb(247,160,93)
                }

                + "Mostrar más"
            }

        }
}