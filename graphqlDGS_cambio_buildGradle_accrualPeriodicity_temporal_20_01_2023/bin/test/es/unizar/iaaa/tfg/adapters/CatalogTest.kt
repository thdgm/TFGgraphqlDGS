package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import data.ConstantValues
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CatalogTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el catalogo1 tiene 4 registros`() {
        val esperado = listOf<String>(
            ConstantValues.CATALOGRECORD,
            ConstantValues.CATALOGRECORD,
            ConstantValues.CATALOGRECORD,
            ConstantValues.CATALOGRECORD
        )
        val records: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                records{
                       __typename
                    }
                }
            }
        """.trimIndent(),
            "data.catalog.records[*].__typename"
        )

        assertThat(records.size).isEqualTo(4)
        assertThat(records).isEqualTo(esperado)
    }

    @Test
    fun `el catalogo1 tiene 3 datasets`() {
        val datasets: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                datasets{
                       __typename
                    }
                }
            }
        """.trimIndent(),
            "data.catalog.datasets[*].__typename"
        )

        assertThat(datasets.size).isEqualTo(3)
    }

    @Test
    fun `el catalogo1 tiene 4 resources`() {
        val resources: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                resources{
                       __typename
                    }
                }
            }
        """.trimIndent(),
            "data.catalog.resources[*].__typename"
        )

        assertThat(resources.size).isEqualTo(4)
    }

    @Test
    fun `el catalogo1 tiene 1 service`() {
        val esperado = listOf<String>(ConstantValues.DATASERVICE)
        val services: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                services{
                       __typename
                    }
                }
            }
        """.trimIndent(),
            "data.catalog.services[*].__typename"
        )

        assertThat(services.size).isEqualTo(1)
        assertThat(services).isEqualTo(esperado)
    }

    @Test
    fun `el catalogo1 tiene 1 catalog`() {
        val esperado = listOf<String>(ConstantValues.CATALOG)
        val catalogs: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                catalogs{
                       __typename
                    }
                }
            }
        """.trimIndent(),
            "data.catalog.catalogs[*].__typename"
        )

        assertThat(catalogs.size).isEqualTo(1)
        assertThat(catalogs).isEqualTo(esperado)
    }

    @Test
    fun `el catalog1 es consistente CR PrimaryTopic in Resources`() {
        val primaryTopics: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                records{
                        primaryTopic{
                            id
                        }
                    }
               }
            }
        """.trimIndent(),
            "data.catalog.records[*].primaryTopic.id"
        )
        val resources: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
            """.trimIndent(),
            "data.catalog.resources[*].id"
        )
        assertTrue(
            primaryTopics.size == resources.size && primaryTopics.containsAll(resources) && resources.containsAll(
                primaryTopics
            )
        )
    }

    @Test
    fun `el catalog1 es consistente Resources = Datasets + Services`() {
        val datasets: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                datasets{
                        id
                    }
               }
            }
        """.trimIndent(),
            "data.catalog.datasets[*].id"
        )
        val resources: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
            """.trimIndent(),
            "data.catalog.resources[*].id"
        )
        val services: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
                    services{
                        id
                    }
               }
            }
            """.trimIndent(),
            "data.catalog.services[*].id"
        )
        val dataAndServ = datasets + services
        println(dataAndServ)
        assertTrue(
            dataAndServ.size == resources.size && dataAndServ.containsAll(resources) && resources.containsAll(
                dataAndServ
            )
        )
    }

    @Test
    fun `el catalog1 es consistente Resources contains Catalogs`() {
        val catalogs: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
  	                catalogs{
                        id
                    }
               }
            }
        """.trimIndent(),
            "data.catalog.catalogs[*].id"
        )
        val resources: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
            """.trimIndent(),
            "data.catalog.resources[*].id"
        )

        assertThat(resources).containsAll(catalogs)
    }

    @Test
    fun `puedo verificar el catalog al que pertenece un dataset servido por un recurso`() {
        var variableName = "\$idResource"
        var query = """
            query getCatalogs($variableName:ID){
                belongsToCatalog(id:$variableName){
                    resources{
                        id
                    }
                }
            }
        """.trimIndent()

        val datasets: Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
               	dataService(id:"dSer1"){
                  servesDataset{
                      id
                  }
                }
            }
            """.trimIndent(),
            "data.dataService.servesDataset[*].id"
        )

        datasets.forEach {
            val idD = mutableMapOf<String, Any>("idResource" to it)
            val catalogss = dgsQueryExecutor.executeAndGetDocumentContext(query, idD)
            val response = GraphQLResponse(catalogss.jsonString())
            val resources = response.extractValue<Collection<String>>("data.belongsToCatalog[*].resources[*].id")
            // Compruebo que el id de cada dataset ofrecido por el dataService está en los resources de su catalogo
            assertThat(it).isIn(resources)
        }
    }
}
