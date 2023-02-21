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
class DistributionRepositoryTest {

    @Autowired lateinit var distributionRepository: DistributionRepository

    @Autowired lateinit var em: TestEntityManager

    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `la distribution Dist1 tiene 1 dataservices`() {
        val distribution = distributionRepository.findByIdOrNull("Dist1") ?: fail("La distribution no existe")
        assertEquals(1, distribution.accessService.size)
    }
}
