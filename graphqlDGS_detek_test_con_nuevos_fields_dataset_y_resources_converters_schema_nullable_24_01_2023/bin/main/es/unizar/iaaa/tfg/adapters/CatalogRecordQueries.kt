package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.CatalogRecordsServices

@DgsComponent
class CatalogRecordQueries(
    private val catalogRecordsServices: CatalogRecordsServices,

) {
    // @DgsQuery catalogRecord: returns the catalogRecord which id is the @InputArgument id
    @DgsQuery
    fun catalogRecord(@InputArgument id: String?): CatalogRecord? {
        if (id == null) {
            return null
        }
        return catalogRecordsServices.showCatalogRecord(id)
    }
}
