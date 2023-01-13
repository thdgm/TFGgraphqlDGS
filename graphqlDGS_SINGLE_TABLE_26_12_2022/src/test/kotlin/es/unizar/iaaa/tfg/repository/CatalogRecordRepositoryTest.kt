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
class CatalogRecordRepositoryTest {

    @Autowired lateinit var catalogRecordsRepository: CatalogRecordsRepository
    @Autowired lateinit var em: TestEntityManager

    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }

    @Test
    fun `el catalogRecord cR1 tiene 1 primaryTopic catalog`(){
       val catalogRecord = catalogRecordsRepository.findByIdOrNull("cR1") ?: fail("El catalogRecord no existe")
        assertEquals("catalog",catalogRecord.resource.type)
    }
    @Test
    fun `el catalogRecord cR2 tiene 1 primaryTopic dataservice`(){
        val catalogRecord = catalogRecordsRepository.findByIdOrNull("cR2") ?: fail("El catalogRecord no existe")
        assertEquals("data_service",catalogRecord.resource.type)
    }
    @Test
    fun `el catalogRecord cR3 tiene 1 primaryTopic dataset`(){
        val catalogRecord = catalogRecordsRepository.findByIdOrNull("cR3") ?: fail("El catalogRecord no existe")
        assertEquals("dataset",catalogRecord.resource.type)
    }
    @Test
    fun `el catalogRecord cR4 tiene 1 primaryTopic dataseries`(){
        val catalogRecord = catalogRecordsRepository.findByIdOrNull("cR4") ?: fail("El catalogRecord no existe")
        assertEquals("dataset_series",catalogRecord.resource.type)
    }

}
