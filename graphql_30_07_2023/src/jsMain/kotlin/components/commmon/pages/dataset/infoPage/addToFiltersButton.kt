package components.commmon.pages.dataset.infoPage

import components.commmon.pages.dataset.mainPage.InitPageProps
import csstype.ClassName
import mui.icons.material.ControlPoint
import mui.material.IconButton
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLLIElement
import react.FC
import react.Props
import react.dom.events.MouseEvent

external interface AddProps : Props {
    var titleValue: String
    var addToFilters: () -> Unit
}
val addToFiltersButton = FC<AddProps> { props->

    IconButton{
        onClick = {_->props.addToFilters()}
        ControlPoint{
            className = ClassName("addIcon")

        }

    }
}