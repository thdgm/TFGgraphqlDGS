package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
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

    ) {
    val validator = UrlValidator()
    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput): CatalogRecordOutput
    {
        val catalog = input.inCatalog ?: "root"
        var mapJsonTyped: Map<JSONObject, String>
        getLogger("logger").debug("CreateCRMutation")


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
        return catalogRecordServices.createEntitiesAndCR(jsonFields,input,catalog)

    }
}
