package components.commmon.pages.datasetSeries.infoPage




import csstype.ClassName
import models.IsServedInfo
import mui.icons.material.RssFeed
import mui.material.Link
import mui.material.ListItem
import mui.material.ListItemAvatar
import mui.material.ListItemText
import mui.material.SvgIconColor
import mui.material.Typography
import react.FC
import react.Props

external interface SeriesIsServedByInfoProps: Props {
    var listIsServedInfo: Collection<IsServedInfo>?
}
val seriesIsServedByInfo = FC<SeriesIsServedByInfoProps> { props ->
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
                                href = "/dataservices/#/${it.serviceId}"
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