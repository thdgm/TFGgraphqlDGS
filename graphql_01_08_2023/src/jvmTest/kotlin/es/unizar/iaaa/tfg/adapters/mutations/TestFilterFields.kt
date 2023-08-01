package es.unizar.iaaa.tfg.adapters.mutations

import com.graphqlDGS.graphqlDGS.model.types.MapInput
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
    fun `Creo CRs a partir de json y obtengo todos los formats`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getAllFormats{
            getAllFormats
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val formats = response.extractValue<Collection<String>>("data.getAllFormats[*]")
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA2:  $formats")

       // assertThat(themes).hasSize(17)

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

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y filtro resources`() {

        val filters = "\$filters"
        val inputParam = "\$input"
        val type = "\$value"
        val page = "\$page"

        /*urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }*/

        val query = """
        query resourcesByFilter($filters:[MapInput!], $type: String!, $page: Int!){
            resourcesByFilter(filters:$filters, type: $type, page: $page){
                id
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf(
            "filters" to listOf(
                mapOf(
                    "key" to "Categoría",
                    "values" to listOf("Sector público")
                ),

            ),
            "type" to "dataset",
            "page" to 0
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")


    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Filtro resources por Format`() {

        val filters = "\$filters"
        val inputParam = "\$input"
        val type = "\$value"
        val page = "\$page"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query resourcesByFilter($filters:[MapInput!], $type: String!, $page: Int!){
            resourcesByFilter(filters:$filters, type: $type, page: $page){
                id
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf(
            "filters" to listOf(
                mapOf(
                    "key" to "Formato",
                    "values" to listOf("csv")
                ),

                ),
            "type" to "dataset",
            "page" to 0
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")


    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y filtro resources dataservices`() {

        val filters = "\$filters"
        val inputParam = "\$input"
        val type = "\$type"
        val page = "\$page"


        val query = """
        query resourcesByFilter($filters:[MapInput!], $type: String!, $page: Int!){
            resourcesByFilter(filters:$filters, type: $type, page: $page){
                id
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf(
            "filters" to listOf(
                mapOf(
                    "key" to "DataServices",
                    "values" to listOf("f48c5936-04f6-4bd1-8159-28ceb7c15038")
                ),
                mapOf(
                    "key" to "Categoría",
                    "values" to listOf("Sector público")
                ),
                mapOf(
                    "key" to "DatasetSeries",
                    "values" to listOf("f48c5936-04f6-4bd1-8159-28ceb7c15038")
                ),
                mapOf(
                    "key" to "Catalogs",
                    "values" to listOf("root")
                ),
                mapOf(
                    "key" to "Distibuciones",
                    "values" to listOf("root")
                ),
                mapOf(
                    "key" to "Licenses",
                    "values" to listOf("http://www.aemet.es/es/nota_legal","https://dadesobertes.l-h.cat/obrefitxer.ashx?Fw9EVw48XS6Abt48VrBOMuE9ZfTv0XVQyySo5XiNSWEqazB")
                ),
                mapOf(
                    "key" to "Fecha creación",
                    "values" to listOf("2018-06-18 00:00:00")
                ),
                mapOf(
                    "key" to "Fecha última modificación",
                    "values" to listOf("2018-06-14 00:00:00")
                ),
                mapOf(
                    "key" to "Frecuencia de Actualización",
                    "values" to listOf("time:weeks 3.0")
                ),
                mapOf(
                    "key" to "Formato",
                    "values" to listOf("text/html")
                ),
                mapOf(
                    "key" to "Publicador",
                    "values" to listOf("Agencia Estatal Boletín Oficial del Estado")
                ),

                mapOf(
                    "key" to "Nivel de Administración",
                    "values" to listOf("EA0040819")
                ),
                mapOf(
                    "key" to "PrimaryTopic",
                    "values" to listOf("36176faf-ad53-34f5-b797-1565d4f896d5/CatalogRecord")
                ),
                mapOf(
                    "key" to "Etiqueta",
                    "values" to listOf("ePUB")
                ),
                mapOf(
                    "key" to "Descripciones",
                    "values" to listOf("Becas publicadas en el BOE en los últimos 30 días.  Estas disposiciones se encuentran en formato PDF.")
                ),
                mapOf(
                    "key" to "Títulos",
                    "values" to listOf("Códigos y otros libros electrónicos")
                )

                ),

            "type" to "dataset",
            "page" to 0
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")


    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Filtrsos`() {

        val filters = "\$filters"
        val inputParam = "\$input"
        val type = "\$type"
        val page = "\$page"



        val query = """
        query resourcesByFilter($filters:[MapInput!], $type: String!, $page: Int!){
            resourcesByFilter(filters:$filters, type: $type, page: $page){
                
                ... on Dataset{
                    id
                    title
                    distributions{
                     format
                    }
                    inCatalog{
                     id
                     resources {
                       
                       ... on DataService{
                        id
                        isAccessedBy {
                            id
                            title
                        }
                       }
                       
                      }
                    }
                    
                }
                
                
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf(
            "filters" to listOf(
                mapOf(
                    "key" to "Publicador",
                    "values" to listOf("Agencia Estatal Boletín Oficial del Estado")
                )
            ),
            "type" to "dataset",
            "page" to 0
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")


    }

}