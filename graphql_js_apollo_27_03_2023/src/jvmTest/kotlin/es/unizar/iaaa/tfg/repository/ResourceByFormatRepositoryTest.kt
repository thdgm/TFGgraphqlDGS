package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager

@DataJpaTest
class ResourceByFormatRepositoryTest{

    @Autowired lateinit var distributionRepository: DistributionRepository
    @Autowired lateinit var dataServiceRepository: DataServiceRepository
    @Autowired lateinit var datasetRepository:DatasetRepository
    @Autowired lateinit var keywordRepository: KeywordRepository
    @Autowired lateinit var em: TestEntityManager


    @Test
    fun contextLoads() {
        Assertions.assertNotNull(em)
    }


    @Test
    fun `obtengo resources con mismo format a partir de format`() {


        /*val dataservices = distributionRepository.findAll()
            .filter{it.format == "application/json"}
            .map{dataServiceRepository.findAccessServiceByDistributionsId(it.id).map { it }}.flatten().distinct()
            .map{it!!.servesDataset}.flatten().distinct()
*/
        val res = datasetRepository.findAll().filter {
            keywordRepository.findKeywordsByDatasetId(it.id).map{it.id.wordId}.contains("keyword 1")
        }
            //.map{convertersResourcesEntitiesTo.createResource(it)}
        println("ASSSS: $res")
        //assertEquals(4, dataservices.size)
    }
}
