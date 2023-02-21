package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
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
            is PublisherJsonMapping -> goodMap[model] = "Publisher"
            is ImtJsonMapping -> goodMap[model] = "Format"
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
                "dct:publisher"->{
                    var fieldsPublisherId= mutableListOf<String>(objeto.getString("@id"))
                    println("PUBLISHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRR: $fieldsPublisherId")
                    mapModel["Publisher"] = fieldsPublisherId
                }
                "dct:format"->{
                    var fieldsFormatId= mutableListOf<String>(objeto.getString("@id"))
                    println("PUBLISHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRR: $fieldsFormatId")
                    mapModel["Format"] = fieldsFormatId
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
                if(type == "skos:Concept") {
                    mapModel["PublisherId"] = fieldsId
                }
                if(type == "dct:IMT") {
                    mapModel["ImtId"] = fieldsId
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
            "skos:notation"->{
                println("CONNNNNNNNCCEEEEEEEEEEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPTTTTTTTTTTTTTTTTTTTTTTTTT NOTATION")

                mapModel["Notation"] = fieldsId
            }
            "skos:prefLabel"->{
                println("CONNNNNNNNCCEEEEEEEEEEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPTTTTTTTTTTTTTTTTTTTTTTTTT LABEL")

                mapModel["Label"] = fieldsId
            }
            "rdf:value"->{
                mapModel["ValueImt"] = fieldsId
            }
        }
        return mapModel
    }

    fun createModels(fields: Map<String,Collection<String>>,type:String): ModelJsonMapping?{
        return when(type){
            "dcat:Dataset" -> {
                 DatasetJsonMapping(
                     id = fields.getValue("DatasetId").elementAt(0),
                     issued = if (fields.containsKey("Issued")){
                         fields.getValue("Issued").elementAt(0)
                     }else{null},
                     modified = if (fields.containsKey("Modified")){
                         fields.getValue("Modified").elementAt(0)
                     }else{null},
                     titlesText = if (fields.containsKey("DatasetTitlesText")){
                         fields.getValue("DatasetTitlesText")
                     }else{ emptyList()},
                     titlesLang = if (fields.containsKey("DatasetTitlesLang")){
                         fields.getValue("DatasetTitlesLang")
                     }else{ emptyList()},
                     distributions = if (fields.containsKey("Distributions")){
                         fields.getValue("Distributions")
                     }else{ emptyList()},
                     descriptionsText = if (fields.containsKey("DescriptionsText")){
                         fields.getValue("DescriptionsText")
                     }else{ emptyList()},
                     descriptionsLang = if (fields.containsKey("DescriptionsLang")){
                         fields.getValue("DescriptionsLang")
                     }else{ emptyList()},
                     keywordsWord = if (fields.containsKey("KeywordsWord")){
                         fields.getValue("KeywordsWord")
                     }else{ emptyList()},
                     keywordsLang = if (fields.containsKey("KeywordsLang")){
                         fields.getValue("KeywordsLang")
                     }else{ emptyList()},
                     languages = if (fields.containsKey("DatasetLanguages")){
                         fields.getValue("DatasetLanguages")
                     }else{ emptyList()},
                     spatial = if (fields.containsKey("Spatial")){
                         fields.getValue("Spatial")
                     }else{ emptyList()},
                     identifier = if (fields.containsKey("IdentifierDataset")){
                         fields.getValue("IdentifierDataset").elementAt(0)
                     }else{null},
                     license = if (fields.containsKey("License")){
                         fields.getValue("License").elementAt(0)
                     }else{null},
                     theme = if (fields.containsKey("Theme")){
                         fields.getValue("Theme")
                     }else{emptyList()},
                     publisher = if (fields.containsKey("Publisher")){
                         fields.getValue("Publisher").elementAt(0)
                     }else{null}
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
                    accessUrl = if (fields.containsKey("AccessUrl")){
                        fields.getValue("AccessUrl").elementAt(0)
                        }else{ "" },
                    titlesText = if (fields.containsKey("DistributionTitlesText")){
                        fields.getValue("DistributionTitlesText")
                        }else{ emptyList() },
                    titlesLang = if (fields.containsKey("DistributionTitlesLang")){
                        fields.getValue("DistributionTitlesLang")
                        }else{ emptyList() },
                    byteSize = if (fields.containsKey("ByteSize")){
                         Integer.parseInt( fields.getValue("ByteSize").elementAt(0))
                        }else{ null },
                    identifier = if (fields.containsKey("IdentifierDistribution")){
                        fields.getValue("IdentifierDistribution").elementAt(0)
                        }else{ null },
                    format = if (fields.containsKey("Format")){
                        fields.getValue("Format").elementAt(0)
                    }else{ null },

                )

            }
            "skos:Concept" -> {
                PublisherJsonMapping(
                    id = fields.getValue("PublisherId").elementAt(0),
                    notation = fields.getValue("Notation").elementAt(0),
                    label = fields.getValue("Label").elementAt(0),
                )
            }
            "dct:IMT" -> {
                ImtJsonMapping(
                    id = fields.getValue("ImtId").elementAt(0),
                    value = fields.getValue("ValueImt").elementAt(0),
                )
            }
            else -> {null}
        }
    }

}


