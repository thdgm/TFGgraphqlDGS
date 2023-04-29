package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory.getLogger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DatasetSeriesTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    /*@Autowired
    lateinit var logger: Logger*/
    @Test
    fun `el datasetSeries dS1 tiene 1 dataset`() {
        val datasets: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                datasetSeries(id:"dS1"){
                    seriesMembers{
                        id
                    }
                }
            }
            """.trimIndent(),
            "data.datasetSeries.seriesMembers[*].id"
        )

        assertThat(datasets.size).isEqualTo(1)
    }

    @Test
    fun `consistencia entre propiedad seriesMembers de DatasetSeries "dS1" y inSeries de Dataset`() {
        val esperado = listOf<String>(
            "dS1"
        )
        var variableName = "\$idDatasetSerie"
        var variableFilter = "\$idDatasetSeriesFilter"

        var query = """
           query getDatasetSeries($variableName:ID,$variableFilter:String){
            datasetSeries(id:$variableName){
                seriesMembers{
                    inSeries(filter:$variableFilter){
                        id
                    }
                }
            }
           }
        """.trimIndent()

        val dSParameters = mutableMapOf<String, Any>("idDatasetSerie" to "dS1", "idDatasetSeriesFilter" to "dS1")
        val datasetseries = dgsQueryExecutor.executeAndGetDocumentContext(query, dSParameters)
        val response = GraphQLResponse(datasetseries.jsonString())
        val datasets = response.extractValue<Collection<String>>("data.datasetSeries.seriesMembers")
        val inSeries = response.extractValue<Collection<String>>("data.datasetSeries.seriesMembers[*].inSeries[*].id")
        getLogger("loggerTest").debug("${inSeries.distinct()}")
        //  Filtro para obtener de cada dataset el datasetSeries "dS1"
        //  Si alguno no tiene dicho datasetSeries el array de datasets será de mayor longitud que el de inSeries
        // Haciendo distinct al array de inSeries me debe quedar solo 1 elemento igual a "dS1"
        assertThat(datasets.size).isEqualTo(inSeries.size)
        assertThat(inSeries.distinct()).isEqualTo(esperado)
    }
}
