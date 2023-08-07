package components.commmon.pages.dataset.mainPage

import csstype.ClassName
import mui.material.ListItemButton
import react.FC
import react.Props

external interface AccordionInfoProps: Props {

    var filterFields: MutableCollection<String>

}
val accordionInfo = FC<AccordionInfoProps> { props ->

    mui.material.List {
        className = ClassName("scrollUlFilters")

        //console.log("NO VACIOOO: " + props.filterFields)
        props.filterFields.forEachIndexed { index, value ->
            ListItemButton {
                + "$value"
                }

        }
    }

}