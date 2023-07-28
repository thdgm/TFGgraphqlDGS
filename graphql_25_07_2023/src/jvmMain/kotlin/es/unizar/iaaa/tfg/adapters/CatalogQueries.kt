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
import es.unizar.iaaa.tfg.services.queryServices.CatalogServices


/*
 * Query Graphql implementation. Here there are the different fields of Catalog type.
 * For one another, we call different services which return the corresponding type value.
 */

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
        return catalogServices.getCatalog(id)
    }

    // @DgsData catalogs: returns catalogs field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun catalogs(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<Catalog?> {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getCalogsCatalog(ct.id,page,pageSize)
    }

    // @DgsData records: returns records field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun records(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<CatalogRecord?> {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getRecordsCatalog(ct.id,page,pageSize)
    }

    // @DgsData services: returns services field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun services(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<DataService?> {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getServicesCatalog(ct.id,page,pageSize)
    }

    // @DgsData datasets: returns datasets field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun datasets(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<DatasetInCatalog?> {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getDatasetsCatalog(ct.id,page,pageSize)
    }

    // @DgsData resources: returns resources field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun resources(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<ResourceInCatalog?> {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getResourcesCatalog(ct.id,page,pageSize)
    }
    // @DgsData numberOfResources: returns number of resources within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfResources(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        return catalogServices.getNumberResourcesCatalog(ct.id)
    }
}
