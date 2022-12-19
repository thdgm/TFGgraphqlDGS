package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import org.springframework.stereotype.Service

interface DistributionServices {
    fun showDistributions(): Collection<Distribution?>
    fun showDistribution(id: String): Distribution?
    fun showDistributionAccessService(id: String): Collection<DataService?>
}

@Service
class DistributionServicesImpl(
    private val distributionRepository: DistributionRepository,
    private val dataServiceRepository: DataServiceRepository
) : DistributionServices {

    // Return list of Distributions from DB
    override fun showDistributions(): Collection<Distribution?> {
        val distEntity = distributionRepository.findAll()
        var distributions = listOf<Distribution?>()
        distEntity.forEach {
            distributions += it.toDistribution()
        }
        return distributions
    }

    // Return Distributions id or null
    override fun showDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDistribution()
        }
        return null
    }

    // Return accessService field of Distribution id
    override fun showDistributionAccessService(id: String): Collection<DataService?> {
        var accessService = listOf<DataService?>()
        val services = dataServiceRepository.findAccessServiceByDistributionsId(id)
        services.forEach {
            accessService += it?.toDataService()
        }
        return accessService
    }
}
