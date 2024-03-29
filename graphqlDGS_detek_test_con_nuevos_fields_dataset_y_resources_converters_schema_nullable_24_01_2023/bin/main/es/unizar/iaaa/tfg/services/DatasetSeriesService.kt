package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface DatasetSeriesService {
    fun showDatasetSerie(id: String): DatasetSeries?
    fun showMembers(id: String): Collection<Dataset?>
}

@Service
class DatasetSeriesServiceImpl(
    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val datasetRepository: DatasetRepository,
    private val converter: ConvertersResourcesEntitiesTo

) : DatasetSeriesService {

    // Busca el DatasetSeries correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetSerie(id: String): DatasetSeries? {
        val c = datasetSeriesRepository.findById(id)
        return if (!c.isEmpty) converter.toDatasetSeries(c.get()) else null
    }

    // Busca los dataset miembros del dataseries id
    override fun showMembers(id: String): Collection<Dataset?> = datasetRepository.findDatasetByInseriesId(id)
        .map { converter.toDataset(it) }
}
