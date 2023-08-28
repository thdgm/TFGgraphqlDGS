package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DataServicesServices {
    fun showDataService(id: String): DataService?
    fun showServesDataset(id: String): Collection<DatasetInCatalog?>
}

@Service
class DataServicesServicesImpl(
    private val dataServiceRepository: DataServiceRepository,
    private val converter: Converters,
    private val resourceRepository: ResourceRepository,
    private val datasetRepository: DatasetRepository,
) : DataServicesServices {

    // Return DataService id or null
    override fun showDataService(id: String): DataService? {
        val c = dataServiceRepository.findById(id)
        return if (!c.isEmpty) converter.toDataService(c.get()) else null
    }

    // Return servesDataset of DataService id
    override fun showServesDataset(id: String): Collection<DatasetInCatalog?> {
        return resourceRepository.findServesDatasetByDatasetServiceId(id)
            ?.map {
                var periodicidad: String? = null
                var temporal: CoberturaTemporal? = null
                if (it is DatasetEntity) {
                    val dataset = datasetRepository.findById(it.id).get()
                    periodicidad = dataset.accrualPeriodicity
                    temporal = converter.toCoberturaTemporal(dataset.temporalCoverageStart, dataset.temporalCoverageEnd)
                }
                converter.createDataset(it, periodicidad, temporal)
            } ?: emptyList()
    }
}
