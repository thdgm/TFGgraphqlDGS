package components.commmon.accordeon

import components.commmon.filterForm.filterForm
import csstype.Auto
import csstype.ClassName
import csstype.NamedColor
import csstype.None
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

external interface FilterInfoProps:Props{
    var filterName:String
    var filterFields: Collection<String>

}

val filterInfo = FC<FilterInfoProps> { props ->

    console.log("FFFIELDS ${props.filterFields}")
    Accordion {
        sx {
            boxShadow = None.none
            backgroundColor = NamedColor.white
        }

        //className = ClassName("AccordionFilter")

        AccordionSummary{
            sx {
                boxShadow = None.none
            }
            className = ClassName("accordionHeader")
            expandIcon = ExpandMore.create()
            Typography {
                + "${props.filterName}"
            }
        }

        AccordionDetails{
            sx {
                boxShadow = None.none
            }
            ListFilterParams{this.filterFields = props.filterFields}
            //filterForm()
        }
    }
}