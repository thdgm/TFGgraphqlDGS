package es.unizar.iaaa.tfg.adapters.mutations

//import ch.qos.logback.classic.Logger
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext
import org.slf4j.LoggerFactory.getLogger

@SpringBootTest
class TestsFicheroJson1 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    //private val logger = KotlinLogging.logger {}

    //val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"
    val urlRecord = "classpath:json1.json"

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y tiene root como catalog por defecto`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        inCatalog{
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
        val catalogs = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.inCatalog[*].id"
        )
        assertThat("root").isIn(catalogs)
    }


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y tiene inCatalog records id su id`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        inCatalog{
                           id
                            records { 
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
        val records = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.inCatalog[*].records[*].id"
        )

        assertThat("CRNuevo").isIn(records)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")
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

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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

        val creatDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(creacion)
        val modifDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(modificacion)
        val startDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(start)
        val endDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(end)

        assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        assertThat(startDate).isBeforeOrEqualTo(endDate)
    }


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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
        getLogger("loggerTest").debug("$response")
        val spatial = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.spatial[*]")
        val accrualPeriodicity = response.extractValue<String>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity"
        )

        assertThat(spatial).hasSize(1)
        assertThat(accrualPeriodicity).isNull()
    }


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
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
        getLogger("loggerTest").debug("$response")

        assertThat(accessUrl).hasSize(2)
        assertThat(title).hasSize(2)
    }



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
        assertThat(isServedBy).hasSize(1)
        assertThat(resources).hasSize(2)
        assertThat(services).hasSize(1)
    }

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