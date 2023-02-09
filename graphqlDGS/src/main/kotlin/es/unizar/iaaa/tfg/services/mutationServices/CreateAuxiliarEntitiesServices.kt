package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.stereotype.Service

interface CreateAuxiliarEntitiesServices {
    fun createLanguages(jsonFields: MutableMap<String, Any>):MutableCollection<LanguageEntity>
    fun createKeywords(jsonFields: MutableMap<String, Any>):Collection<KeywordEntity>
    fun createTitle(titleFields: JSONObject,res:Any)
    fun createLocation(jsonFields: MutableMap<String, Any>):MutableCollection<LocationEntity>
    fun createResourceDescriptions(jsonFields: MutableMap<String, Any>,res:ResourceEntity)

}


@Service
class CreateAuxiliarEntitiesServicesImpl(
    private val languageRepository:LanguageRepository,
    private val keywordRepository: KeywordRepository,
    private val titlesRepository: TitleRepository,
    private val locationRepository:LocationRepository,
    private val descriptionRepository: DescriptionRepository,

): CreateAuxiliarEntitiesServices{

    //Create LanguageEntity entities according to Json
    override fun createLanguages(jsonFields: MutableMap<String, Any>):MutableCollection<LanguageEntity>{
        //TODO(PROBAR A PILLARLO COMO UN JSON ARRAY)
        val languages =  jsonFields.getValue("languages") as String
        val l = LanguageEntity()
        l.id = languages
        //Miro si existe el language, sino lo creo
        if (!languageRepository.existsById(l.id)) languageRepository.save(l)
        return mutableListOf(l)
    }

    //Create KeywordEntity entities according to Json
    override fun createKeywords(jsonFields: MutableMap<String, Any>):Collection<KeywordEntity>{

        val keywords = mutableListOf<KeywordEntity>()
        val arrayJson =  jsonFields.getValue("keyword") as JSONArray
        for (i in 0 until arrayJson.length()) {
            val word = arrayJson.getJSONObject(i).getString("@value")
            val language = arrayJson.getJSONObject(i).getString("@language")
            val kw = KeywordEntity()
            kw.word = word
            kw.language = languageRepository.findById(language).get()
            keywords.add(kw)
            keywordRepository.save(kw)
        }
        return keywords
    }

    //Create TitleEntity entities according to JsonObject
    override fun createTitle(titleFields: JSONObject, res:Any){
        //TODO(PROBAR A PILLARLO COMO UN JSON ARRAY PUEDE HABER VARIOS TITLES)
        val tit = TitlesEntity()
        tit.title = titleFields.getString("@value")
        tit.language = languageRepository.findById(titleFields.getString("@language")).get()
        if (res is DistributionEntity){
            tit.distributionTitle = res
        }else if(res is ResourceEntity){
            tit.resourceTitle = res
        }
        if (!titlesRepository.existsById(tit.title)) titlesRepository.save(tit)
    }

    override fun createLocation(jsonFields: MutableMap<String, Any>):MutableCollection<LocationEntity>{
        //TODO(PROBAR A PILLARLO COMO UN JSON ARRAY)
        val spatial = jsonFields.getValue("spatial") as String
        val locate= spatial.split("/")

        val loc = LocationEntity()
        loc.nombre = spatial
        loc.tipo = locate[locate.size -2]
        if (!locationRepository.existsById(loc.nombre)) locationRepository.save(loc)
        return mutableListOf(loc)
    }

    override fun createResourceDescriptions(jsonFields: MutableMap<String, Any>,res:ResourceEntity){
        //TODO(PROBAR A PILLARLO COMO UN JSON ARRAY)
        val descriptions = jsonFields.getValue("description") as JSONObject

        val desc =  ResourceDescriptionsEntity()
        val language = languageRepository.findById(descriptions.getString("@language")).get()
        desc.text = descriptions.getString("@value")
        desc.resource = res
        desc.language = language
        if (!descriptionRepository.existsById(desc.text)) descriptionRepository.save(desc)
    }
}