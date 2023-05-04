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
class TestMultipleDatasetsSameAccrualPeriodicity {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecordsYearly= listOf(
        "classpath:jsonYearPeriocity1.json",
        "classpath:jsonYearPeriocity2.json",
        "classpath:jsonYearPeriocity3.json",
        "classpath:jsonDayPeriocity.json",
        "classpath:jsonMonthPeriocity.json",
        "classpath:jsonWeekPeriocity.json"
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
    fun `Multiple datasets periodicity yearly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("years"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        assertThat(resourcesId).hasSize(3)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity daily`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("days"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        assertThat(resourcesId).hasSize(2)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity monthly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("months"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        assertThat(resourcesId).hasSize(1)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity weekly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("weeks"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        assertThat(resourcesId).hasSize(1)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity weekly yearly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
        val esperado = listOf(
            "188bf908-c12a-3947-a5a3-dc1ffd2d7e02",
            "12a0b9a7-2c8d-3110-b777-a0fceeb15603",
            "0d86cf32-294a-381e-b9db-a62e2c5c8f81",
            "0285f396-5a7c-3a12-8c83-01a26b68b072",
        )

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("years","weeks"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        assertThat(resourcesId).hasSize(4)
        assertThat(resourcesId).containsExactlyInAnyOrderElementsOf(esperado)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity monthly yearly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
        val esperado = listOf(
            "5f94f1be-1c51-34ef-970d-483d7509fe7d",
            "12a0b9a7-2c8d-3110-b777-a0fceeb15603",
            "0d86cf32-294a-381e-b9db-a62e2c5c8f81",
            "0285f396-5a7c-3a12-8c83-01a26b68b072",
        )

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("years","months"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        assertThat(resourcesId).hasSize(4)
        assertThat(resourcesId).containsExactlyInAnyOrderElementsOf(esperado)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity daily yearly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
        val esperado = listOf(
            "d1",
            "12a0b9a7-2c8d-3110-b777-a0fceeb15603",
            "0d86cf32-294a-381e-b9db-a62e2c5c8f81",
            "0285f396-5a7c-3a12-8c83-01a26b68b072",
            "4c942c7d-6a04-3f83-bfaa-119dda9d9b4f",
        )

        urlRecordsYearly.forEach {
            createCatalogRecord(it,inputParam)
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("years","days"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        assertThat(resourcesId).hasSize(5)
        assertThat(resourcesId).containsExactlyInAnyOrderElementsOf(esperado)
    }
}