package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/*
 * These services are responsible for the creation
 * of the different relations between entities needed.
 * Related with Language.
 * They are used by mutation queries.
 */

interface CreateRelationsBetweenEntitiesLanguageServices {

    fun insertIntoLanguagesResources(lang: MutableCollection<LanguageEntity>, res: ResourceEntity)
    fun insertIntoLanguageDescriptions(languageId: String, descriptionId: String,resourceId:String)
    fun insertIntoLanguageTitles(languageId: String, titleId: String, resDist:Any)
}

@Service

class CreateRelationsBetweenEntitiesLanguageServicesImpl(
    private val languageRepository: LanguageRepository,
    private val descriptionRepository: DescriptionRepository,
    private val titlesDistributionRepository: TitleDistributionRepository,
    private val titlesResourceRepository: TitleResourceRepository,

    ) : CreateRelationsBetweenEntitiesLanguageServices {


    override fun insertIntoLanguagesResources(lang: MutableCollection<LanguageEntity>, res: ResourceEntity) {
        lang.forEach {
           if (!languageRepository.existsById(it.id)){
                val newLang = LanguageEntity()
                newLang.id = it.id
                languageRepository.save(newLang)
            }
            languageRepository.insertInLanguagesResources(it.id, res.id)
        }
    }


    override fun insertIntoLanguageDescriptions(languageId: String, descriptionId: String, resourceId:String){
        if (!languageRepository.existsById(languageId)){
            val newLang = LanguageEntity()
            newLang.id = languageId
            languageRepository.save(newLang)
        }
        descriptionRepository.insertInLanguageDescriptions(languageId,descriptionId,resourceId)
    }

    override fun insertIntoLanguageTitles(languageId: String, titleId: String, resDist:Any){
        if (!languageRepository.existsById(languageId)){
            val newLang = LanguageEntity()
            newLang.id = languageId
            languageRepository.save(newLang)
        }
        when(resDist){
            is ResourceEntity -> titlesResourceRepository.insertInLanguageTitles(languageId,titleId,resDist.id)
            is DistributionEntity -> titlesDistributionRepository.insertInLanguageTitles(languageId,resDist.id,titleId)

        }
    }


}
