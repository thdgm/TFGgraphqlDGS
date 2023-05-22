package es.unizar.iaaa.tfg.services.csvServices

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service
import java.io.InputStream
import java.text.Normalizer
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/*
 * These services help to process JSON file in order to map all the needed
 * metadata. Then, another services will create the corresponding objects.
 */

interface ProcessCsvServices {
    fun processCsvService(url: String):  List<DatasetCSVModel>
}

@Service
class ProcessCsvServicesImpl(
    private val resourceLoader: ResourceLoader,
): ProcessCsvServices {

    /*
     * Return a list of DatasetCSVModel wich contains all fields needed to create the models.
     */

    override fun processCsvService(url: String):List<DatasetCSVModel>{
        val inputStream =  resourceLoader.getResource(url).inputStream

        println("INPUTTTT:: ${csvReader().open(inputStream){ readLine() }}")
        return processCsv(inputStream)
    }

    /*
     * This function extract all fields from all rows in a CSV file.
     */
    fun processCsv(inputStream: InputStream): List<DatasetCSVModel> = csvReader().open(inputStream) {
        readAllWithHeaderAsSequence().map {
            DatasetCSVModel(
                it["URL"],
                fieldOrNull(it["IDENTIFICADOR"]),
                titleDescription(it["TÍTULO"]),
                titleDescription(it["DESCRIPCIÓN"]),
                fieldSplit(it["TEMÁTICAS"]),
                keywords(it["ETIQUETAS"]),
                localDateTimes(it["FECHA DE CREACIÓN"]),
                localDateTimes(it["FECHA DE ÚLTIMA MODIFICACIÓN"]),
                frequency(it["FRECUENCIA DE ACTUALIZACIÓN"]),
                fieldSplit(it["IDIOMAS"]),
                fieldOrNull(it["ÓRGANO PUBLICADOR"]),
                fieldOrNull(it["CONDICIONES DE USO"]),
                fieldOrNull(it["COBERTURA GEOGRÁFICA"]),
                periocity(it["COBERTURA TEMPORAL"]),
                localDateTimes(it["VIGENCIA DEL RECURSO"]),
                relatedResourcesAndRegulations(it["RECURSOS RELACIONADOS"]),
                relatedResourcesAndRegulations(it["NORMATIVA"]),
                distributions(it["DISTRIBUCIONES"]),
            )
        }.toList()
    }


    fun fieldOrNull(value: String?): String? {

        val v =  if (!value.isNullOrBlank()) value?.replace("Ã±", "ñ")?.replace("Ã­","í")?.replace("Ã¡","á") else null

        return v
    }

    fun relatedResourcesAndRegulations(value:String?): Collection<String> {

        val v = if (!value.isNullOrBlank()) {
            value!!.replace("([^:])//".toRegex(), "\$1[RES_SPLIT]").split("[RES_SPLIT]")
        } else emptyList()

        return v
    }

    fun fieldSplit(value: String?): Collection<String> {

        val v = if (!value.isNullOrBlank()) value!!.split("//") else emptyList()

        return v
    }

    fun titleDescription(value: String?): Collection<String> {
        val v = if (!value.isNullOrBlank()) {
            value!!.replace("]", "-").replaceFirst("[", "").split("[")
        } else emptyList()

        return v
    }
    fun keywords(value: String?): Map<String, String>? {

        val v = if (!value.isNullOrBlank()) {
            value?.replace("\\[(\\w{2})\\]".toRegex(),"[[SPLIT_FIRS]]\$1[[SPLIT_LAST]]")?.replaceFirst("[[SPLIT_FIRS]]", "")?.split("[[SPLIT_FIRS]]")?.associate {

                val (left, right) = it.split("[[SPLIT_LAST]]")

                left to right
            }
        } else null

        return v
    }
    fun localDateTimes(value: String?): LocalDateTime? {

        val v = if (!value.isNullOrBlank()) {
            LocalDateTime.parse(value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
        } else null

        return v
    }

    fun frequency(value: String?): String? {

        val v = if (!value.isNullOrBlank()) {
            value?.replace("\\[.*#".toRegex(), "")?.replace("[VALUE]", ",")
        } else null

        return v
    }

    fun periocity(value: String?):  Pair<LocalDateTime?, LocalDateTime?>? {

        var value  = value

        if (!value.isNullOrBlank()) {

            val mm = ConstantValues.REGEX_FREQUENCY.toRegex().findAll(value).map {
                println("${it.value} -- ${"\\+".toRegex().matches(it.value)}")
                if (".*\\+.*".toRegex().matches(it.value)){
                    LocalDateTime.parse(it.value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
                }else{
                    LocalDateTime.parse(it.value, DateTimeFormatter.ISO_LOCAL_DATE_TIME)

                }
            }.toMutableList()

            if (mm.size > 1) {
                return mm.zipWithNext().first()
            }
            if(mm.size == 1) {
                mm.add(null)
                return mm.zipWithNext().first()
            }

        }
        return null

    }

    fun distributions(value: String?): Collection<Map<String, String>?>? {

        val v = if (!value.isNullOrBlank()) {
            value!!.replaceFirst("[", "").split("//[")?.map {
                var titleNumber = 0
                it?.split("[")?.associate {
                    var (left, right) = it.split("]")
                    if (left.matches("TITLE_.*".toRegex())) {
                        right = left.split("_").elementAt(1) + "_-_" + right
                        left = "TITLE_$titleNumber"
                        titleNumber += 1
                    }
                    "[SPLIT]$left" to right
                }
            }
        } else null
        return v
    }
}

