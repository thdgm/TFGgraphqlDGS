package components.commmon.pages.catalog.infoPage




import components.commmon.pages.dataset.infoPage.addToFiltersButton
import csstype.ClassName
import models.IsServedInfo
import mui.icons.material.Folder
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
import mui.material.Chip
import mui.material.Link
import mui.material.ListItem
import mui.material.ListItemAvatar
import mui.material.ListItemText
import mui.material.SvgIconColor
import mui.material.Tooltip
import mui.material.Typography
import react.FC
import react.Props
import react.ReactNode
import react.create

external interface CatalogIsServedByInfoProps: Props {
    var listIsServedInfo: Collection<IsServedInfo>?
}
val catalogIsServedByInfo = FC<CatalogIsServedByInfoProps> { props ->
    if (!props.listIsServedInfo.isNullOrEmpty()) {
        mui.material.List {
            props.listIsServedInfo!!.mapIndexed { index, it ->
                if (it.serviceId != null) {
                    ListItem {
                        className = ClassName("distributionsList")
                        ListItemAvatar {
                            RssFeed {
                                color = SvgIconColor.primary
                            }
                        }
                        ListItemText {
                            Link {
                                if (it.serviceIdentifiers.isNullOrEmpty()) +"${it.serviceId}"
                                else +"${it.serviceIdentifiers?.first()}"
                            }
                        }
                    }
                }
            }
        }
    }else{
        Typography {
            className = ClassName("subtitle_info")
            +"No se han encontrado elementos con esta categoría"
        }
    }
}