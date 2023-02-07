package es.unizar.iaaa.tfg.adapters.mutations

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.json.JSONObject
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.io.ResourceLoader
import org.assertj.core.api.Assertions.assertThat

@SpringBootTest
class CreateCatalogRecordMutationTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Autowired
    lateinit var resourceLoader: ResourceLoader

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    @Test
    fun `test1 probando resource loader`() {
      //TODO()
        val resource = resourceLoader.getResource("https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld")
        println("PRUEBILLA")
        val bytes: ByteArray = resource.inputStream.readAllBytes()
        val fileContent = JSONObject(String(bytes))
        val issued =fileContent.getJSONArray("@graph").getJSONObject(1).getJSONObject("dct:issued")
        val modified =fileContent.getJSONArray("@graph").getJSONObject(1).getJSONObject("dct:modified")
        val keyword =fileContent.getJSONArray("@graph").getJSONObject(1).getJSONArray("dcat:keyword")
        val type =fileContent.getJSONArray("@graph").getJSONObject(1).getString("@type")
        val title = fileContent.getJSONArray("@graph").getJSONObject(1).getString("dct:title")
        println(issued)     //@value-@type
        println(modified)   //@value-@type
        println(keyword)    //[@value-@language]
        println(type)       //String (dcat:Dataset)
        println(title)      //@value-@language
        println(fileContent.getJSONArray("@graph"))
        println("///////////////")

        println(fileContent.getJSONArray("@graph").getJSONObject(0).getString("@type"))
        println("-")
        println(fileContent.getJSONArray("@graph").getJSONObject(0).getJSONObject("schema:endDate").getString("@value"))
        println("-:::::::-")
        println(fileContent.getJSONArray("@graph").getJSONObject(1).getString("@type"))
        println("-")
        println(fileContent.getJSONArray("@graph").getJSONObject(1).getString("@id"))
        println("-:::::::-")
        println(fileContent.getJSONArray("@graph").getJSONObject(2).getString("@type"))
        println(fileContent.getJSONArray("@graph").getJSONObject(3).getString("@type"))
        println(fileContent.getJSONArray("@graph").getJSONObject(4).getString("@type"))
        println(fileContent.getJSONArray("@graph").getJSONObject(5).getString("@type"))
        println(fileContent.getJSONArray("@graph").getJSONObject(6).getString("@type"))

        println("///////////////")
        println(String(bytes))
    }

    /*
        primaryTopic {
            inCatalog {
                id = Root
            }
        }
     */
/*
    inCatalog: ID = "root"
    catalogRecordId: String // ID asignado al catalog record
    contentType: String // que tipo de contenido tiene el metadato
    content: String // si se pasa todo el contenido como una cadena de texto
    contentURL: String // si se pasa la localización del registro
    hints: [String] // Sugerencias para el procesado adicionales al contentType

 */
    @Test
    fun `Creo CR a partir de json y tiene root como catalog por defecto`() {


        var inputParam = "\$input"

        var query = """
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
        val crInput = mutableMapOf<String, Any>("input" to mapOf<String,Any>(
            "inCatalog" to "root",
            "contentType" to "application/json",
            "contentUrl" to urlRecord,
            "hints" to listOf("datos.gob.es")
        ))
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.inCatalog[*].id")
        println("TESTTTTTTTTTTTTTTTTTT")
        println(response)
        assertThat("root").isIn(resources)

    }
    @Test
    fun `Creo CR a partir de json y tiene inCatalog records id su id`() {


        var inputParam = "\$input"

        var query = """
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
        val crInput = mutableMapOf<String, Any>("input" to mapOf<String,Any>(
            "inCatalog" to "root",
            "contentType" to "application/json",
            "contentUrl" to urlRecord,
            "catalogRecorId" to "CRNuevo",
            "hints" to listOf("datos.gob.es")
        ))
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.inCatalog[*].records[*].id")
        //TODO(INSERTA DOS VECES LO MISMO EN cataloginrecord)
        println("TESTTTTTTTTTTTTTTTTTT")
        println(resources)
        assertThat("CRNuevo").isIn(resources)

    }

    @Test
    fun `Creo CR a partir de json y tiene su primaryTopic tiene 2 distributions`() {


        var inputParam = "\$input"

        var query = """
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
        val crInput = mutableMapOf<String, Any>("input" to mapOf<String,Any>(
            "inCatalog" to "root",
            "contentType" to "application/json",
            "contentUrl" to urlRecord,
            "hints" to listOf("datos.gob.es")
        ))
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val resources = response.extractValue<Collection<String>>("data.createCatalogRecord.primaryTopic.distributions[*].id")
        println("TESTTTTTTTTTTTTTTTTTT")
        println(response)
        assertThat(resources).hasSize(2)

    }
}
