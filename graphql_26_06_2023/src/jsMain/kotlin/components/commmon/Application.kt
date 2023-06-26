package components.commmon

import FiltersMap.FiltersMapKeys

import components.commmon.pages.dataset.mainPage.InitPage
import components.commmon.layout.header
import components.commmon.pages.dataset.infoPage.resourceInfo
import components.commmon.pages.catalog.infoPage.catalogInfo
import components.commmon.pages.catalog.mainPage.CatalogsPage
import components.commmon.pages.catalogRecord.infoPage.catalogRecordInfo
import components.commmon.pages.catalogRecord.mainPage.CatalogRecordsPage
import components.commmon.pages.dataservice.infoPage.dataServiceInfo
import components.commmon.pages.dataservice.mainPage.DataServicesPage
import components.commmon.pages.datasetSeries.infoPage.datasetSeriesInfo
import components.commmon.pages.datasetSeries.mainPage.DatasetSeriesPage
import components.commmon.pages.distribution.infoPage.distributionsInfo
import components.commmon.pages.distribution.mainPage.DistributionsPage
import components.commmon.pages.error.RouteNotFound
import components.commmon.themes.Themes
import csstype.ClassName
import mui.material.styles.Theme
import mui.material.styles.ThemeProvider

import react.FC
import react.Props
import react.StateInstance
import react.create
import react.createContext
import react.dom.html.ReactHTML.div
import react.router.Route
import react.router.Routes
import react.router.dom.HashRouter
import react.useState



external interface ApplicationProps : Props {
    var name: String
}


typealias ThemeState = StateInstance<Theme>
val ThemeContext = createContext<ThemeState>()
val FilterListContextAll = createContext<StateInstance<MutableMap<String,MutableMap<String,Collection<String>>>>>()




val Application = FC<ApplicationProps> { props ->
    val filtersMap = FiltersMapKeys()
    val state = useState(Themes.Light)
    val (theme) = state

    val state2 = useState(filtersMap.filtersSelectedMap)
    val (listFiltersTest) = state2

    FilterListContextAll(state2) {
    ThemeContext(state) {

        ThemeProvider {

            this.theme = theme//if(actualTheme == "dark") Themes.Dark else Themes.Light


            div {
                className = ClassName("container")


                div {
                    className = ClassName("row")
                    HashRouter {
                        div {
                            className = ClassName("row")
                            header()

                        }

                        Routes {

                            Route {
                                path = "/"
                                element = InitPage.create()//list.create()
                            }
                            Route {
                                path = "/datasets"
                                element = InitPage.create()
                            }
                            Route {
                                path = "/datasets/:id"
                                element = resourceInfo.create()
                            }


                            Route {
                                path = "/catalogs"
                                element = CatalogsPage.create()
                            }
                            Route {
                                path = "/catalogs/:id"
                                element = catalogInfo.create()
                            }

                            Route {
                                path = "/distributions"
                                element = DistributionsPage.create()
                            }
                            Route {
                                path = "/distributions/:id"
                                element = distributionsInfo.create()
                            }
                            Route {
                                path = "/dataservices"
                                element = DataServicesPage.create()
                            }
                            Route {
                                path = "/dataservices/:id"
                                element = dataServiceInfo.create()
                            }
                            Route {
                                path = "/datasetseries"
                                element = DatasetSeriesPage.create()
                            }
                            Route {
                                path = "/datasetseries/:id"
                                element = datasetSeriesInfo.create()
                            }
                            Route {
                                path = "/catalogrecords"
                                element = CatalogRecordsPage.create()
                            }
                            Route {
                                path = "/catalogrecords/:id"
                                element = catalogRecordInfo.create()
                            }
                            Route {
                                path = "*"
                                element = RouteNotFound.create()
                            }

                        }
                    }
                }
            }
                /* HashRouter{
                Routes {
                    Route {
                        path = "/"
                        element = InitPage.create()

                    }
                    Route {
                        path = "/datasets"
                        element = InitPage.create()
                    }
                    Route {
                        path = "/catalogs"
                        element = CatalogsPage.create()
                    }
                    Route {
                        path = "/distributions"
                        element = DistributionsPage.create()
                    }
                    Route {
                        path = "/dataservices"
                        element = DataServicesPage.create()
                    }
                    Route {
                        path = "/datasetseries"
                        element = DatasetSeriesPage.create()
                    }
                    Route {
                        path = "/catalogrecords"
                        element = CatalogRecordsPage.create()
                    }
                    Route {
                        path = "*"
                        element = RouteNotFound.create()
                    }
                }*/


            }
        }

    }

}






