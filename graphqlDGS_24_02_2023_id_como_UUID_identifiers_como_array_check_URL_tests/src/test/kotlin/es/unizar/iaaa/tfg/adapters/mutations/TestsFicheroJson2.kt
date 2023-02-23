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
class TestsFicheroJson2 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    //val urlRecord = "https://datos.gob.es/es/catalogo/a15002917-abastecimiento-contadores-municipal.jsonld"
    val urlRecord = "classpath:json2.json"

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y tiene en su inCatalog resources y datasets al dataset que es su primaryTopic`() {

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        id
                        language
                        description
                        title
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
        println(response)
        val titles = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.title[*].tag")
        val descriptions = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.description[*].tag")
        val languages = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.language")

        val primaryTopic = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val resources = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.inCatalog[*].resources[*].id"
        )
        val datasets = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].datasets[*].id")
        println(languages)
        println(descriptions)
        println(titles)
        assertThat(titles).hasSize(2)
        assertThat(descriptions).hasSize(2)
        assertThat(languages).hasSize(2)
        assertThat(languages).containsAll(titles.distinct())
        assertThat(languages).containsAll(descriptions.distinct())

        assertThat(primaryTopic).isIn(resources)
        assertThat(primaryTopic).isIn(datasets)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene 2 distributions cada una con 2 titles`() {

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                        ... on Dataset{
                          distributions {
                           id
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
        println(response)
        val titles = response.extractValue<Collection<Collection<String>>>("data.createCatalogRecord.primaryTopic.distributions[*].title")
        val distributions = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.distributions[*].id")
        assertThat(distributions).hasSize(2)
        assertThat(titles.elementAt(0)).hasSize(2)
        assertThat(titles.elementAt(1)).hasSize(2)
    }
}