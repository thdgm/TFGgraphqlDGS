package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordOutput
import com.graphqlDGS.graphqlDGS.model.types.Error
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.CatalogRecordsServices
import es.unizar.iaaa.tfg.services.CatalogServices
import es.unizar.iaaa.tfg.services.mutationServices.ProcessJsonServices
import graphql.schema.DataFetchingEnvironment

@DgsComponent
class AddCatalogRecordMutation (
    private val catalogRecordServices: CatalogRecordsServices,
    private val processJsonServices: ProcessJsonServices,
){
    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput, dfe: DataFetchingEnvironment):CatalogRecordOutput
    {
        val catalog = input.inCatalog ?: "root"

        if(input.content == null){
            var mapJsonTyped = processJsonServices.getJSONArray(input.contentUrl!!)
            var jsonFields = processJsonServices.processJson(mapJsonTyped)

            return catalogRecordServices.createEntitiesAndCR(jsonFields,input.catalogRecorId,catalog)
            //val mapJson = crServices.getJSONArray(input.contentUrl!!)
            //return crServices.processUrl(mapJson,input.catalogRecorId) ?: Error("Error al crear el CR")
        }else{
            //Aqui llamo a una funcion que leerá el content, en función de contentType
            //crServices.processContent(input.content)
        }

        return Error("Error al procesar el Catalog Record")
    }
}