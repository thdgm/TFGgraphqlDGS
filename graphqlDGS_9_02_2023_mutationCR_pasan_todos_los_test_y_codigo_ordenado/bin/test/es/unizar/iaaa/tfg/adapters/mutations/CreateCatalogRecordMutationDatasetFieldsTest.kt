package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CreateCatalogRecordMutationDatasetFieldsTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    val urlRecord =
        "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    @Test
    fun `El CR tiene primaryTopic a un dataset cuyo primaryTopic es dicho CR`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        ... on Dataset{
                         isPrimaryTopicOf{
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
                "catalogRecorId" to "CRNuevo",
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val primaryTopicOf = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.isPrimaryTopicOf[*].id"
        )

        assertThat("CRNuevo").isIn(primaryTopicOf)
    }

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

        println(response)
        println(keywords)
        println(titles)
        println(languages)

        assertThat(keywords).hasSize(4)
        assertThat(languages).hasSize(1)
        assertThat(languages.elementAt(0)).isEqualTo("es")
        assertThat(languages).containsAll(titles.distinct())
        assertThat(languages).containsAll(keywords.distinct())
    }

    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su description`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                         description                        
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
        val descriptionLanguage = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.description[*].tag"
        )

        assertThat(descriptionLanguage).hasSize(1)
        assertThat(descriptionLanguage.elementAt(0)).isEqualTo("es")
    }

    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su fechaHoraCreacion ultimaModificacion y temporal`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                         fechaHoraCreacion
                         ultimaModificacion
                        ... on Dataset{                       
                          temporal{
                           start
                           end
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
        val creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.fechaHoraCreacion")
        val modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.fechaHoraCreacion")
        val start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        val end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")

        println(response)

        val creatDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(creacion)
        val modifDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(modificacion)
        val startDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(start)
        val endDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(end)
        assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        assertThat(startDate).isBeforeOrEqualTo(endDate)
    }

    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su spatial y accrualPeriodicity no tiene en este caso`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                        
                        ... on Dataset{
                          spatial
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
        val spatial = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.spatial[*]")
        val accrualPeriodicity = response.extractValue<String>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity"
        )

        println(response)
        assertThat(spatial).hasSize(1)
        assertThat(accrualPeriodicity).isEmpty()
    }

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

        println(response)
        println(title)
        println(accessUrl)

        assertThat(accessUrl).hasSize(2)
        assertThat(title).hasSize(2)
    }

    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo sus distributions accessService id es el dataset`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{  
                         id
                         ... on Dataset{                       
                           distributions{                          
                            accessService{
                             id
                             servesDataset{
                              id
                             }
                            }
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
        val dataset = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val servesDataset = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].servesDataset[*].id"
        )

        assertThat(dataset).isIn(servesDataset)
    }

    @Test
    fun `Creo CR a partir de json y tiene su primaryTopic tiene 2 distributions`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        ... on Dataset{
                          distributions{
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
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val distributions = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].id"
        )

        assertThat(distributions).hasSize(2)
    }
}
