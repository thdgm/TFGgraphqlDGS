package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

/*
 * Services for get DatasetSeries fields and entity.
 */

interface DatasetSeriesService {
    fun getDatasetSerie(id: String): DatasetSeries?
    fun getSeriesMembers(filterIdDataset: String?, id: String): Collection<Dataset?>
}

@Service
class DatasetSeriesServiceImpl(
    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val datasetRepository: DatasetRepository,
    private val converter: ConvertersResourcesEntitiesTo

) : DatasetSeriesService {

    /*
     * Look in the database for DatasetSeries identified by id.
     * Return it if it could find it, in other case return null.
     */
    override fun getDatasetSerie(id: String): DatasetSeries? {
        val c = datasetSeriesRepository.findById(id)
        return if (!c.isEmpty) converter.toDatasetSeries(c.get()) else null
    }

    // Return dataseries' dataset members using it id.
    override fun getSeriesMembers(filterIdDataset: String?, id: String): Collection<Dataset?> {
        val datasets = datasetRepository.findDatasetByInseriesId(id)
            .map { converter.toDataset(it) }
        return if (filterIdDataset == null) datasets else datasets.filter { it?.id == filterIdDataset }
    }
}
