package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import data.ConstantValues
import es.unizar.iaaa.tfg.services.Logger
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory.getLogger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DistributionTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    @Test
    fun `la distribution Dist1 tiene 1 dataservices`() {
        val esperado = listOf<String>(ConstantValues.DATASERVICE)
        val accessService: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                distribution(id: "Dist1") {
                      accessService{
                          __typename
                      }
                }
            }
            """.trimIndent(),
            "data.distribution.accessService[*].__typename"
        )

        assertThat(accessService.size).isEqualTo(1)
        assertThat(accessService).isEqualTo(esperado)
    }

    @Test
    fun `Distribution Dist1 es consistente con datasets distributions d1 cuyo distributions`() {
        val datasets: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
              distribution(id:"Dist1"){
               accessService{
                servesDataset{
                 ... on Dataset{
                  distributions{
                   id
                  }
                 }
                }
               }
              }
            }
            """.trimIndent(),
            "data.distribution.accessService[*].servesDataset[*].distributions[*].id"
        )
        assertThat("Dist1").isIn(datasets)
    }

    @Test
    fun `Distribution Dist1 contiene 2 identifier`() {
        val identifiers: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
              distribution(id:"Dist1"){
               identifier
              }
            }
            """.trimIndent(),
            "data.distribution.identifier[*]"
        )
        getLogger("loggerTest").debug("$identifiers")
        assertThat(identifiers).hasSize(2)
    }
}
