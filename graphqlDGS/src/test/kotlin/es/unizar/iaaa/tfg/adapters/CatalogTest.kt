package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import org.assertj.core.api.Assertions.assertThat
import org.hamcrest.Matchers.*
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CatalogTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el catalogo1 tiene 4 registros`()  {
        val esperado = listOf<String>("CatalogRecord","CatalogRecord","CatalogRecord","CatalogRecord")
        val records : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                records{
                       __typename
                    }
                }
            }
        """.trimIndent(), "data.catalog.records[*].__typename")

        assertThat(records.size).isEqualTo(4)
        assertThat(records).isEqualTo(esperado)
    }
    @Test
    fun `el catalogo1 tiene 3 datasets`()  {
        val datasets : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                datasets{
                       __typename
                    }
                }
            }
        """.trimIndent(), "data.catalog.datasets[*].__typename")

        assertThat(datasets.size).isEqualTo(3)

    }
    @Test
    fun `el catalogo1 tiene 4 resources`()  {
        val resources : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                resources{
                       __typename
                    }
                }
            }
        """.trimIndent(), "data.catalog.resources[*].__typename")

        assertThat(resources.size).isEqualTo(4)

    }
    @Test
    fun `el catalogo1 tiene 1 service`()  {
        val esperado = listOf<String>("DataService")
        val services : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                services{
                       __typename
                    }
                }
            }
        """.trimIndent(), "data.catalog.services[*].__typename")

        assertThat(services.size).isEqualTo(1)
        assertThat(services).isEqualTo(esperado)
    }
    @Test
    fun `el catalogo1 tiene 1 catalog`()  {
        val esperado = listOf<String>("Catalog")
        val catalogs : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                catalogs{
                       __typename
                    }
                }
            }
        """.trimIndent(), "data.catalog.catalogs[*].__typename")

        assertThat(catalogs.size).isEqualTo(1)
        assertThat(catalogs).isEqualTo(esperado)
    }

    @Test
    fun `el catalog1 es consistente CR PrimaryTopic in Resources`() {
        val primaryTopics : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                records{
                        primaryTopic{
                            id
                        }
                    }
               }
            }
        """.trimIndent(), "data.catalog.records[*].primaryTopic.id")
        val resources : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.resources[*].id")
        assertTrue(primaryTopics.size == resources.size && primaryTopics.containsAll(resources) && resources.containsAll(primaryTopics))

    }
    @Test
    fun `el catalog1 es consistente Resources = Datasets + Services`() {
        val datasets : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                datasets{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.datasets[*].id")
        val resources : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.resources[*].id")
        val services : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
                    services{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.services[*].id")
        val dataAndServ = datasets + services
        println(dataAndServ)
        assertTrue(dataAndServ.size == resources.size && dataAndServ.containsAll(resources) && resources.containsAll(dataAndServ))
    }
    @Test
    fun `el catalog1 es consistente Resources contains Catalogs`() {
        val catalogs : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
  	                catalogs{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.catalogs[*].id")
        val resources : Collection<String> = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalog(id:"catalog1"){
                    resources{
                        id
                    }
               }
            }
        """.trimIndent(), "data.catalog.resources[*].id")

        assertThat(resources).containsAll(catalogs)
    }
}  