package es.unizar.iaaa.tfg.prueba


import com.apollographql.apollo3.api.variable
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
import es.unizar.iaaa.tfg.domain.resourceRelations.RegulationsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RelatedResourcesEntity
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
import es.unizar.iaaa.tfg.repository.RegulationsRepository
import es.unizar.iaaa.tfg.repository.RelatedResourcesRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

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
import org.springframework.data.domain.PageRequest
import java.io.File

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

    @Autowired
    lateinit var regulationsRepository: RegulationsRepository

    @Autowired
    lateinit var relatedResourcesRepository: RelatedResourcesRepository

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    @Test
    fun `check Repos`() {
        val resRel = listOf("https://www.agenciatributaria.es/AEAT.internet/Inicio/La_Agencia_Tributaria/Memorias_y_estadisticas_tributarias/Estadisticas/Estadisticas_por_impuesto/Impuesto_sobre_Sociedades/Cuentas_Anuales_Consolidadas_del_Impuesto_sobre_Sociedades/Documentacion/Documentacion.shtml","https://www.agenciatributaria.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/sociedadesdc/2016/doc314e0b4d32a47b7ec37e408016d5556c73b7298d.html")
        val regulations = listOf("http://www.boe.es/buscar/act.php?id=BOE-A-2012-9482","http://www.boe.es/buscar/doc.php?id=BOE-A-2009-2320","http://www.boe.es/diario_boe/txt.php?id=DOUE-L-2008-82259")
        val newDataset = DatasetEntity()
        newDataset.id = "newDatasset"

        datasetRepository.save(newDataset)
        regulations.map{
            val newRegul = RegulationsEntity()
            newRegul.id = it
            regulationsRepository.save(newRegul)
            regulationsRepository.insertInRegulationsDatasets(newRegul.id, "newDatasset")
        }
        print("REGULATIONS: ")
        println(regulationsRepository.findRegulationsByDatasetsId("newDatasset"))
        println(regulationsRepository.findRegulationsByDatasetsId("newDatasset").size)

        resRel.map{
            val newResRel = RelatedResourcesEntity()
            newResRel.id = it
            relatedResourcesRepository.save(newResRel)
            relatedResourcesRepository.insertInRelatedResourcesDatasets(newResRel.id, "newDatasset")
        }
        print("RELATED RES: ")
        println(relatedResourcesRepository.findRelatedResourcesByDatasetsId("newDatasset"))
        println(relatedResourcesRepository.findRelatedResourcesByDatasetsId("newDatasset").size)

    }


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
        val relatedResources: String?, //No está en el modelo "res1[RES_SPLIT]res2"
        val regulations: String?, // No está en el modelo Es la Normativa
        val distributions: Collection<Map<String,String>?>?,

    )

    @Test
    fun `temporal amount`() {
        /*val s = "[{TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (XLS), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xls/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=XLS}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separados por tabuladores), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separado por ;), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_sc/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (CSV separado por coma), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/csv_c/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=CSV}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (XLSX), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/xlsx/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=XLSX}, {TITLE_0=es_-_Matriculados por sexo, grupo de edad y Ã¡mbito de estudio (Pc-Axis), ACCESS_URL=https://estadisticas.mecd.gob.es/EducaJaxiPx/files/_px/es/px/Universitaria/Alumnado/EEU_2022/GradoCiclo/Matriculados/l0/3_4_Mat_GradCiclo_Sex_Edad(1)_Amb_Univ.px, MEDIA_TYPE=PC-Axis}] "
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

        println("ESTOOO:: $ss")*/
        val d = LocalDateTime.parse("2023-07-10T00:00:00+02:00",DateTimeFormatter.ISO_DATE_TIME)


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
                if (!it["RECURSOS RELACIONADOS"].isNullOrBlank()){
                    it["RECURSOS RELACIONADOS"]!!.replace("([^:])//".toRegex(),"\$1[RES_SPLIT]").split("[RES_SPLIT]")
                }else emptyList(),
                if (!it["NORMATIVA"].isNullOrBlank()){
                    it["NORMATIVA"]!!.replace("([^:])//".toRegex(),"\$1[RES_SPLIT]").split("[RES_SPLIT]")
                } else emptyList(),
                if (!it["DISTRIBUCIONES"].isNullOrBlank()){
                    it["DISTRIBUCIONES"]!!.replaceFirst("[","").split("//[")?.map {
                        var titleNumber = 0
                        it?.split("[")?.associate {

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
            newCatalogRecord.id = input.catalogRecordId ?: "$primaryTopicId${ConstantValues.CR_ID}"
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
        val r =  resourceLoader.getResource("classpath:datosGob.csv")
        val list = readStrictCsv(r.inputStream)
        println("DATA: ${list.elementAt(28)}")
        println("FROM: ${list.elementAt(28).fromString()}")
        val fs = list.elementAt(28).fromString().toString()
        val d = list.elementAt(28).toString()
        val iguales = fs == d
        println(iguales)

        println(list.elementAt(28).period)
        println(list.elementAt(28).relatedResources)
        println(list.elementAt(29).regulations)

//"classpath:CSVReader.csv"
       /* val r =  resourceLoader.getResource("classpath:datosGob.csv")
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

        println(i)*/
       /*list.map{
            val dServ = createDataservice(idCatalog)
            val distributions = createDistributions(it,dServ)
            val idD = createDataset(it,distributions,dServ,idCatalog)
            createCatalogRecord(crInput, idCatalog,it)
            assertEquals(distributions.size, it.distributions?.size ?: 0)
            assertEquals(datasetRepository.existsById(idD),true)
        }*/



    }
    @Test
    fun `check Pagination`() {
        val res =  resourcesRepository.findAll().map{it.id}
        val resPage0 =  resourcesRepository.findAll(PageRequest.of(0,4))
        val resPage1 =  resourcesRepository.findAll(PageRequest.of(1,4))
        val resPage =  resourcesRepository.findAll(PageRequest.of(0,Integer.MAX_VALUE))
        println(res)
        println(res.size)
        println("///////////////////////")
        println(resPage0.content.map { it.id })
        println(resPage0.content.map { it.id }.size)
        println(resPage0.last().id)
        println("///////////////////////")
        println(resPage1.content.map { it.id })
        println(resPage1.content.map { it.id }.size)
        println("///////////////////////")
        println(resPage.content.map { it.id })
        println(resPage.content.map { it.id }.size)
        println(resPage.hasNext())
        println(resPage.last().id)

        println("///////////////////////")
        println("///////////////////////")
    }

    @Test
    fun `Check fields filters pagination`() {
        var page = 0
        var excludeCount = 0
        var pageSize = 3

         var v = publisherRepository.findAll(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
             .map { converter.toAdministrationLevel(it.notation) }.distinct().drop(excludeCount)
        println(v)
        v = publisherRepository.findAll()
            .map { converter.toAdministrationLevel(it.notation) }.distinct().drop(excludeCount)
        println(v)
    }

    @Test
    fun `Check load all csv`() {
        runBlocking {
            val inputStream = resourceLoader.getResource("classpath:datosgobes.csv").inputStream

            val reader = csvReader().readAllWithHeader(inputStream)
            val batches = reader.chunked(1000)
            var listaDatasets = mutableListOf<DatasetCSVModel>()
            println(batches.size)
            var total = 0

            println("TOTAL: $total")
            println(reader.size)
            var i = 0

            //reader.map {
            for (batch in batches) {

                // Procesa cada batch en una coroutine separada
                coroutineScope {
                    launch {
                    for (it in batch) {

                      // procesa la fila según tus necesidades

                            println("Va a cargar")
                            var d = DatasetCSVModel(
                                it["URL"],
                                fieldOrNull(it["IDENTIFICADOR"]),
                                titleDescription(it["TÍTULO"]),
                                titleDescription(it["DESCRIPCIÓN"]),
                                fieldSplit(it["TEMÁTICAS"]),
                                keywords(it["ETIQUETAS"]),
                                localDateTimes(it["FECHA DE CREACIÓN"]),
                                localDateTimes(it["FECHA DE ÚLTIMA MODIFICACIÓN"]),
                                frequency(it["FRECUENCIA DE ACTUALIZACIÓN"]),
                                fieldSplit(it["IDIOMAS"]),
                                fieldOrNull(it["ÓRGANO PUBLICADOR"]),
                                fieldOrNull(it["CONDICIONES DE USO"]),
                                fieldOrNull(it["COBERTURA GEOGRÁFICA"]),
                                periocity(it["COBERTURA TEMPORAL"]),
                                localDateTimes(it["VIGENCIA DEL RECURSO"]),
                                relatedResourcesAndRegulations(it["RECURSOS RELACIONADOS"]),
                                relatedResourcesAndRegulations(it["NORMATIVA"]),
                                distributions(it["DISTRIBUCIONES"]),
                            )
                            //GlobalScope.launch {
                            println("Carga en BBDD")
                            //}
                            println("ELEMENTO CARGADO $i")
                            i = i + 1
                        }

                    }
                }

            }

            Thread.sleep(1000000)

        }

    }

    @Test
    fun`Un test`(){

        keywords("[en]-25 0 TWYU//0 TWYU//100  TWYU//65 and over//Absolute value//Age//Agrarian structures registers and production methods//Agrcultural Census//Agriculture livestock forestry and hunting//All ages//Basic characteristics of the farm//Females//From 25 to 34 years (current quarter)//From 35 to 44 years//From 45 to 54 years//From 55 to 64 years//Males//Percentage//Percentage of time worked (TWYU section)//Persons//Sex//Statistics//TWYU//Total TWYU sections//Type of data//Under 25 years old//[25-50) TWYU//[50-75) TWYU//[75-100) TWYU[es](0-25)  UTAT//0 UTAT//100  UTAT//65 y más años//Agricultura ganadería selvicultura y caza//Características básicas de la explotación//Censo Agrario//De 25 a 34 años//De 35 a 44 años//De 45 a 54 años//De 55 a 64 años//Edad//Estadísticas//Estructuras agrarias registros y medios de producción//Hombres//Menos de 25 años//Mujeres//Personas//Porcentaje//Porcentaje de tiempo trabajado (tramo UTAT)//Sexo//Tipo de dato//Todas las edades//Total//Total tramos UTAT//UTAT//Valor absoluto//[25-50)  UTAT//[50-75)  UTAT//[75-100)  UTAT//Ámbito territorial")

    }
    suspend fun prueba (){
        val inputStream =  resourceLoader.getResource("classpath:datosgobes.csv").inputStream

        val reader = csvReader().readAllWithHeader(inputStream)
        val batches = reader.chunked(1000)
        var listaDatasets = mutableListOf<DatasetCSVModel>()
        println(batches.size)
        var total = 0
        /*for (batch in batches) {
            var i = 0
            // Procesa cada batch en una coroutine separada

                for (row in batch) {
                    // Procesa los valores de la fila según tus necesidades
                    var it = row
                    println("Va a cargar: $row")
                    var d = DatasetCSVModel(
                        it["URL"],
                        fieldOrNull(it["IDENTIFICADOR"]),
                        titleDescription(it["TÍTULO"]),
                        titleDescription(it["DESCRIPCIÓN"]),
                        fieldSplit(it["TEMÁTICAS"]),
                        keywords(it["ETIQUETAS"]),
                        localDateTimes(it["FECHA DE CREACIÓN"]),
                        localDateTimes(it["FECHA DE ÚLTIMA MODIFICACIÓN"]),
                        frequency(it["FRECUENCIA DE ACTUALIZACIÓN"]),
                        fieldSplit(it["IDIOMAS"]),
                        fieldOrNull(it["ÓRGANO PUBLICADOR"]),
                        fieldOrNull(it["CONDICIONES DE USO"]),
                        fieldOrNull(it["COBERTURA GEOGRÁFICA"]),
                        periocity(it["COBERTURA TEMPORAL"]),
                        localDateTimes(it["VIGENCIA DEL RECURSO"]),
                        relatedResourcesAndRegulations(it["RECURSOS RELACIONADOS"]),
                        relatedResourcesAndRegulations(it["NORMATIVA"]),
                        distributions(it["DISTRIBUCIONES"]),
                    )
                    GlobalScope.launch {
                        println("Carga en BBDD: $d")
                    }
                    println("ELEMENTO CARGADO $i: ${d}")
                    i = i +1
                    total = total +1
                }
            }*/



        println("TOTAL: $total")
        println(reader.size)
        var i = 0
        var w = mutableListOf<Job>()
        reader.map {
            w.add(GlobalScope.launch {   // procesa la fila según tus necesidades

                println("Va a cargar: $it")
                var d = DatasetCSVModel(
                    it["URL"],
                    fieldOrNull(it["IDENTIFICADOR"]),
                    titleDescription(it["TÍTULO"]),
                    titleDescription(it["DESCRIPCIÓN"]),
                    fieldSplit(it["TEMÁTICAS"]),
                    keywords(it["ETIQUETAS"]),
                    localDateTimes(it["FECHA DE CREACIÓN"]),
                    localDateTimes(it["FECHA DE ÚLTIMA MODIFICACIÓN"]),
                    frequency(it["FRECUENCIA DE ACTUALIZACIÓN"]),
                    fieldSplit(it["IDIOMAS"]),
                    fieldOrNull(it["ÓRGANO PUBLICADOR"]),
                    fieldOrNull(it["CONDICIONES DE USO"]),
                    fieldOrNull(it["COBERTURA GEOGRÁFICA"]),
                    periocity(it["COBERTURA TEMPORAL"]),
                    localDateTimes(it["VIGENCIA DEL RECURSO"]),
                    relatedResourcesAndRegulations(it["RECURSOS RELACIONADOS"]),
                    relatedResourcesAndRegulations(it["NORMATIVA"]),
                    distributions(it["DISTRIBUCIONES"]),
                )
                //GlobalScope.launch {
                println("Carga en BBDD: $d")
                //}
                println("ELEMENTO CARGADO $i: ${d}")
                i = i +1
            })



        }
        w.joinAll()
        Thread.sleep(1000000)
    }

    /*
    * Auxiliar functions to extract and transform the fields from the csv.
    */

    fun fieldOrNull(value: String?): String? {

        val v =  if (!value.isNullOrBlank()) value?.replace("Ã±", "ñ")?.replace("Ã­","í")?.replace("Ã¡","á") else null
        println("ENTRA1")
        return v
    }

    fun relatedResourcesAndRegulations(value:String?): Collection<String> {

        val v = if (!value.isNullOrBlank()) {
            value!!.replace("([^:])//".toRegex(), "\$1[RES_SPLIT]").split("[RES_SPLIT]")
        } else emptyList()
        println("ENTRA1")
        return v
    }

    fun fieldSplit(value: String?): Collection<String> {

        val v = if (!value.isNullOrBlank()) value!!.split("//") else emptyList()
        println("ENTRA2")
        return v
    }

    fun titleDescription(value: String?): Collection<String> {
        val v = if (!value.isNullOrBlank()) {
            value!!.replace("]", "-").replaceFirst("[", "").split("[")
        } else emptyList()
        println("ENTRA3")
        return v
    }
    fun keywords(value: String?): Map<String, String>? {
        println("ENTRA41: $value")
        val v = if (!value.isNullOrBlank()) {
            value?.replace("\\[(\\w{2})\\]".toRegex(),"[[SPLIT_FIRS]]\$1[[SPLIT_LAST]]")?.replaceFirst("[[SPLIT_FIRS]]", "")?.split("[[SPLIT_FIRS]]")?.associate {
                println("ENTRA42: $it")
                val (left, right) = it.split("[[SPLIT_LAST]]")
                println("ENTRA43: $left -- $right")
                left to right
            }
        } else null
        println("ENTRA4")
        return v
    }
    fun localDateTimes(value: String?): LocalDateTime? {

        val v = if (!value.isNullOrBlank()) {
            LocalDateTime.parse(value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
        } else null
        println("ENTRA5")
        return v
    }

    fun frequency(value: String?): String? {

        val v = if (!value.isNullOrBlank()) {
            value?.replace("\\[.*#".toRegex(), "")?.replace("[VALUE]", ",")
        } else null
        println("ENTRA6")
        return v
    }

    fun periocity(value: String?):  Pair<LocalDateTime?, LocalDateTime?>? {
        println("VA A ENTRAR7: $value ")
        var value  = value
        if (!value.isNullOrBlank()) {
            println("VA A ENTRAR72:  ${value?.get(value.length - 1)}")

        }
        if (!value.isNullOrBlank()) {
            println("PROCES 7: ${value}")


            val mm = ConstantValues.REGEX_FREQUENCY.toRegex().findAll(value).map {
                println("${it.value} -- ${"\\+".toRegex().matches(it.value)}")
                if (".*\\+.*".toRegex().matches(it.value)){
                    LocalDateTime.parse(it.value, DateTimeFormatter.ofPattern(ConstantValues.DATE_PATTERN_ZONE_OFFSET))
                }else{
                    LocalDateTime.parse(it.value, DateTimeFormatter.ISO_LOCAL_DATE_TIME)

                }
            }.toMutableList()

            if (mm.size > 1) {
               return mm.zipWithNext().first()
            }
            if(mm.size == 1) {
                mm.add(null)
                return mm.zipWithNext().first()
            }

        }
        return null

    }

    fun distributions(value: String?): Collection<Map<String, String>?>? {

        val v = if (!value.isNullOrBlank()) {
            value!!.replaceFirst("[", "").split("//[")?.map {
                var titleNumber = 0
                it?.split("[")?.associate {
                    var (left, right) = it.split("]")
                    if (left.matches("TITLE_.*".toRegex())) {
                        right = left.split("_").elementAt(1) + "_-_" + right
                        left = "TITLE_$titleNumber"
                        titleNumber += 1
                    }
                    "[SPLIT]$left" to right
                }
            }
        } else null
        println("ENTRA8")
        return v
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