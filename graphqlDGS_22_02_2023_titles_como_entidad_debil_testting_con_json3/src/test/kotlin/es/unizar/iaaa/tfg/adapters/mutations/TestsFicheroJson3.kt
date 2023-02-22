package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestsFicheroJson3 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    //val urlRecord = "https://datos.gob.es/es/catalogo/a16003011-tablas-estadisticas-inventario-de-emisiones-de-contaminantes-a-la-atmosfera-de-la-c-a-del-pais-vasco-1990-20181.jsonld"
    val urlRecord = "classpath:json3.json"

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 8 distributions`() {

        val esperado = listOf("98662", "82964", "64133", "48415", "119890", "84122", "33362", "78694")
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
        val byteSizes = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.distributions[*].byteSize")
        assertThat(byteSizes).hasSize(8)
        assertThat(byteSizes).hasSameElementsAs(esperado)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 8 distributions con format`() {

        val esperado = listOf(
            "application/vnd.oasis.opendocument.spreadsheet",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.oasis.opendocument.spreadsheet",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.oasis.opendocument.spreadsheet",
            "application/vnd.oasis.opendocument.spreadsheet"
        )
        val inputParam = "\$input"

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
        assertThat(formats).hasSameElementsAs(esperado)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 8 distributions con 2 titles cada una`() {


        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        ... on Dataset{
                            distributions {                            
                                title                        
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
        val titles = response.extractValue<Collection<Collection<String>>>("data.createCatalogRecord.primaryTopic.distributions[*].title")
        assertThat(titles).hasSize(8)
        titles.forEach { assertThat(it).hasSize(2) }

    }

}