package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory.getLogger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class ResourceTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor
    

    @Test
    fun `el resource catalog1 tiene 3 descripciones en 1 idioma`() {
        val descriptionIdioma: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "catalog1") {
                  description
                }
            }
            """.trimIndent(),
            "data.resource.description[*].tag"
        )
        
        assertThat(descriptionIdioma.distinct().size).isEqualTo(3)
    }

    @Test
    fun `consistencia entre los idiomas de un resource (catalog1) y sus descripciones`() {
        val languages: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "catalog1") {
                  language
                }
            }
            """.trimIndent(),
            "data.resource.language"
        )
        val descriptionIdioma: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "catalog1") {
                  description
                }
            }
            """.trimIndent(),
            "data.resource.description[*].tag"
        )
        getLogger("loggerTest").debug("$languages")
        getLogger("loggerTest").debug("$descriptionIdioma")
        assertThat(languages).containsAll((descriptionIdioma.distinct()))
    }

    @Test
    fun `consistencia entre propiedad isPrimaryTopicOf de Resource "d1" y primaryTopic de catalogRecord `() {
        val esperado = listOf<String>("d1")
        val primaryTopic: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
               resource(id:"d1"){
                isPrimaryTopicOf{
                   primaryTopic{
                       id
                   }
               }
            }
            }
            """.trimIndent(),
            "data.resource.isPrimaryTopicOf[*].primaryTopic.id"
        )
        assertThat(primaryTopic).isEqualTo(esperado)
    }

    @Test
    fun `un resource (dS1) puede pertenecer a varios catalogs `() {
        val inCatalog: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
               resource(id:"dS1"){
                inCatalog{
                  id
               }
            }
            }
            """.trimIndent(),
            "data.resource.inCatalog[*].id"
        )
        assertThat(inCatalog).hasSize(2)
    }

    @Test
    fun `un resource es miembro de un catalog si es primaryTopic de un CatalogRecord que está en dicho catalog `() {
        var query = """
           {
              	resource(id:"d1"){
                    inCatalog{
                        records{
                            id
                        }
                    }
                    isPrimaryTopicOf{
                        id
                    }
                }
            }
        """.trimIndent()
        val catalogs = dgsQueryExecutor.executeAndGetDocumentContext(query)
        val response = GraphQLResponse(catalogs.jsonString())
        val records = response.extractValue<Collection<String>>("data.resource.inCatalog[*].records[*].id")
        val catalogRecord = response.extractValue<Collection<String>>("data.resource.isPrimaryTopicOf[*].id")
        assertThat(records).containsAll(catalogRecord)
    }

    @Test
    fun `Resource d1 contiene 2 identifiers`() {
        val identifiers: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "d1") {
                  identifier
                }
            }
            """.trimIndent(),
            "data.resource.identifier[*]"
        )

        assertThat(identifiers).hasSize(2)
    }

    @Test
    fun `find publishers by dataset keywords`() {
        val filters = "\$filters"
        val keywords: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "1d745b00-886a-3165-9433-4bc733b00af8",isDataset: true, isCatalog: false,isDataService:false,isDatasetSeries:false,page: 0) {
                  ... on Dataset {
                   keywords
                  }
                }
            }
            """.trimIndent(),
            "data.resource.keywords[*].literal"
        )
        println("KEYWORDSSSSSS::::::: $keywords")
        val getPublishers = """
        query getResourcesByPeriodicity($filters:[MapInput!]){
            resourcesByFilter (filters:$filters, type: "dataset", isDataset:true, isCatalog:false, isDataService: false, isDatasetSeries: false,page: 0) {
                ... on Dataset{
                 publisher
                }
               
            }
        }
        """.trimIndent()
        val crInput = mutableMapOf(
            "filters" to listOf(
                mapOf(
                    "key" to "Etiqueta",
                    "values" to keywords
                )
            )
        )
        val resources = dgsQueryExecutor.executeAndGetDocumentContext(getPublishers, crInput as Map<String, Any>)
        val response = GraphQLResponse(resources.jsonString())
        println("RESPONSEEEEEEEE::::::: $response")
        val publishers = response.extractValue<Collection<String>>(
            "data.resourcesByFilter[*].publisher.label"
        )
        println("PUBLISHERSSSSSSS::::::: $publishers")

    }
}
