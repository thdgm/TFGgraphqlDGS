package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface DatasetServices {
    fun showDistributionsDataset(id: String): Collection<Distribution?>
    fun showInSeriesDataset(filterIdDS: String?,id: String): Collection<DatasetSeries?>
}

/*
 * @configuration threshold - number of parameters required to trigger the rule (default: `9`)
 */
@Service
class DatasetServicesImpl(

    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository,
    private val converter: ConvertersResourcesEntitiesTo,

) : DatasetServices {

    // Return property Distributions Dataset
    override fun showDistributionsDataset(id: String): Collection<Distribution?> =
        distributionRepository.findDistributionsByDatasetsId(id)
            .map {
                converter.toDistribution(it!!)
            }

    // Return property InSeries Dataset
    override fun showInSeriesDataset(filterIdDS: String?,id: String): Collection<DatasetSeries?> {
        val datasetSeries = datasetSeriesRepository.findInseriesByDatasetId(id)
            .map {
                converter.toDatasetSeries(it!!)
            }
        return if (filterIdDS == null)  datasetSeries else datasetSeries.filter { it?.id == filterIdDS }

    }
}
