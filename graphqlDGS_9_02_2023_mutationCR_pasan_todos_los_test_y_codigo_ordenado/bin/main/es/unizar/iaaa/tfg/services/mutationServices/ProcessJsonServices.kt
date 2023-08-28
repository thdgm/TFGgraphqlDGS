package es.unizar.iaaa.tfg.services.mutationServices

import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service

interface ProcessJsonServices {
    fun getJSONArray(url: String): Map<JSONObject, String>
    fun processJson(map: Map<JSONObject, String>): MutableMap<String, Any>
    fun getJSONArrayfromString(content: String): Map<JSONObject, String>
}

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
    override fun processJson(map: Map<JSONObject, String>): MutableMap<String, Any> {
        var fieldsMap = mutableMapOf<String, Any>()
        map.forEach { (key, value) ->
            fieldsMap = setUpFields(value, key, fieldsMap)
        }
        return fieldsMap
    }

    // Auxiliar function: Do appropiate tasks for each type
    fun setUpFields(type: String, json: JSONObject, fieldsMap: MutableMap<String, Any>): MutableMap<String, Any> {
        when (type) {
            "dct:PeriodOfTime" -> {
                fieldsMap["start"] = json.getJSONObject("schema:startDate").getString("@value")
                fieldsMap["end"] = json.getJSONObject("schema:endDate").getString("@value")
            }

            "dcat:Distribution" -> {
                if (fieldsMap["idDistribution"] == null) {
                    fieldsMap["idDistribution"] = mutableListOf(json.getString("@id"))
                    fieldsMap["accessURL"] = mutableListOf(json.getString("dcat:accessURL"))
                    fieldsMap["titleDistribution"] = mutableListOf(json.getJSONObject("dct:title"))
                } else {
                    val idDist: MutableCollection<Any> = fieldsMap["idDistribution"] as MutableCollection<Any>
                    val accessURL: MutableCollection<Any> = fieldsMap["accessURL"] as MutableCollection<Any>
                    val titleDistribution: MutableCollection<Any> =
                        fieldsMap["titleDistribution"] as MutableCollection<Any>
                    idDist?.add(json.getString("@id"))
                    accessURL?.add(json.getString("dcat:accessURL"))
                    titleDistribution?.add(json.getJSONObject("dct:title"))
                    fieldsMap["idDistribution"] = idDist
                    fieldsMap["accessURL"] = accessURL
                    fieldsMap["titleDistribution"] = titleDistribution
                }
            }

            "dcat:Dataset" -> {
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

            "dct:IMT" -> println("IMT, formato, no hago nada por ahora")
            "skos:Concept" -> println("skos:Concept, no hago nada por ahora")
        }
        return fieldsMap
    }
}
