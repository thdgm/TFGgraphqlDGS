package components.commmon.pages.catalog.infoPage




import components.commmon.pages.dataset.infoPage.addToFiltersButton
import csstype.ClassName
import models.RecordsInfo
import models.ResourceInfo
import mui.icons.material.Folder
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
import mui.icons.material.Topic
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

external interface CatalogRecordsInfoProps: Props {
    var listRecordsInfo: Collection<RecordsInfo>?
}
val catalogRecordsInfo = FC<CatalogRecordsInfoProps> { props ->
    if (!props.listRecordsInfo.isNullOrEmpty()) {
        mui.material.List {
            props.listRecordsInfo!!.map {
                ListItem {
                    className = ClassName("distributionsList")
                    ListItemAvatar {
                        Topic {
                            color = SvgIconColor.primary
                        }
                    }
                    ListItemText {
                        Link {
                            +"${it.recordId}"

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