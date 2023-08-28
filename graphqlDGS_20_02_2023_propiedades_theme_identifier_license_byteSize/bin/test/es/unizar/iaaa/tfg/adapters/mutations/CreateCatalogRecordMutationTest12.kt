package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class Test12CRMutation {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene inCatalog a root con 1 service 2 resources y es servedBy 1 service`() {

        val queryPrevia = """
            {
                catalog(id:"root"){
                    resources{
                      id
                    }
                }
            }
        """.trimIndent()


        val checkRoot = dgsQueryExecutor.executeAndGetDocumentContext(queryPrevia)
        val responsePrevio = GraphQLResponse(checkRoot.jsonString())
        val resourcesPrevios = responsePrevio.extractValue<Collection<String>>("data.catalog.resources[*].id")
        assertThat(resourcesPrevios).hasSize(0)


        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       inCatalog{
                         resources {
                          id
                         }
                         services {
                          id        
                         }
                       }
                       primaryTopic{
                        
                        ... on Dataset{
                         isServedBy{
                           id
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
                "catalogRecorId" to "CRTest",
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val isServedBy = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.isServedBy[*].id"
        )

        val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].resources[*].id")
        val services = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].services[*].id")
        println(isServedBy)
        println(resources)
        println(services)
        assertThat(isServedBy).hasSize(1)
        assertThat(resources).hasSize(2)
        assertThat(services).hasSize(1)
    }
}
