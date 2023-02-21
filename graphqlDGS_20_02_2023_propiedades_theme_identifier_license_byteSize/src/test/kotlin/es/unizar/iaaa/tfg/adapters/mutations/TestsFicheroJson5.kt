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
class TestsFicheroJson5 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    //val urlRecord = "https://datos.gob.es/es/catalogo/l01502973-campos-de-futbol.jsonld"
    val urlRecord = "classpath:json5.json"
    //TODO() PROBAR LO DEL IMT

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

}