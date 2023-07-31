package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

/*
 * Services for get DataServices fields and entity.
 */

interface DataServicesServices {
    fun getDataService(id: String): DataService?
    fun getServesDataset(id: String): Collection<DatasetInCatalog?>
    fun getDistributions(id: String): Collection<Distribution>
}

@Service
class DataServicesServicesImpl(
    private val dataServiceRepository: DataServiceRepository,
    private val distributionsRepository:DistributionRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val resourceRepository: ResourceRepository

) : DataServicesServices {

    // Return DataService id or null
    override fun getDataService(id: String): DataService? {
        val c = dataServiceRepository.findById(id)
        return if (!c.isEmpty) converter.toDataService(c.get()) else null
    }

    // Return servesDataset of DataService id
    override fun getServesDataset(id: String): Collection<DatasetInCatalog?> {
        return resourceRepository.findDistinctServesDatasetByDatasetServiceId(id)
            .map {
                converter.createDataset(it)
            }
    }

    // Return Distribuions according to accessService
    override fun getDistributions(id: String): Collection<Distribution> =
      distributionsRepository.findDistributionsByAccessServiceId(id).mapNotNull { converter.toDistribution(it) }

}
