package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.Keywords
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Periocidad
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.PublisherEntity
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

interface ConvertersAuxiliarEntitiesTo {

    fun toKeywords(keyw: KeywordEntity?): Keywords?
    fun toPeriocidad(value: String?): Periocidad
    fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): CoberturaTemporal?
    fun toLangString(input: String): LangString
    fun toLaocalDateTime(input: String): LocalDateTime
    fun toConcept(input: String): Concept
    fun publisherEntitytoConcept(input: PublisherEntity?): Concept
}

@Service
class ConvertersAuxiliarEntitiesToImpl : ConvertersAuxiliarEntitiesTo {

    // Recibe KeywordEntity y crea el Keywords correspondiente
    override fun toKeywords(keyw: KeywordEntity?): Keywords = Keywords(keyw!!.id.wordId, keyw.language.id)


    // Transform String to Periocidad
    override fun toPeriocidad(value: String?): Periocidad {
        getLogger("logger").debug("PERIODIIIICIIIIDADDDDDD: ${value}")
        if (value == null || value == "") {
            return Periocidad(null, null)
        }
        val rango = value.split(" ")
        val periodo = rango.elementAt(0).split(":")

        return Periocidad(periodo.elementAt(1), rango.elementAt(1).toFloat())
    }

    // Transform two Dates to CoberturaTemporal

    override fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): CoberturaTemporal? {
        return CoberturaTemporal(date1, date2)
    }

    // Transform String into LangString
    override fun toLangString(input: String): LangString {
        val s = input.split(LANGSTRING_SEPARADOR)
        return LangString(s[0], s[1])
    }

    // Transform String into LocalDateTime
    override fun toLaocalDateTime(input: String): LocalDateTime {
        var dateFormatter = DateTimeFormatter.ofPattern(DATE_PATTERN)
        return LocalDateTime.parse(input, dateFormatter)
    }

    // Transform String into Concept
    override fun toConcept(input: String): Concept {
        val s = input.split('_')
        return Concept(s[0], s[1])
    }

    // Transform PublisherEntity into Concept
    override fun publisherEntitytoConcept(input: PublisherEntity?): Concept {
        if (input == null){
            return Concept("","")
        }
        return Concept(input.notation, input.label)
    }
}
