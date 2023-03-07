package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
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

    // @DgsData inCatalog: returns catalogs which the CR is in
    @DgsData(parentType = "CatalogRecord")
    fun inCatalog(dfe: DgsDataFetchingEnvironment): Collection<Catalog?> {
        val cr: CatalogRecord = dfe.getSource()
        return catalogRecordsServices.getInCatalog(cr.id)
    }

    // @DgsData contentType: returns metadata content type
    @DgsData(parentType = "CatalogRecord")
    fun contentType(dfe: DgsDataFetchingEnvironment): String {
        // TODO()
        val cr: CatalogRecord? = dfe.getSource()
        return ""
    }

    // @DgsData content: returns content as string
    @DgsData(parentType = "CatalogRecord")
    fun content(dfe: DgsDataFetchingEnvironment): String {
        // TODO()
        val cr: CatalogRecord? = dfe.getSource()
        return ""
    }

    // @DgsData contentURL: returns record location
    @DgsData(parentType = "CatalogRecord")
    fun contentURL(dfe: DgsDataFetchingEnvironment): String {
        // TODO()
        val cr: CatalogRecord? = dfe.getSource()
        return ""
    }

    // @DgsData hints: returns extra process apart of contentType
    @DgsData(parentType = "CatalogRecord")
    fun hints(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        // TODO()
        val cr: CatalogRecord? = dfe.getSource()
        return emptyList()
    }
}
