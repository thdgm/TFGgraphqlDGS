package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class Test5CRMutation {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su title keywords y language`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                         title
                         language
                        ... on Dataset{
                          keywords
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
                "catalogRecorId" to "CRNuevo",
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val keywords = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.keywords[*].tag"
        )
        val titles = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.title[*].tag")
        val languages = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.language")

        assertThat(keywords).hasSize(4)
        assertThat(languages).hasSize(1)
        assertThat(languages.elementAt(0)).isEqualTo("es")
        assertThat(languages).containsAll(titles.distinct())
        assertThat(languages).containsAll(keywords.distinct())
    }
}
