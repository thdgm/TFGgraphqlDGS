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
}
