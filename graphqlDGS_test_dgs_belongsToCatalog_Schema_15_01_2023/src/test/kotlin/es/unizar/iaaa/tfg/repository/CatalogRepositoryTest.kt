package es.unizar.iaaa.tfg.repository

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import org.springframework.data.repository.findByIdOrNull

@DataJpaTest
class CatalogRepositoryTest {

    @Autowired lateinit var catalogRepository: CatalogRepository

    @Autowired lateinit var resourceRepository: ResourceRepository

    @Autowired lateinit var em: TestEntityManager

    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el catalogo1 tiene 4 registros`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")
        assertEquals(4, catalog.records.size)
    }

    @Test
    fun `el catalogo1 tiene 3 datasets`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")
        println(catalog.resourcesCatalog.map { it })
        assertEquals(3, catalog.resourcesCatalog.filter { it.type != "data_service" }.size)
    }

    @Test
    fun `el catalogo1 tiene 4 resources`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")
        assertEquals(4, catalog.resourcesCatalog.size)
    }

    @Test
    fun `el catalogo1 tiene 1 service`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")
        assertEquals(1, catalog.resourcesCatalog.filter { it.type == "data_service" }.size)
    }

    @Test
    fun `el catalogo1 tiene 1 catalog`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")
        assertEquals(1, catalog.resourcesCatalog.filter { it.type == "catalog" }.size)
    }

    @Test
    fun `el catalog1 es consistente`() {
        val catalog = catalogRepository.findByIdOrNull("catalog1") ?: fail("El catalogo no existe")

        val idResources = catalog.records.map {
            it.resource.id
        }
        val idResources2 = catalog.resourcesCatalog.map {
            it.id
        }

        assertThat(idResources).hasSize(idResources2.size).hasSameElementsAs(idResources2)
    }
    @Test
    fun `get catalog which resource d1 belongs to`(){
       val catalogIds = resourceRepository.findByIdOrNull("d1")?.catalogResources?.map {
           it.id
       }
        var resourcesIdToVerify = mutableListOf<String>()
        catalogIds?.forEach(){
           catalogRepository.findByIdOrNull(it)?.resourcesCatalog?.map{
               resourcesIdToVerify += it.id
           }
       }
        println(catalogRepository.findCatalogResourcesByResourcesCatalogId("d1").map{it})
        assertThat(resourcesIdToVerify).contains("d1")
    }


}
