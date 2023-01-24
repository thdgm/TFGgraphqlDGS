package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.CatalogServices

@DgsComponent
class CatalogQueries(
    private val catalogServices: CatalogServices,
) {
    // @DgsQuery catalog: returns the catalog which id is the @InputArgument id
    @DgsQuery
    fun catalog(@InputArgument id: String?): Catalog? {
        if (id == null) {
            return null
        }
        return catalogServices.showCatalog(id)
    }

    // @DgsData catalogs: returns catalogs field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun catalogs(dfe: DgsDataFetchingEnvironment): Collection<Catalog?> {
        val ct: Catalog? = dfe.getSource()
        return catalogServices.showCalogsCatalog(ct!!.id)
    }

    // @DgsData records: returns records field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun records(dfe: DgsDataFetchingEnvironment): Collection<CatalogRecord?> {
        val ct: Catalog? = dfe.getSource()
        return catalogServices.showRecordsCatalog(ct!!.id)
    }

    // @DgsData services: returns services field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun services(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val ct: Catalog? = dfe.getSource()
        return catalogServices.showServicesCatalog(ct!!.id)
    }

    // @DgsData datasets: returns datasets field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun datasets(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
        val ct: Catalog? = dfe.getSource()
        return catalogServices.showDatasetsCatalog(ct!!.id)
    }

    // @DgsData resources: returns resources field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun resources(dfe: DgsDataFetchingEnvironment): Collection<ResourceInCatalog?> {
        val ct: Catalog? = dfe.getSource()
        return catalogServices.showResourcesCatalog(ct!!.id)
    }

    // @DgsQuery belongsToCatalog: returns the catalog which resource id belongs to
    @DgsQuery
    fun belongsToCatalog(@InputArgument id: String): Collection<Catalog?> = catalogServices.getCatalogOfResource(id)
}
