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
class DatasetRepositoryTest {

    @Autowired lateinit var datasetRepository: DatasetRepository

    @Autowired lateinit var em: TestEntityManager


    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el dataset d1 tiene 1 dataSeries`() {
        val dataset = datasetRepository.findByIdOrNull("d1") ?: fail("El dataset no existe")
        assertEquals(1, dataset.inseries.size)
    }

    @Test
    fun `el dataset d1 tiene 4 distributions`() {
        val dataset = datasetRepository.findByIdOrNull("d1") ?: fail("El dataset no existe")
        assertEquals(4, dataset.distributions.size)
    }
}
