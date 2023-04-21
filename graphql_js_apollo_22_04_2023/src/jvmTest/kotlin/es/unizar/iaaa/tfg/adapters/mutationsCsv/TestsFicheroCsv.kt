package es.unizar.iaaa.tfg.adapters.mutationsCsv

//import ch.qos.logback.classic.Logger
import com.google.gson.JsonElement
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.csvServices.ProcessCsvServices
import org.assertj.core.api.Assertions.assertThat
import org.json.JSONArray
import org.json.JSONObject
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext
import org.slf4j.LoggerFactory.getLogger
import kotlin.reflect.typeOf

@SpringBootTest
class TestsFicheroCsv {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    //private val logger = KotlinLogging.logger {}

    //val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"
    val urlRecord = "classpath:datosGob.csv"

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    @Autowired
    lateinit var processCsvServices: ProcessCsvServices

    fun createCatalogRecord(urlRecord: String, inputParam:String, datasetFieldsString:String):GraphQLResponse {

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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetFieldsString,
                "catalogRecordId" to "CRNuevo",
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())

        println("CRR: $response")
        return response


    }



    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de csv y tiene inCatalog records id su id`() {

        val inputParam = "\$input"


        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(0)

        val response = createCatalogRecord(urlRecord,inputParam,datasetModel.toString())
        val records = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.inCatalog[*].records[*].id"
        )
        getLogger("loggerTest").debug("Catalogs:  $records")

        assertThat("CRNuevo").isIn(records)

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de csv y tienen root como catalog por defecto`() {

        val inputParam = "\$input"


        processCsvServices.processCsvService(urlRecord).map {
            val response = createCatalogRecord(urlRecord,inputParam,it.toString())
            val catalogs = response.extractValue<Collection<String>>(
                "data.createCatalogRecord.primaryTopic.inCatalog[*].id"
            )
            getLogger("loggerTest").debug("Catalogs:  $catalogs")
            assertThat("root").isIn(catalogs)
        }
    }

    fun isServedByCR(datasetModel: String){
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
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
        println(services)
        assertThat(resources).containsAnyElementsOf(services)
        assertThat(services).containsAnyElementsOf(isServedBy)
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene inCatalog a root cuyos services estan en sus resources y el primaryTopic de CR es un dataset cuyo isServedBy esta en services de root`() {

        processCsvServices.processCsvService(urlRecord).map{
            isServedByCR(it.toString())
        }


    }


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los themes`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        val query = """
        query getAllThemes{
            getAllThemes
        }
        """.trimIndent()

        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(resources.jsonString())
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        val themes = response.extractValue<Collection<String>>("data.getAllThemes[*]")
        getLogger("loggerTest").debug("RESPUESTAAAAA2:  ${themes.size}")
        getLogger("loggerTest").debug("RESPUESTAAAAA3:  ${themes}")

        assertThat(themes).hasSize(26)

    }



    //////////////////


    fun primaryTopicDataset(datasetModel: String){
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "catalogRecordId" to "CRNuevo",
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
    fun `El CR tiene primaryTopic a un dataset cuyo primaryTopic es dicho CR`() {
        processCsvServices.processCsvService(urlRecord).map{
            primaryTopicDataset(it.toString())
        }
    }

    fun keywordsTitDescAndLanguagePT(datasetModel: String) {

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{  
                         identifier
                         title
                         language
                         description
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
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
        val description = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.description[*].tag"
        )

        if (!languages.isEmpty() && !titles.isEmpty()) assertThat(languages).containsAll(titles.distinct())
        if (!languages.isEmpty() && !keywords.isEmpty()) assertThat(languages).containsAll(keywords.distinct())
        if (!languages.isEmpty() && !description.isEmpty()) assertThat(languages).containsAll(description.distinct())

        if(keywords.isEmpty() && titles.isEmpty() && description.isEmpty()) assertThat(languages).hasSize(0)

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su title keywords description son consistentes con language`() {
        processCsvServices.processCsvService(urlRecord).map{
            keywordsTitDescAndLanguagePT(it.toString())
        }
    }

    fun keywordsTitleLangDescIndivPT(datasetModel: String) {

        val expectedTitles = listOf("Escales per anys","Port calls by years","Escalas por años")

        val expectedDescriptions = listOf(
            "Escales Iniciades o finalitzades al llarg d'un any",
            "Port calls Started or completed over a year",
            "Escalas Iniciadas o finalizadas a lo largo de un año"
        )

        val expectedKeywords = listOf(
            "2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023",
            "Barcelona","Escala","Final","Històric","Inici","Port","Port de Barcelona","Vaixell",
            "Barcelona","Barcelona's Port","Final","Historical","Port","Port call","Ship","Start",
            "Barcelona","Barco","Escala","Final","Histórico","Inicio","Puerto","Puerto de Barcelona"
        )

        val expectedLanguages = listOf("ca","es","en")

        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
        
            
           
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{  
                         identifier
                         title
                         language
                         description
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )

        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")
        val keywords = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.keywords[*].literal"
        )
        val titles = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.title[*].literal")
        val languages = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.language")
        val description = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.description[*].literal"
        )


        assertThat(expectedTitles.distinct()).containsExactlyInAnyOrderElementsOf(titles.distinct())
        assertThat(expectedLanguages.distinct()).containsExactlyInAnyOrderElementsOf(languages.distinct())
        assertThat(expectedKeywords.distinct()).containsExactlyInAnyOrderElementsOf(keywords.distinct())
        assertThat(expectedDescriptions.distinct()).containsExactlyInAnyOrderElementsOf(description.distinct())

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su title keywords description y language`() {
        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26)
        keywordsTitleLangDescIndivPT(datasetModel.toString())
    }


    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y tiene su primaryTopic tiene 13 distributions`() {
        val inputParam = "\$input"
        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26)
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())

        val distributions = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].id"
        )
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")
        println(distributions)
        println(distributions.size)
        assertThat(distributions).hasSize(13)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo sus distributions accessService id es el dataset`() {
        val inputParam = "\$input"
        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26).toString()

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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )

        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val dataset = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val servesDatasetList = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].servesDataset"
        )
        val servesDataset = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].servesDataset[*].id"
        )
        val accessService = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].id"
        )
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")

        assertThat(servesDatasetList).hasSize(accessService.size)
        assertThat(servesDataset.distinct()).hasSize(2)
        assertThat(listOf("root",dataset)).containsExactlyInAnyOrderElementsOf(servesDataset.distinct())


    }


    fun issuedModifiedPeriod(datasetModel: String): GraphQLResponse {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                         issued
                         modified
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        val modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        val start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        val end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")

        //val creatDate = convertersAuxiliarEntitiesTo.toLocalDateTime(creacion)
        //val modifDate = convertersAuxiliarEntitiesTo.toLocalDateTime(modificacion)
       // val startDate = convertersAuxiliarEntitiesTo.toLocalDateTime(start)
        //val endDate = convertersAuxiliarEntitiesTo.toLocalDateTime(end)

        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")

        return response
       // assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        // assertThat(startDate).isBeforeOrEqualTo(endDate)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su fechaHoraCreacion ultimaModificacion y temporal`() {
        var datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(24)
        var response = issuedModifiedPeriod(datasetModel.toString())
        // todo
        var creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        var modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        var start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        var end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        var creatDate = convertersAuxiliarEntitiesTo.toLocalDateTime(creacion)
        var modifDate = convertersAuxiliarEntitiesTo.toLocalDateTime(modificacion)
        var startDate = convertersAuxiliarEntitiesTo.toLocalDateTime(start)
        var endDate = convertersAuxiliarEntitiesTo.toLocalDateTime(end)
        assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        assertThat(startDate).isBeforeOrEqualTo(endDate)

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(27)
        response = issuedModifiedPeriod(datasetModel.toString())
        // modified - period
        creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        //creatDate = convertersAuxiliarEntitiesTo.toLocalDateTime(creacion)
        modifDate = convertersAuxiliarEntitiesTo.toLocalDateTime(modificacion)
        startDate = convertersAuxiliarEntitiesTo.toLocalDateTime(start)
        endDate = convertersAuxiliarEntitiesTo.toLocalDateTime(end)
        assertThat(creacion == null).isTrue
        assertThat(modifDate).isEqualTo(convertersAuxiliarEntitiesTo.toLocalDateTime("2022-06-06T15:20:37+00:37"))
        assertThat(startDate).isBeforeOrEqualTo(endDate)

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(11)
        response = issuedModifiedPeriod(datasetModel.toString())
        // nada
        creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        assertThat(creacion == null).isTrue
        assertThat(modificacion == null).isTrue
        assertThat(start == null).isTrue
        assertThat(end == null).isTrue

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(0)
        response = issuedModifiedPeriod(datasetModel.toString())
        // issued-modified
        creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        creatDate = convertersAuxiliarEntitiesTo.toLocalDateTime(creacion)
        modifDate = convertersAuxiliarEntitiesTo.toLocalDateTime(modificacion)
        assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        assertThat(start == null).isTrue
        assertThat(end == null).isTrue

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(5)
        response = issuedModifiedPeriod(datasetModel.toString())
        // issued-period
        creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        creatDate = convertersAuxiliarEntitiesTo.toLocalDateTime(creacion)
        startDate = convertersAuxiliarEntitiesTo.toLocalDateTime(start)
        endDate = convertersAuxiliarEntitiesTo.toLocalDateTime(end)
        assertThat(startDate).isBeforeOrEqualTo(endDate)
        assertThat(modificacion == null).isTrue
        assertThat(creatDate).isEqualTo(convertersAuxiliarEntitiesTo.toLocalDateTime("2009-01-01T00:00:00+00:00"))

    }

    fun accrualAndSpatial(datasetModel: String): GraphQLResponse{
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        getLogger("loggerTest").debug("$response")
        /*val spatial = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.spatial[*]")
        val accrualPeriodicity = response.extractValue<String>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity"
        )
        assertThat(spatial).hasSize(1)
        assertThat(accrualPeriodicity).isNull()
        */
        return response

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su spatial y accrualPeriodicity no tiene en este caso`(){
        var datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(11)
        var response = accrualAndSpatial(datasetModel.toString())
        var spatial = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.spatial[*]")
        var accrualPeriodicityRange = response.extractValue<String>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity.range"
        )
        var accrualPeriodicityPeriod = response.extractValue<Float>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity.period"
        )
        assertThat(spatial).hasSize(1)
        assertThat(spatial.elementAt(0)).isEqualTo("España")
        assertThat("$accrualPeriodicityRange -- $accrualPeriodicityPeriod").isEqualTo("days -- 1.0")

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(9)
        response = accrualAndSpatial(datasetModel.toString())
        spatial = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.spatial[*]")
        var accrualPeriodicity = response.extractValue<String>(
            "data.createCatalogRecord.primaryTopic.accrualPeriodicity"
        )

        assertThat(spatial).isEmpty()
        assertThat(accrualPeriodicity == null).isTrue


    }

    fun inCatalogServiceResourcesServedBy(datasetModel: String): GraphQLResponse{


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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())

        return response
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene inCatalog a root con 1 service 2 resources y es servedBy 1 service`() {
        var resourcesSize = 2
        var servicesSize = 1
        processCsvServices.processCsvService(urlRecord).map{
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
            assertThat(resourcesPrevios).hasSize(resourcesSize-2)

            val response = inCatalogServiceResourcesServedBy(it.toString())
            val isServedBy = response.extractValue<Collection<String>>(
                "data.createCatalogRecord.primaryTopic.isServedBy[*].id"
            )

            val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].resources[*].id")
            val services = response.extractValue<Collection<String>>("data.createCatalogRecord.inCatalog[*].services[*].id")
            assertThat(isServedBy).hasSize(1)
            assertThat(resources).hasSize(resourcesSize)
            assertThat(services).hasSize(servicesSize)
            resourcesSize += 2
            servicesSize += 1


        }
    }

    fun datasetInResources(datasetModel: String){

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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
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
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y tiene en su inCatalog resources y datasets al dataset que es su primaryTopic`(){
       processCsvServices.processCsvService(urlRecord).map{
           datasetInResources(it.toString())
       }
    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de csv y tiene contentUrl, contentType y hints correspondientes al input `() {
        val inputParam = "\$input"
        val contentUrlEsperado = "classpath:datosGob.csv"
        val contentTypeEsperado = "txt/csv"
        val hintsEsperado = listOf("datos.gob.es")
        var datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(11)

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    contentURL
                    contentType
                    hints
                }
            }
        }
        """.trimIndent()
        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")

        val contentUrl = response.extractValue<String>("data.createCatalogRecord.contentURL")
        val contentType = response.extractValue<String>("data.createCatalogRecord.contentType")
        val hints = response.extractValue<Collection<String>>("data.createCatalogRecord.hints")

        assertThat(contentUrl).isEqualTo(contentUrlEsperado)
        assertThat(contentType).isEqualTo(contentTypeEsperado)
        assertThat(hints).containsExactlyInAnyOrderElementsOf(hintsEsperado)

    }

    fun publisher(datasetModel: String, notation: String, label: String){
        val inputParam = "\$input"
        val contentUrlEsperado = "classpath:json1.json"
        val contentTypeEsperado = "application/json"
        val hintsEsperado = listOf("datos.gob.es")
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic {
                        publisher
                    }
                }
            }
        }
        """.trimIndent()
        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())

        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")
        val publisherNotation = response.extractValue<String>("data.createCatalogRecord.primaryTopic.publisher.notation")
        val publisherLabel = response.extractValue<String>("data.createCatalogRecord.primaryTopic.publisher.label")

        assertThat(publisherNotation).isEqualTo(notation)
        assertThat(publisherLabel).isEqualTo(label)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de csv y su dataset tiene un publisher`() {
        val notation = listOf(
            "I00000121",
            "I00000121",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0040819",
            "EA0020951",
            "EA0020951",
            "EA0020951",
            "EA0028512",
            "EA0028512",
            "EA0028512",
            "EA0028512",
            "EA0022545",
            "EA0022545",
            "EA0022545",
            "EA0022545",
            "EA0022545",
            "EA0010587",
            "L01290672",
            "EA0001302",
            "E05073401",
        )

        val label = listOf(
            "Agencia Española de Protección de Datos",
            "Agencia Española de Protección de Datos",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Boletín Oficial del Estado",
            "Agencia Estatal Consejo Superior de Investigaciones Científicas",
            "Agencia Estatal Consejo Superior de Investigaciones Científicas",
            "Agencia Estatal Consejo Superior de Investigaciones Científicas",
            "Agencia Estatal de Administración Tributaria",
            "Agencia Estatal de Administración Tributaria",
            "Agencia Estatal de Administración Tributaria",
            "Agencia Estatal de Administración Tributaria",
            "Agencia Estatal de Meteorología",
            "Agencia Estatal de Meteorología",
            "Agencia Estatal de Meteorología",
            "Agencia Estatal de Meteorología",
            "Agencia Estatal de Meteorología",
            "Instituto Nacional de Estadística",
            "Ayuntamiento de Málaga",
            "Autoridad Portuaria de Barcelona",
            "Ministerio de Universidades",

            )

        processCsvServices.processCsvService(urlRecord).mapIndexed { index, datasetCSVModel ->
            publisher(datasetCSVModel.toString(), notation.elementAt(index),label.elementAt(index))
        }
    }


    //TODO(PONER LOS ASSERTS)
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo sus distributions fields title, accessUrl, tienen 2`() {
        val inputParam = "\$input"
        //11 no tiene title
        // 27 todos los byteSizes 0
        //
        var datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26)
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{ 
                         ... on Dataset{
                           distributions{
                             title
                             accessUrl 
                             byteSize
                             format
                             accessService {
                                id                             
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
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetModel,
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
        val byteSize = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].byteSize"
        )
        val format = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format"
        )
        val accessService = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].id"
        )
        getLogger("loggerTest").debug("$response")
        println("TITLE: $title")
        println("ACCESSURL: $accessUrl")
        println("ByteSize: $byteSize")
        println("Format: $format")
        println("AcessServ: $accessService")
        //assertThat(accessUrl).hasSize(2)
        //assertThat(title).hasSize(2)
    }
    //TODO(///////////////////)

}