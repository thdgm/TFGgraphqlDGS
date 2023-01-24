package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.Keywords
import com.graphqlDGS.graphqlDGS.model.types.Periodicidad
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.springframework.stereotype.Service

interface DatasetServicesAuxiliarFields {
    fun getKeywords(id: String): Collection<Keywords?>
    fun getLocations(id: String): Collection<String?>
    fun getAccrualPeriodicity(id: String): Periodicidad?
    fun getTemporal(id: String): CoberturaTemporal?
}

@Service
class DatasetServicesAuxiliarFieldsImpl(

    private val keywordRepository: KeywordRepository,
    private val locationRepository: LocationRepository,
    private val datasetRepository: DatasetRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,

) : DatasetServicesAuxiliarFields {

    // Return property Keywords Dataset
    override fun getKeywords(id: String): Collection<Keywords?> =
        keywordRepository.findKeywordsByDatasetsId(id)
            .map {
                converterAuxiliar.toKeywords(it)
            }

    // Return property Location Dataset
    override fun getLocations(id: String): Collection<String?> =
        locationRepository.findLocationsByDatasetsId(id)
            .map {
                it.nombre
            }

    // Return property AccrualPeriodicity Dataset
    override fun getAccrualPeriodicity(id: String): Periodicidad? = converterAuxiliar.toPeriocidad(
        datasetRepository.findById(id).get().accrualPeriodicity
    )

    // Return property temporal Dataset
    override fun getTemporal(id: String): CoberturaTemporal? =
        converterAuxiliar.toCoberturaTemporal(
            datasetRepository.findById(id).get().temporalCoverageStart,
            datasetRepository.findById(id).get().temporalCoverageEnd
        )
}
