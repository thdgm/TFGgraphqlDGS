package es.unizar.iaaa.tfg.repository

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

@DataJpaTest
class IdentifierRepositoryTest {

    @Autowired lateinit var identifierRepository: IdentifierRepository

    @Autowired lateinit var em: TestEntityManager


    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `la distribution Dist1 tiene 2 identifiers`() {
        val identifiers = identifierRepository.findByDistributionId("Dist1")
        assertEquals(2, identifiers.size)
    }

    @Test
    fun `el resource d1 tiene 2 identifiers`() {
        val identifiers = identifierRepository.findByResourceId("d1")
        assertEquals(2, identifiers.size)
    }
}
