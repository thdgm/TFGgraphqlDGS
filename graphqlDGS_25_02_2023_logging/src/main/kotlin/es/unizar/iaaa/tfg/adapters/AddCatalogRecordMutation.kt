package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.Logger
import es.unizar.iaaa.tfg.services.CatalogRecordsServices
import es.unizar.iaaa.tfg.services.mutationServices.ProcessJsonServices
import graphql.schema.DataFetchingEnvironment
import org.json.JSONObject
import org.slf4j.LoggerFactory.getLogger
import org.springframework.beans.factory.annotation.Autowired

@DgsComponent
class AddCatalogRecordMutation(
    private val catalogRecordServices: CatalogRecordsServices,
    private val processJsonServices: ProcessJsonServices,

) {

    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput, dfe: DataFetchingEnvironment): CatalogRecordOutput {
        val catalog = input.inCatalog ?: "root"
        var mapJsonTyped: Map<JSONObject, String>
        getLogger("logger").debug("CreateCRMutation")
        if (input.contentUrl != null) {
            getLogger("logger").debug("PorcessJson: getJSONArray")
            mapJsonTyped = processJsonServices.getJSONArray(input.contentUrl)

        }
        else if(input.content != null) {
            mapJsonTyped = processJsonServices.getJSONArrayfromString(input.content)
        }else {
            return Error("Error: no hay datos para crear un CatalogRecord")
        }
        getLogger("logger").debug("PorcessJson:PorcessJson")
        var jsonFields = processJsonServices.processJson(mapJsonTyped)
        return catalogRecordServices.createEntitiesAndCR(jsonFields,input.catalogRecorId,catalog)

    }
}
