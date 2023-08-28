package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import data.ConstantValues
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

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
} 
