package components.commmon.accordeon

import mui.icons.material.ExpandMore
import mui.material.Accordion
import mui.material.AccordionDetails
import mui.material.AccordionSummary
import mui.material.Typography
import react.FC
import react.Props
import react.ReactNode
import react.create

val filterInfo = FC<Props> {
    Accordion {
        AccordionSummary{
            expandIcon = ExpandMore.create()
        }
        AccordionDetails{
            Typography {
                +"Filtros info"
            }
        }
    }
}