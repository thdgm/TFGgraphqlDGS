package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface DistributionServices {

    fun showDistribution(id: String): Distribution?
    fun showDistributionAccessService(id: String): Collection<DataService?>
}

@Service
class DistributionServicesImpl(
    private val distributionRepository: DistributionRepository,
    private val dataServiceRepository: DataServiceRepository,
    private val converter: Converters
) : DistributionServices {

    // Return Distributions id or null
    override fun showDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        return if (!c.isEmpty) converter.toDistribution(c.get()) else null
    }

    // Return accessService field of Distribution id
    override fun showDistributionAccessService(id: String): Collection<DataService?> =
        dataServiceRepository.findAccessServiceByDistributionsId(id)
            ?.map {
                converter.toDataService(it!!)
            } ?: emptyList()
}
