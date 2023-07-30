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
class TestFindResourcesSameAdmonLevel {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecords = listOf(
        "classpath:jsonSameTheme1.json",
        "classpath:jsonSameTheme2.json",
        "classpath:json5.json",
        "classpath:jsonSameKeyword1.json",
        "classpath:jsonSameKeyword2.json"

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
    fun `Creo CRs a partir de json y obtengo los de un admon level concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        val esperado = listOf("A09002970","A09002970")

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

      val query = """
        query getResourcesByAdmonLevel($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                publisher
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf(
            "filter" to "adminLevel",
            "value" to listOf(
                "Administración Autonómica"
            )
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())

        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val publishersNotations = response.extractValue<Collection<String>>("data.resourcesByFilter[*].publisher.notation")

        Assertions.assertThat(publishersNotations).hasSize(2)
        Assertions.assertThat(publishersNotations).containsExactlyInAnyOrderElementsOf(esperado)

    }

}