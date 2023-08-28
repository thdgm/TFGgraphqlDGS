package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.repository.*
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DatasetServices {
    fun showDistributionsDataset(id: String): Collection<Distribution?>
    fun showInSeriesDataset(id: String): Collection<DatasetSeries?>
    fun showDatasetInCatalog(id: String): DatasetInCatalog?
    fun getKeywords(id: String): Collection<Keywords?>
    fun getLocations(id: String): Collection<String?>
    fun getAccrualPeriodicity(id: String): Periodicidad?
    fun getTemporal(id: String): CoberturaTemporal?
}

@Service
class DatasetServicesImpl(

    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository,
    private val resourceRepository: ResourceRepository,
    private val keywordRepository: KeywordRepository,
    private val locationRepository: LocationRepository,
    private val datasetRepository: DatasetRepository,
    private val converter: Converters
) : DatasetServices {

    // Return el DatasetInCatalog id or null
    override fun showDatasetInCatalog(id: String): DatasetInCatalog? {
        val resEntity = resourceRepository.findByIdAndTypeNot(id, "data_service")
        println("RESOURCE $resEntity")
        val c = if (resEntity != null) {
            var periodicidad: String? = null
            var temporal: CoberturaTemporal? = null
            if (resEntity is DatasetEntity) {
                val dataset = datasetRepository.findById(resEntity.id).get()

                periodicidad = dataset.accrualPeriodicity

                temporal = converter.toCoberturaTemporal(dataset.temporalCoverageStart, dataset.temporalCoverageEnd)
            }
            converter.createDataset(resEntity, periodicidad, temporal)
        } else {
            null
        }

        return c
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

    // Return property Keywords Dataset
    override fun getKeywords(id: String): Collection<Keywords?> =
        keywordRepository.findKeywordsByDatasetsId(id)
            .map {
                converter.toKeywords(it)
            }
    override fun getLocations(id: String): Collection<String?> =
        locationRepository.findLocationsByDatasetsId(id)
            .map {
                it.Nombre
            }
    override fun getAccrualPeriodicity(id: String): Periodicidad? = converter.toPeriocidad(
        datasetRepository.findById(id).get().accrualPeriodicity
    )
    override fun getTemporal(id: String): CoberturaTemporal? {
        println("HOLA")
        datasetRepository.findById(id).get().temporalCoverageEnd
        println("ADIOS")
        return converter.toCoberturaTemporal(
            datasetRepository.findById(id).get().temporalCoverageStart,
            datasetRepository.findById(id).get().temporalCoverageEnd
        )
    }
}
