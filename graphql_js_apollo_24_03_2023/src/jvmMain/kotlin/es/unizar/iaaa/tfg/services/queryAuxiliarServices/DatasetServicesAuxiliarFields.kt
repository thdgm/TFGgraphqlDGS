package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Duration
import com.graphqlDGS.graphqlDGS.model.types.DataService
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service

/*
 * Services for get Dataset auxiliary fields.
 */

interface DatasetServicesAuxiliarFields {
    fun getKeywords(id: String): Collection<LangString?>
    fun getLocations(id: String): Collection<String?>
    fun getAccrualPeriodicity(id: String): String?
    fun getTemporal(id: String): Duration?
    fun getDatasetServices(filterIdDataset: String?, id: String): Collection<DataService?>
}

@Service
class DatasetServicesAuxiliarFieldsImpl(

    private val keywordRepository: KeywordRepository,
    private val locationRepository: LocationRepository,
    private val datasetRepository: DatasetRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
    private val dataServiceRepository: DataServiceRepository,
    private val converter: ConvertersResourcesEntitiesTo,

) : DatasetServicesAuxiliarFields {

    // Return property Keywords Dataset
    override fun getKeywords(id: String): Collection<LangString?> {
        getLogger("logger").debug("KEYYYYYYYYYYYYYYWOOOOOOORRRRRRRDDDDDDDDSSSSSSSS2")
        return keywordRepository.findKeywordsByDatasetId(id)
            .map {
                converterAuxiliar.toLangString(it.id.wordId + LANGSTRING_SEPARADOR + it.language.id)
            }
    }
    // Return property Location Dataset
    override fun getLocations(id: String): Collection<String?> =
        locationRepository.findLocationsByDatasetsId(id)
            .map {
                it.nombre
            }

    // Return property AccrualPeriodicity Dataset
    override fun getAccrualPeriodicity(id: String): String? =
        datasetRepository.findById(id).get().accrualPeriodicity


    // Return property temporal Dataset
    override fun getTemporal(id: String): Duration? =
        converterAuxiliar.toCoberturaTemporal(
            datasetRepository.findById(id).get().temporalCoverageStart,
            datasetRepository.findById(id).get().temporalCoverageEnd
        )

    // Return datasetServices which contains the dataset's id
    override fun getDatasetServices(filterIdDataset: String?, id: String): Collection<DataService?> {
        val dataservices = dataServiceRepository.findDatasetServiceByServesDatasetId(id)
            .map {
                converter.toDataService(it)
            }
        return if (filterIdDataset == null) dataservices else dataservices.filter { it?.id == filterIdDataset }
    }
}
