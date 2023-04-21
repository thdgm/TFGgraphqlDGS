package es.unizar.iaaa.tfg.adapters.mutations

import com.jayway.jsonpath.DocumentContext
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestFilterFields {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecords = listOf(

          "classpath:jsonSamePublisher1.json",
          "classpath:jsonSamePublisher2.json",
          "classpath:json1.json",
          "classpath:json2.json",
          "classpath:json3.json",
          "classpath:json4.json",
          "classpath:json5.json",
          "classpath:jsonWeekPeriocity.json",
          "classpath:jsonSameKeyword1.json",
          "classpath:jsonSameKeyword2.json",
          "classpath:jsonSameTheme1.json",
          "classpath:jsonSameTheme2.json",
          "classpath:jsonMonthPeriocity.json",
          "classpath:jsonDayPeriocity.json",
          "classpath:jsonYearPeriocity1.json",
          "classpath:jsonYearPeriocity2.json",
          "classpath:jsonYearPeriocity3.json",
          "classpath:jsonThreeTimesPerWeek.json",
          "classpath:jsonEach99Years.json",
          "classpath:jsonCuatrimestral.json",
          "classpath:jsonContinuo.json",

    )


    fun createCatalogRecord(urlRecord: String, inputParam:String) {

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
                "contentType" to "application/json",
                "contentUrl" to urlRecord,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        //val response = GraphQLResponse(createCR.jsonString())
        //LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA 1:  $response")
    }




    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los themes`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecords.forEach {
           createCatalogRecord(it,inputParam)
        }

       val query = """
        query getAllThemes{
            getAllThemes
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val themes = response.extractValue<Collection<String>>("data.getAllThemes[*]")

        assertThat(themes).hasSize(17)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los keywords en español (es)`() {

        val inputParam = "\$input"
        val languageParam = "\$language"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getAllKeywords($languageParam:String){
            getAllKeywords(language: $languageParam)
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("language" to "es")
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query,queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val themes = response.extractValue<Collection<String>>("data.getAllKeywords[*]")

        assertThat(themes).hasSize(98)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los publisher labels`() {

        val inputParam = "\$input"
        val languageParam = "\$language"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getAllPublishers{
            getAllPublishers
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val publishers = response.extractValue<Collection<String>>("data.getAllPublishers[*]")

        assertThat(publishers).hasSize(10)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los rangos de frecuencias`() {

        val inputParam = "\$input"
        val languageParam = "\$language"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getAllFrequencies{
            getAllFrequencies
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val frequencies = response.extractValue<Collection<String>>("data.getAllFrequencies[*]")

        assertThat(frequencies).hasSize(8)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos las notation de los publishers`() {

        val inputParam = "\$input"
        val languageParam = "\$language"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getAllAdminLabel{
            getAllAdminLabel
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val notations = response.extractValue<Collection<String>>("data.getAllAdminLabel[*]")

        assertThat(notations).hasSize(10)

    }
}