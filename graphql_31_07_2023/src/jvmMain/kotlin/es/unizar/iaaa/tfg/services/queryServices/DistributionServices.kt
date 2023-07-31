package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.NonNegativeInt
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.slf4j.LoggerFactory.getLogger
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

/*
 * Services for get Distribution fields and entity.
 */
interface DistributionServices {

    fun getDistribution(id: String): Distribution?
    fun getDistributionAccessService(id: String): Collection<DataService?>
    fun getDistributionTitles(id: String): Collection<LangString?>
    fun getDistributionAccessUrl(id: String): String?
    fun getByteSize(id: String): NonNegativeInt?
    fun getFormat(id: String): String?
    fun getDatasets(id: String): Collection<Dataset>
}

@Service
class DistributionServicesImpl(
    private val distributionRepository: DistributionRepository,
    private val datasetRepository: DatasetRepository,
    private val dataServiceRepository: DataServiceRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val titleDistributionRepository: TitleDistributionRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
    private val languageRepository: LanguageRepository,

    ) : DistributionServices {

    // Return Distributions id or null
    override fun getDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        return if (!c.isEmpty) converter.toDistribution(c.get()) else null
    }

    // Returns titles list of id with its language
    override fun getDistributionTitles(id: String): Collection<LangString?> {
        getLogger("logger").debug("INICIO $id")
        getLogger("logger").debug("${titleDistributionRepository.findByDistributionTitleId(id)}")

        var titlesDistribution = listOf<LangString?>()
         titleDistributionRepository.findByDistributionTitleId(id)
            .map {
                val languageStrings = mutableListOf<LangString?>()
                val title = it

                languageRepository.findLanguagesResourcesByTitlesDistributionIdTitleId(it.id.titleId)
                     .forEach {
                         getLogger("logger").debug("LANGSTRING: ${title.id.titleId} -- ${it.id}")
                         languageStrings.add(
                             converterAuxiliar.toLangString(title.id.titleId + LANGSTRING_SEPARADOR + it.id))
                         getLogger("logger").debug("LANGSTRING2: $languageStrings")
                     }
                languageStrings
            }.map{
                titlesDistribution += it
            }
        getLogger("logger").debug("A VER $titlesDistribution")
        getLogger("logger")
            .debug("${titleDistributionRepository.findByDistributionTitleId(id).map { it.id.titleId }}")

        return titlesDistribution
    }

    // Return accessService field of Distribution id
    override fun getDistributionAccessService(id: String): Collection<DataService?> =
        dataServiceRepository.findAccessServiceByDistributionsId(id)
            .map {
                converter.toDataService(it)
            }

    // Return accessService field of Distribution id
    override fun getDistributionAccessUrl(id: String): String? =
        distributionRepository.findById(id).get().accessUrl


    // Return byteSize distribution id
    override fun getByteSize(id: String): NonNegativeInt? =
       NonNegativeInt(distributionRepository.findByIdOrNull(id)?.byteSize ?: 0u)

    // Return format distribution id
    override fun getFormat(id: String): String? =
        distributionRepository.findByIdOrNull(id)?.format


    // Return corresponding Datasets
    override fun getDatasets(id: String): Collection<Dataset> =
        datasetRepository.findDatasetsByDistributionsDatasetId(id).mapNotNull { converter.toDataset(it) }

}
