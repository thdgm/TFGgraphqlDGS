package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.constants.ConstantValues.DATASET
import es.unizar.iaaa.tfg.constants.ConstantValues.FORMAT
import es.unizar.iaaa.tfg.constants.ConstantValues.LOCATION_DELIMETER
import es.unizar.iaaa.tfg.constants.ConstantValues.PERIOD_OF_TIME
import es.unizar.iaaa.tfg.constants.ConstantValues.PUBLISHER
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.catalogRecordRelations.HintsEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.ids.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.domain.ids.ResourceDescriptionId
import es.unizar.iaaa.tfg.domain.resourceRelations.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.domain.ids.TitleDistributionId
import es.unizar.iaaa.tfg.domain.ids.TitleResourceId
import es.unizar.iaaa.tfg.domain.distributionRelations.TitlesDistributionEntity
import es.unizar.iaaa.tfg.domain.ids.HintsId
import es.unizar.iaaa.tfg.domain.resourceRelations.RegulationsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RelatedResourcesEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.TitlesResourceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.HintsRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.RegulationsRepository
import es.unizar.iaaa.tfg.repository.RelatedResourcesRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import org.springframework.data.domain.Example
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.print.attribute.standard.PrinterURI


/*
 * These services are responsible for the creation
 * of the different auxiliary entities needed.
 * They are used by mutation queries.
 */
interface CreateAuxiliarEntitiesServices {
    fun createLanguagesFromCsv(languages: Collection<String>,datasetId: String):MutableCollection<LanguageEntity>
    fun createLanguages(jsonFields: MutableMap<ModelJsonMapping, String>): MutableCollection<LanguageEntity>
    fun createKeywordsFromCsv(keywords: Map<String, String>, idRes:String)
    fun createKeywords(jsonFields: MutableMap<ModelJsonMapping, String>, idRes:String): Collection<KeywordEntity>

    fun createTitleFromCsv(title: Collection<String>, res: Any)
    fun createTitle(titleTexts: Collection<String?>, titleLangs: Collection<String?>, res: Any)

    fun createLocationFromCsv(spatial: String): MutableCollection<LocationEntity>
    fun createLocation(spatial: Collection<String?>): MutableCollection<LocationEntity>
    fun createResourceDescriptionsFromCsv(descriptions: Collection<String>, datasetId: String)
    fun createResourceDescriptions(descTexts: Collection<String?>, descLangs: Collection<String?>, res: ResourceEntity)
    fun createPublisher(jsonFields: MutableMap<ModelJsonMapping, String>,idPublisher:String?): PublisherEntity?
    fun createPublisherFromCsv(idPublisher:String): PublisherEntity?

    fun createFormat(jsonFields: MutableMap<ModelJsonMapping, String>, idFormat:String?):String?
    fun createPeriodOfTime(
        jsonFields: MutableMap<ModelJsonMapping, String>, idTemporal:String?):PeriodOfTimeJsonMapping?
    fun createIdentifier(identifiers:Collection<String?>, resDist:Any)
    fun createHints(hints:Collection<String?>, cr:CatalogRecordEntity)

    fun createRegulations(regulations:Collection<String>, dataset:DatasetEntity)
    fun createRelatedResources(resRelated:Collection<String>, dataset:DatasetEntity)
}

@Service
class CreateAuxiliarEntitiesServicesImpl(
    private val languageRepository: LanguageRepository,
    private val keywordRepository: KeywordRepository,
    private val titlesDistributionRepository: TitleDistributionRepository,
    private val titlesResourceRepository: TitleResourceRepository,
    private val locationRepository: LocationRepository,
    private val descriptionRepository: DescriptionRepository,
    private val publisherRepository: PublisherRepository,
    private val identifierRepository: IdentifierRepository,
    private val hintsRepository: HintsRepository,
    private val createRelationsBetweenEntitiesLanguageServices: CreateRelationsBetweenEntitiesLanguageServices,
    private val resourceRepository: ResourceRepository,
    private val regulationsRepository: RegulationsRepository,
    private val relatedResourcesRepository: RelatedResourcesRepository,
    ) : CreateAuxiliarEntitiesServices {

    // Create Language entities according to Csv
    override fun createLanguagesFromCsv(languages: Collection<String>,datasetId: String): MutableCollection<LanguageEntity>{
        val languagesList = mutableListOf<LanguageEntity>()
        languages.map {
            val newLanguage = LanguageEntity()
            newLanguage.id = it
            if (!languageRepository.existsById(newLanguage.id)) languageRepository.save(newLanguage)
            //languageRepository.insertInLanguagesResources(it, datasetId)
            languagesList.add(newLanguage)
        }
        return languagesList
    }

    // Create Language entities according to Json
    override fun createLanguages(jsonFields: MutableMap<ModelJsonMapping, String>): MutableCollection<LanguageEntity> {

        val datasetModel = jsonFields.filterValues { it == DATASET }.keys.elementAt(0) as DatasetJsonMapping
        val languages = mutableListOf<LanguageEntity>()

        if(!datasetModel.languages.isEmpty()){
           datasetModel.languages.forEach { language ->
                val l = LanguageEntity()
                l.id = language as String
                if (!languageRepository.existsById(l.id)) languageRepository.save(l)
                languages.add(l)
            }
        }
        return languages
    }

    // Create keyword entities according to CSV {es=Alemania//España, en=Spain//Germany}
    override fun createKeywordsFromCsv(
        keywords: Map<String, String>,
        idRes:String
    ) {
        var languagesList = mutableListOf<LanguageEntity>()
        keywords.keys.map {
            val language = it
            keywords[it]?.split("//")?.map{
                val newKeyword = KeywordEntity()
                val kwId = KeywordDatasetId()
                kwId.wordId = it
                kwId.datasetId = idRes
                newKeyword.id = kwId
                if(!languageRepository.existsById(language)){
                    val newLanguage = LanguageEntity()
                    newLanguage.id = language
                    languageRepository.save(newLanguage)
                }
                newKeyword.language = languageRepository.findById(language).get()
                languagesList.add(newKeyword.language)
                keywordRepository.save(newKeyword)
            }
        }
        createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languagesList, resourceRepository.findById(idRes).get())

    }

    // Create Keyword entities according to Json
    override fun createKeywords(
        jsonFields: MutableMap<ModelJsonMapping, String>,
        idRes:String
    ): Collection<KeywordEntity> {


        val datasetModel = jsonFields.filterValues { it == DATASET }.keys.elementAt(0) as DatasetJsonMapping
        val keywords = mutableListOf<KeywordEntity>()

        if(!datasetModel.keywordsWord.isEmpty()){
            datasetModel.keywordsWord.forEachIndexed { index, word ->
                val kw = KeywordEntity()
                val language = datasetModel.keywordsLang.elementAt(index)
                val kwId = KeywordDatasetId()
                kwId.wordId = word as String
                kwId.datasetId = idRes
                kw.id = kwId
                if (language != null)
                    kw.language = languageRepository.findById(language).get()
                keywordRepository.save(kw)
                keywords.add(kw)
            }
        }

        return keywords
    }

    // Create Title entities according to Csv Model fields
    override fun createTitleFromCsv(title: Collection<String>, res: Any) {
        var languagesList = mutableListOf<LanguageEntity>()
        title.map {
            when(res) {
                is ResourceEntity -> {
                    val tit = TitlesResourceEntity()
                    val titleId = TitleResourceId()
                    val langTitle = it.split("-")
                    if(!langTitle.elementAt(1).isNullOrBlank()) {
                        titleId.titleId = langTitle.elementAt(1)
                        titleId.resourceId = res.id
                        tit.id = titleId
                        val language = langTitle.elementAt(0)
                        tit.resourceTitle = res
                        titlesResourceRepository.save(tit)
                        if (language != null) {
                            val newLang = LanguageEntity()
                            if (!languageRepository.existsById(language)){
                                newLang.id = language
                                languageRepository.save(newLang)

                            }
                            languagesList.add(languageRepository.findById(language).get())
                            createRelationsBetweenEntitiesLanguageServices
                                .insertIntoLanguageTitles(language, tit.id.titleId, res)
                        }
                    }

                }
                is DistributionEntity -> {
                    val tit = TitlesDistributionEntity()
                    val titleId = TitleDistributionId()
                    val langTitle = it.split("-")
                    if(!langTitle.elementAt(1).isNullOrBlank()) {
                        titleId.titleId = langTitle.elementAt(1)
                        titleId.distributionId = res.id
                        tit.id = titleId
                        val language = langTitle.elementAt(0)
                        tit.distributionTitle = res
                        titlesDistributionRepository.save(tit)

                        if (language != null) {
                            val newLang = LanguageEntity()
                            if (!languageRepository.existsById(language)){
                                newLang.id = language
                                languageRepository.save(newLang)

                            }

                            createRelationsBetweenEntitiesLanguageServices
                                .insertIntoLanguageTitles(language, tit.id.titleId, res)
                        }
                    }
                }
            }
        }
        when(res) {
            is ResourceEntity -> createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languagesList, res)
        }

    }

    // Create Title entities according to JsonObject
    override fun createTitle(titleTexts: Collection<String?>, titleLangs: Collection<String?>, res: Any) {

        if (titleTexts.isNotEmpty()) {
            titleTexts.forEachIndexed { index, text ->
                when(res){
                    is DistributionEntity -> {
                        val tit = TitlesDistributionEntity()
                        val titleId = TitleDistributionId()
                        if(!text.isNullOrBlank()) {
                            titleId.titleId = text.orEmpty()
                            titleId.distributionId = res.id
                            tit.id = titleId
                            val language = titleLangs.elementAt(index)
                            tit.distributionTitle = res
                            titlesDistributionRepository.save(tit)

                            if (language != null)
                                createRelationsBetweenEntitiesLanguageServices
                                    .insertIntoLanguageTitles(language, tit.id.titleId, res)
                        }
                    }
                    is ResourceEntity -> {

                        val tit = TitlesResourceEntity()
                        val titleId = TitleResourceId()
                        if(!text.isNullOrBlank()){
                            titleId.titleId = text
                            titleId.resourceId = res.id
                            tit.id = titleId
                            val language = titleLangs.elementAt(index)
                            tit.resourceTitle = res
                            titlesResourceRepository.save(tit)
                            if (language != null)
                                createRelationsBetweenEntitiesLanguageServices
                                    .insertIntoLanguageTitles(language,tit.id.titleId,res)
                        }

                    }
                }
              }
        }
    }
    // Create Location entities according to CSV file fields
    override fun createLocationFromCsv(spatial: String): MutableCollection<LocationEntity> {
        val newLocation = LocationEntity()
        newLocation.nombre = spatial
        if (!locationRepository.existsById(newLocation.nombre)) locationRepository.save(newLocation)
        return mutableListOf(newLocation)
    }

    // Create Location entities according to JsonObject
    override fun createLocation(spatial: Collection<String?>): MutableCollection<LocationEntity> {
        val listLocations = mutableListOf<LocationEntity>()

        spatial.forEach {text ->
            val locate = text?.split(LOCATION_DELIMETER)
            val loc = LocationEntity()
            loc.nombre = text as String
            if (!locate.isNullOrEmpty()) loc.tipo = locate[locate.size - 2]
            if (!locationRepository.existsById(loc.nombre)) locationRepository.save(loc)
            listLocations.add(loc)
        }
        return listLocations
    }

    // Create ResourceDescriptions entities according to CSV file's fields
    override fun createResourceDescriptionsFromCsv(descriptions: Collection<String>, datasetId: String) {
        val languagesList = mutableListOf<LanguageEntity>()
        descriptions.forEach {
            val langText = it.split("-")
            val newDescription = ResourceDescriptionsEntity()
            val descId = ResourceDescriptionId()
            descId.descriptionId = langText.elementAt(1)
            descId.resourceId = datasetId
            newDescription.id = descId
            val newLanguage = LanguageEntity()
            newLanguage.id = langText.elementAt(0)
            descriptionRepository.save(newDescription)
            if(!languageRepository.existsById(newLanguage.id)) languageRepository.save(newLanguage)
            languagesList.add(languageRepository.findById(newLanguage.id).get())
            createRelationsBetweenEntitiesLanguageServices.insertIntoLanguageDescriptions(
                newLanguage.id,
                newDescription.id.descriptionId,
                datasetId
            )
        }
        createRelationsBetweenEntitiesLanguageServices.insertIntoLanguagesResources(languagesList, resourceRepository.findById(datasetId).get())
    }

    // Create ResourceDescriptions entities according to JsonObject
    override fun createResourceDescriptions(
        descTexts: Collection<String?>,
        descLangs: Collection<String?>,
        res: ResourceEntity
    ) {
        if (descTexts.isNotEmpty()) {
            descTexts.forEachIndexed { index, text ->
                val desc = ResourceDescriptionsEntity()
                val language = descLangs.elementAt(index)

                val descId = ResourceDescriptionId()
                descId.descriptionId = text as String
                descId.resourceId = res.id
                desc.id = descId
                descriptionRepository.save(desc)
                if (language != null)
                    createRelationsBetweenEntitiesLanguageServices.insertIntoLanguageDescriptions(
                        language,
                        desc.id.descriptionId,
                        res.id
                    )
            }
        }
    }

    // Create Publisher entities according to JsonObject
    override fun createPublisher(
        jsonFields: MutableMap<ModelJsonMapping, String>,
        idPublisher:String?
    ): PublisherEntity?

    {
        var newPublisher: PublisherEntity? = null
        if (idPublisher == null) return null
        val publishersJson = jsonFields.filterValues { it == PUBLISHER}
            .keys
            .map { it as PublisherJsonMapping }
            .filter { it.id == idPublisher}
        if (publishersJson.isNotEmpty()){
            val publisherJson = publishersJson.elementAt(0)
            newPublisher = PublisherEntity()
            newPublisher.id = publisherJson.id
            newPublisher.label = publisherJson.label
            newPublisher.notation = publisherJson.notation
            if(!publisherRepository.existsById(newPublisher.id)) publisherRepository.save(newPublisher)
        }

        return newPublisher
    }

    //Create publisher using CSV's fields.
    override fun createPublisherFromCsv(idPublisher:String): PublisherEntity? {
        val notation = ConstantValues.DIR3_MAP[idPublisher]
        if (notation!= null) {
            val newPublisher = PublisherEntity()
            newPublisher.id = notation
            newPublisher.label = idPublisher
            newPublisher.notation = notation
            if (!publisherRepository.existsById(newPublisher.id)) publisherRepository.save(newPublisher)
            return newPublisher
        }
        return null
    }


    // Create Format entities according to JsonObject
    override fun createFormat(jsonFields: MutableMap<ModelJsonMapping, String>, idFormat:String?):String?{
        if (idFormat == null) return null
        val imtJson = jsonFields.filterValues { it == FORMAT }
            .keys
            .map { it as ImtJsonMapping }
            .filter { it.id == idFormat}
        return if (imtJson.isEmpty()) null else imtJson.elementAt(0).value

    }

    // Create PeriodOfTime entities according to JsonObject
    override fun createPeriodOfTime(
        jsonFields: MutableMap<ModelJsonMapping, String>,
        idTemporal:String?
    ): PeriodOfTimeJsonMapping?{
        if (idTemporal.isNullOrBlank()) return null
        val periodOfTimeJson = jsonFields.filterValues { it == PERIOD_OF_TIME }
            .keys
            .map { it as PeriodOfTimeJsonMapping }
            .filter { it.id == idTemporal}
        return  if (periodOfTimeJson.isEmpty()) null else periodOfTimeJson.elementAt(0)
    }

    // Create Identifier entities according to JsonObject
    override fun createIdentifier(identifiers:Collection<String?>, resDist:Any){


        identifiers.forEach {
            val identifier = IdentifierEntity()
            if (!it.isNullOrBlank()) {
                identifier.id = it
                when (resDist) {
                    is ResourceEntity -> identifier.resource = resDist
                    is DistributionEntity -> identifier.distribution = resDist
                    else -> null
                }
                if (!identifierRepository.existsById(identifier.id))  identifierRepository.save(identifier)
            }
        }

    }

    // Create Hints entities according to JsonObject
    override fun createHints(hints:Collection<String?>, cr:CatalogRecordEntity){
        hints.map{
            if(it != null){
                val hint = HintsEntity()
                val id = HintsId()
                id.hintId = it
                id.catalogRecordId = cr.id
                hint.id = id
                hintsRepository.save(hint)
            }
        }
    }
    override fun createRegulations(regulations:Collection<String>, dataset:DatasetEntity){
        regulations.map {
            val newRegul = RegulationsEntity()
            newRegul.id = it
            regulationsRepository.save(newRegul)
            regulationsRepository.insertInRegulationsDatasets(newRegul.id, dataset.id)
        }
    }
    override fun createRelatedResources(resRelated:Collection<String>, dataset:DatasetEntity){
        resRelated.map {
            val newResRel = RelatedResourcesEntity()
            newResRel.id = it
            relatedResourcesRepository.save(newResRel)
            relatedResourcesRepository.insertInRelatedResourcesDatasets(newResRel.id, dataset.id)
        }
    }
}

