package es.unizar.iaaa.tfg.repository

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import org.springframework.data.repository.findByIdOrNull
@DataJpaTest
class DatasetServiceRepositoryTest {
    @Autowired lateinit var dataServiceRepository: DataServiceRepository

    @Autowired lateinit var em: TestEntityManager

    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el dataservice dSer1 tiene 3 datasetInCatalog`() {
        val dataservice = dataServiceRepository.findByIdOrNull("dSer1") ?: fail("El dataservice no existe")
        assertEquals(4, dataservice.servesDataset.size)
    }
}
