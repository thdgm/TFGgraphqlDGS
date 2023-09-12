package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.cache.annotation.Cacheable
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

/*
 * Services for get Dataset fields and entity.
 */

interface DatasetServices {
    fun getDistributionsDataset(id: String): Collection<Distribution?>
    fun getInSeriesDataset(filterIdDS: String?, id: String): Collection<DatasetSeries?>
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
    @Cacheable
    override fun getDistributionsDataset(id: String): Collection<Distribution?> =
        distributionRepository.findDistributionsByDatasetsId(id, PageRequest.of(0, Integer.MAX_VALUE)).get().toList()
            .map {
                converter.toDistribution(it)
            }

    // Return property InSeries Dataset
    @Cacheable
    override fun getInSeriesDataset(filterIdDS: String?, id: String): Collection<DatasetSeries?> {
        val datasetSeries = datasetSeriesRepository.findInseriesByDatasetId(id, PageRequest.of(0,Integer.MAX_VALUE))
            .map {
                converter.toDatasetSeriesById(it)
            }
        return if (filterIdDS == null) datasetSeries.get().toList() else datasetSeries.filter { it?.id == filterIdDS }.toList()
    }
}
