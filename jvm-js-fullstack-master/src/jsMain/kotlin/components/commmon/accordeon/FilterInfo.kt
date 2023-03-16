package components.commmon.accordeon

import components.commmon.filterForm.filterForm
import csstype.Auto
import csstype.ClassName
import csstype.pct
import mui.icons.material.ExpandMore
import mui.material.Accordion
import mui.material.AccordionDetails
import mui.material.AccordionSummary
import mui.material.Typography
import mui.system.sx
import react.FC
import react.Props
import react.ReactNode
import react.create

val filterInfo = FC<Props> {
    Accordion {


        className = ClassName("AccordionFilter")

        AccordionSummary{
            expandIcon = ExpandMore.create()
        }
        AccordionDetails{
            Typography {
                +"Filtros info"
            }
            filterForm()
        }
    }
}