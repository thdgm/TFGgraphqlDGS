package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import data.ConstantValues
import org.assertj.core.api.Assertions.assertThat
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
        val esperado = listOf<String>(
            ConstantValues.CATALOG,
            ConstantValues.DATASET,
            ConstantValues.DATASETSERIES,
        )
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
        assertThat(datasets).containsExactlyInAnyOrderElementsOf(esperado)
        // https://www.baeldung.com/java-assert-lists-equality-ignore-order
        // Comprobar cada tipo con que son coleccciones idénticas sin importar el orden
        // o comprobando uno a uno la inclusión de cada tipo
    }

    @Test
    fun `el catalogo1 tiene 4 resources`() {
        val esperado = listOf<String>(
            ConstantValues.CATALOG,
            ConstantValues.DATASET,
            ConstantValues.DATASETSERIES,
            ConstantValues.DATASERVICE,
        )
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
        assertThat(resources).containsExactlyInAnyOrderElementsOf(esperado)
        // Comprobar cada tipo con que son coleccciones idénticas sin importar el orden
        // o comprobando uno a uno la inclusión de cada tipo
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
        // assertThat dos colecciones son iguales con independencia del orden
        // https://www.baeldung.com/java-assert-lists-equality-ignore-order
        assertThat(primaryTopics).containsExactlyInAnyOrderElementsOf(resources)
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
        println(resources)
        // https://www.baeldung.com/java-assert-lists-equality-ignore-order
        assertThat(resources).containsExactlyInAnyOrderElementsOf(dataAndServ)

        // assertThat dos colecciones son iguales con independencia del orden
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
    fun `consistencia entre propiedad resources de Catalog "catalog1" y inCatalog de Resource`() {
        val esperado = listOf<String>(
            "catalog1"
        )
        var variableName = "\$idCatalog"
        var variableFilter = "\$idCatalogFilter"
        var query = """
            query getCatalogs($variableName:ID,$variableFilter:String){
                catalog(id:$variableName){
                    resources{
                        inCatalog(filter:$variableFilter) {
                            id
                        }
                    }
                }
            }
        """.trimIndent()
        val idCatalog = mutableMapOf<String, Any>("idCatalog" to "catalog1", "idCatalogFilter" to "catalog1")
        val catalogs = dgsQueryExecutor.executeAndGetDocumentContext(query, idCatalog)
        val response = GraphQLResponse(catalogs.jsonString())
        val resources = response.extractValue<Collection<Collection<Map<String, String>>>>("data.catalog.resources")
        val idCatalogs = response.extractValue<Collection<Collection<Map<String, String>>>>(
            "data.catalog.resources[*].inCatalog[*].id"
        )
        //  Filtro para obtener de cada resource el catalog "catalog1"
        //  Si alguno no tiene dicho catalog el array de resources será de mayor longitud que el de catalogs
        // Haciendo distinct al array de catalogs me debe quedar solo 1 elemento igual a "catalog1"
        assertThat(idCatalogs.size).isEqualTo(resources.size)
        assertThat(idCatalogs.distinct()).isEqualTo(esperado)
        // Compruebo que cada subCollection tiene un solo elemento y su id es igual a catalog1
        // [[{id=catalog1}], [{id=catalog1}], [{id=catalog1}], [{id=catalog1}]]
        /*inCatalogs.forEach {
            assertThat(it).hasSize(1)
            assertThat(it.elementAt(0)["id"]).isEqualTo("catalog1")
        }*/
    }
}
