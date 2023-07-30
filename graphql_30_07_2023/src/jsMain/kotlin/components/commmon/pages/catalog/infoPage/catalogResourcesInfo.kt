package components.commmon.pages.catalog.infoPage




import commonModels.CatalogModel
import components.commmon.FilterListContextAll
import components.commmon.pages.dataset.infoPage.addToFiltersButton
import components.commmon.pages.dataset.mainPage.IsLoadingContext
import csstype.ClassName
import csstype.FlexDirection
import csstype.FontSize
import csstype.HtmlAttributes
import csstype.NamedColor
import csstype.pct
import csstype.px
import models.ResourceInfo
import mui.icons.material.Folder
import mui.icons.material.RssFeed
import mui.icons.material.Source
import mui.icons.material.TextSnippet
import mui.material.Chip
import mui.material.FormControl
import mui.material.FormControlLabel
import mui.material.InputLabel
import mui.material.LabelPlacement
import mui.material.Link
import mui.material.ListItem
import mui.material.ListItemAvatar
import mui.material.ListItemText
import mui.material.MenuItem
import mui.material.Radio
import mui.material.RadioGroup
import mui.material.Select
import mui.material.Size
import mui.material.SvgIconColor
import mui.material.Tooltip
import mui.material.Typography
import mui.system.sx
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.dom.events.ChangeEvent
import react.dom.events.FormEventHandler
import react.dom.onChange
import react.useEffect
import react.useRequiredContext
import react.useState

external interface CatalogResourcesInfoProps: Props {
    var listResourcesInfo: Collection<ResourceInfo>?
}
val catalogResourcesInfo = FC<CatalogResourcesInfoProps> { props ->
    if (!props.listResourcesInfo.isNullOrEmpty()) {
        mui.material.List {
            props.listResourcesInfo!!.map {
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