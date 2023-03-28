package es.unizar.iaaa.tfg.adapters.mutations

import com.jayway.jsonpath.DocumentContext
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestFindResourcesSameTheme {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecords = listOf(
        "classpath:jsonSamePublisher2.json",
        "classpath:jsonSamePublisher1.json",
        "classpath:json5.json"
    )

    fun createCatalogRecord(urlRecord: String, inputParam:String) {

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        id
                        theme
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
        val response = GraphQLResponse(createCR.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
    }




    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo los de un theme concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

       /* val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:String){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "format", "value" to "application/json")
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
         val response = GraphQLResponse(resources.jsonString())
         LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        Assertions.assertThat(resourcesId).hasSize(7)*/

    }
}