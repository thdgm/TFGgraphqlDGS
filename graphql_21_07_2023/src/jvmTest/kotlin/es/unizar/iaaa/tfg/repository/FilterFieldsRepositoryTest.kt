package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.constants.ConstantValues
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

@DataJpaTest
class FilterFieldsRepositoryTest {

    @Autowired lateinit var themeRepository: ThemeRepository

    @Autowired lateinit var em: TestEntityManager


    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el catalog root tiene 3 themes`() {
        val themes = themeRepository.findAll()
            .map { it.id }.distinct()

        assertEquals(2, themes.size)
    }
}
