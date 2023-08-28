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
import graphql.schema.DataFetchingEnvironment

@DgsComponent
class AddCatalogRecordMutation (
    private val crServices: CatalogRecordsServices,
){
    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput, dfe: DataFetchingEnvironment):CatalogRecordOutput
    {
        println("INPUT")
        println(input)

        if(input.content == null){
            //Aqui llamo a una funcion que leerá la url, en función de contentType
            println("NULLLLLLL")
            val mapJson = crServices.getJSONArray(input.contentUrl!!)
            crServices.processUrl(mapJson)
            return CatalogRecord("cRPrueba", primaryTopic = Catalog("catalog1"))
        }else{
            //Aqui llamo a una funcion que leerá el content, en función de contentType
            crServices.processContent(input.content)
        }

        return Error("Error")
    }
}