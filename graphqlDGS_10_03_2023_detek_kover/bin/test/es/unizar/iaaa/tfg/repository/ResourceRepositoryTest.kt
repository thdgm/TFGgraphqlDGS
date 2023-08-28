package es.unizar.iaaa.tfg.repository

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

@DataJpaTest
class ResourceRepositoryTest {

    @Autowired lateinit var descriptionRepository: DescriptionRepository

    @Autowired lateinit var em: TestEntityManager


    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el resource catalog1 tiene 3 descripciones`() {
        val description = descriptionRepository.findByResourceId("catalog1")
        assertEquals(3, description.size)
    }
}
