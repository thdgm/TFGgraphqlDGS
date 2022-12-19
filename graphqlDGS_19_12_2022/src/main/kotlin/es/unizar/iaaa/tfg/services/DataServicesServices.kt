package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DataServicesServices {
    fun showDataServices(): Collection<DataServiceEntity?>
    fun showDataService(id: String): DataService?
    fun showServesDataset(id:String):Collection<DatasetInCatalog?>


}
@Service
class DataServicesServicesImpl(
    private val dataServiceRepository: DataServiceRepository,
    private val converter: Converters,
    private val resourceRepository: ResourceRepository,
    ):DataServicesServices {

    // Return list of DataServices from DB
    override fun showDataServices(): Collection<DataServiceEntity?> {
        val dSerEntity = dataServiceRepository.findAll()
        return dSerEntity
    }

    // Return DataService id or null
    override fun showDataService(id: String): DataService? {
        val c = dataServiceRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataService()
        }
        return null
    }

    //Return servesDataset of DataService id
    override fun showServesDataset(id:String):Collection<DatasetInCatalog?>{
        val c = dataServiceRepository.findById(id)
        val sd = dataServiceRepository.servesDataset(c.get())
        var servesDatasets = listOf<DatasetInCatalog?>()
        sd.forEach{
            servesDatasets += converter.createDataset(it as ResourceEntity)
        }
        return servesDatasets
    }



}