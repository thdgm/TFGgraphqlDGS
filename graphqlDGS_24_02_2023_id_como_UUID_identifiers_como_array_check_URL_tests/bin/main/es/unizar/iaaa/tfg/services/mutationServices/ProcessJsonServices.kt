package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
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

@Service
class ProcessJsonServicesImpl(
    private val resourceLoader: ResourceLoader,

) : ProcessJsonServices {

    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArray(url: String): Map<JSONObject, String> {
        val typeJson = mutableMapOf<JSONObject, String>()
        val resource = resourceLoader.getResource(url)

        val bytes: ByteArray = resource.inputStream.readAllBytes()
        val fileContent = JSONObject(String(bytes))

        val types = fileContent.getJSONArray("@graph")

        for (i in 0 until types.length()) {
            val type = types.getJSONObject(i).getString("@type")
            typeJson[types.getJSONObject(i)] = type

        }

        return typeJson
    }

    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArrayfromString(content: String): Map<JSONObject, String> {

        val typeJson = mutableMapOf<JSONObject, String>()
        val fileContent = JSONObject(content) // toJSONObject
        val types = fileContent.getJSONArray("@graph") //.toList() // List<JSONObject)

        // operator get para JSONObject

        //content.toJSONObject().map { o -> o to o["@type"] }.toMap()

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
            println(value.split(":").elementAt(1))
            println("------------------------------------------------------------------------")

            goodMap = setUpFields(value.split(":").elementAt(1), key,goodMap)
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
            var keys = keys.next().toString()
            val v = json.get(keys)
            val keySplit = keys.split(":")
            var key = keySplit.elementAt(0)
            var rango:String? = null
            if (keySplit.size == 2 && keySplit.elementAt(0) != "time") {
                key = keySplit.elementAt(1)

            }else if( keySplit.elementAt(0) == "time"){
                rango = keySplit.elementAt(1)
            }


            println("KEY:$key")

            println("ENTRA A PROCESAR $v")
            if(v is JSONObject){
                println("ENTRA OBJECT")
                mapModel = processObjectByKey(key, v,type,mapModel,rango)
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
            is AccrualPeriodicityJsonMapping -> goodMap[model] = "AccrualPeriodicity"
        }
        return goodMap
    }
    fun processArrayByKey(k: String, array: JSONArray, type:String,fields:MutableMap<String,Collection<String>>): MutableMap<String,Collection<String>>{
        var mapModel = fields
        println("TTTTTIIIIIIIIIIPPPPPPPPPPPPOOOOOOOOOOOOOOOOOOOOOOOO: $k")
        when (k) {
                "keyword" -> {
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    mapModel["KeywordsWord"] = fieldsValue
                    mapModel["KeywordsLang"] = fieldsLang

                }
                "distribution" -> {

                    var fieldsDistIds = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsDistIds.add(i,array.getJSONObject(i).getString("@id"))
                    }
                    mapModel["Distributions"] = fieldsDistIds
                }
                "description" -> {
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()
                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    println("DEEEEEEEEEEEEEEESSSSSSSSSSSSCCCCCCCCCCCRRRRRRRRRIIIIIIPPPPPPPPPPPTTTTTTTTTTIIIIIIIIOOOOOOOOONNNNNNNNNN")
                    println(fieldsValue)
                    println(fieldsLang)
                    mapModel["DescriptionsText"] = fieldsValue
                    mapModel["DescriptionsLang"] = fieldsLang



                }
                "language" -> {
                    println("ENTRA LANGUAGES $array")
                    var fieldsLangs = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        println("LANGUAGE: $array.getString(i)")
                        fieldsLangs.add(i,array.getString(i))
                    }
                    mapModel["DatasetLanguages"] = fieldsLangs
                }
                "spatial" -> {
                    var fieldsSpatialIds = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsSpatialIds.add(i,array.getJSONObject(i).getString("@id"))
                    }
                    mapModel["Spatial"] = fieldsSpatialIds
                }
                "title" ->{
                    var fieldsValue = mutableListOf<String>()
                    var fieldsLang = mutableListOf<String>()

                    for (i in 0 until array.length()){
                        fieldsValue.add(i,array.getJSONObject(i).getString("@value"))
                        fieldsLang.add(i,array.getJSONObject(i).getString("@language"))
                    }
                    if (type == "Dataset") {
                        mapModel["DatasetTitlesText"] = fieldsValue
                        mapModel["DatasetTitlesLang"] = fieldsLang
                    }
                    if (type == "Distribution") {
                        mapModel["DistributionTitlesText"] = fieldsValue
                        mapModel["DistributionTitlesLang"] = fieldsLang
                    }
                } //Distribution o Dataset
                "theme"->{
                    var fieldsTheme= mutableListOf<String>()
                    for (i in 0 until array.length()){
                        fieldsTheme.add(i,array.getJSONObject(i).getString("@id"))
                    }
                    println("THEEEEMMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsTheme")
                    mapModel["Theme"] = fieldsTheme
                }

            }
            return mapModel
        }

        fun processObjectByKey(k: String, objeto: JSONObject, type:String,fields:MutableMap<String,Collection<String>>,rango:String?): MutableMap<String,Collection<String>>{
            var mapModel = fields
            println("TTTTTIIIIIIIIIIPPPPPPPPPPPPOOOOOOOOOOOOOOOOOOOOOOOO: $k")

            when(k) {
                "keyword" -> {
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                    mapModel["KeywordsWord"] = fieldsValue
                    mapModel["KeywordsLang"] = fieldsLang
                }
                "distribution" -> {
                    var fieldsDistIds = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["Distributions"] = fieldsDistIds
                }
                "description" -> {
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                    mapModel["DescriptionsText"] = fieldsValue
                    mapModel["DescriptionsLang"] = fieldsLang
                }
                "language" -> {
                    var fieldsLangs = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["DatasetLanguages"] = fieldsLangs
                }
                "spatial" -> {
                    var fieldsSpatialIds = mutableListOf<String>(objeto.getString("@id"))
                    mapModel["Spatial"] = fieldsSpatialIds
                }
                "title" ->{
                    var fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                    var fieldsLang = mutableListOf<String>(objeto.getString("@language"))

                    if (type == "Dataset") {
                        mapModel["DatasetTitlesText"] = fieldsValue
                        mapModel["DatasetTitlesLang"] = fieldsLang
                    }
                    if (type == "Distribution") {
                        mapModel["DistributionTitlesText"] = fieldsValue
                        mapModel["DistributionTitlesLang"] = fieldsLang
                    }
                }
                "modified" -> {
                    var fieldsModified = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Modified"] = fieldsModified

                }
                "issued" -> {
                    var fieldsIssued = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Issued"] = fieldsIssued
                }
                "startDate" -> {
                    var fieldsStart = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["Start"] = fieldsStart
                }
                "endDate" -> {
                    var fieldsEnd = mutableListOf<String>(objeto.getString("@value"))
                    mapModel["End"] = fieldsEnd
                }
                "license"->{
                    var fieldsLicense = mutableListOf<String>(objeto.getString("@id"))
                    println("LICENSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsLicense")
                    mapModel["License"] = fieldsLicense
                }
                "theme"->{
                    var fieldsTheme= mutableListOf<String>(objeto.getString("@id"))
                    println("THEEEEMMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsTheme")
                    mapModel["Theme"] = fieldsTheme
                }
                "byteSize"->{
                    var fieldsByteSize= mutableListOf<String>(objeto.getString("@value"))
                    println("BYTESIZZZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: $fieldsByteSize")
                    mapModel["ByteSize"] = fieldsByteSize
                }
                "publisher"->{
                    var fieldsPublisherId= mutableListOf<String>(objeto.getString("@id"))
                    println("PUBLISHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRR: $fieldsPublisherId")
                    mapModel["Publisher"] = fieldsPublisherId
                }
                "format"->{
                    var fieldsFormatId= mutableListOf<String>(objeto.getString("@id"))
                    println("PUBLISHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRR: $fieldsFormatId")
                    mapModel["Format"] = fieldsFormatId
                }
                "time" ->{
                    val valor = objeto.getString("@value")
                    val time = "time:$rango"
                    var fieldsTime= mutableListOf("$time $valor")
                    mapModel["AccrualPeriodicity"] = fieldsTime
                    println("AccrualPeriodicity: $fieldsTime")
                }
                "temporal"->{
                    var fieldsTemporalId= mutableListOf<String>(objeto.getString("@id"))
                    mapModel["Temporal"] = fieldsTemporalId
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
                //val key = when(type) {
                //   "Dataset" -> "DatasetId" 
                //   else -> return fields  
                //}
                //mapModel[ket] = fieldsId 
                if(type == "Dataset") {
                    mapModel["DatasetId"] = fieldsId
                }
                if(type == "Distribution") {
                    mapModel["DistributionId"] = fieldsId
                }
                if(type == "Concept") {
                    mapModel["PublisherId"] = fieldsId
                }
                if(type == "IMT") {
                    mapModel["ImtId"] = fieldsId
                }
                if(type == "PeriodOfTime") {
                    mapModel["PeriodOfTimeId"] = fieldsId
                }
            } //Distribution o Dataset
            "accessURL" -> {
                mapModel["AccessUrl"] = fieldsId
            }
            "language" -> {
                mapModel["DatasetLanguages"] = fieldsId
            }
            "identifier"->{
                println("IDENTIFIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRR: $fieldsId")

                if (type == "Dataset") {
                    mapModel["IdentifierDataset"] = fieldsId
                }
                if (type == "Distribution") {
                    mapModel["IdentifierDistribution"] = fieldsId
                }
            }
            "notation"->{
                println("CONNNNNNNNCCEEEEEEEEEEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPTTTTTTTTTTTTTTTTTTTTTTTTT NOTATION")

                mapModel["Notation"] = fieldsId
            }
            "prefLabel"->{
                println("CONNNNNNNNCCEEEEEEEEEEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPTTTTTTTTTTTTTTTTTTTTTTTTT LABEL")

                mapModel["Label"] = fieldsId
            }
            "value"->{
                mapModel["ValueImt"] = fieldsId
            }
        }
        return mapModel
    }

    fun createModels(fields: Map<String,Collection<String>>,type:String): ModelJsonMapping?{
        println("CREATEEEEEE MODDDDEEEEEELLLLLLLLLLLSSSSSSSSSSSSSSS $type")
        return when(type){
            "Dataset" -> {
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
                         println("GEEEEEEETTTTTTTTT THEEEEEEMMMMMMMMEEEEESSSSSSSSS CREATEE1 ${fields.getValue("Theme")}")
                         fields.getValue("Theme")
                     }else{emptyList()},
                     publisher = if (fields.containsKey("Publisher")){
                         fields.getValue("Publisher").elementAt(0)
                     }else{null},
                     temporal = if (fields.containsKey("Temporal")){
                         fields.getValue("Temporal").elementAt(0)
                     }else{null}

                 )
            }
            "PeriodOfTime" -> {
                PeriodOfTimeJsonMapping(
                    id= fields.getValue("PeriodOfTimeId").elementAt(0),
                    start = fields.getValue("Start").elementAt(0),
                    end = fields.getValue("End").elementAt(0)
                )
            }
            "Distribution" -> {
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
            "Concept" -> {
                PublisherJsonMapping(
                    id = fields.getValue("PublisherId").elementAt(0),
                    notation = fields.getValue("Notation").elementAt(0),
                    label = fields.getValue("Label").elementAt(0),
                )
            }
            "IMT" -> {
                ImtJsonMapping(
                    id = fields.getValue("ImtId").elementAt(0),
                    value = fields.getValue("ValueImt").elementAt(0),
                )
            }
            "DurationDescription"->{
                AccrualPeriodicityJsonMapping(
                    value = fields.getValue("AccrualPeriodicity").elementAt(0)
                )

            }
            else -> {null}
        }
    }

}


