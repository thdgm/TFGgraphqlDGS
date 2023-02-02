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
import graphql.schema.DataFetchingEnvironment

@DgsComponent
class AddCatalogRecordMutation {
    @DgsMutation
    fun createCatalogRecord(@InputArgument input: CatalogRecordInput, dfe: DataFetchingEnvironment):CatalogRecordOutput
    {
    //TODO()
        var catalog = input?.inCatalog ?: "root"
        return Error("Error")
    }
}