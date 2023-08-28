package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import com.netflix.graphql.dgs.*
import es.unizar.iaaa.tfg.domain.Properties
import es.unizar.iaaa.tfg.services.InitServiceById

@DgsComponent
class CatalogRecordQueries(
    private val initServiceById: InitServiceById,
) {
    // @DgsQuery catalogRecord: returns the catalogRecord which id is the @InputArgument id
    @DgsQuery
    fun catalogRecord(@InputArgument id: String?): CatalogRecords? {
        if (id == null) {
            return null
        }
        return initServiceById.showCatalogRecord(id)
    }


}
