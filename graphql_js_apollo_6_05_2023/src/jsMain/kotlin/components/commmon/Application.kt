package components.commmon

import com.apollographql.apollo3.ApolloClient
import components.commmon.accordeon.filterInfo
import components.commmon.layout.InitPage
import components.commmon.layout.header
import components.commmon.layout.list
import components.commmon.layout.sideLeft
import components.commmon.resourceInfo.resourceInfo
import components.commmon.searcher.Searcher
import components.commmon.secondPages.catalog.mainPage.CatalogsPage
import components.commmon.secondPages.catalogRecord.mainPage.CatalogRecordsPage
import components.commmon.secondPages.dataservice.mainPage.DataServicesPage
import components.commmon.secondPages.datasetSeries.mainPage.DatasetSeriesPage
import components.commmon.secondPages.distribution.mainPage.DistributionsPage
import components.commmon.secondPages.error.RouteNotFound
import components.commmon.themes.Themes
import csstype.ClassName
import csstype.PrintColorAdjust.Companion.exact
import emotion.react.useTheme
import kotlinx.browser.localStorage
import mui.material.Container
import mui.material.MuiGrid.Companion.container
import mui.material.PaletteMode
import mui.material.Switch
import mui.material.styles.Palette
import mui.material.styles.PaletteColor
import mui.material.styles.PaletteOptions
import mui.material.styles.Theme
import mui.material.styles.ThemeOptions
import mui.material.styles.ThemeProvider
import mui.material.styles.createPalette
import mui.material.styles.createTheme
import mui.material.styles.useTheme
import react.FC
import react.Props
import react.StateInstance
import react.create
import react.createContext
import react.dom.html.ReactHTML.div
import react.router.Route
import react.router.Routes
import react.router.dom.BrowserRouter
import react.router.dom.HashRouter
import react.useMemo
import react.useState



external interface ApplicationProps : Props {
    var name: String
}


typealias ThemeState = StateInstance<Theme>
val ThemeContext = createContext<ThemeState>()




val Application = FC<ApplicationProps> { props ->
    val state = useState(Themes.Light)

    val (theme) = state

    ThemeContext(state) {
        ThemeProvider {

            this.theme = theme//if(actualTheme == "dark") Themes.Dark else Themes.Light


            div {
                className = ClassName("container")


                div {
                   className= ClassName("row")
                    BrowserRouter{
                        div {
                            className = ClassName("row")
                            header()

                        }
                       Routes {
                           Route {
                               path = "/info/:id"
                               element = resourceInfo.create()
                           }
                           Route {
                               path = "/"
                               element =  InitPage.create()//list.create()
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






