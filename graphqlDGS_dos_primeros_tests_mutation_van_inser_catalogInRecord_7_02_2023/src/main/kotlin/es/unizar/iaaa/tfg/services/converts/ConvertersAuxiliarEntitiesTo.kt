package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.FechaHora
import com.graphqlDGS.graphqlDGS.model.types.Keywords
import com.graphqlDGS.graphqlDGS.model.types.Periodicidad
import com.graphqlDGS.graphqlDGS.model.types.ResourceDescription
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.Date

interface ConvertersAuxiliarEntitiesTo {

    fun toKeywords(keyw: KeywordEntity?): Keywords?
    fun toPeriocidad(value: String?): Periodicidad
    fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): CoberturaTemporal?
    fun convertToResourceDescription(des: ResourceDescriptionsEntity): ResourceDescription
    fun datetoFechaHora(d: Date?): FechaHora
    fun toLangString(input: String): LangString
}

@Service
class ConvertersAuxiliarEntitiesToImpl : ConvertersAuxiliarEntitiesTo {

    // Recibe KeywordEntity y crea el Keywords correspondiente
    override fun toKeywords(keyw: KeywordEntity?): Keywords = Keywords(keyw!!.word, keyw.language.id)

    // Recibe un descriptionEntity y crea el ResourceDescription correspondiente
    override fun convertToResourceDescription(des: ResourceDescriptionsEntity): ResourceDescription = ResourceDescription(
        des.text,
        des.language.id
    )

    // Transform date to FechaHora
    override fun datetoFechaHora(d: Date?): FechaHora {
        val fecha = d.toString().split(" ")
        return FechaHora(fecha.elementAt(0), fecha.elementAt(1))
    }

    // Transform String to Periocidad
    override fun toPeriocidad(value: String?): Periodicidad {
        val rango = value!!.split(" ")
        val periodo = rango.elementAt(0).split(":")
        return Periodicidad(periodo.elementAt(1), rango.elementAt(1))
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
}
