package es.unizar.iaaa.tfg.prueba


import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN_ZONE_OFFSET
import es.unizar.iaaa.tfg.constants.ConstantValues.REGEX_FREQUENCY
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
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
import java.util.*


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

    data class DistributionModel(
        val accessUrl: String?,
        val titles:Collection<String?>,
        val byteSize: Int?,
        val format: String?,
    ): ModelJsonMapping

    data class DatasetModel(
        val url: String?,
        val identifier: String?,
        val title: Collection<String>,
        val description: Collection<String>,
        val themes: Collection<String>,
        val keywords: Map<String,String>?, // {es=Alemania//España, en=Spain//Germany}
        val issued: LocalDateTime?,
        val modified: LocalDateTime?,
        val frequency: String?,
        val languages: Collection<String>,
        val publisher: String?,
        val useConditions: String?, // No está en el modelo
        val spatial: String?,
        val period: Pair<LocalDateTime,LocalDateTime>?,
        val validity: LocalDateTime?, // No está en el modelo
        val relatedResources: String?, //No está en el modelo
        val regulations: String?, // No está en el modelo
        val distributions: Collection<Map<String,String>?>?,

    )

    @Test
    fun `temporal amount`() {

        //val d = ZonedDateTime.parse("2023-03-17T20:46:12+02:00")

        val p = LocalDateTime.parse("2022-06-06T15:20:37+0200",DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ"))
        val d = LocalDateTime.parse("2022-06-06T15:20:37+02:00",DateTimeFormatter.ISO_OFFSET_DATE_TIME)
        println("LOCAL DT: $p")
    }

    fun readStrictCsv(inputStream: InputStream): List<DatasetModel> = csvReader().open(inputStream) {
        readAllWithHeaderAsSequence().map {
            DatasetModel(
                it["URL"],
                if (!it["IDENTIFICADOR"].isNullOrBlank()) it["IDENTIFICADOR"] else null,
                if (!it["TÍTULO"].isNullOrBlank()){
                    it["TÍTULO"]!!.replace("]","-").replaceFirst("[","").split("[")
                } else emptyList(),
                if (!it["DESCRIPCIÓN"].isNullOrBlank()){
                    it["DESCRIPCIÓN"]!!.replace("]","-").replaceFirst("[","").split("[")
                } else emptyList(),
                if (!it["TEMÁTICAS"].isNullOrBlank()){
                    it["TEMÁTICAS"]!!.split("//")
                } else emptyList(),

                if (!it["ETIQUETAS"].isNullOrBlank()) {
                    it["ETIQUETAS"]?.replaceFirst("[","")?.split("[")?.associate {
                        val (left, right) = it.split("]")
                        left to right
                    }
                } else null,

                if (!it["FECHA DE CREACIÓN"].isNullOrBlank()){
                    LocalDateTime.parse(it["FECHA DE CREACIÓN"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if (!it["FECHA DE ÚLTIMA MODIFICACIÓN"].isNullOrBlank()){
                    LocalDateTime.parse(it["FECHA DE ÚLTIMA MODIFICACIÓN"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if(!it["FRECUENCIA DE ACTUALIZACIÓN"].isNullOrBlank()){
                    it["FRECUENCIA DE ACTUALIZACIÓN"]?.replace("\\[.*#".toRegex(),"")?.replace("[VALUE]",",")
                }else null,
                if (!it["IDIOMAS"].isNullOrBlank()) it["IDIOMAS"]!!.split("//") else emptyList(),
                if (!it["ÓRGANO PUBLICADOR"].isNullOrBlank()) it["ÓRGANO PUBLICADOR"] else null,
                if (!it["CONDICIONES DE USO"].isNullOrBlank()) it["CONDICIONES DE USO"] else null,
                if (!it["COBERTURA GEOGRÁFICA"].isNullOrBlank()) it["COBERTURA GEOGRÁFICA"] else null,
                if (!it["COBERTURA TEMPORAL"].isNullOrBlank()){
                    REGEX_FREQUENCY.toRegex().findAll(it["COBERTURA TEMPORAL"]!!).map{
                        LocalDateTime.parse( it.value, DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))

                    }.toList().zipWithNext().first()
                }else null,
                if(!it["VIGENCIA DEL RECURSO"].isNullOrBlank()){
                    LocalDateTime.parse(it["VIGENCIA DEL RECURSO"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if (!it["RECURSOS RELACIONADOS"].isNullOrBlank()) it["RECURSOS RELACIONADOS"] else null,
                if (!it["NORMATIVA"].isNullOrBlank()) it["NORMATIVA"] else null,
                if (!it["DISTRIBUCIONES"].isNullOrBlank()){

                    println("DISTRIBUTIONNNNN ")

                    it["DISTRIBUCIONES"]!!.replaceFirst("[","").split("//[")?.map {
                        var titleNumber = 0
                        it?.split("[")?.associate {
                            println("DISTRIBUTIONNNNN2 $it")

                            var (left, right) = it.split("]")
                            if (left.matches("TITLE_.*".toRegex())) {
                                right = left.split("_").elementAt(1) + "_-_" + right
                                left = "TITLE_$titleNumber"
                                titleNumber += 1
                            }
                            left to right

                        }
                    }
                }else null
            )

        }.toList()
    }

    @Test
    fun `csv reader`() {
        //val list = readStrictCsv()

//"classpath:CSVReader.csv"
        val r =  resourceLoader.getResource("classpath:datosGob.csv")
        val list = readStrictCsv(r.inputStream)
        println(list.elementAt(12).description.elementAt(1))
        println(list.elementAt(12).title.elementAt(0))
        println(list.elementAt(24).themes)
        println(list.elementAt(0).keywords)
        println(list.elementAt(24).keywords?.keys)
        println(list.elementAt(24).issued)
        println(list.elementAt(3).modified)
        println(list.elementAt(24).publisher)
        println(list.elementAt(3).languages)

        println(list.elementAt(24).period)
        println(list.elementAt(3).period)

        println("/////////")
        println(list.elementAt(16).validity)
        println(list.elementAt(3).validity)
        println(list.elementAt(17).relatedResources)
        println(list.elementAt(1).relatedResources)
        println(list.elementAt(25).regulations)
        println(list.elementAt(3).regulations)
        println("////////////////")
        println(list.elementAt(27).distributions)
        println("/////////////////")
    }


}

/*
     TITLE:

      val tit = TitlesResourceEntity()
        val titleId = TitleResourceId()
        titleId.titleId = text.orEmpty()
        titleId.resourceId = res.id
        tit.id = titleId
        val language = titleLangs.elementAt(index)
        tit.resourceTitle = res
        titlesResourceRepository.save(tit)
        if (language != null)
            createRelationsBetweenEntitiesLanguageServices
                .insertIntoLanguageTitles(language,tit.id.titleId,res)
      */