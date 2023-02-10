package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class Test13CRMutation {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"
    @Test
    fun `Creo CR a partir de json y tiene en su inCatalog resources y datasets al dataset que es su primaryTopic`() {

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
}
