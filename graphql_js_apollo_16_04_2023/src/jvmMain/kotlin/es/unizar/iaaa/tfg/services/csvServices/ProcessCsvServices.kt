package es.unizar.iaaa.tfg.services.csvServices

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service
import java.io.InputStream
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
        val inputStream =  resourceLoader.getResource("classpath:datosGob.csv").inputStream
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
                fieldOrNull(it["RECURSOS RELACIONADOS"]),
                fieldOrNull(it["NORMATIVA"]),
                distributions(it["DISTRIBUCIONES"]),
            )
        }.toList()
    }

    /*
     * Auxiliar functions to extract and transform the fields from the csv.
     */

    fun fieldOrNull(value: String?): String? =
        if (!value.isNullOrBlank()) value else null

    fun fieldSplit(value: String?): Collection<String> =
        if (!value.isNullOrBlank()) value!!.split("//") else emptyList()

    fun titleDescription(value: String?): Collection<String> =
        if (!value.isNullOrBlank()){
            value!!.replace("]","-").replaceFirst("[","").split("[")
        } else emptyList()
    fun keywords(value: String?): Map<String, String>? =
        if (!value.isNullOrBlank()) {
           value?.replaceFirst("[","")?.split("[")?.associate {
                val (left, right) = it.split("]")
                left to right
            }
        } else null
    fun localDateTimes(value: String?): LocalDateTime? =
        if (!value.isNullOrBlank()){
            LocalDateTime.parse(value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
        }else null

    fun frequency(value: String?): String? =
        if(!value.isNullOrBlank()){
            value?.replace("\\[.*#".toRegex(),"")?.replace("[VALUE]",",")
        }else null

    fun periocity(value: String?):  Pair<LocalDateTime, LocalDateTime>? =
        if (!value.isNullOrBlank()){
            ConstantValues.REGEX_FREQUENCY.toRegex().findAll(value!!).map{
                LocalDateTime.parse( it.value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
            }.toList().zipWithNext().first()
        }else null

    fun distributions(value: String?): Collection<Map<String, String>?>? =
        if (!value.isNullOrBlank()){
            value!!.replaceFirst("[","").split("//[")?.map {
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
        }else null
}

