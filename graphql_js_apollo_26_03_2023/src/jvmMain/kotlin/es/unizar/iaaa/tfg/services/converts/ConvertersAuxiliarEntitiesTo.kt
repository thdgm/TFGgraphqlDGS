package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.PeriodOfTime
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Frequency
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

interface ConvertersAuxiliarEntitiesTo {


    fun toPeriocidad(value: String?): Frequency
    fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): PeriodOfTime?
    fun toLangString(input: String): LangString
    fun toLaocalDateTime(input: String): LocalDateTime
    fun toConcept(input: String): Concept
    fun publisherEntitytoConcept(input: PublisherEntity?): Concept
}

@Service
class ConvertersAuxiliarEntitiesToImpl : ConvertersAuxiliarEntitiesTo {



    // Cast String to Periocidad
    override fun toPeriocidad(value: String?): Frequency {
        getLogger("logger").debug("PERIODIIIICIIIIDADDDDDD: ${value}")
        if (value.isNullOrEmpty()) {
            return Frequency(null, null)
        }
        val rango = value.split(" ")
        val periodo = rango.elementAt(0).split(":")

        return Frequency(periodo.elementAt(1), rango.elementAt(1).toFloat())
    }

    // Cast two Dates to CoberturaTemporal

    override fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): PeriodOfTime? =
        PeriodOfTime(date1, date2)


    // Cast String into LangString
    override fun toLangString(input: String): LangString {
        val s = input.split(LANGSTRING_SEPARADOR)
        return LangString(s[0], s[1])
    }

    // Cast String into LocalDateTime
    override fun toLaocalDateTime(input: String): LocalDateTime =
        LocalDateTime.parse(input, DateTimeFormatter.ISO_OFFSET_DATE_TIME)


    // Cast String into Concept
    override fun toConcept(input: String): Concept {
        val s = input.split('_')
        return Concept(s[0], s[1])
    }

    // Cast PublisherEntity into Concept
    override fun publisherEntitytoConcept(input: PublisherEntity?): Concept {
        if (input == null){
            return Concept("","")
        }
        return Concept(input.notation, input.label)
    }
}
