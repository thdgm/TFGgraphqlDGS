package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CreateCatalogRecordMutationInCatalogTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    /*@Test
    fun `El CR tiene inCatalog a root con 1 service 2 resources y es servedBy 1 service`() {
        println("EMPIEZA EL TESSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTT 1")
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
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
        println("ACABA EL TESSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTT 1")
        println(isServedBy)
        assertThat(isServedBy).hasSize(1)
        // val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].resources[*].id")
        // val services = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].services[*].id")
        /* println(isServedBy)
         println(resources)
         println(services)
         assertThat(isServedBy).hasSize(1)
         assertThat(resources).hasSize(2)
         assertThat(services).hasSize(1)*/
    }*/

    @Test
    fun `Creo CR a partir de json y tiene en su inCatalog resources y datasets al dataset que es su primaryTopic`() {
        println("EMPIEZA EL TESSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTT 2")
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        id
                       }
                       inCatalog{
                         resources{
                           id
                         }
                         datasets{
                           id
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
        val primaryTopic = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val resources = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.inCatalog[*].resources[*].id"
        )
        val datasets = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].datasets[*].id")

        assertThat(primaryTopic).isIn(resources)
        assertThat(primaryTopic).isIn(datasets)
    }

    @Test
    fun `El CR tiene inCatalog a root cuyos services estan en sus resources y el primaryTopic de CR es un dataset cuyo isServedBy esta en services de root`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        
                        ... on Dataset{
                         isServedBy{
                          id
                         }
                        }
                       }
                       inCatalog{
                         services{
                           id
                         }
                         resources{
                           id
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
        val isServedBy = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.isServedBy[*].id"
        )
        val resources = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.inCatalog[*].resources[*].id"
        )
        val services = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].services[*].id")

        assertThat(resources).containsAnyElementsOf(services)
        assertThat(services).containsAnyElementsOf(isServedBy)
    }
}
