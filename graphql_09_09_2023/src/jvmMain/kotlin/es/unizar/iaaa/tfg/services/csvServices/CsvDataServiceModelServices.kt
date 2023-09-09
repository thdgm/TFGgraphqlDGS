package es.unizar.iaaa.tfg.services.csvServices

import com.opencsv.CSVWriter
import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.io.File
import java.io.FileWriter
import java.time.LocalDateTime
import java.util.*

/*
 * These services help to create a DataServiceEntity and its relationships
 * with other entities.
 */

interface CsvDataServiceModelServices {
    fun createDataservice(catalog: CatalogEntity): DataServiceEntity
}

@Service

class CsvDataServiceModelServicesImpl(

    private val dataServiceRepository: DataServiceRepository,
    private val catalogRepository: CatalogRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,

    ) : CsvDataServiceModelServices {

    override fun createDataservice(catalog: CatalogEntity): DataServiceEntity {
        val newDataService = DataServiceEntity()
        newDataService.id = UUID.randomUUID().toString()
        newDataService.issued = LocalDateTime.now()
        newDataService.modified = LocalDateTime.now()
        if(!dataServiceRepository.existsById(newDataService.id)) dataServiceRepository.save(newDataService)


       // val catalog = catalogRepository.findByIdOrNull(idCatalog)
        if (catalog != null)  {
             createRelationsBetweenEntitiesServices.insertIntoRelathionships(catalog, newDataService)
             createRelationsBetweenEntitiesServices.insertIntoServesDataset(newDataService,catalog)
         }
        return newDataService
    }


}

