package es.unizar.iaaa.tfg.services.jsonServices

import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import org.apache.commons.validator.routines.UrlValidator
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service

/*
 * These services help to process JSON file in order to map all the needed
 * metadata. Then, another services will create the corresponding objects.
 */

interface ProcessJsonServices {
    fun getJSONArray(url: String): Map<JSONObject, String>
    fun processJson(map: Map<JSONObject, String>):  MutableMap<ModelJsonMapping,String>
    fun getJSONArrayfromString(content: String): Map<JSONObject, String>
}

@Service
class ProcessJsonServicesImpl(
    private val resourceLoader: ResourceLoader,
    private val jsonModelServices:JsonModelServices,

    ) : ProcessJsonServices {

    val validator = UrlValidator()

    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArray(url: String): Map<JSONObject, String> =
        JSONObject(String(resourceLoader.getResource(url)
            .inputStream.readAllBytes())).getJSONArray("@graph").toList()
            .map{o -> o to o["@type"] as String}.toMap()


    // Get JSON using resourceLoader and parse it into [jsonObject-type] map
    override fun getJSONArrayfromString(content: String): Map<JSONObject, String> =
        JSONObject(content).getJSONArray("@graph").toList()
            .map{o -> o to o["@type"] as String}.toMap()


    // Process map [JsonObject-type] using auxiliar function setupFields
    override fun processJson(map: Map<JSONObject, String>): MutableMap<ModelJsonMapping,String>  {
        val modelTypeMap = mutableMapOf<ModelJsonMapping,String>()
        val mapModel = mutableMapOf<String,Collection<String>>()
        map.map { //(key, value) ->
           // goodMap += setUpFields(value.split(":").elementAt(1), key)
            val type = it.value.split(":").elementAt(1)
            val json= it.key
            it.key.keys().forEach {

                val keySplit = it.toString().split(":")
                val element = json.get(it.toString())
                val key =
                    if(keySplit.size == 2 && keySplit.elementAt(0) != "time") keySplit.elementAt(1)
                    else keySplit.elementAt(0)
                val rango =
                    if( keySplit.elementAt(0) == "time") keySplit.elementAt(1)
                    else null
                mapModel += processJsonElement(element, key,type, mapModel,rango)
            }
            modelTypeMap += createModelMapping(mapModel,type)
            mapModel.clear()
        }
        return modelTypeMap
    }


    /*
     *  Cast JSONArray into a List in order to make
     * the processing easier
     *
     */
    fun JSONArray.toList() : List<JSONObject> {
        var lisJsonObject = listOf<JSONObject>()
        for (i in 0 until this.length()) {
            lisJsonObject += this.getJSONObject(i)

        }
        return lisJsonObject
    }

    /*
     *  Process all fields of JsonElement and keep them within a map
     * in order to create the corresponding ModelJsonMapping
     */
    fun processJsonElement(
        element: Any?,
        key: String,
        type: String,
        mapModel: MutableMap<String, Collection<String>>,
        rango:String?
    ): MutableMap<String, Collection<String>> =
        when(element){
            is JSONObject -> jsonModelServices.processObjectByKey(key, element,type,mapModel,rango)
            is JSONArray -> jsonModelServices.processArrayByKey(key,element,type,mapModel)
            is String -> jsonModelServices.processStringByKey(key, element,type,mapModel)
            else -> mutableMapOf()
        }

    /*
     *  Create and add to the result map a ModelJsonMapping according to type
     */
    fun createModelMapping(
        mapModel: MutableMap<String, Collection<String>>,
        type:String
    ): MutableMap<ModelJsonMapping,String> {
        val modelTypeMap = mutableMapOf<ModelJsonMapping,String>()
        when(val model = jsonModelServices.createModels(mapModel,type)){
            is DistributionJsonMapping -> modelTypeMap[model] = "Distribution"
            is DatasetJsonMapping -> modelTypeMap[model] = "Dataset"
            is PeriodOfTimeJsonMapping -> modelTypeMap[model] = "PeriodOfTime"
            is PublisherJsonMapping -> modelTypeMap[model] = "Publisher"
            is ImtJsonMapping -> modelTypeMap[model] = "Format"
            is AccrualPeriodicityJsonMapping -> modelTypeMap[model] = "AccrualPeriodicity"
        }
        return modelTypeMap
    }
}

