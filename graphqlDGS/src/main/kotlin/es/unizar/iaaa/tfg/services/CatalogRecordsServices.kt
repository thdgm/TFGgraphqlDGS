package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import java.time.OffsetDateTime
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter
import java.util.*

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>
    fun getJSONArray(url: String): Map<JSONObject,String>
    fun processContent(content: String): Collection<Catalog?>
    fun processUrl(map: Map<JSONObject,String> ,idCR:String?): CatalogRecord?
    fun createCatalogRecord(idCR:String?,idPrimaryTopic:String, titulo:String):CatalogRecordEntity
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val resourceLoader: ResourceLoader,
    private val keywordRepository: KeywordRepository,
    private val languageRepository: LanguageRepository,
    private val datasetServicesRepository: DataServiceRepository,
    private val distributionRepository: DistributionRepository,
    private val titlesRepository: TitleRepository,
    private val locationRepository:LocationRepository,
    private val descriptionRepository: DescriptionRepository,
    private val resourcesRepository: ResourceRepository,
    private val datasetRepository: DatasetRepository,

    ) : CatalogRecordsServices {

    val fieldsMap = mutableMapOf<String, Any>()

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findById(id)
        return if (crE.isEmpty) null else converter.toCatalogRecord(crE.get())
    }

    // Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {
        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
            .map {
                converter.toCatalogRecord(it!!)
            }
        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }
    // Return Catalogs which contains id CR in their records
    override fun getInCatalog(id: String): Collection<Catalog?> = catalogRepository.findCatalogsByRecordsId(id)
            .map{
                converter.catalogEntitytoCatalog(it)
            }

    // Return map <type to JSONObject>
    override fun getJSONArray(url: String): Map<JSONObject,String>  {
        println("GET JSON ARRAY")
        val typeJson = mutableMapOf<JSONObject,String>()
        val resource = resourceLoader.getResource(url)
        val bytes: ByteArray = resource.inputStream.readAllBytes()
        val fileContent = JSONObject(String(bytes))
        val types =fileContent.getJSONArray("@graph")
        for (i in 0 until types.length()){
            var type = types.getJSONObject(i).getString("@type")
            typeJson.put(types.getJSONObject(i),type )

        }

        return typeJson
    }


    // Process map type doing the corresponding tasks
    override fun processUrl(map: Map<JSONObject,String> , idCR:String?): CatalogRecord? {
        println("PROCESSSSSSS")
        //val m = map.filter { (key, value) -> value == "dcat:Distribution"}

        map.forEach { (key, value) ->

            setUpFields(value,key)
        }

        val lenguages = createLanguages()
        val keywords= createKeyword()
        val dsser = createDataService()
        println("ESTOOOOOOOOOOOO1")
        val servicesId = mutableListOf(dsser)
        println("ESTOOOOOOOOOOOO2")
        createDistribution(dsser)
        val idRes = createDataset(keywords,servicesId,lenguages)
        val cr = createCatalogRecord(idCR,idRes,"Title")
        insertIntoCatalogRecord(cr)
        return converter.toCatalogRecord(cr)
    }

    //Auxiliar function: Do appropiate tasks for each type
    fun setUpFields(type: String, json: JSONObject) {
        println("TYPE: $type")

        when(type){
            "dct:PeriodOfTime"-> {

                println("PeriodOfTime, end-start")
                fieldsMap["start"] = json.getJSONObject("schema:startDate").getString("@value")
                fieldsMap["end"] = json.getJSONObject("schema:endDate").getString("@value")

                println(fieldsMap["start"])
                println(fieldsMap["end"])
            }
            "dcat:Distribution"-> {
                println("Creo la distribution")
                if( fieldsMap["idDistribution"] == null){
                    fieldsMap["idDistribution"] = mutableListOf(json.getString("@id"))
                    fieldsMap["accessURL"] = mutableListOf(json.getString("dcat:accessURL"))
                    fieldsMap["titleDistribution"] = mutableListOf(json.getJSONObject("dct:title"))
                }else{
                    val idDist :MutableCollection<Any> = fieldsMap["idDistribution"] as MutableCollection<Any>
                    val accessURL :MutableCollection<Any> = fieldsMap["accessURL"] as MutableCollection<Any>
                    val titleDistribution :MutableCollection<Any> = fieldsMap["titleDistribution"] as MutableCollection<Any>
                    idDist?.add(json.getString("@id"))
                    accessURL?.add(json.getString("dcat:accessURL"))
                    titleDistribution?.add(json.getJSONObject("dct:title"))
                    fieldsMap["idDistribution"] = idDist
                    fieldsMap["accessURL"] = accessURL
                    fieldsMap["titleDistribution"] = titleDistribution
                }

                println(fieldsMap["idDistribution"])

            }
            "dcat:Dataset"->{
                println("creo dataset")
                fieldsMap["id"] = json.getString("@id")
                fieldsMap["keyword"] = json.getJSONArray("dcat:keyword")
                fieldsMap["distributions"] = json.getJSONArray("dcat:distribution")
                fieldsMap["description"] = json.getJSONObject("dct:description")
                fieldsMap["issued"] = json.getJSONObject("dct:issued").getString("@value")
                fieldsMap["modified"] = json.getJSONObject("dct:modified").getString("@value")
                fieldsMap["languages"] = json.getString("dct:language")
                fieldsMap["spatial"] = json.getJSONObject("dct:spatial").getString("@id")
                fieldsMap["title"] = json.getJSONObject("dct:title")
            }
            "dct:IMT"-> println("IMT, formato, no hago nada por ahora")
            "skos:Concept"-> println("skos:Concept, no hago nada por ahora")
        }




        //VOY METIENDO LOS DATOS EN EL WHEN EN UN MAP Y LUEGO CREO EL DATASET, DISTRIBUTIONS....
        //Luego en otra funcion ya le paso el map y los creo, despues del forEach en processUrl
    }

        //Auxiliar function: Insert keyword
        fun createLanguages(): MutableCollection<LanguageEntity> {
            val languages =  fieldsMap.getValue("languages") as String
            val l = LanguageEntity()
            l.id = languages
            //Miro si existe el language, sino lo creo
            if (!languageRepository.existsById(l.id)) languageRepository.save(l)
            return mutableListOf(l)
        }
        //Auxiliar function: Insert keyword
        fun createKeyword():MutableCollection<KeywordEntity> {
            //INSERT INTO "keyword" ("word","language_id") VALUES ('','');
            println("CREATE KEYYWORD")
            val keywords = mutableListOf<KeywordEntity>()
            val arrayJson =  fieldsMap.getValue("keyword") as JSONArray
            for (i in 0 until arrayJson.length()) {
                val word = arrayJson.getJSONObject(i).getString("@value")
                val language = arrayJson.getJSONObject(i).getString("@language")
                println( "${word} ----- ${language}")
                val kw = KeywordEntity()
                kw.word = word
                kw.language = languageRepository.findById(language).get()
                keywords.add(kw)
                keywordRepository.save(kw)
                println( "${word} ----- ${language}")
                println(keywordRepository.existsById(word))
            }
            return keywords
            //language.getString("@language")

           // keywordRepository.createKeyword( word.getString("@value"), language.getString("@language"))
        }


        //Auxiliar function: Indert Dataservice UUID random y lo meto a root
        fun createDataService(): DataServiceEntity{
            //INSERT INTO "resource" ("id","tipo") VALUES ('','','', '');

            val dser = DataServiceEntity()
            dser.id = UUID.randomUUID().toString()
            //INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('', '');
            dser.catalogResources = mutableListOf(catalogRepository.findById("root").get())
            datasetServicesRepository.save(dser)

            return dser
        }

        //Auxiliar function: Do appropiate tasks for each type
        fun createDistribution(service: DataServiceEntity) {
            //INSERT INTO "distribution" ("id") VALUES ('');
            println("CREATE DISTRIBUTION")

            //INSERT INTO "titles" ("title","language_id","distribution_id")  VALUES ('','','');

            val idsDist =  fieldsMap.getValue("idDistribution") as Collection<String>
            idsDist.forEachIndexed { i, it ->

                val accessUrl = fieldsMap.getValue("accessURL") as Collection<String>
                val title = fieldsMap.getValue("titleDistribution") as Collection<JSONObject>
                println("DIST ID: $it")
                println("DIST ACCESSURL: ${accessUrl.elementAt(i)}")
                println("DIST TITLE: ${title.elementAt(i)}")
                val dist = DistributionEntity()
                val tit = TitlesEntity()
                tit.title = title.elementAt(i).getString("@value")
                //Miro si existen los titles y si no, los creo
                if (!titlesRepository.existsById(tit.title)) titlesRepository.save(tit)
                tit.language = languageRepository.findById(title.elementAt(i).getString("@language")).get()
                dist.id = it//fieldsMap.getValue("idDistribution") as String
                dist.title = mutableListOf(tit)
                //INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('','');
                dist.accessService = mutableListOf(service)
                dist.accessUrl = accessUrl.elementAt(i)//fieldsMap.getValue("accessURL") as String

                distributionRepository.save(dist)
            }

        }

        //Auxiliar function: Do appropiate tasks for each type
        fun createDataset(keywords : MutableCollection<KeywordEntity>,services : MutableCollection<DataServiceEntity>, languages : MutableCollection<LanguageEntity>):String{
            //INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion","accrual_periodicity","temporal_coverage_start","temporal_coverage_end") VALUES ();

            println("CREATE DATASET")

           // val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
            var dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss")
            val datasetId = fieldsMap.getValue("id") as String
            val tipo = "dataset"
            val title = fieldsMap.getValue("title") as JSONObject
            val creacion = fieldsMap.getValue("issued") as String
            val modificacion = fieldsMap.getValue("modified") as String
            val start = fieldsMap.getValue("start") as String
            val end = fieldsMap.getValue("end") as String
            val spatial = fieldsMap.getValue("spatial") as String
            val descriptions = fieldsMap.getValue("description") as JSONObject
            val distributions = fieldsMap.getValue("distributions") as JSONArray
            val dataset = DatasetEntity()
            dataset.id = datasetId
            println("CREATE DATASET2 $datasetId")
            //INSERT INTO "titles" ("title","language_id","resource_id")  VALUES ('','','');
            val tit = TitlesEntity()
            tit.title = title.getString("@value")
            //Miro si existen los titles y si no, los creo
            if (!titlesRepository.existsById( tit.title)) titlesRepository.save(tit)
            tit.language = languageRepository.findById(title.getString("@language")).get()
            dataset.title = mutableListOf(tit)
            println("CREATE DATASET3")

            dataset.type = tipo
            //INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('','');
            dataset.inseries = mutableListOf()
            dataset.fechaHoraCreacion = LocalDateTime.parse(creacion, dateFormatter)
            dataset.ultimaModificacion = LocalDateTime.parse(modificacion, dateFormatter)
            dataset.temporalCoverageStart = LocalDateTime.parse(start, dateFormatter)
            dataset.temporalCoverageEnd = LocalDateTime.parse(end, dateFormatter)

            println("CREATE DATASET4")
            dataset.distributions = mutableListOf()
            //INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('','');
            for (i in 0 until distributions.length()){
                var idDist = distributions.getJSONObject(i).getString("@id")
                println("CREATE $idDist")

                dataset.distributions.add(distributionRepository.findById(idDist).get())

            }
            println("CREATE DATASET5")
            //INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('','');
            dataset.languagesResources = languages

            //INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('','');
            dataset.datasetService = services

            /*services.forEach{
                dataset.datasetService.add(datasetServicesRepository.findById(it).get())
            }*/

            //INSERT INTO "dataset_keyword" ("keyword_id","dataset_id") VALUES ('','');
            dataset.keywords = keywords

           // INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('', '');
            dataset.catalogResources = mutableListOf(catalogRepository.findById("root").get())
            println("CREATE DATASET6")
            //Creo un LocationEntity
            //INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('','');
            val loc = LocationEntity()
            loc.nombre = spatial
            val locat= spatial.split("/")
            loc.tipo = locat[locat.size -2]
            if (!locationRepository.existsById(loc.nombre)) locationRepository.save(loc)
            dataset.locations = mutableListOf(loc)
            println("CREATE DATASET7")
            //Creo descriptions si no existen
            //INSERT INTO "description" ("text","language_id","resource_id")  VALUES ('','','');
            val desc =  ResourceDescriptionsEntity()
            desc.text = descriptions.getString("@value")
            desc.language = languageRepository.findById(descriptions.getString("@language")).get()
            if (!descriptionRepository.existsById(desc.text)) descriptionRepository.save(desc)
            dataset.descriptions = mutableListOf(desc)
            println("CREATE DATASET8")
            datasetRepository.save(dataset)
            return dataset.id
        }

        //Auxiliar function: Create CR
        override fun createCatalogRecord(idCR:String?,idPrimaryTopic:String, titulo:String):CatalogRecordEntity {
            //INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('','','');
            println("CREATE CR")
            val cr = CatalogRecordEntity()
            lateinit var id: String
            //TODO(Aqui tengo una duda: He pensado en generar el id pe: idPrimaryTopic+"/CatalogRecord
            // que pasa si existe ya? Puede ocurrir, sería el mismo CR? He supuesto que no pueden repetirse)
            id = idCR ?: "$idPrimaryTopic/CatalogRecord"
            println("CREATE CR1")
            cr.id = id
            cr.title = titulo
            println("CREATE CR2 $idPrimaryTopic")
            cr.resource = resourcesRepository.findById(idPrimaryTopic).get()

            //cr.catalogs = listOf(catalogRepository.findById("root").get())
            println("CREATE C4")
            catalogRecordsRepository.save(cr)
            //INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('', '');

            return cr
        }

        // Return
        override fun processContent(content: String): Collection<Catalog?> {
            return emptyList()
        }


        fun insertIntoCatalogRecord(cr:CatalogRecordEntity){
            catalogRecordsRepository.insertInCatalogRecord(cr.id,"root")
        }
        fun insertIntoRelathionships(c:CatalogRecordEntity,res: ResourceEntity){
            catalogRepository.insertInRelationships(c.id,res.id)
        }
        fun insertIntoServesDataset(dser:DataServiceEntity,res:ResourceEntity){
            datasetServicesRepository.insertInServesDataset(dser.id,res.id)
        }
        fun insertIntoInSeries(d:DatasetEntity,ds:DatasetSeriesEntity){
            datasetRepository.insertInInSeries(d.id,ds.id)
        }
        fun insertIntoDistributions(d:DatasetEntity,dist:DistributionEntity){
            distributionRepository.insertInDistributions(d.id,dist.id)
        }
        fun insertIntoAccessInService(dist:DistributionEntity,dser:DataServiceEntity){
            distributionRepository.insertInAccessInService(dist.id,dser.id)
        }
        fun insertIntoLanguagesResources(dist:LanguageEntity,res:ResourceEntity){
            languageRepository.insertInLanguagesResources(dist.id,res.id)
        }


}
