package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import data.ConstantValues
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.time.LocalDate
import java.time.format.DateTimeFormatter

@SpringBootTest
class DatasetTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el dataset d1 tiene 1 dataSeries`() {
        val esperado = listOf<String>(ConstantValues.DATASETSERIES)
        val inSeries: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                dataset(id: "d1") {
                  ... on Dataset{
                      inSeries{
                          __typename
                      }
                  }
                }
            }
            """.trimIndent(),
            "data.dataset.inSeries[*].__typename"
        )

        assertThat(inSeries.size).isEqualTo(1)
        assertThat(inSeries).isEqualTo(esperado)
    }
    @Test
    fun `el datasetInCatalog catalog2 tiene 2 dataServices`() {
        val isServedBy: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                dataset(id:"catalog2"){
                  isServedBy{
                      id
                  }
                }
            }
            """.trimIndent(),
            "data.dataset.isServedBy[*].id"
        )

        assertThat(isServedBy.size).isEqualTo(2)
    }
    @Test
    fun `el dataset d1 tiene 4 distributions`() {
        val esperado = listOf<String>(
            ConstantValues.DISTRIBUTION,
            ConstantValues.DISTRIBUTION,
            ConstantValues.DISTRIBUTION,
            ConstantValues.DISTRIBUTION
        )
        val distributions: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                dataset(id: "d1") {
                  ... on Dataset{
                      distributions{
                          __typename
                      }
                  }
                }
            }
            """.trimIndent(),
            "data.dataset.distributions[*].__typename"
        )

        assertThat(distributions.size).isEqualTo(4)
        assertThat(distributions).isEqualTo(esperado)
    }

    @Test
    fun `el dataset d1 tiene 4 keywords`() {
        val keywords: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                dataset(id: "d1") {
                  ... on Dataset{
                      keywords{
                          word
                      }
                  }
                }
            }
            """.trimIndent(),
            "data.dataset.keywords[*].word"
        )

        assertThat(keywords.size).isEqualTo(4)
    }

    @Test
    fun `el dataset d1 tiene un temporal correcto end mayor que start`() {
        var temporal = """
            {
             dataset(id: "d1") {
                ... on Dataset{
                    temporal{
                        end{
                            fecha
                            hora
                        }
                        start{
                            fecha
                            hora
                        }
                    }
                }
             }
          }
        """.trimIndent()

        val startEnd = dgsQueryExecutor.executeAndGetDocumentContext(temporal)
        val response = GraphQLResponse(startEnd.jsonString())
        val fechaStart = response.extractValue<Collection<String>>("data.dataset[*].start.fecha").first()
        val fechaEnd = response.extractValue<Collection<String>>("data.dataset[*].end.fecha").first()
        val horaStart = response.extractValue<Collection<String>>("data.dataset[*].start.hora").first()
        val horaEnd = response.extractValue<Collection<String>>("data.dataset[*].end.hora").first()
        val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")
        val temporalStart = LocalDate.parse(fechaStart, pattern)
        val temporalEnd = LocalDate.parse(fechaEnd, pattern)
        assertThat(temporalEnd.isBefore(temporalStart)).isTrue
        assertThat(horaStart).isEqualTo(horaEnd)
    }
}
