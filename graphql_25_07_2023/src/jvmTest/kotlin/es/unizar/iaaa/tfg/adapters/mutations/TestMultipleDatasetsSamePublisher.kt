package es.unizar.iaaa.tfg.adapters.mutations

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
class TestMultipleDatasetsSamePublisher {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecords= listOf(
        "classpath:jsonSamePublisher1.json",
        "classpath:jsonSamePublisher2.json",
        "classpath:jsonSamePublisher3.json"
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
        // val response = GraphQLResponse(createCR.jsonString())
        // LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets same publisher`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
       // createCatalogRecord("classpath:jsonSamePublisher1.json",inputParam)

        urlRecords.forEach {
            createCatalogRecord(it, inputParam)

        }
        LoggerFactory.getLogger("loggerTest").debug("FINN CREADOSSSS::::::::::::::::::::::::::::::::")

        // Aquí cojo todos los dataset con mismo publisher
        // Se supone que he creado varios CR con primaryTopic p.e: d1,d2,d3
        // Comparten publisher
        // Hay que crear: resourcesByPublisher(): Collection<ResourceEntity>


        val query = """
        query getResourcesByPublisher($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                publisher
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "publisher", "value" to listOf("L01280796"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $resourcesId")

        assertThat(resourcesId).hasSize(3)
    }
}