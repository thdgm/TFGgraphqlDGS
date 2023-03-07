package es.unizar.iaaa.tfg.services.mutationServices



import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import org.springframework.stereotype.Service

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
            languageRepository.insertInLanguagesResources(it.id, res.id)
        }
    }


    override fun insertIntoLanguageDescriptions(languageId: String, descriptionId: String, resourceId:String){
        descriptionRepository.insertInLanguageDescriptions(languageId,descriptionId,resourceId)
    }

    override fun insertIntoLanguageTitles(languageId: String, titleId: String, resDist:Any){
        when(resDist){
            is ResourceEntity -> titlesResourceRepository.insertInLanguageTitles(languageId,titleId,resDist.id)
            is DistributionEntity -> titlesDistributionRepository.insertInLanguageTitles(languageId,resDist.id,titleId)

        }
    }


}
