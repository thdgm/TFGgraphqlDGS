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
class TestFindResourcesSameKeyword {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecords = listOf(
        "classpath:jsonSameKeyword1.json",
        "classpath:jsonSameKeyword2.json",
        "classpath:json5.json",

    )

    fun createCatalogRecord(urlRecord: String, inputParam:String) {

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        id
                        ... on Dataset {
                         keywords
                        }
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
    fun `Creo CRs a partir de json y obtengo los que tengan un keyword concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                theme
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "keyword", "value" to listOf("vehicle elèctric"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
         val response = GraphQLResponse(resources.jsonString())
         LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        Assertions.assertThat(resourcesId).hasSize(2)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo los que tengan un set de keywords concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
        val esperado = listOf(
            "f1991421-8c69-3130-b30a-3a3b773ed935",
            "f7218014-3be2-3287-96e8-f832ddb11baa",
            "3d869e3f-2863-3c4e-ac02-12d59a91c5a1",
        )
        urlRecords.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                theme
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "keyword", "value" to listOf("vehicle elèctric","equipamientos"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        //Assertions.assertThat(resourcesId).hasSize(2)
        Assertions.assertThat(resourcesId).hasSize(3)
        Assertions.assertThat(resourcesId).containsExactlyInAnyOrderElementsOf(esperado)
    }
}