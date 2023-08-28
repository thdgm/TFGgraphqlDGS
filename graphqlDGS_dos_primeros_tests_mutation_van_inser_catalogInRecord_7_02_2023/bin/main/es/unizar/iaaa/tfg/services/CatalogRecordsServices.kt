package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service
import java.util.*

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
    fun getInCatalog(id: String): Collection<Catalog?>
    fun getJSONArray(url: String): Map<String,JSONObject>
    fun processContent(content: String): Collection<Catalog?>
    fun processUrl(map: Map<String,JSONObject>): Boolean
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
    override fun getJSONArray(url: String): Map<String,JSONObject> {
        val typeJson = mutableMapOf<String,JSONObject>()
        val resource = resourceLoader.getResource(url)
        val bytes: ByteArray = resource.inputStream.readAllBytes()
        val fileContent = JSONObject(String(bytes))
        val types =fileContent.getJSONArray("@graph")
        for (i in 0 until types.length()){
            var type = types.getJSONObject(i).getString("@type")
            typeJson[type] = types.getJSONObject(i)
        }
        return typeJson
    }
    // Process map type doing the corresponding tasks
    override fun processUrl(map: Map<String,JSONObject>): Boolean {

        map.forEach { (key, value) ->
            setUpFields(key,value)
        }

        createKeyword()
        val dsser = createDataService()
        createDistribution(dsser)
        createDataset()
        createCatalogRecord()

       return true
    }

    //Auxiliar function: Do appropiate tasks for each type
    fun setUpFields(type: String, json: JSONObject) {
        println("TYPE: $type")

        when(type){
            "dct:PeriodOfTime"-> {
                println("PeriodOfTime, end-start")
                fieldsMap["start"] = json.getJSONObject("schema:startDate").getString("@value")
                fieldsMap["end"] = json.getJSONObject("schema:endDate").getString("@value")
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
            "dcat:Distribution"-> {
                println("Creo la distribution")
                fieldsMap["idDistribution"] = json.getString("@id")
                fieldsMap["accessURL"] = json.getString("dcat:accessURL")
                fieldsMap["titleDistribution"] = json.getJSONObject("dct:title")

            }
            "skos:Concept"-> println("skos:Concept, no hago nada por ahora")
        }

        //VOY METIENDO LOS DATOS EN EL WHEN EN UN MAP Y LUEGO CREO EL DATASET, DISTRIBUTIONS....
        //Luego en otra funcion ya le paso el map y los creo, despues del forEach en processUrl
    }



    //Auxiliar function: Insert keyword
    fun createKeyword() {
        //INSERT INTO "keyword" ("word","language_id") VALUES ('','');
        println("CREATE KEYYWORD")
        val arrayJson =  fieldsMap.getValue("keyword") as JSONArray
        for (i in 0 until arrayJson.length()) {
            val word = arrayJson.getJSONObject(i).getString("@value")
            val language = arrayJson.getJSONObject(i).getString("@language")
            println( "${word} ----- ${language}")
            val kw = KeywordEntity()
            val l = LanguageEntity()
            l.id = language
            kw.word = word
            //Miro si existe el language, sino lo creo
            if (!languageRepository.existsById(l.id)) languageRepository.save(l)
            kw.language = l
            keywordRepository.save(kw)
            println( "${word} ----- ${language}")
            println(keywordRepository.existsById(word))
        }
        //language.getString("@language")

       // keywordRepository.createKeyword( word.getString("@value"), language.getString("@language"))
    }


    //Auxiliar function: Indert Dataservice UUID random y lo meto a root
    fun createDataService(): DataServiceEntity{
        //INSERT INTO "resource" ("id","tipo") VALUES ('','','', '');
        //TODO() INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('', '');
        println("CREATE DATASERVICE")
        val dser = DataServiceEntity()
        dser.id = UUID.randomUUID().toString()
        datasetServicesRepository.save(dser)

        return dser
    }

    //Auxiliar function: Do appropiate tasks for each type
    fun createDistribution(service: DataServiceEntity) {
        //INSERT INTO "distribution" ("id") VALUES ('');
        //TODO() INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('','');
        //TODO() INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('','');
        //INSERT INTO "titles" ("title","language_id","distribution_id")  VALUES ('','','');
        println("CREATE DISTRIBUTION")
        val id =  fieldsMap.getValue("idDistribution")
        val accessUrl =  fieldsMap.getValue("accessURL")
        val title =  fieldsMap.getValue("titleDistribution") as JSONObject
        println("DIST ID: $id")
        println("DIST ACCESSURL: $accessUrl")
        println("DIST TITLE: $title")
        val dist = DistributionEntity()
        val l = LanguageEntity()
        l.id = title.getString("@language")
        //Miro si existe el language, sino lo creo
        if (!languageRepository.existsById(l.id)) languageRepository.save(l)
        val tit = TitlesEntity()
        tit.title = title.getString("@value")

        tit.language = l
        dist.id =  fieldsMap.getValue("idDistribution") as String
        println("HASTA AQUI")
        //dist.title = mutableListOf(tit)
        //dist.accessService = mutableListOf(service)
        //dist.accessUrl = fieldsMap.getValue("accessURL") as String
        //distributionRepository.save(dist)
    }

    //Auxiliar function: Do appropiate tasks for each type
    fun createDataset() {
        //INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion","accrual_periodicity","temporal_coverage_start","temporal_coverage_end") VALUES ();
        //INSERT INTO "description" ("text","language_id","resource_id")  VALUES ('','','');
        //INSERT INTO "titles" ("title","language_id","resource_id")  VALUES ('','','');
        //TODO() INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('','');
        //TODO() INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('', '');
        //TODO() INSERT INTO "dataset_keyword" ("keyword_id","dataset_id") VALUES ('','');
        //TODO() INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('','');
        //TODO() INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('','');
        //TODO() INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('','');
        //
    }

    //Auxiliar function: Do appropiate tasks for each type
    fun createCatalogRecord() {
        //INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('','','');
        //TODO() INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('', '');
    }

    // Return
    override fun processContent(content: String): Collection<Catalog?> {
        return emptyList()
    }
}
