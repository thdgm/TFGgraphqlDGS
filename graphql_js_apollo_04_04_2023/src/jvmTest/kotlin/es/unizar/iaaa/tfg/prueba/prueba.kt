package es.unizar.iaaa.tfg.prueba


import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import es.unizar.iaaa.tfg.constants.ConstantValues
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.io.ResourceLoader
import java.io.File
import java.io.FileInputStream
import java.io.InputStream
import java.math.BigDecimal
import java.nio.file.Paths
import java.time.LocalDateTime
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter


@SpringBootTest
class Prueba {

    @Autowired
    lateinit var resourceLoader: ResourceLoader

    val file = "graphql_js_apollo_03_04_2023/src/jvmTest/resources/CSVReader.csv"
    data class PruebaModel(
        val index:Int,
        val item:String,
        val cost: BigDecimal,
        val tax:BigDecimal,
        val total:BigDecimal,
        val extra:String?
        )

    data class DatasetModel(
        val url: String?,
        val identifier: String?,
        val title: String?,
        val description: String?,
        val themes: String?,
        val keywords: String?,
        val issued: String?,
        val modified: String?,
        val frequency: String?,
        val languages: String?,
        val publisher: String?,
        val useConditions: String?, // No está en el modelo
        val spatial: String?,
        val period: String?,
        val validity: String?, // No está en el modelo
        val relatedResources: String?, //No está en el modelo
        val regulations: String?, // No está en el modelo
        val distributions: String?,

    )

    @Test
    fun `temporal amount`() {

        //val d = ZonedDateTime.parse("2023-03-17T20:46:12+02:00")
        val d = LocalDateTime.parse("2023-02-20T11:30:49+01:00",DateTimeFormatter.ISO_OFFSET_DATE_TIME)
        println("LOCAL DT: $d")
    }

    fun readStrictCsv(inputStream: InputStream): List<DatasetModel> = csvReader().open(inputStream) {
        readAllWithHeaderAsSequence().map {
            DatasetModel(
                it["URL"],
                it["IDENTIFICADOR"],
                it["TÍTULO"],
                it["DESCRIPCIÓN"],
                it["TEMÁTICAS"],
                it["ETIQUETAS"],
                it["FECHA DE CREACIÓN"],
                it["FECHA DE ÚLTIMA MODIFICACIÓN"],
                it["FRECUENCIA DE ACTUALIZACIÓN"],
                it["IDIOMAS"],
                it["ÓRGANO PUBLICADOR"],
                it["CONDICIONES DE USO"],
                it["COBERTURA GEOGRÁFICA"],
                it["COBERTURA TEMPORAL"],
                it["VIGENCIA DEL RECURSO"],
                it["RECURSOS RELACIONADOS"],
                it["NORMATIVA"],
                it["DISTRIBUCIONES"]
            )

        }.toList()
    }

    @Test
    fun `csv reader`() {
        //val list = readStrictCsv()

//"classpath:CSVReader.csv"
        val r =  resourceLoader.getResource("classpath:datosGob.csv")
        val list = readStrictCsv(r.inputStream)
        println(list)

    }

}
