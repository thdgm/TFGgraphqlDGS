package components.commmon.selectFilter




import commonModels.CatalogModel
import components.commmon.FilterListContextAll
import components.commmon.pages.dataset.mainPage.IsLoadingContext
import csstype.FlexDirection
import csstype.FontSize
import csstype.HtmlAttributes
import csstype.NamedColor
import csstype.pct
import csstype.px
import kotlinext.js.asJsObject
import kotlinext.js.getOwnPropertyNames
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.InputLabel
import mui.material.LabelPlacement
import mui.material.MenuItem
import mui.material.Radio
import mui.material.RadioGroup
import mui.material.Select
import mui.material.Size
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.events.ChangeEvent
import react.dom.events.FormEventHandler
import react.dom.events.MouseEvent
import react.dom.events.MouseEventHandler
import react.dom.onChange
import react.useEffect
import react.useRequiredContext
import react.useState

external interface SelectResourcesTypeProps: Props {
    var filterResourcesByType: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit
}
val selectResourcesType = FC<SelectResourcesTypeProps> { props ->
    var orderBy by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)


    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        console.log("VALUE: "+event.target.value)
        orderBy = event.target.value

    }




    FormControl {
        sx {
            minWidth = 220.px

        }
        size = Size.small
        InputLabel {
            id = "demo-select-small"
            +"Filtra por tipo"
        }
        Select {
            sx {
                backgroundColor = NamedColor.white
            }

            labelId = "demo-select-small"
            id = "demo-select-small"
            value = orderBy
            label = ReactNode("Ordenar por")
            onChange= props.filterResourcesByType
            MenuItem {
                value = "All"
                accessKey = "All"
                onClick = {e: MouseEvent<HTMLElement, *> ->  orderBy = e.currentTarget.accessKey}
                + "All"
            }
            MenuItem {
                value = "data_service"
                accessKey = "data_service"
                onClick = {e: MouseEvent<HTMLElement, *> ->  orderBy = e.currentTarget.accessKey}
                + "DataServices"
            }
            MenuItem {
                value = "dataset"
                accessKey = "dataset"
                onClick = {e: MouseEvent<HTMLElement, *> ->  orderBy = e.currentTarget.accessKey}
                + "Datasets"
            }
            MenuItem {
                value = "catalog"
                accessKey = "catalog"
                onClick = {e: MouseEvent<HTMLElement, *> ->  orderBy = e.currentTarget.accessKey}
                + "Catalogs"
            }
            MenuItem {
                value = "dataset_series"
                accessKey = "dataset_series"
                onClick = {e: MouseEvent<HTMLElement, *> ->  orderBy = e.currentTarget.accessKey}
                + "DatasetSeries"
            }
        }

    }
}