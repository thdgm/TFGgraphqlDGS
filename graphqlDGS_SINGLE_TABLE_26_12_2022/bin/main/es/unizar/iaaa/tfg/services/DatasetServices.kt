package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DatasetServices {
    fun showDatasets(): Collection<Dataset?>
    fun showDataset(id: String): Dataset?
    fun showDistributionsDataset(id: String): Collection<Distribution?>
    fun showInSeriesDataset(id: String): Collection<DatasetSeries?>
    fun showDatasetInCatalog(id: String): DatasetInCatalog?
}

@Service
class DatasetServicesImpl(
    private val datasetRepository: DatasetRepository,
    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository,
    private val resourceRepository: ResourceRepository,
    private val converter: Converters
) : DatasetServices {

    // Return todos los dataset
    override fun showDatasets(): Collection<Dataset?> {
        val dEntity = datasetRepository.findAll()
        var datasets = listOf<Dataset?>()
        dEntity.forEach {
            datasets += it.toDataset()
        }
        return datasets
    }

    // Return  Dataset id or null
    override fun showDataset(id: String): Dataset? {
        val c = datasetRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataset()
        }
        return null
    }

    // Return el DatasetInCatalog id or null
    override fun showDatasetInCatalog(id: String): DatasetInCatalog? {
        val datasetInCatalogEntity = resourceRepository.findByIdAndTypeNot(id, "data_service")
        if (datasetInCatalogEntity != null) {
            return converter.createDataset(datasetInCatalogEntity)
        }
        return null
    }

    // Return property Distributions Dataset
    override fun showDistributionsDataset(id: String): Collection<Distribution?> {
        val distEntity = distributionRepository.findDistributionsByDatasetsId(id)
        var distributions = listOf<Distribution?>()
        distEntity.forEach {
            distributions += it?.toDistribution()
        }
        return distributions
    }

    // Return property InSeries Dataset
    override fun showInSeriesDataset(id: String): Collection<DatasetSeries?> {
        val seriesEntity = datasetSeriesRepository.findInseriesByDatasetId(id)
        var series = listOf<DatasetSeries?>()
        seriesEntity.forEach {
            series += it?.toDatasetSeries()
        }
        return series
    }
}
