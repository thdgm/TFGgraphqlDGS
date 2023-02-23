package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
import org.apache.commons.validator.routines.UrlValidator
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

    val validator = UrlValidator()

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
            val type = types.getJSONObject(i).getString("@type")
            typeJson[types.getJSONObject(i)] = type
        }
        return typeJson
    }

    // Process map [JsonObject-type] using auxiliar function setupFields
    override fun processJson(map: Map<JSONObject, String>): MutableMap<ModelJsonMapping,String>  {
        var goodMap = mutableMapOf<ModelJsonMapping,String>()
        map.forEach { (key, value) ->
            goodMap = setUpFields(value.split(":").elementAt(1), key,goodMap)
        }
        return goodMap
    }

    // Auxiliar function: Do appropiate tasks for each type
    fun setUpFields(type: String, json: JSONObject, goodMap: MutableMap<ModelJsonMapping,String>): MutableMap<ModelJsonMapping,String> {
        var mapModel = mutableMapOf<String,Collection<String>>()
        val keys = json.keys()
        while(keys.hasNext()) {
            val keys = keys.next().toString()
            val v = json.get(keys)
            val keySplit = keys.split(":")
            var key = keySplit.elementAt(0)
            var rango:String? = null

            if (keySplit.size == 2 && keySplit.elementAt(0) != "time") {
                key = keySplit.elementAt(1)
            }else if( keySplit.elementAt(0) == "time"){
                rango = keySplit.elementAt(1)
            }

            mapModel = when(v){
                is JSONObject -> processObjectByKey(key, v,type,mapModel,rango)
                is JSONArray -> processArrayByKey(key,v,type,mapModel)
                is String -> processStringByKey(key, v,type,mapModel)
                else -> break
            }
        }

        when(val model = createModels(mapModel,type)){
            is DistributionJsonMapping -> goodMap[model] = "Distribution"
            is DatasetJsonMapping -> goodMap[model] = "Dataset"
            is PeriodOfTimeJsonMapping -> goodMap[model] = "PeriodOfTime"
            is PublisherJsonMapping -> goodMap[model] = "Publisher"
            is ImtJsonMapping -> goodMap[model] = "Format"
            is AccrualPeriodicityJsonMapping -> goodMap[model] = "AccrualPeriodicity"
        }
        return goodMap
    }
    fun processArrayByKey(
        k: String,
        array: JSONArray,
        type: String,
        fields: MutableMap<String, Collection<String>>
    ): MutableMap<String, Collection<String>> {
        when (k) {
            "keyword" -> {
                val fieldsValue = mutableListOf<String>()
                val fieldsLang = mutableListOf<String>()

                for (i in 0 until array.length()) {
                    fieldsValue.add(i, array.getJSONObject(i).getString("@value"))
                    fieldsLang.add(i, array.getJSONObject(i).getString("@language"))
                }
                fields["KeywordsWord"] = fieldsValue
                fields["KeywordsLang"] = fieldsLang

            }

            "distribution" -> {

                val fieldsDistIds = mutableListOf<String>()

                for (i in 0 until array.length()) {
                    fieldsDistIds.add(i, array.getJSONObject(i).getString("@id"))
                }
                fields["Distributions"] = fieldsDistIds
            }

            "description" -> {
                val fieldsValue = mutableListOf<String>()
                val fieldsLang = mutableListOf<String>()
                for (i in 0 until array.length()) {
                    fieldsValue.add(i, array.getJSONObject(i).getString("@value"))
                    fieldsLang.add(i, array.getJSONObject(i).getString("@language"))
                }
                fields["DescriptionsText"] = fieldsValue
                fields["DescriptionsLang"] = fieldsLang
            }

            "language" -> {
                val fieldsLangs = mutableListOf<String>()

                for (i in 0 until array.length()) {
                    println("LANGUAGE: $array.getString(i)")
                    fieldsLangs.add(i, array.getString(i))
                }
                fields["DatasetLanguages"] = fieldsLangs
            }

            "spatial" -> {
                val fieldsSpatialIds = mutableListOf<String>()

                for (i in 0 until array.length()) {
                    fieldsSpatialIds.add(i, array.getJSONObject(i).getString("@id"))
                }
                fields["Spatial"] = fieldsSpatialIds
            }

            "title" -> {
                val fieldsValue = mutableListOf<String>()
                val fieldsLang = mutableListOf<String>()

                for (i in 0 until array.length()) {
                    fieldsValue.add(i, array.getJSONObject(i).getString("@value"))
                    fieldsLang.add(i, array.getJSONObject(i).getString("@language"))
                }
                val key = when (type) {
                    "Dataset" -> "DatasetTitles"
                    "Distribution" -> "DistributionTitles"
                    else -> null
                }
                if (key != null) {
                    fields[key + "Text"] = fieldsValue
                    fields[key + "Lang"] = fieldsLang
                }

            } //Distribution o Dataset
            "theme" -> {
                val fieldsTheme = mutableListOf<String>()
                for (i in 0 until array.length()) {
                    fieldsTheme.add(i, array.getJSONObject(i).getString("@id"))
                }
                fields["Theme"] = fieldsTheme
            }

        }
        return fields
    }

    fun processObjectByKey(
        k: String,
        objeto: JSONObject,
        type: String,
        fields: MutableMap<String, Collection<String>>,
        rango: String?
    ): MutableMap<String, Collection<String>> {
        when (k) {
            "keyword" -> {
                val fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                val fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                fields["KeywordsWord"] = fieldsValue
                fields["KeywordsLang"] = fieldsLang
            }

            "distribution" -> {
                val fieldsDistIds = mutableListOf<String>(objeto.getString("@id"))
                fields["Distributions"] = fieldsDistIds
            }

            "description" -> {
                val fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                val fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                fields["DescriptionsText"] = fieldsValue
                fields["DescriptionsLang"] = fieldsLang
            }

            "language" -> {
                val fieldsLangs = mutableListOf<String>(objeto.getString("@id"))
                fields["DatasetLanguages"] = fieldsLangs
            }

            "spatial" -> {
                val fieldsSpatialIds = mutableListOf<String>(objeto.getString("@id"))
                fields["Spatial"] = fieldsSpatialIds
            }

            "title" -> {
                val fieldsValue = mutableListOf<String>(objeto.getString("@value"))
                val fieldsLang = mutableListOf<String>(objeto.getString("@language"))
                val key = when (type) {
                    "Dataset" -> "DatasetTitles"
                    "Distribution" -> "DistributionTitles"
                    else -> null
                }
                if (key != null) {
                    fields[key + "Text"] = fieldsValue
                    fields[key + "Lang"] = fieldsLang
                }
            }

            "modified" -> {
                val fieldsModified = mutableListOf<String>(objeto.getString("@value"))
                fields["Modified"] = fieldsModified
            }

            "issued" -> {
                val fieldsIssued = mutableListOf<String>(objeto.getString("@value"))
                fields["Issued"] = fieldsIssued
            }

            "startDate" -> {
                val fieldsStart = mutableListOf<String>(objeto.getString("@value"))
                fields["Start"] = fieldsStart
            }

            "endDate" -> {
                val fieldsEnd = mutableListOf<String>(objeto.getString("@value"))
                fields["End"] = fieldsEnd
            }

            "license" -> {
                val fieldsLicense = mutableListOf<String>(objeto.getString("@id"))
                fields["License"] = fieldsLicense
            }

            "theme" -> {
                val fieldsTheme = mutableListOf<String>(objeto.getString("@id"))
                fields["Theme"] = fieldsTheme
            }

            "byteSize" -> {
                val fieldsByteSize = mutableListOf<String>(objeto.getString("@value"))
                fields["ByteSize"] = fieldsByteSize
            }

            "publisher" -> {
                val fieldsPublisherId = mutableListOf<String>(objeto.getString("@id"))
                fields["Publisher"] = fieldsPublisherId
            }

            "format" -> {
                val fieldsFormatId = mutableListOf<String>(objeto.getString("@id"))
                fields["Format"] = fieldsFormatId
            }

            "time" -> {
                val valor = objeto.getString("@value")
                val time = "time:$rango"
                val fieldsTime = mutableListOf("$time $valor")
                fields["AccrualPeriodicity"] = fieldsTime
                println("AccrualPeriodicity: $fieldsTime")
            }

            "temporal" -> {
                val fieldsTemporalId = mutableListOf<String>(objeto.getString("@id"))
                fields["Temporal"] = fieldsTemporalId
            }

        }
        return fields

    }
    fun processStringByKey(
        k: String,
        cadena: String,
        type: String,
        fields: MutableMap<String, Collection<String>>
    ): MutableMap<String, Collection<String>> {
        val fieldsId = mutableListOf(cadena)
        when (k) {
            "@id" -> {
                val key = when (type) {
                    "Dataset" -> "DatasetId"
                    "Distribution" -> "DistributionId"
                    "Concept" -> "PublisherId"
                    "IMT" -> "ImtId"
                    "PeriodOfTime" -> "PeriodOfTimeId"
                    else -> null
                }
                if (key != null) fields[key] = fieldsId
                if (key == "DistributionId" || key == "DatasetId") {
                    val identifiers = fields[key + "entifiers"]?.plus(fieldsId)
                    fields[key + "entifiers"] = identifiers ?:fieldsId
                }
            }

            "accessURL" -> {
                if (validator.isValid(cadena))   fields["AccessUrl"] = fieldsId
            }

            "language" -> {
                fields["DatasetLanguages"] = fieldsId
            }

            "identifier" -> {

                val key = when (type) {
                    "Dataset" -> "DatasetIdentifiers"
                    "Distribution" -> "DistributionIdentifiers"
                    else -> null
                }
                if (key != null) {
                    val identifiers = fields[key]?.plus(fieldsId)
                    fields[key] = identifiers ?: fieldsId
                }
            }

            "notation" -> {
                fields["Notation"] = fieldsId
            }

            "prefLabel" -> {
                fields["Label"] = fieldsId
            }

            "value" -> {
                fields["ValueImt"] = fieldsId
            }
        }
        return fields
    }

    fun createModels(fields: Map<String,Collection<String>>,type:String): ModelJsonMapping?{
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
                     identifier = if (fields.containsKey("DatasetIdentifiers")){
                         fields.getValue("DatasetIdentifiers")
                     }else{ emptyList() },
                     license = if (fields.containsKey("License")){
                         fields.getValue("License").elementAt(0)
                     }else{null},
                     theme = if (fields.containsKey("Theme")){
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
                        }else{null},
                    titlesText = if (fields.containsKey("DistributionTitlesText")){
                        fields.getValue("DistributionTitlesText")
                        }else{ emptyList() },
                    titlesLang = if (fields.containsKey("DistributionTitlesLang")){
                        fields.getValue("DistributionTitlesLang")
                        }else{ emptyList() },
                    byteSize = if (fields.containsKey("ByteSize")){
                         Integer.parseInt( fields.getValue("ByteSize").elementAt(0))
                        }else{ null },
                    identifier = if (fields.containsKey("DistributionIdentifiers")){
                        fields.getValue("DistributionIdentifiers")
                        }else{ emptyList() },
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


