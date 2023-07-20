package es.unizar.iaaa.tfg.services.csvServices


import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.csvDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

/*
 * These services help to create a DistributionEntity and its relationships
 * with other entities.
 */

interface CsvDistributionModelServices {
    fun createDistribution(d: DatasetCSVModel, dServ: DataServiceEntity):Collection<DistributionEntity>
}

@Service

class CsvDistributionModelServicesImpl(

    private val distributionRepository: DistributionRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,

    ) : CsvDistributionModelServices {

    override fun createDistribution(d: DatasetCSVModel, dServ: DataServiceEntity):Collection<DistributionEntity>{
        val distributions = mutableListOf<DistributionEntity>()
        if (!d.distributions.isNullOrEmpty()){
            d.distributions.forEachIndexed { index,distributionMap ->
                val newDistribution = DistributionEntity()
                newDistribution.id = if (d.url != null) UUID.nameUUIDFromBytes((d.url+"/distribution$index")
                    .toByteArray()).toString() else UUID.randomUUID().toString()
                val accessUrl = distributionMap?.get("ACCESS_URL")
                if (accessUrl != null) newDistribution.accessUrl = accessUrl
                val byteSize = distributionMap?.get("BYTE_SIZE")
                if (byteSize != null) newDistribution.byteSize = byteSize.toUInt()
                val format = distributionMap?.get("MEDIA_TYPE")
                if (format != null) newDistribution.format = MediaTypeMap.MEDIA_TYPE[".$format".toLowerCase()]

                distributionRepository.save(newDistribution)

                createRelationsBetweenEntitiesServices.insertIntoAccessInServicefromCsv(newDistribution, dServ)

                val titles = distributionMap?.filterKeys { it.matches("^TITLE.*".toRegex())}?.values
                if (titles != null) createAuxiliarEntitiesServices.createTitleFromCsv(titles, newDistribution)


                distributions.add(newDistribution)
            }
        }
        return distributions
    }


}

