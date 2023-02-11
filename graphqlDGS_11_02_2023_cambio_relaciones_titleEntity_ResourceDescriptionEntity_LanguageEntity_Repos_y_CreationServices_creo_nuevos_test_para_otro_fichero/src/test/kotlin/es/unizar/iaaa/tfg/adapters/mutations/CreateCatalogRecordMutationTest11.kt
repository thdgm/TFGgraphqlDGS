package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class Test11CRMutation {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord =
        "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"


    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo sus distributions fields title, accessUrl, tienen 2`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                        
                         ... on Dataset{
                           distributions{                           
                             title
                             accessUrl                          
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
        val title = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].title[*]"
        )
        val accessUrl = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessUrl"
        )

        assertThat(accessUrl).hasSize(2)
        assertThat(title).hasSize(2)
    }


}
