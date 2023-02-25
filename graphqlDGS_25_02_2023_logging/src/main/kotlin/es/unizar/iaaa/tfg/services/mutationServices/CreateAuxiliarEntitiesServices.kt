package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.services.Logger
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.IdentifierEntity
import es.unizar.iaaa.tfg.domain.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.PublisherEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionId
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.TitleDistributionId
import es.unizar.iaaa.tfg.domain.TitleResourceId
import es.unizar.iaaa.tfg.domain.TitlesDistributionEntity
import es.unizar.iaaa.tfg.domain.TitlesResourceEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import org.slf4j.LoggerFactory.getLogger
import org.springframework.stereotype.Service

interface CreateAuxiliarEntitiesServices {
    fun createLanguages(jsonFields: MutableMap<ModelJsonMapping, String>): MutableCollection<LanguageEntity>
    fun createKeywords(jsonFields: MutableMap<ModelJsonMapping, String>, idRes:String): Collection<KeywordEntity>
    fun createTitle(titleTexts: Collection<String?>, titleLangs: Collection<String?>, res: Any)
    fun createLocation(spatial: Collection<String?>): MutableCollection<LocationEntity>
    fun createResourceDescriptions(descTexts: Collection<String?>, descLangs: Collection<String?>, res: ResourceEntity)

    fun createPublisher(jsonFields: MutableMap<ModelJsonMapping, String>,idPublisher:String?):PublisherEntity?
    fun createFormat(jsonFields: MutableMap<ModelJsonMapping, String>, idFormat:String?):String?
    fun createPeriodOfTime(jsonFields: MutableMap<ModelJsonMapping, String>, idTemporal:String?):PeriodOfTimeJsonMapping?
    fun createIdentifier(identifiers:Collection<String?>, resDist:Any)
}

@Service
class CreateAuxiliarEntitiesServicesImpl(
    private val languageRepository: LanguageRepository,
    private val keywordRepository: KeywordRepository,
    private val titlesDistributionRepository: TitleDistributionRepository,
    private val titlesResourceRepository: TitleResourceRepository,
    private val locationRepository: LocationRepository,
    private val descriptionRepository: DescriptionRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val publisherRepository: PublisherRepository,
    private val identifierRepository: IdentifierRepository,

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
    override fun createKeywords(jsonFields: MutableMap<ModelJsonMapping, String>, idRes:String): Collection<KeywordEntity> {


        val datasetModel = jsonFields.filterValues { it == "Dataset" }.keys.elementAt(0) as DatasetJsonMapping
        val keywords = mutableListOf<KeywordEntity>()
        val keywordWords = datasetModel.keywordsWord
        val keywordLangs = datasetModel.keywordsLang
        if(keywordWords != null){
            keywordWords.forEachIndexed { index, word ->
                val kw = KeywordEntity()
                val kwId = KeywordDatasetId()
                kwId.wordId = word as String
                kwId.datasetId = idRes//datasetModel.id
                kw.id = kwId
                kw.language = languageRepository.findById(keywordLangs.elementAt(index)!!).get()
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
                if (res is DistributionEntity){
                    val tit = TitlesDistributionEntity()
                    val titleId = TitleDistributionId()
                    titleId.titleId = text ?: ""
                    titleId.distributionId = res.id
                    tit.id = titleId
                    val language = titleLangs.elementAt(index)!! //languageRepository.findById(titleLangs.elementAt(index)!!).get()
                    tit.distributionTitle = res

                    titlesDistributionRepository.save(tit)
                    createRelationsBetweenEntitiesServices.insertIntoLanguageTitles(language,tit.id.titleId,res)
                }else if (res is ResourceEntity){
                    val tit = TitlesResourceEntity()
                    val titleId = TitleResourceId()
                    titleId.titleId = text ?: ""
                    titleId.resourceId = res.id
                    tit.id = titleId
                    val language = titleLangs.elementAt(index)!! //languageRepository.findById(titleLangs.elementAt(index)!!).get()
                    tit.resourceTitle = res

                    titlesResourceRepository.save(tit)

                    createRelationsBetweenEntitiesServices.insertIntoLanguageTitles(language,tit.id.titleId,res)
                }

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
        if (descTexts.isNotEmpty()) {
            descTexts.forEachIndexed { index, text ->
                getLogger("logger").debug(text)
                getLogger("logger").debug(descLangs.elementAt(index))
                val desc = ResourceDescriptionsEntity()
                val language = descLangs.elementAt(index)!!//languageRepository.findById(descLangs.elementAt(index)!!).get()
                val descId = ResourceDescriptionId()
                descId.descriptionId = text as String
                descId.resourceId = res.id
                desc.id = descId
                descriptionRepository.save(desc)

                createRelationsBetweenEntitiesServices.insertIntoLanguageDescriptions(language,desc.id.descriptionId,res.id)
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

    override fun createPeriodOfTime(jsonFields: MutableMap<ModelJsonMapping, String>, idTemporal:String?):PeriodOfTimeJsonMapping?{
        if (idTemporal == null) return null
        val periodOfTimeJson = jsonFields.filterValues { it == "PeriodOfTime" }
            .keys
            .map { it as PeriodOfTimeJsonMapping }
            .filter { it.id == idTemporal}
        if (periodOfTimeJson.isEmpty()) return null
        return periodOfTimeJson.elementAt(0)
    }

    override fun createIdentifier(identifiers:Collection<String?>, resDist:Any){
        getLogger("logger").debug("IIIIIIIIIIIIIDDDDDDDDDDDDDDDEEEEEEEEEEEEENNNNNNNNNNNNTTTTTTTTTTTTTTIIIIIIIIIIIFFFFFFFFFFFIIIIIIIIIEEEEEEEEERRRRRRRR ${resDist} -- ${identifiers}")

        if (!identifiers.isNullOrEmpty()){
            identifiers.forEach {
                val identifier = IdentifierEntity()
                if (it != null) identifier.id = it
                when(resDist){
                    is ResourceEntity -> identifier.resource = resDist
                    is DistributionEntity-> identifier.distribution = resDist
                    else->null
                }
                identifierRepository.save(identifier)
            }
        }
    }
}

