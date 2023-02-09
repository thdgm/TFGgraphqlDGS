package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.Keywords
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Periocidad
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Date

interface ConvertersAuxiliarEntitiesTo {

    fun toKeywords(keyw: KeywordEntity?): Keywords?
    fun toPeriocidad(value: String?): Periocidad
    fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): CoberturaTemporal?
    fun toLangString(input: String): LangString
    fun toLaocalDateTime(input: String): LocalDateTime
}

@Service
class ConvertersAuxiliarEntitiesToImpl : ConvertersAuxiliarEntitiesTo {

    // Recibe KeywordEntity y crea el Keywords correspondiente
    override fun toKeywords(keyw: KeywordEntity?): Keywords = Keywords(keyw!!.word, keyw.language.id)

    // Transform String to Periocidad
    override fun toPeriocidad(value: String?):Periocidad {
        if (value == null || value == ""){
            return Periocidad(null,null)
        }
        val rango = value.split(" ")
        val periodo = rango.elementAt(0).split(":")
        return Periocidad(periodo.elementAt(1), rango.elementAt(1).toFloat())
    }

    // Transform two Dates to CoberturaTemporal

    override fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): CoberturaTemporal? {
        return CoberturaTemporal(date1, date2)
    }

    //Transform String into LangString
    override fun toLangString(input: String): LangString {
        val s = input.split(',')
        return LangString(s[0],s[1])
    }
    //Transform String into LocalDateTime
    override fun toLaocalDateTime(input: String): LocalDateTime {
        var dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss")
        return LocalDateTime.parse(input, dateFormatter)
    }
}
