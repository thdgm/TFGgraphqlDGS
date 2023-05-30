package es.unizar.iaaa.tfg.repository

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

@DataJpaTest
class DatasetSeriesRepositoryTest {

    @Autowired lateinit var datasetRepository: DatasetRepository

    @Autowired lateinit var em: TestEntityManager



    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el datasetSeries dS1 tiene 1 members`() {
        val members = datasetRepository.findDatasetByInseriesId("dS1")
        assertEquals(1, members.size)
    }
}
