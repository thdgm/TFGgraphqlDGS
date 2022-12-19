package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import org.springframework.stereotype.Service

interface DatasetSeriesService {
    fun showDatasetSeries(): Collection<DatasetSeries?>
    fun showDatasetSerie(id: String): DatasetSeries?

}
@Service
class DatasetSeriesServiceImpl(
    private  val datasetSeriesRepository: DatasetSeriesRepository,

):DatasetSeriesService{

    // Genera una lista de DatasetSeries de prueba
    override fun showDatasetSeries(): Collection<DatasetSeries?> {
        val dSEntity = datasetSeriesRepository.findAll()
        var datasetSeries = listOf<DatasetSeries?>()
        dSEntity.forEach {
            datasetSeries += it.toDatasetSeries()
        }
        return datasetSeries
    }
    // Busca el DatasetSeries correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetSerie(id: String): DatasetSeries? {
        val c = datasetSeriesRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDatasetSeries()
        }
        return null
    }
}