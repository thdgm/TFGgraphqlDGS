package es.unizar.iaaa.tfg.adapters.mutationsCsv

//import ch.qos.logback.classic.Logger
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.csvServices.ProcessCsvServices
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext
import org.slf4j.LoggerFactory.getLogger

@SpringBootTest
class TestsFicheroCsv {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    //private val logger = KotlinLogging.logger {}

    //val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"
    val urlRecord = "classpath:datosGob.csv"

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    @Autowired
    lateinit var processCsvServices: ProcessCsvServices

    fun createCatalogRecord(urlRecord: String, inputParam:String, datasetFieldsString:String) {

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        id
                        publisher
                    }
                }
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetFieldsString,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        println("CRR: $response")

    }




    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los themes`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }



        val query = """
        query getAllThemes{
            getAllThemes
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val themes = response.extractValue<Collection<String>>("data.getAllThemes[*]")
        getLogger("loggerTest").debug("RESPUESTAAAAA2:  ${themes.size}")
        getLogger("loggerTest").debug("RESPUESTAAAAA3:  ${themes}")

        assertThat(themes).hasSize(26)

    }


}