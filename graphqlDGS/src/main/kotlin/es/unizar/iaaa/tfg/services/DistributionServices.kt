package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface DistributionServices {

    fun showDistribution(id: String): Distribution?
    fun showDistributionAccessService(id: String): Collection<DataService?>
    fun getDistributionTitles(id: String): Collection<LangString?>
    fun showDistributionAccessUrl(id: String): String?
}

@Service
class DistributionServicesImpl(
    private val distributionRepository: DistributionRepository,
    private val dataServiceRepository: DataServiceRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val titleRepository: TitleRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
) : DistributionServices {

    // Return Distributions id or null
    override fun showDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        return if (!c.isEmpty) converter.toDistribution(c.get()) else null
    }

    // Returns titles list of id with its language
    override fun getDistributionTitles(id: String): Collection<LangString?> =
        titleRepository.findByDistributionTitleId(id)
            .map {
                converterAuxiliar.toLangString(it.title + "," + it.language.id)
            }

    // Return accessService field of Distribution id
    override fun showDistributionAccessService(id: String): Collection<DataService?> =
        dataServiceRepository.findAccessServiceByDistributionsId(id)
            .map {
                converter.toDataService(it!!)
            }

    // Return accessService field of Distribution id
    override fun showDistributionAccessUrl(id: String): String? =
        distributionRepository.findById(id).get().accessUrl
}
