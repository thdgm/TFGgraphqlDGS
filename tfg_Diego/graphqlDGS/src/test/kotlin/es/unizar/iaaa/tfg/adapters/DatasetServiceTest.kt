package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import data.ConstantValues
import es.unizar.iaaa.tfg.services.Logger
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DatasetServiceTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    @Test
    fun `el dataservice dSer1 tiene 4 datasetInCatalog`() {
        val servesDataset: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                dataService(id: "dSer1") {
                      servesDataset{
                          __typename
                      }
                }
            }
            """.trimIndent(),
            "data.dataService.servesDataset[*].__typename"
        )

        assertThat(servesDataset.size).isEqualTo(4)
        assertThat(ConstantValues.DATASERVICE in servesDataset).isFalse
    }

    @Test
    fun `Dataservice dSer1 es consistente sirve dataset cuya distribution contiene accessService a el mismo`() {
        val dataservices: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
              dataService(id:"dSer1"){
                  servesDataset{
                    ... on Dataset{
                        distributions{
                          accessService{
                              id
                          }
                        }
                    }
                  }
              }
            }
            """.trimIndent(),
            "data.dataService.servesDataset[*].distributions[*].accessService[*].id"
        )
        assertThat("dSer1").isIn(dataservices)
    }
}
