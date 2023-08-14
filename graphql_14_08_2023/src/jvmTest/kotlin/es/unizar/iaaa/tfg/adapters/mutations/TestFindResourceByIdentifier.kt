package es.unizar.iaaa.tfg.adapters.mutations

import com.jayway.jsonpath.DocumentContext
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestFindResourceByIdentifier {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = listOf("classpath:jsonSamePublisher2.json","classpath:jsonSamePublisher1.json")

    fun createResourcesFromFile(fileUrl: String): Pair<String, Collection<String>>{
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{     
                        id
                        identifier                    
                       }
                }
            }
        }
        """.trimIndent()
        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "application/json",
                "contentUrl" to fileUrl,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        var response = GraphQLResponse(createCR.jsonString())
        val id = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val identifiers = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.identifier")

        return Pair(id, identifiers)

    }

    fun checkIdentifiers(idCheck: String, identifiersCheck: Collection<String>): Boolean {
        val idParam = "\$id"
        val queryFind = """
        query getResourceByIdentifier($idParam:String){
            findResourceByIdentifier(id:$idParam){
                id
            }
        }
        """.trimIndent()

        var resourceId = ""
        var queryParameters: MutableMap<String, Any>
        var resource: DocumentContext
        var response: GraphQLResponse
        LoggerFactory.getLogger("loggerTest").debug("FINDDD:  ${identifiersCheck.elementAt(0)} -- $idCheck")
        if (!identifiersCheck.isEmpty()) {
            identifiersCheck.forEach {
                queryParameters = mutableMapOf<String, Any>("id" to it)
                resource = dgsQueryExecutor.executeAndGetDocumentContext(queryFind, queryParameters)
                response = GraphQLResponse(resource.jsonString())
                resourceId = response.extractValue<String>("data.findResourceByIdentifier.id")
                LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
                //LoggerFactory.getLogger("loggerTest").debug("IDENTIFIERS: $identifiers")
                //Assertions.assertThat(idCheck).isEqualTo(resourceId)
                if (idCheck != resourceId) return false
            }
            return true
        }
        return false
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y lo busco por su identifier para varios ficheros`() {

        urlRecord.forEach {
            val (id, identifiers)=  createResourcesFromFile(it)
            Assertions.assertThat(checkIdentifiers(id, identifiers)).isTrue()
        }


    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    @Test
    fun `Creo CR a partir de json y lo busco por su identifier`() {

        val inputParam = "\$input"
        val idParam = "\$id"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{     
                        id
                        identifier                    
                       }
                }
            }
        }
        """.trimIndent()
        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "application/json",
                "contentUrl" to urlRecord.elementAt(0),
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        var response = GraphQLResponse(createCR.jsonString())
        val id = response.extractValue<String>("data.createCatalogRecord.primaryTopic.id")
        val identifiers = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.identifier")

        //Busco con identifier 0 el resource y debo obtener el id

        val queryFind = """
        query getResourceByIdentifier($idParam:String){
            findResourceByIdentifier(id:$idParam){
                id
            }
        }
        """.trimIndent()

        var resourceId = ""
        var queryParameters: MutableMap<String, Any>
        var resource: DocumentContext

        LoggerFactory.getLogger("loggerTest").debug("FINDDD:  ${identifiers.elementAt(0)} -- $id")
        identifiers.forEach {
            queryParameters = mutableMapOf<String, Any>("id" to it)
            resource = dgsQueryExecutor.executeAndGetDocumentContext(queryFind, queryParameters)
            response = GraphQLResponse(resource.jsonString())
            resourceId = response.extractValue<String>("data.findResourceByIdentifier.id")
            LoggerFactory.getLogger("loggerTest").debug("RESPUESTAAAAA:  $response")
            //LoggerFactory.getLogger("loggerTest").debug("IDENTIFIERS: $identifiers")
            Assertions.assertThat(id).isEqualTo(resourceId)
        }

    }
}