package components.commmon.layout

import components.commmon.Sizes
import components.commmon.ThemeContext
import components.commmon.filterForm.filterForm
import components.commmon.searcher.Searcher
import components.commmon.themes.Themes
import csstype.Auto
import csstype.ClassName
import csstype.Display
import csstype.NumberType
import csstype.integer
import csstype.number
import csstype.pct

import mui.icons.material.Brightness4
import mui.icons.material.Brightness7
import mui.icons.material.GitHub
import mui.icons.material.Style
import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Box
import mui.material.Breadcrumbs
import mui.material.Grid
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.Size
import mui.material.Switch
import mui.material.Toolbar
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.Breakpoint
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC
import react.Props
import react.create
import react.dom.aria.AriaHasPopup
import react.dom.aria.ariaHasPopup
import react.dom.aria.ariaLabel
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.useRequiredContext


external interface InitPageProps : Props {}



val InitPage = FC<InitPageProps> { props->

    Box {
        className = ClassName("box-init-page")

        Breadcrumbs {
            sx {
                marginLeft = 10.pct
                marginTop = 2.pct
            }
            ariaLabel = "breadcrumb"
            Typography {
                + "/Conjunto de datos"
            }
        }

        ReactHTML.h1 {
            className = ClassName("titleInit")
            +"Catálogo de datos"
        }
    }


    Box{
        sx{
            display= Display.flex
        }
        filterForm()

        list()

    }
}


