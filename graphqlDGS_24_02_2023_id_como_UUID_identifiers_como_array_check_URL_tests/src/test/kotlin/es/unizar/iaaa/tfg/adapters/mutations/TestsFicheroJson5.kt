package es.unizar.iaaa.tfg.adapters.mutations

import com.google.gson.JsonObject
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestsFicheroJson5 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    //val urlRecord = "https://datos.gob.es/es/catalogo/l01502973-campos-de-futbol.jsonld"
    val urlRecord = "classpath:json5.json"


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 5 distribution una con 1 byteSize igual a "11776"`() {

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                        ... on Dataset{
                          distributions {
                            byteSize                          
                          }
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
        val response = GraphQLResponse(createCR.jsonString())
        val byteSize = response.extractValue<Collection<Collection<String>>>("data.createCatalogRecord.primaryTopic.distributions[*].byteSize")
        assertThat(byteSize).hasSize(5)
        assertThat("11776").isIn(byteSize)
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 1 publisher con notation "L01502973"`() {

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
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
        val response = GraphQLResponse(createCR.jsonString())
        val publisherLabel = response.extractValue<String>("data.createCatalogRecord.primaryTopic.publisher.notation")
        assertThat(publisherLabel).isEqualTo("L01502973")
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 5 distribution con sus format`() {

        val inputParam = "\$input"
        val esperado = listOf("application/json", "application/vnd.ms-excel", "application/json", "text/csv", "application/vnd.oasis.opendocument.spreadsheet")
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                        ... on Dataset{                     
                            distributions {
                                format                            
                            }
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
        val response = GraphQLResponse(createCR.jsonString())
        println(response)
        val formats = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.distributions[*].format")
        println(formats)
        assertThat(formats).hasSize(5)
        assertThat(formats).containsExactlyInAnyOrderElementsOf(esperado)
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene accrualPeriodicity`() {

        val inputParam = "\$input"
        val esperado = "years 1.0"
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                        ... on Dataset{                     
                            accrualPeriodicity 
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
        val response = GraphQLResponse(createCR.jsonString())
        val accperRango = response.extractValue<String>("data.createCatalogRecord.primaryTopic.accrualPeriodicity.rango")
        val accperPeriodo = response.extractValue<Double>("data.createCatalogRecord.primaryTopic.accrualPeriodicity.periodo")

        assertThat("$accperRango $accperPeriodo").isEqualTo(esperado)

    }

}