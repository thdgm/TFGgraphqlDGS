package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service

interface ProcessJsonServices {
    fun getJSONArray(url: String): Map<JSONObject, String>
    fun processJson(map: Map<JSONObject, String>):  MutableMap<ModelJsonMapping,String>
    fun getJSONArrayfromString(content: String): Map<JSONObject, String>
}
data class TestModel(
    val value: String,
    val language: String
)
@Service
class ProcessJsonServicesImpl(
    private val resourceLoader: ResourceLoader,

) : ProcessJsonServices {

    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArray(url: String): Map<JSONObject, String> {
        // TODO(PROBAR A MAPEARLO COMO UN JSON ARRAY)

        val typeJson = mutableMapOf<JSONObject, String>()
        val resource = resourceLoader.getResource(url)

        val bytes: ByteArray = resource.inputStream.readAllBytes()
        val fileContent = JSONObject(String(bytes))

        val types = fileContent.getJSONArray("@graph")

        for (i in 0 until types.length()) {
            var type = types.getJSONObject(i).getString("@type")
            typeJson[types.getJSONObject(i)] = type

        }

        return typeJson
    }

    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArrayfromString(content: String): Map<JSONObject, String> {
        // TODO(PROBAR A MAPEARLO COMO UN JSON ARRAY)
        val typeJson = mutableMapOf<JSONObject, String>()
        val fileContent = JSONObject(content)
        val types = fileContent.getJSONArray("@graph")
        for (i in 0 until types.length()) {
            var type = types.getJSONObject(i).getString("@type")
            typeJson[types.getJSONObject(i)] = type
        }
        return typeJson
    }

    // Process map [JsonObject-type] using auxiliar function setupFields
    override fun processJson(map: Map<JSONObject, String>): MutableMap<ModelJsonMapping,String>  {
        println("Start Process JSON")
        var goodMap = mutableMapOf<ModelJsonMapping,String>()
        map.forEach { (key, value) ->
            println("------------------------------------------------------------------------")
            println(key)
            println(value)
            println("------------------------------------------------------------------------")

            goodMap = setUpFields(value, key,goodMap)
        }
        println("End Process JSON")
        return goodMap
    }

    // Auxiliar function: Do appropiate tasks for each type
    fun setUpFields(type: String, json: JSONObject, goodMap: MutableMap<ModelJsonMapping,String>): MutableMap<ModelJsonMapping,String> {
        println("Start SetUp Fields")
        var mapModel = mutableMapOf<String,Collection<String>>()
        val keys = json.keys()
        while(keys.hasNext()) {
            val key = keys.next().toString()
            val v = json.get(key)
            println("ENTRA A PROCESAR $v")
            if(v is JSONObject){
                println("ENTRA OBJECT")
                mapModel = processObjectByKey(key, v,type,mapModel)
                println("SALE OBJECT")
            }else if(v is JSONArray){
                println("ENTRA ARRAY")
                mapModel = processArrayByKey(key,v,type,mapModel)
                println("SALE ARRAY")

            }else if(v is String){
                println("ENTRA STRING")
                mapModel = processStringByKey(key, v,type,mapModel)
                println("SALE STRING")
            }
        }
        println("FINALIZA DE PROCESAR")
        val model = createModels(mapModel,type)
        when(model){
            is DistributionJsonMapping -> goodMap[model] = "Distribution"
            is DatasetJsonMapping -> goodMap[model] = "Dataset"
            is PeriodOfTimeJsonMapping -> goodMap[model] = "PeriodOfTime"
        }
        return goodMap
    }
    fun processArrayByKey(k: String, array: JSONArray, type:String,fields:MutableMap<String,Collection<String>>): MutableMap<String,Collection<String>>{
        var mapModel = fields
        println("TTTTTIIIIIIIIIIPPPPPPPPPPPPOOOOOOOOOOOOOOOOOOOOOOOO: $k")
        when (k) {
                "dcat:keyword" -> {
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    mapModel["KeywordsWord"] = fieldsValue
                    mapModel["KeywordsLang"] = fieldsLang

                }
                "dcat:distribution" -> {

                    var fieldsDistIds = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsDistIds.add(i,array.getJSONObject(i).getString("@id"))
                    }
                    mapModel["Distributions"] = fieldsDistIds
                }
                "dct:description" -> {
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()
                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    mapModel["DescriptionsText"] = fieldsValue
                    mapModel["DescriptionsLang"] = fieldsLang



                }
                "dct:language" -> {
                    println("ENTRA LANGUAGES $array")
                    var fieldsLangs = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        println("LANGUAGE: $array.getString(i)")
                        fieldsLangs.add(i,array.getString(i))
                    }
                    mapModel["DatasetLanguages"] = fieldsLangs
                }
                "dct:spatial" -> {
                    var fieldsSpatialIds = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsSpatialIds.add(i,array.getJSONObject(i).getString("@id"))
                    }
                    mapModel["Spatial"] = fieldsSpatialIds
                }
                "dct:title" ->{
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    if (type == "dcat:Dataset") {
                        mapModel["DatasetTitlesText"] = fieldsValue
                        mapModel["DatasetTitlesLang"] = fieldsLang
                    }
                    if (type == "dcat:Distribution") {
                        mapModel["DistributionTitlesText"] = fieldsValue
                        mapModel["DistributionTitlesLang"] = fieldsLang
                    }
                } //Distribution o Dataset
                "dcat:byteSize"->{

                    println("BYTESIZZZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

                }

            }
            return mapModel
        }

        fun processObjectByKey(k: String, objeto: JSONObject, type:String,fields:MutableMap<String,Collection<String>>): MutableMap<String,Collection<String>>{
            var mapModel = fields
            println("TTTTTIIIIIIIIIIPPPPPPPPPPPPOOOOOOOOOOOOOOOOOOOOOOOO: $k")

            when(k) {
                "dcat:keyword" -> {
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                    mapModel["KeywordsWord"] = fieldsValue
                    mapModel["KeywordsLang"] = fieldsLang
                }
                "dcat:distribution" -> {
                    var fieldsDistIds = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["Distributions"] = fieldsDistIds
                }
                "dct:description" -> {
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                    mapModel["DescriptionsText"] = fieldsValue
                    mapModel["DescriptionsLang"] = fieldsLang
                }
                "dct:language" -> {
                    var fieldsLangs = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["DatasetLanguages"] = fieldsLangs
                }
                "dct:spatial" -> {
                    var fieldsSpatialIds = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["Spatial"] = fieldsSpatialIds
                }
                "dct:title" ->{
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))

                    if (type == "dcat:Dataset") {
                        mapModel["DatasetTitlesText"] = fieldsValue
                        mapModel["DatasetTitlesLang"] = fieldsLang
                    }
                    if (type == "dcat:Distribution") {
                        mapModel["DistributionTitlesText"] = fieldsValue
                        mapModel["DistributionTitlesLang"] = fieldsLang
                    }
                }
                "dct:modified" -> {
                    var fieldsModified = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Modified"] = fieldsModified

                }
                "dct:issued" -> {
                    var fieldsIssued = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Issued"] = fieldsIssued
                }
                "schema:startDate" -> {
                    var fieldsStart = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Start"] = fieldsStart
                }
                "schema:endDate" -> {
                    var fieldsEnd = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["End"] = fieldsEnd
                }
                "dct:license"->{
                    var fieldsLicense = mutableListOf<String>(objeto.getString("@id"))
                    println("LICENSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsLicense")
                    mapModel["License"] = fieldsLicense
                }
                "dcat:theme"->{
                    var fieldsTheme= mutableListOf<String>(objeto.getString("@id"))
                    println("THEEEEMMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsTheme")
                    mapModel["Theme"] = fieldsTheme
                }
                "dcat:byteSize"->{
                    var fieldsByteSize= mutableListOf<String>(objeto.getString("@value"))
                    println("BYTESIZZZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsByteSize")
                    mapModel["ByteSize"] = fieldsByteSize
                }

            }
            return mapModel

        }
    fun processStringByKey(k: String, cadena: String,type:String, fields:MutableMap<String,Collection<String>>):MutableMap<String,Collection<String>>{
        var fieldsId = mutableListOf<String>(cadena)
        var mapModel = fields
        println("TTTTTIIIIIIIIIIPPPPPPPPPPPPOOOOOOOOOOOOOOOOOOOOOOOO: $k")
        when(k) {
            "@id" -> {
                if(type == "dcat:Dataset") {
                    mapModel["DatasetId"] = fieldsId
                }
                if(type == "dcat:Distribution") {
                    mapModel["DistributionId"] = fieldsId
                }
            } //Distribution o Dataset
            "dcat:accessURL" -> {
                mapModel["AccessUrl"] = fieldsId
            }
            "dct:language" -> {
                mapModel["DatasetLanguages"] = fieldsId
            }
            "dct:identifier"->{
                println("IDENTIFIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRR: $fieldsId")

                if (type == "dcat:Dataset") {
                    mapModel["IdentifierDataset"] = fieldsId
                }
                if (type == "dcat:Distribution") {
                    mapModel["IdentifierDistribution"] = fieldsId
                }
            }
        }
        return mapModel
    }

    fun createModels(fields: Map<String,Collection<String>>,type:String): ModelJsonMapping?{
        return when(type){
            "dcat:Dataset" -> {
                 DatasetJsonMapping(
                     id = fields.getValue("DatasetId").elementAt(0),
                     issued = fields.getValue("Issued").elementAt(0),
                     modified = fields.getValue("Modified").elementAt(0),
                     titlesText = fields.getValue("DatasetTitlesText"),
                     titlesLang = fields.getValue("DatasetTitlesLang"),
                     distributions = fields.getValue("Distributions"),
                     descriptionsText = fields.getValue("DescriptionsText"),
                     descriptionsLang = fields.getValue("DescriptionsLang"),
                     keywordsWord = fields.getValue("KeywordsWord"),
                     keywordsLang = fields.getValue("KeywordsLang"),
                     languages = fields.getValue("DatasetLanguages"),
                     spatial = fields.getValue("Spatial"),
                     identifier = fields.getValue("IdentifierDataset").elementAt(0),
                     license = fields.getValue("License").elementAt(0),
                     theme = fields.getValue("Theme")
                )
            }
            "dct:PeriodOfTime" -> {
                PeriodOfTimeJsonMapping(
                    start = fields.getValue("Start").elementAt(0),
                    end = fields.getValue("End").elementAt(0)
                )
            }
            "dcat:Distribution" -> {
                DistributionJsonMapping(
                    id = fields.getValue("DistributionId").elementAt(0),
                    accessUrl = fields.getValue("AccessUrl").elementAt(0),
                    titlesText = fields.getValue("DistributionTitlesText"),
                    titlesLang = fields.getValue("DistributionTitlesLang"),
                    byteSize = if (fields.containsKey("ByteSize")){
                        fields.getValue("ByteSize").elementAt(0).toUInt()
                        }else{ null },
                    identifier = fields.getValue("IdentifierDistribution").elementAt(0),
                )
            }
            else -> {null}
        }
    }

}


