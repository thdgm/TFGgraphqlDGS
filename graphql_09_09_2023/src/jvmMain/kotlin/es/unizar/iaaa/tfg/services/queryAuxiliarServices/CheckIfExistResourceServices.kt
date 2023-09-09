package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import org.springframework.stereotype.Service

/*
 * When we create a ResourceEntity or DistributionEntity
 * we check if the new one contains any identifier
 * that already exists in the database.
 */
interface CheckIfExistResourceServices {

    fun existResource(res: Collection<String?>): Boolean

    fun existDistribution(distIdentifiers: Collection<String?>): Boolean
}

@Service
class CheckIfExistResourceServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val distributionRepository: DistributionRepository,
    private val identifierRepository: IdentifierRepository,

    ) : CheckIfExistResourceServices {

    // Return true if Resource identifiers exist in the DB
    override fun existResource(resIdentifiers: Collection<String?>): Boolean{
        resourceRepository.findAll()
            .map {
                val identifiers = identifierRepository.findByResourceId(it.id).map{ident->
                    ident?.id
                }
                if (identifiers.containsAll(resIdentifiers)) return true
            }
        return false
    }
    // Return true if Distribution identifiers exist in the DB
    override fun existDistribution(distIdentifiers: Collection<String?>): Boolean{

        distributionRepository.findAll()
            .map {
                val identifiers = identifierRepository.findByDistributionId(it.id).map{ ident ->
                    ident?.id
                }
                if (identifiers.containsAll(distIdentifiers)) return true
            }
        return false
    }



}
