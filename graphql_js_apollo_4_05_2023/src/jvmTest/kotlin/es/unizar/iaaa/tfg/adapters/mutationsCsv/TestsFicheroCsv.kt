package es.unizar.iaaa.tfg.adapters.mutationsCsv

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.csvServices.ProcessCsvServices
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext
import org.slf4j.LoggerFactory.getLogger
import org.springframework.data.domain.PageRequest


@SpringBootTest
class TestsFicheroCsv {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = "classpath:datosGob.csv"

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo

    @Autowired
    lateinit var processCsvServices: ProcessCsvServices

    @Autowired
    lateinit var datasetRepository: PublisherRepository

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    fun createCatalogRecord(urlRecord: String, inputParam:String, datasetFieldsString:String):GraphQLResponse {

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        id
                        publisher
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
        /*val creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.issued")
        val modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.modified")
        val start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        val end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")
        */
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
            "EA0028512",
            "EA0028512"
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
            "Agencia Estatal de Administración Tributaria",
            "Agencia Estatal de Administración Tributaria",

            )

        processCsvServices.processCsvService(urlRecord).mapIndexed { index, datasetCSVModel ->
            publisher(datasetCSVModel.toString(), notation.elementAt(index),label.elementAt(index))
        }
    }


    fun distributionFields(datasetModel: String): GraphQLResponse{
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
        return response
    }


    //TODO(PONER LOS ASSERTS)
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo sus distributions fields title, accessUrl, tienen 2`() {

        //11 no tiene title
        // 27 todos los byteSizes 0
        //
        var datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(11).toString()
        var response = distributionFields(datasetModel)
        var title = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].title[*]"
        )
        var accessUrl = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessUrl"
        )
        var byteSize = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].byteSize"
        )
        var formatType = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.type"
        )
        var formatSubtype = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.subtype"
        )
        var accessService = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].id"
        )

        assertThat(title).hasSize(0)
        assertThat(accessService).hasSize(1)
        assertThat(accessUrl).isEqualTo(listOf("http://www.boe.es/buscar/ayudas.php"))
        assertThat(formatType).isEqualTo(listOf("text"))
        assertThat(formatSubtype).isEqualTo(listOf("html"))
        assertThat(byteSize).isEqualTo(listOf("0"))

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(27).toString()
        response = distributionFields(datasetModel)
        title = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].title[*]"
        )
        accessUrl = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessUrl"
        )
        byteSize = response.extractValue(
            "data.createCatalogRecord.primaryTopic.distributions[*].byteSize"
        )
        formatType = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.type"
        )
        formatSubtype = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.subtype"
        )
        accessService = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].id"
        )

        assertThat(title).hasSize(6)
        assertThat(accessService).hasSize(6)
        assertThat(accessUrl).isEqualTo(listOf("https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xls/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px", "https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px", "https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_sc/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px", "https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_c/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px", "https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xlsx/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px", "https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/px/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px"))
        assertThat(formatType).isEqualTo(listOf("application", "text", "text", "text", "application", "ine"))
        assertThat(formatSubtype).isEqualTo(listOf("vnd.ms-excel", "csv", "csv", "csv", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "pc-axis"))
        assertThat(byteSize).isEqualTo(listOf("0","0","0","0","0","0"))

        datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26).toString()
        response = distributionFields(datasetModel)
        title = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].title[*]"
        )
        accessUrl = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessUrl"
        )
        byteSize = response.extractValue(
            "data.createCatalogRecord.primaryTopic.distributions[*].byteSize"
        )
        formatType = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.type"
        )
        formatSubtype = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].format.subtype"
        )
        accessService = response.extractValue<Collection<String>>(
            "data.createCatalogRecord.primaryTopic.distributions[*].accessService[*].id"
        )

        assertThat(title).hasSize(39)
        assertThat(accessUrl).hasSize(13)
        assertThat(accessService).hasSize(13)
        assertThat(formatType).isEqualTo(listOf("text", "text", "text","text", "text", "text","text", "text", "text","text", "text", "text","text"))
        assertThat(formatSubtype).isEqualTo(listOf("csv", "csv", "csv","csv", "csv", "csv","csv", "csv", "csv","csv", "csv", "csv","csv"))
        assertThat(byteSize).isEqualTo(listOf("4415426", "4339699", "4280471", "4920707", "4886996", "4986893", "410733", "3778794", "4068206", "63600", "3830543", "4713526", "4955321"))

    }


    @Test
    fun `Creo CR a partir de json y su primaryTopic tiene license, identifier y publisher`() {
        val inputParam = "\$input"

        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(26).toString()
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                        identifier
                        license
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
        val identifier = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.identifier[*]")
        val license = response.extractValue<String>("data.createCatalogRecord.primaryTopic.license")
        val publisherNotation = response.extractValue<String>("data.createCatalogRecord.primaryTopic.publisher.notation")
        getLogger("loggerTest").debug("RESPONSEE: :::::: $response")


        assertThat(identifier).hasSize(2)
        assertThat(license).isEqualTo("https://creativecommons.org/licenses/by-sa/4.0/deed.es_ES")
        assertThat(publisherNotation).isEqualTo("EA0001302")

    }

    //TODO(///////////////////)



    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo los de un admon level concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        val query = """
        query getResourcesByAdmonLevel($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                publisher
               
            }
        }
        """.trimIndent()
        val queryParameters = mutableMapOf(
            "filter" to "adminLevel",
            "value" to listOf(
                "Administración del Estado"
            )
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())

        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val publishersNotations = response.extractValue<Collection<String>>("data.resourcesByFilter[*].publisher.notation")

        println(publishersNotations)
        println(publishersNotations.size)


       assertThat(publishersNotations).hasSize(27)


    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo los de un set de formatos concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"

        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }


        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf("filter" to "format", "value" to listOf("application/json","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/csv","text/html"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        getLogger("loggerTest").debug("SIZE:  ${resourcesId.size}")
        assertThat(resourcesId).hasSize(24)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo los de un set de themes concreto`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"



        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        val query = """
        query getResourcesByTheme($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>(
            "filter" to "theme",
            "value" to listOf(
                "Sector público",
                "Legislación y justicia"
            )
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())

        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        getLogger("loggerTest").debug("IDDD:  ${resourcesId.size}")

        assertThat(resourcesId).hasSize(10)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets same publisher`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"
        // createCatalogRecord("classpath:jsonSamePublisher1.json",inputParam)

        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        // Aquí cojo todos los dataset con mismo publisher
        // Se supone que he creado varios CR con primaryTopic p.e: d1,d2,d3
        // Comparten publisher
        // Hay que crear: resourcesByPublisher(): Collection<ResourceEntity>


        val query = """
        query getResourcesByPublisher($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
                publisher
            }
        }
        """.trimIndent()
        //Agencia estatal de meteorología
        val queryParameters = mutableMapOf<String, Any>("filter" to "publisher", "value" to listOf("EA0022545"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $resourcesId")
        getLogger("loggerTest").debug("IDDD:  ${resourcesId.size}")

        assertThat(resourcesId).hasSize(5)
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity daily yearly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("years","days"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        getLogger("loggerTest").debug("IDS:  ${resourcesId.size}")

        assertThat(resourcesId).hasSize(10)

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Multiple datasets periodicity monthly`() {
        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }

        val query = """
        query getResourcesByPeriodicity($filterParam:String, $valueParam:[String!]){
            resourcesByFilter(filter:$filterParam, value:$valueParam){
                id
               
            }
        }
        """.trimIndent()

        val queryParameters = mutableMapOf<String, Any>("filter" to "periodicity", "value" to listOf("months"))
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(resources.jsonString())
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")

        val resourcesId = response.extractValue<Collection<String>>("data.resourcesByFilter[*].id")
        getLogger("loggerTest").debug("IDS:  ${resourcesId.size}")

        assertThat(resourcesId).hasSize(4)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Create CR using CSV and check its primary topic validity property`() {
        val inputParam = "\$input"

        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(18).toString()
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                       issued
                       modified
                        ... on Dataset{
                            validity
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
        val validity = response.extractValue<String>("data.createCatalogRecord.primaryTopic.validity")
        val validityDate = convertersAuxiliarEntitiesTo.toLocalDateTime(validity)
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        assertThat(validityDate).isEqualTo(convertersAuxiliarEntitiesTo.toLocalDateTime("2023-07-10T00:00:00+00:00"))



    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Create CR using CSV and check its primary topic regulations property`() {
        val inputParam = "\$input"

        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(29).toString()
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                  
                        ... on Dataset{
                            regulations
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
        val regulations = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.regulations")

        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        assertThat(regulations).hasSize(3)

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Create CR using CSV and check its primary topic relatedResources property`() {
        val inputParam = "\$input"


        val datasetModel = processCsvServices.processCsvService(urlRecord).elementAt(28).toString()
        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{                      
                        ... on Dataset{
                            relatedResources
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
        val relatedResources = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.relatedResources")

        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        assertThat(relatedResources).hasSize(2)

    }
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Check resourcesByFilter if it has null parameter`() {
        val filterParam = "\$filter"
        val valueParam = "\$value"
        val inputParam = "\$input"

        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }
        val query = """
        query Datasets($filterParam:String, $valueParam:[String!]) {
            resourcesByFilter (filter:$filterParam, value: $valueParam) {
                ... on Dataset{
                    id
                    title
                    publisher
                    description
                }
            }
        }
        """.trimIndent()
        val queryParameters = mutableMapOf(
            "filter" to "all",
            "value" to listOf<String>(

            )
        )
        //val queryParameters = mutableMapOf<String, Any?>("filter" to null, "value" to listOf<String>())
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, queryParameters)
        val response = GraphQLResponse(createCR.jsonString())
        val relatedResources = response.extractValue<Collection<String>>("data.resourcesByFilter[*].title[*].literal")

        getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
        getLogger("loggerTest").debug("RESPUESTAAAAA:  $relatedResources")
        //assertThat(relatedResources).hasSize(2)

    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CRs a partir de json y obtengo todos los themes por rangos`() {

        val inputParam = "\$input"
        val filterParam = "\$filter"
        val valueParam = "\$value"


        processCsvServices.processCsvService(urlRecord).map {
            createCatalogRecord(urlRecord,inputParam,it.toString())
        }


        var page = 0
        var excludeCount = 0
        var pageSize = 3



        var vc = datasetRepository.findAll()
            .map { it }
        println(vc)


        var nvc = datasetRepository.findAllLabelNotNull(PageRequest.of(0, 6)).content
            .map {  if (it != null) it.label else "null"  }
        println(nvc)
        nvc = datasetRepository.findAllLabelNotNull(PageRequest.of(0, Int.MAX_VALUE)).content
            .map { if (it != null) it.label else "null" }
        println(nvc)

    }
}


/*
query Datasets($filter:String, $value:[String!]) {
    resourcesByFilter (filter:$filter, value: $value) {
        ... on Dataset{
            id
            title
            publisher
            description
        }
    }
}
 */