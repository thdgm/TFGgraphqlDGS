package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.PeriodOfTime
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.RegulationsRepository
import es.unizar.iaaa.tfg.repository.RelatedResourcesRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.slf4j.LoggerFactory.getLogger
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service
import java.time.LocalDateTime

/*
 * Services for get Dataset auxiliary fields.
 */

interface DatasetServicesAuxiliarFields {
    fun getKeywords(id: String): Collection<LangString?>
    fun getLocations(id: String): Collection<String?>
    fun getAccrualPeriodicity(id: String): String?
    fun getTemporal(id: String): PeriodOfTime?
    fun getDatasetServices(filterIdDataset: String?, id: String, page: Int, pageSize: Int): Collection<DataService?>
    fun getValidity(id: String): LocalDateTime?
    fun getRegulations(id: String): Collection<String?>
    fun getRelatedResources(id: String): Collection<String?>
}

@Service
class DatasetServicesAuxiliarFieldsImpl(

    private val keywordRepository: KeywordRepository,
    private val locationRepository: LocationRepository,
    private val datasetRepository: DatasetRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
    private val dataServiceRepository: DataServiceRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val regulationsRepository: RegulationsRepository,
    private val relatedResourcesRepository: RelatedResourcesRepository,


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
    override fun getTemporal(id: String): PeriodOfTime? =
        converterAuxiliar.toCoberturaTemporal(
            datasetRepository.findById(id).get().temporalCoverageStart,
            datasetRepository.findById(id).get().temporalCoverageEnd
        )

    // Return datasetServices which contains the dataset's id
    override fun getDatasetServices(filterIdDataset: String?, id: String, page: Int, pageSize: Int): Collection<DataService?> {
        println("FINDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD: $id")
       // println(dataServiceRepository.findDatasetServiceByServesDatasetId(id))
       return dataServiceRepository.findDatasetServiceByServesDatasetId(id, PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).distinctBy { it.id }
            .map {
                converter.toDataService(it)
            }.filterNotNull()
        //return if (filterIdDataset == null) dataservices else dataservices.filter { it?.id == filterIdDataset }
    }

    // Return validity field from DatasetEntity with identifier equal to id parameter
    override fun getValidity(id: String): LocalDateTime? =
        datasetRepository.findById(id).get().validity

    // Return regulations field from DatasetEntity with identifier equal to id parameter
    override fun getRegulations(id: String): Collection<String?> =
       regulationsRepository.findRegulationsByDatasetsId(id).map{it?.id}


    // Return relatedResources field from DatasetEntity with identifier equal to id parameter
    override fun getRelatedResources(id: String): Collection<String?> =
        relatedResourcesRepository.findRelatedResourcesByDatasetsId(id).map{it?.id}

}
