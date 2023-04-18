package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.csvServices.ProcessCsvServices
import es.unizar.iaaa.tfg.services.queryServices.CatalogRecordsServices
import es.unizar.iaaa.tfg.services.jsonServices.ProcessJsonServices
import org.apache.commons.validator.routines.UrlValidator
import org.json.JSONObject
import org.slf4j.LoggerFactory.getLogger


/*
 * Mutation Graphql implementation. Creates CatalogRecord and save it in database.
 * Furthermore, creates and saves different needed resources and auxiliary entities and relationships.
 */

@DgsComponent
class AddCatalogRecordMutation(
    private val catalogRecordServices: CatalogRecordsServices,
    private val processJsonServices: ProcessJsonServices,
    private val converter: ConvertersAuxiliarEntitiesTo,

    ) {
    val validator = UrlValidator()
    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput): CatalogRecordOutput
    {
        val catalog = input.inCatalog ?: "root"

        getLogger("logger").debug("CreateCRMutation")

        when(input.contentType){
            "txt/csv" -> {
                if(!input.content.isNullOrBlank()){
                    return catalogRecordServices.createEntitiesAndCRFromCsv(input, catalog)
                }else{
                    return Error("Error: Not data specified in content field.")
                }
            }
            "application/json" ->{
                var mapJsonTyped: Map<JSONObject, String>

                if (!input.contentUrl.isNullOrBlank()) {
                    mapJsonTyped = processJsonServices.getJSONArray(input.contentUrl!!)
                }
                else if(!input.content.isNullOrBlank()) {
                    mapJsonTyped = processJsonServices.getJSONArrayfromString(input.content)
                }else {
                    return Error("Error: CatalogRecord cannot be created due to lack of data")
                }
                val jsonFields = processJsonServices.processJson(mapJsonTyped)
                return catalogRecordServices.createEntitiesAndCRFromJson(jsonFields,input,catalog)
            }
            else ->{

                Error("Error: unknown input type")

            }
        }

        return Error("Error: unknown input type")

    }
}
/*

if (!input.contentUrl.isNullOrBlank()) {
            getLogger("logger").debug("PorcessJson: getJSONArray")
            mapJsonTyped = processJsonServices.getJSONArray(input.contentUrl!!)

        }
        else if(!input.content.isNullOrBlank()) {
            mapJsonTyped = processJsonServices.getJSONArrayfromString(input.content)
        }else {
            return Error("Error: no hay datos para crear un CatalogRecord")
        }
        getLogger("logger").debug("PorcessJson:PorcessJson")
        val jsonFields = processJsonServices.processJson(mapJsonTyped)
 */