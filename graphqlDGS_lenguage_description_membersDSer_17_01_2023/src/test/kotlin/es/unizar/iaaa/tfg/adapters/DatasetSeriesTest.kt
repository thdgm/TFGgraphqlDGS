package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration
import data.ConstantValues
import es.unizar.iaaa.tfg.services.CatalogRecordsServices
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DatasetSeriesTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el datasetSeries dS1 tiene 1 dataset`()  {

        val datasets : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                datasetSeries(id:"dS1"){
                    membersDatasets{
                        id
                    }
                }
            }
        """.trimIndent(), "data.datasetSeries.membersDatasets[*].id")

        assertThat(datasets.size).isEqualTo(1)

    }

}  