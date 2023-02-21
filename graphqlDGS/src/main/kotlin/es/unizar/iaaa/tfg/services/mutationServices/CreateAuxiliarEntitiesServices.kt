package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.PublisherEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.stereotype.Service

interface CreateAuxiliarEntitiesServices {
    fun createLanguages(jsonFields: MutableMap<ModelJsonMapping, String>): MutableCollection<LanguageEntity>
    fun createKeywords(jsonFields: MutableMap<ModelJsonMapping, String>): Collection<KeywordEntity>
    fun createTitle(titleTexts: Collection<String?>, titleLangs: Collection<String?>, res: Any)
    fun createLocation(spatial: Collection<String?>): MutableCollection<LocationEntity>
    fun createResourceDescriptions(descTexts: Collection<String?>, descLangs: Collection<String?>, res: ResourceEntity)

    fun createPublisher(jsonFields: MutableMap<ModelJsonMapping, String>,idPublisher:String?):PublisherEntity?
    fun createFormat(jsonFields: MutableMap<ModelJsonMapping, String>, idFormat:String?):String?
}

@Service
class CreateAuxiliarEntitiesServicesImpl(
    private val languageRepository: LanguageRepository,
    private val keywordRepository: KeywordRepository,
    private val titlesRepository: TitleRepository,
    private val locationRepository: LocationRepository,
    private val descriptionRepository: DescriptionRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val publisherRepository: PublisherRepository,

    ) : CreateAuxiliarEntitiesServices {

    // Create LanguageEntity entities according to Json
    override fun createLanguages(jsonFields: MutableMap<ModelJsonMapping, String>): MutableCollection<LanguageEntity> {

        val datasetModel = jsonFields.filterValues { it == "Dataset" }.keys.elementAt(0) as DatasetJsonMapping
        val languages = mutableListOf<LanguageEntity>()
            val languagesList = datasetModel.languages
            if(languagesList != null){
                languagesList.forEachIndexed { index, language ->
                    val l = LanguageEntity()
                    l.id = language as String
                    if (!languageRepository.existsById(l.id)) languageRepository.save(l)
                    languages.add(l)
                }
            }


        return languages
    }

    // Create KeywordEntity entities according to Json
    override fun createKeywords(jsonFields: MutableMap<ModelJsonMapping, String>): Collection<KeywordEntity> {


        val datasetModel = jsonFields.filterValues { it == "Dataset" }.keys.elementAt(0) as DatasetJsonMapping
        val keywords = mutableListOf<KeywordEntity>()
        val keywordWords = datasetModel.keywordsWord
        val keywordLangs = datasetModel.keywordsLang
        if(keywordWords != null){
            keywordWords.forEachIndexed { index, word ->
                val kw = KeywordEntity()
                kw.word = word as String
                kw.language = languageRepository.findById(keywordLangs.elementAt(index)!!).get()
                keywords.add(kw)
                keywordRepository.save(kw)
                keywords.add(kw)
            }
        }
        return keywords
    }

    // Create TitleEntity entities according to JsonObject
    override fun createTitle(titleTexts: Collection<String?>, titleLangs: Collection<String?>, res: Any) {
        if (titleTexts.isNotEmpty()) {
            titleTexts.forEachIndexed { index, text ->

                val tit = TitlesEntity()
                tit.title = text ?: ""
                val language = titleLangs.elementAt(index)!! //languageRepository.findById(titleLangs.elementAt(index)!!).get()
                if (res is DistributionEntity) {
                    tit.distributionTitle = res
                } else if (res is ResourceEntity) {
                    tit.resourceTitle = res
                }
                if (!titlesRepository.existsById(tit.title)) titlesRepository.save(tit)
                createRelationsBetweenEntitiesServices.insertIntoLanguageTitles(language,tit.title)
            }
        }
    }

    override fun createLocation(spatial: Collection<String?>): MutableCollection<LocationEntity> {
        val listLocations = mutableListOf<LocationEntity>()
        if (spatial.isNotEmpty()) {
            spatial.forEachIndexed { index, text ->
                val locate = text?.split("/")
                val loc = LocationEntity()
                loc.nombre = text as String
                if (locate != null) {
                    loc.tipo = locate[locate.size - 2]
                }
                if (!locationRepository.existsById(loc.nombre)) locationRepository.save(loc)
                listLocations.add(loc)
            }
            return listLocations
        }
        throw Error("Error al crear locations")
    }

    override fun createResourceDescriptions(
        descTexts: Collection<String?>,
        descLangs: Collection<String?>,
        res: ResourceEntity
    ) {
        println("DESCRIPTIOOOOOOOOOOOOOOOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
        println(descTexts)
        println(descLangs)
        if (descTexts.isNotEmpty()) {
            descTexts.forEachIndexed { index, text ->
                println(text)
                println(descLangs.elementAt(index))
                val desc = ResourceDescriptionsEntity()
                val language = descLangs.elementAt(index)!!//languageRepository.findById(descLangs.elementAt(index)!!).get()
                desc.text = text as String
                desc.resource = res
                if (!descriptionRepository.existsById(desc.text)) descriptionRepository.save(desc)
                createRelationsBetweenEntitiesServices.insertIntoLanguageDescriptions(language,desc.text)
            }
        }
    }

    override fun createPublisher(jsonFields: MutableMap<ModelJsonMapping, String>, idPublisher:String?):PublisherEntity?

    {
        if (idPublisher == null) return null
        val publishersJson = jsonFields.filterValues { it == "Publisher" }
            .keys
            .map { it as PublisherJsonMapping }
            .filter { it.id == idPublisher}
        if (publishersJson.isEmpty()) return null
        val publisherJson = publishersJson.elementAt(0)
        val newPublisher = PublisherEntity()
        newPublisher.id = publisherJson.id
        newPublisher.label = publisherJson.label
        newPublisher.notation = publisherJson.notation
        publisherRepository.save(newPublisher)
        return newPublisher
    }
    override fun createFormat(jsonFields: MutableMap<ModelJsonMapping, String>, idFormat:String?):String?{
        if (idFormat == null) return null
        val imtJson = jsonFields.filterValues { it == "Format" }
            .keys
            .map { it as ImtJsonMapping }
            .filter { it.id == idFormat}
        if (imtJson.isEmpty()) return null
        return imtJson.elementAt(0).value
    }

}

