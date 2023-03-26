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
        query getResourcesByPeriodicity($filterParam:String, $valueParam:String){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to "years")
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
        query getResourcesByPeriodicity($filterParam:String, $valueParam:String){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to "days")
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
        query getResourcesByPeriodicity($filterParam:String, $valueParam:String){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to "months")
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
        query getResourcesByPeriodicity($filterParam:String, $valueParam:String){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to "weeks")
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")

        assertThat(resourcesId).hasSize(1)
    }
}