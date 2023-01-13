package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DatasetServices {
    fun showDistributionsDataset(id: String): Collection<Distribution?>
    fun showInSeriesDataset(id: String): Collection<DatasetSeries?>
    fun showDatasetInCatalog(id: String): DatasetInCatalog?
}

@Service
class DatasetServicesImpl(

    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository,
    private val resourceRepository: ResourceRepository,
    private val converter: Converters
) : DatasetServices {

    // Return el DatasetInCatalog id or null
    override fun showDatasetInCatalog(id: String): DatasetInCatalog? {
        val resEntity = resourceRepository.findByIdAndTypeNot(id, "data_service")
        return if (resEntity != null) converter.createDataset(resEntity) else null
    }

    // Return property Distributions Dataset
    override fun showDistributionsDataset(id: String): Collection<Distribution?> =
        distributionRepository.findDistributionsByDatasetsId(id)
            ?.map {
                converter.toDistribution(it!!)
            } ?: emptyList()

    // Return property InSeries Dataset
    override fun showInSeriesDataset(id: String): Collection<DatasetSeries?> =
        datasetSeriesRepository.findInseriesByDatasetId(id)
            ?.map {
                converter.toDatasetSeries(it!!)
            } ?: emptyList()
}
