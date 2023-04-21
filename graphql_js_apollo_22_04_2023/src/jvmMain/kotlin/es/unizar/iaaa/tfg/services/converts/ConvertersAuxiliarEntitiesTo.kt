package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.PeriodOfTime
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Frequency
import es.unizar.iaaa.tfg.constants.ConstantValues.ADMON_LEVEL
import es.unizar.iaaa.tfg.constants.ConstantValues.FREQUENCY_MAP
import es.unizar.iaaa.tfg.constants.ConstantValues.FREQUENCY_TRANSLATOR
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

interface ConvertersAuxiliarEntitiesTo {


    fun toPeriocidad(value: String?): Frequency
    fun toCoberturaTemporal(date1: LocalDateTime?, date2: LocalDateTime?): PeriodOfTime?
    fun toLangString(input: String): LangString
    fun toLocalDateTime(input: String): LocalDateTime
    fun toConcept(input: String): Concept
    fun publisherEntitytoConcept(input: PublisherEntity?): Concept

    fun toAdministrationLevel(notation:String): String

    fun getAdministrationLevel(firsLetter:String): Char?

    fun toUpdateFrequencyFormat(duration:String?): String

    fun toDatasetCsvModeFromString(model: String): DatasetCSVModel
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
    override fun toLocalDateTime(input: String): LocalDateTime =
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

    // Convert Publisher notation according to https://datos.gob.es/es/recurso/sector-publico/org/Organismo
    override fun toAdministrationLevel(notation:String): String=
        // Search map value for the key that is the first word of notation
         ADMON_LEVEL[notation[0]] ?: "Otra institución"

    // Convert Publisher notation according to https://datos.gob.es/es/recurso/sector-publico/org/Organismo
    override fun toUpdateFrequencyFormat(duration:String?): String {
        // Search map value for the key that is the first word of notation
        if (duration == null) return ""
        val periocity = toPeriocidad(duration)
        return  FREQUENCY_MAP[duration] ?: "Cada ${periocity.period?.toInt()} ${FREQUENCY_TRANSLATOR[periocity.range]}"
    }


    // Get Publisher notation first letter according to https://datos.gob.es/es/recurso/sector-publico/org/Organismo
    override fun getAdministrationLevel(firsLetter:String): Char?{
        //Reverse map to search the key associate to the string parameter
        val admonLevelReverse: Map<String, Char> = ADMON_LEVEL.entries.associate { (key, value) -> value to key }
        return admonLevelReverse[firsLetter]
    }

    //Get string and cast it into DatasetCsvModel
    override fun toDatasetCsvModeFromString(model: String): DatasetCSVModel{

            val m = model.split("[split]")

            return DatasetCSVModel(
                if (m.elementAt(0).trim() == "null") null else m.elementAt(0).trim(),
                if (m.elementAt(1).trim() == "null") null else m.elementAt(1).trim(),
                if (m.elementAt(2).isNotEmpty() && m.elementAt(2).trim() != "null"){
                    m.elementAt(2).trim().substring(1,(m.elementAt(2).trim().length)-1).split("[SPLIT]").map{
                        it.trim()
                    }
                } else emptyList(),
                if (m.elementAt(3).isNotEmpty() && m.elementAt(3).trim() != "null"){
                    m.elementAt(3).trim().substring(1,(m.elementAt(3).trim().length)-1).split("[SPLIT]").map{it.trim()}
                } else emptyList(),
                if (m.elementAt(4).isNotEmpty() && m.elementAt(4).trim() != "null"){
                    m.elementAt(4).trim().substring(1,(m.elementAt(4).trim().length)-1).split(",").map{it.trim()}
                } else emptyList(),
                if (!m.elementAt(5).isNullOrEmpty() && m.elementAt(5).trim() != "null") {
                    m.elementAt(5).trim().substring(1,(m.elementAt(5).trim().length)-1).split(",").associate {
                        val (left, right) = it.split("=")
                        left.trim() to right.trim()
                    }
                }else {
                    null
                },

                if (!m.elementAt(6).isNullOrBlank() && m.elementAt(6).trim() != "null"){
                    LocalDateTime.parse( m.elementAt(6).trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                }else{
                    null
                },
                if (!m.elementAt(7).isNullOrBlank() && m.elementAt(7).trim() != "null"){
                    LocalDateTime.parse( m.elementAt(7).trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                }else{
                    null
                },
                if (m.elementAt(8).trim() == "null") null else m.elementAt(8).trim(),
                if (m.elementAt(9).isNotEmpty() && m.elementAt(9).trim() != "null"){
                    m.elementAt(9).trim().substring(1,(m.elementAt(9).trim().length)-1).split(",").map{it.trim()}
                } else emptyList(),
                if (m.elementAt(10).trim() == "null") null else m.elementAt(10).trim(),
                if (m.elementAt(11).trim() == "null") null else m.elementAt(11).trim(),
                if (m.elementAt(12).trim() == "null") null else m.elementAt(12).trim(),
                if (!m.elementAt(13).isNullOrBlank() && m.elementAt(13).trim() != "null"){
                    m.elementAt(13).split(",").let{
                        Pair(
                            LocalDateTime.parse( it[0].replace(" (","").trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                            LocalDateTime.parse( it[1].replace(") ","").trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                        )
                    }
                } else null,
                if (!m.elementAt(14).isNullOrBlank() && m.elementAt(14).trim() != "null"){
                    LocalDateTime.parse( m.elementAt(14).trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                }else{
                    null
                },
                if (!m.elementAt(15).isNullOrBlank() && m.elementAt(15).trim() != "null"){
                    m.elementAt(15).trim()
                } else null,
                if (!m.elementAt(16).isNullOrBlank() && m.elementAt(16).trim() != "null"){
                    m.elementAt(16).trim()
                } else null,
                if (!m.elementAt(17).isNullOrEmpty() && m.elementAt(17).trim() != "null") {
                    m.elementAt(17).trim().substring(2,(m.elementAt(17).trim().length)-2).replace("},\\s*\\{".toRegex(),"[separador]").split("[separador]").map{
                        if (!it.isNullOrBlank()){
                            it.trim().split(",\\s+\\[SPLIT]".toRegex()).associate {
                                val (left, right) = it.replace("[SPLIT]","").split("=")
                                left.trim() to right.trim()
                            }
                        }else null

                    }.filterNotNull()
                } else null,

            )
    }
}
