package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class ResourceTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el resource catalog1 tiene 3 descripciones en 2 idiomas distintos`() {
        val descriptionIdioma: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                resource(id: "catalog1") {
                  description{
                    idioma
                  }
                }
            }
            """.trimIndent(),
            "data.resource.description[*].idioma"
        )
        assertThat(descriptionIdioma.size).isEqualTo(3)
        assertThat(descriptionIdioma.distinct().size).isEqualTo(2)
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
                  description{
                    idioma
                  }
                }
            }
            """.trimIndent(),
            "data.resource.description[*].idioma"
        )
        assertThat(descriptionIdioma.distinct())
            .hasSize(descriptionIdioma.distinct().size)
            .hasSameElementsAs(languages)
    }

    @Test
    fun `consistencia entre propiedad isPrimaryTopicOf de Resource "d1" y primaryTopic de catalogRecord `() {
        val esperado = listOf<String>(
            "dS1"
        )
        var variableName = "\$idResource"
        var variableFilter = "\$idResourceFilter"

        var query = """
           query getDatasetSeries($variableName:ID,$variableFilter:String){
            resource(id:"d1"){
               isPrimaryTopicOf{
                   primaryTopic{
                       id
                   }
               }
            }
           }
        """.trimIndent()

        val dSParameters = mutableMapOf<String, Any>("idResource" to "d1","idResourceFilter" to "d1")
        val datasetseries = dgsQueryExecutor.executeAndGetDocumentContext(query,dSParameters)
        val response = GraphQLResponse(datasetseries.jsonString())
        val datasets = response.extractValue<Collection<String>>("data.resource.isPrimaryTopicOf")
        val inSeries = response.extractValue<Collection<String>>("data.resource.isPrimaryTopicOf[*].primaryTopic[*].id")
        println(inSeries.distinct())
        println(inSeries)
        println(datasets)
        //  Filtro para obtener de cada dataset el datasetSeries "dS1"
        //  Si alguno no tiene dicho datasetSeries el array de datasets será de mayor longitud que el de inSeries
        // Haciendo distinct al array de inSeries me debe quedar solo 1 elemento igual a "dS1"
        assertThat(datasets.size).isEqualTo(inSeries.size)
        assertThat(inSeries.distinct()).isEqualTo(esperado)

    }
}
