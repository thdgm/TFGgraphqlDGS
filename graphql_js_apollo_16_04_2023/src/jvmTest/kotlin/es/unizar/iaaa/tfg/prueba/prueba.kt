package es.unizar.iaaa.tfg.prueba


import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.constants.ConstantValues.DATE_PATTERN_ZONE_OFFSET
import es.unizar.iaaa.tfg.constants.ConstantValues.DIR3_MAP
import es.unizar.iaaa.tfg.constants.ConstantValues.REGEX_FREQUENCY
import es.unizar.iaaa.tfg.constants.MediaTypeMap.MEDIA_TYPE
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.catalogRecordRelations.HintsEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.distributionRelations.TitlesDistributionEntity
import es.unizar.iaaa.tfg.domain.ids.HintsId
import es.unizar.iaaa.tfg.domain.ids.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.ids.ResourceDescriptionId
import es.unizar.iaaa.tfg.domain.ids.TitleDistributionId
import es.unizar.iaaa.tfg.domain.ids.TitleResourceId
import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ThemeEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.TitlesResourceEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.HintsRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.io.ResourceLoader
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.MediaType
import java.io.InputStream
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*
import org.junit.jupiter.api.Assertions.assertEquals

@SpringBootTest
class Prueba {

    @Autowired
    lateinit var resourceLoader: ResourceLoader

    @Autowired
    lateinit var datasetRepository: DatasetRepository

    @Autowired
    lateinit var publisherRepository: PublisherRepository

    @Autowired
    lateinit var identifierRepository: IdentifierRepository

    @Autowired
    lateinit var locationRepository: LocationRepository

    @Autowired
    lateinit var themeRepository: ThemeRepository

    @Autowired
    lateinit var descriptionRepository: DescriptionRepository

    @Autowired
    lateinit var languageRepository: LanguageRepository

    @Autowired
    lateinit var keywordRepository: KeywordRepository

    @Autowired
    lateinit var  titlesResourceRepository: TitleResourceRepository

    @Autowired
    lateinit var distributionRepository: DistributionRepository

    @Autowired
    lateinit var titlesDistributionRepository: TitleDistributionRepository

    @Autowired
    lateinit var dataServiceRepository: DataServiceRepository

    @Autowired
    lateinit var catalogRepository: CatalogRepository

    @Autowired
    lateinit var catalogRecordsRepository: CatalogRecordsRepository

    @Autowired
    lateinit var resourcesRepository: ResourceRepository

    @Autowired
    lateinit var hintsRepository:HintsRepository





    data class DatasetModell(
        val url: String?,
        val identifier: String?,
        val title: Collection<String>,
        val description: Collection<String>, //lang-text
        val themes: Collection<String>,
        val keywords: Map<String,String>?, // {es=Alemania//España, en=Spain//Germany}
        val issued: LocalDateTime?,
        val modified: LocalDateTime?,
        val frequency: String?, // AccrualPeriodicity p.e days, 2
        val languages: Collection<String>,
        val publisher: String?,
        val license: String?,
        val spatial: String?,
        val period: Pair<LocalDateTime,LocalDateTime>?, //Start-end
        val validity: LocalDateTime?, // No está en el modelo
        val relatedResources: String?, //No está en el modelo
        val regulations: String?, // No está en el modelo Es la Normativa
        val distributions: Collection<Map<String,String>?>?,

    )

    @Test
    fun `temporal amount`() {
        val s = "[{TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (XLS), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xls/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=XLS}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separados por tabuladores), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separado por ;), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_sc/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separado por coma), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_c/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (XLSX), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xlsx/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=XLSX}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (Pc-Axis), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/px/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=PC-Axis}] "
        val ss = if (!s.isNullOrEmpty() && s.trim() != "null") {
            s.trim().substring(2,(s.trim().length)-2).replace("},\\s*\\{".toRegex(),"[separador]").split("[separador]").map{

                if (!it.isNullOrBlank()){
                    println("ELEM::: ${it.split(",\\s+".toRegex())}")
                    it.split(",\\s+".toRegex()).associate {
                        val (left, right) = it.split("=")
                        left.trim() to right.trim()
                    }
                }else null

            }.filterNotNull()
        } else null

        println("ESTOOO:: $ss")
        //val d = ZonedDateTime.parse("2023-03-17T20:46:12+02:00")

        //val p = LocalDateTime.parse("2022-06-06T15:20:37+0200",DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ"))
        //val p = LocalDateTime.parse("1960-01-01T09:00",DateTimeFormatter.ISO_LOCAL_DATE_TIME)
        /*val v = "pc-axis"
        val p = MEDIA_TYPE.get(".$v".toLowerCase())
        if (p != null){
            val mt = MediaType.parseMediaType(p)
            println("MIME TYPE: $p -- $mt")
        }*/
        //println("LD: $p")

    }

    fun readStrictCsv(inputStream: InputStream): List<DatasetCSVModel> = csvReader().open(inputStream) {
        readAllWithHeaderAsSequence().map {
            DatasetCSVModel(
                it["URL"],
                if (!it["IDENTIFICADOR"].isNullOrBlank()) it["IDENTIFICADOR"] else null,
                if (!it["TÍTULO"].isNullOrBlank()){
                    it["TÍTULO"]!!.replace("]","-").replaceFirst("[","").split("[")
                } else emptyList(),
                if (!it["DESCRIPCIÓN"].isNullOrBlank()){
                    it["DESCRIPCIÓN"]!!.replace("]","-").replaceFirst("[","").split("[")
                } else emptyList(),
                if (!it["TEMÁTICAS"].isNullOrBlank()){
                    it["TEMÁTICAS"]!!.split("//")
                } else emptyList(),
                if (!it["ETIQUETAS"].isNullOrBlank()) {
                    it["ETIQUETAS"]?.replaceFirst("[","")?.split("[")?.associate {
                        val (left, right) = it.split("]")
                        left to right
                    }
                } else null,
                if (!it["FECHA DE CREACIÓN"].isNullOrBlank()){
                    LocalDateTime.parse(it["FECHA DE CREACIÓN"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if (!it["FECHA DE ÚLTIMA MODIFICACIÓN"].isNullOrBlank()){
                    LocalDateTime.parse(it["FECHA DE ÚLTIMA MODIFICACIÓN"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if(!it["FRECUENCIA DE ACTUALIZACIÓN"].isNullOrBlank()){
                    it["FRECUENCIA DE ACTUALIZACIÓN"]?.replace("\\[.*#".toRegex(),"")?.replace("[VALUE]",",")
                }else null,
                if (!it["IDIOMAS"].isNullOrBlank()) it["IDIOMAS"]!!.split("//") else emptyList(),
                if (!it["ÓRGANO PUBLICADOR"].isNullOrBlank()) it["ÓRGANO PUBLICADOR"] else null,
                if (!it["CONDICIONES DE USO"].isNullOrBlank()) it["CONDICIONES DE USO"] else null,
                if (!it["COBERTURA GEOGRÁFICA"].isNullOrBlank()) it["COBERTURA GEOGRÁFICA"] else null,
                if (!it["COBERTURA TEMPORAL"].isNullOrBlank()){
                    REGEX_FREQUENCY.toRegex().findAll(it["COBERTURA TEMPORAL"]!!).map{
                        LocalDateTime.parse( it.value, DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                    }.toList().zipWithNext().first()
                }else null,
                if(!it["VIGENCIA DEL RECURSO"].isNullOrBlank()){
                    LocalDateTime.parse(it["VIGENCIA DEL RECURSO"], DateTimeFormatter.ofPattern(DATE_PATTERN_ZONE_OFFSET))
                }else null,
                if (!it["RECURSOS RELACIONADOS"].isNullOrBlank()) it["RECURSOS RELACIONADOS"] else null,
                if (!it["NORMATIVA"].isNullOrBlank()) it["NORMATIVA"] else null,
                if (!it["DISTRIBUCIONES"].isNullOrBlank()){
                    it["DISTRIBUCIONES"]!!.replaceFirst("[","").split("//[")?.map {
                        var titleNumber = 0
                        it?.split("[")?.associate {
                            println("DISTRIBUTIONNNNN2 $it")
                            var (left, right) = it.split("]")
                            if (left.matches("TITLE_.*".toRegex())) {
                                right = left.split("_").elementAt(1) + "_-_" + right
                                left = "TITLE_$titleNumber"
                                titleNumber += 1
                            }
                            left to right
                        }
                    }
                }else null
            )
        }.toList()
    }

    fun createDataset(d: DatasetModell, distributions:Collection<DistributionEntity>, dServ: DataServiceEntity, idCatalog: String):String {

        val dataset = DatasetEntity()
        dataset.id = if (d.url != null) UUID.nameUUIDFromBytes(d.url.toByteArray()).toString() else UUID.randomUUID().toString()
        dataset.type = ConstantValues.DATASET_TYPE
        if (d.issued != null) dataset.issued = d.issued
        if (d.modified != null) dataset.modified = d.modified
        if (d.license != null) dataset.license = d.license
        if (d.frequency != null) dataset.accrualPeriodicity = d.frequency
        //TODO()Publisher aquí no tiene notation, quizá podría generar una convirtiendo el label. Como id meto el notation.
        //TODO(Otra opción sería meter en un map todos los publisher con sus notations y guardarlos)

        if (d.publisher != null) {
            val notation = DIR3_MAP[d.publisher]
            if (notation!= null) {
                val newPublisher = PublisherEntity()
                newPublisher.id = notation
                newPublisher.label = d.publisher
                newPublisher.notation = notation
                // TODO(Guardo si no existe el publisher)
                if (!publisherRepository.existsById(newPublisher.id)) publisherRepository.save(newPublisher)
                dataset.publisher = newPublisher
            }
        }

        if (d.period != null) {
            dataset.temporalCoverageStart = d.period.first
            dataset.temporalCoverageEnd = d.period.second
        }

        if (!datasetRepository.existsById(dataset.id)) datasetRepository.save(dataset)
        //TODO(METER LA URL TAMBIÉN DENTRO DE IDENTIFIERS)
        if (d.identifier != null) {
            val newIdentifier = IdentifierEntity()
            newIdentifier.id = d.identifier
            newIdentifier.resource = dataset
            // TODO(Guardo si no existe el identifier)
            if (!identifierRepository.existsById(newIdentifier.id)) identifierRepository.save(newIdentifier)

        }
        if (d.url != null) {
            val newIdentifier = IdentifierEntity()
            newIdentifier.id = d.url
            newIdentifier.resource = dataset
            // TODO(Guardo si no existe el identifier)
            if (!identifierRepository.existsById(newIdentifier.id)) identifierRepository.save(newIdentifier)

        }
        if (d.spatial != null) {
            val newLocation = LocationEntity()
            newLocation.nombre = d.spatial
            // TODO(Guardo si no existe el location)
            if (!locationRepository.existsById(newLocation.nombre)) locationRepository.save(newLocation)
            locationRepository.insertInDatasetLocation(newLocation.nombre, dataset.id)
            // TODO(Guardo la location para el dataset: locationRepository.insertInDatasetLocation(it.nombre, dat.id))
        }

        if (!d.themes.isNullOrEmpty()) d.themes.forEach {
            val newTheme = ThemeEntity()
            newTheme.id = it
            // TODO(Guardo si no existe el theme)
            // TODO(Guardo la theme para el dataset: themeRepository.insertInThemesResources(it, resourceId))
            if (!themeRepository.existsById(newTheme.id)) themeRepository.save(newTheme)
            themeRepository.insertInThemesResources(it, dataset.id)
        }

        if (!d.description.isNullOrEmpty()) {
            d.description.forEach {
                val langText = it.split("-")
                val newDescription = ResourceDescriptionsEntity()
                val descId = ResourceDescriptionId()
                descId.descriptionId = langText.elementAt(1)
                descId.resourceId = dataset.id
                newDescription.id = descId
                //TODO(Save description si no existe:  languageRepository.save(newLang))
                val newLanguage = LanguageEntity()
                newLanguage.id = langText.elementAt(0)
                descriptionRepository.save(newDescription)
                if(!languageRepository.existsById(newLanguage.id)) languageRepository.save(newLanguage)
                //TODO(INSER LANGUAGE:  descriptionRepository.insertInLanguageDescriptions(languageId,descriptionId,resourceId))
                descriptionRepository.insertInLanguageDescriptions(newLanguage.id,newDescription.id.descriptionId,dataset.id)
            }
        }

        if (!d.keywords.isNullOrEmpty()){
            //TODO({es=Alemania//España, en=Spain//Germany})
            d.keywords.keys.map {
                val language = it
                d.keywords[it]?.split("//")?.map{
                    val newKeyword = KeywordEntity()
                    val kwId = KeywordDatasetId()
                    kwId.wordId = it
                    kwId.datasetId = dataset.id
                    newKeyword.id = kwId
                    newKeyword.language = languageRepository.findById(language).get()
                    keywordRepository.save(newKeyword)
                    //TODO(newKeyword.language = languageRepository.findById(language).get())
                   //TODO(SAVE: keywordRepository.save(kw))
                }

            }
        }
        if (!d.languages.isNullOrEmpty()){
            d.languages.map {
                val newLanguage = LanguageEntity()
                newLanguage.id = it
                if (!languageRepository.existsById(newLanguage.id)) languageRepository.save(newLanguage)
                languageRepository.insertInLanguagesResources(it, dataset.id)
            }
        }

        if (!d.title.isNullOrEmpty()) {
            d.title.map {
                val newTitle = TitlesResourceEntity()
                val titleId = TitleResourceId()
                val langTitle = it.split("-")
                titleId.titleId = langTitle.elementAt(1)
                titleId.resourceId = dataset.id
                newTitle.id = titleId
                newTitle.resourceTitle = dataset
                titlesResourceRepository.save(newTitle)
                val language = langTitle.elementAt(0)
                if (!languageRepository.existsById(language)){
                    val newLanguage = LanguageEntity()
                    newLanguage.id = language
                    languageRepository.save(newLanguage)
                }
                titlesResourceRepository.insertInLanguageTitles(language,newTitle.id.titleId,dataset.id)
            }
        }
        distributions.map {
            distributionRepository.insertInDistributions(dataset.id, it.id)
        }
        dataServiceRepository.insertInServesDataset(dServ.id, dataset.id)
        catalogRepository.insertInRelationships(idCatalog, dataset.id)
        println("DATASET: ${dataset.id}")
        return dataset.id

    }

    fun createDistributions(d: DatasetModell, dServ: DataServiceEntity):Collection<DistributionEntity>{
        val distributions = mutableListOf<DistributionEntity>()
        if (!d.distributions.isNullOrEmpty()){
            d.distributions.forEachIndexed { index,distributionMap ->
                val newDistribution = DistributionEntity()
                newDistribution.id = if (d.url != null) UUID.nameUUIDFromBytes((d.url+"/distribution$index").toByteArray()).toString() else UUID.randomUUID().toString()
                val accessService = distributionMap?.get("ACCESS_SERVICE")
                if (accessService != null) newDistribution.accessUrl = accessService
                val byteSize = distributionMap?.get("BYTE_SIZE")
                if (byteSize != null) newDistribution.byteSize = byteSize.toUInt()
                val format = distributionMap?.get("MEDIA_TYPE")
                if (format != null) newDistribution.format = MEDIA_TYPE[".$format".toLowerCase()]
                distributionRepository.save(newDistribution)

                distributionRepository.insertInAccessInService(newDistribution.id, dServ.id)

                distributionMap?.filterKeys { it.matches("^TITLE.*".toRegex())}
                    ?.values?.map{
                        val langTitle = it.split("_-_")
                        //TODO(Creo Title y language)
                        val newTitle = TitlesDistributionEntity()
                        val titleId = TitleDistributionId()
                        titleId.titleId = langTitle.elementAt(1)
                        titleId.distributionId = newDistribution.id
                        newTitle.id = titleId
                        newTitle.distributionTitle = newDistribution
                        titlesDistributionRepository.save(newTitle)

                        if (!languageRepository.existsById(langTitle.elementAt(0))){
                            val newLang = LanguageEntity()
                            newLang.id = langTitle.elementAt(0)
                            languageRepository.save(newLang)
                        }

                    }
                distributions.add(newDistribution)
            }
        }
        return distributions
    }

    fun createDataservice(idCatalog: String): DataServiceEntity {
        val newDataService = DataServiceEntity()
        newDataService.id = UUID.randomUUID().toString()
        if(!dataServiceRepository.existsById(newDataService.id)) dataServiceRepository.save(newDataService)

        catalogRepository.insertInRelationships(idCatalog, newDataService.id)
        dataServiceRepository.insertInServesDataset(newDataService.id, idCatalog)
        return newDataService
    }

    fun createCatalogRecord(input: CatalogRecordInput, idCatalog: String,d: DatasetModell): CatalogRecordEntity? {

        if (d.url != null) {
            val primaryTopicId = UUID.nameUUIDFromBytes(d.url.toByteArray()).toString()

            val newCatalogRecord = CatalogRecordEntity()
            newCatalogRecord.id = input.catalogRecorId ?: "$primaryTopicId${ConstantValues.CR_ID}"
            if(!resourcesRepository.existsById(newCatalogRecord.id)) {
                newCatalogRecord.title = "TitleCR"
                if (input.content != null) newCatalogRecord.content = input.content!!
                if (input.contentUrl != null) newCatalogRecord.contentUrl = input.contentUrl!!
                if (input.contentType != null) newCatalogRecord.contentType = input.contentType!!
                newCatalogRecord.resource = resourcesRepository.findById(primaryTopicId).get()
                catalogRecordsRepository.save(newCatalogRecord)

                if (!input.hints.isNullOrEmpty()) {
                    input.hints?.map{
                        if(it != null) {
                            val hint = HintsEntity()
                            val id = HintsId()
                            id.hintId = it
                            id.catalogRecordId = newCatalogRecord.id
                            hint.id = id
                            hintsRepository.save(hint)
                        }
                    }
                }
                catalogRecordsRepository.insertInCatalogRecord(newCatalogRecord.id, idCatalog)
            }
            return catalogRecordsRepository.findByIdOrNull(newCatalogRecord.id)
        }
        return null
    }

    @Test
    fun `csv reader`() {
        //val list = readStrictCsv()

//"classpath:CSVReader.csv"
        val r =  resourceLoader.getResource("classpath:datosGob.csv")
        val list = readStrictCsv(r.inputStream)
        val idCatalog = "root"
        val crInput =  CatalogRecordInput(
            "root",
            null,
            "text/csv",
            null,
            "classpath:datosGob.csv",
            listOf("datos.gob.es")
        )

        //val dServ = createDataservice()
        //val distributions = createDistributions(list.elementAt(27),dServ)
        //val idD = createDataset(list.elementAt(27),distributions,dServ)
        val d1 = list.elementAt(0)
        val i = list.elementAt(0).fromString() == list.elementAt(0)
        println(list.elementAt(0).title)
        val kk = if (!d1.keywords.isNullOrEmpty() && d1.keywords.toString().trim() != "null") {
            d1.keywords.toString().trim().split(",").associate {
                val (left, right) = it.split("-")
                left to right
            }
        }else {
            null
        }


        println("ESTO11: ${list.elementAt(10).fromString()}")
        println("ESTO12: ${list.elementAt(10)}")

        println(i)
       /*list.map{
            val dServ = createDataservice(idCatalog)
            val distributions = createDistributions(it,dServ)
            val idD = createDataset(it,distributions,dServ,idCatalog)
            createCatalogRecord(crInput, idCatalog,it)
            assertEquals(distributions.size, it.distributions?.size ?: 0)
            assertEquals(datasetRepository.existsById(idD),true)
        }*/



    }


}

/*
     TITLE:

      val tit = TitlesResourceEntity()
        val titleId = TitleResourceId()
        titleId.titleId = text.orEmpty()
        titleId.resourceId = res.id
        tit.id = titleId
        val language = titleLangs.elementAt(index)
        tit.resourceTitle = res
        titlesResourceRepository.save(tit)
        if (language != null)
            createRelationsBetweenEntitiesLanguageServices
                .insertIntoLanguageTitles(language,tit.id.titleId,res)
      */