package components.commmon.pages.datasetSeries.infoPage




import csstype.ClassName
import models.ResourceInfo
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

external interface SeriesDatasetsInfoProps: Props {
    var listDatasetsInfo: Collection<ResourceInfo>?
}
val seriesDatasetsInfo = FC<SeriesDatasetsInfoProps> { props ->
    if (!props.listDatasetsInfo.isNullOrEmpty()) {
        mui.material.List {
            props.listDatasetsInfo!!.map {
                ListItem {
                    className = ClassName("distributionsList")

                    ListItemAvatar {
                        Tooltip {
                            title = ReactNode(it.resourceType)

                            if (it.resourceType == "Dataset") {
                                TextSnippet {
                                    color = SvgIconColor.primary
                                }
                            } else if (it.resourceType == "Catalog") {
                                Folder {
                                    color = SvgIconColor.primary
                                }
                            } else if (it.resourceType == "DatasetSeries") {
                                Source {
                                    color = SvgIconColor.primary
                                }
                            } else {
                                RssFeed {
                                    color = SvgIconColor.primary
                                }
                            }
                        }
                    }
                    ListItemText {
                        Link {
                            if (it.resourceIdentifier.isNullOrEmpty()) +"${it.resourceId}"
                            else +"${it.resourceIdentifier.first()}"
                        }
                    }
                    ListItemAvatar {
                        Chip {
                            className = ClassName("keywordsChip")
                            label = ReactNode("${it.resourceType}")
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