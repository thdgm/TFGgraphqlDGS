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
        println("LETSSSSSS11")
        return catalogServices.getCatalog(id)
    }

    // @DgsData catalogs: returns catalogs field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun catalogs(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<Catalog?> {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS12")
        return catalogServices.getCalogsCatalog(ct.id,page,pageSize)
    }

    // @DgsData records: returns records field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun records(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<CatalogRecord?> {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS13")
        return catalogServices.getRecordsCatalog(ct.id,page,pageSize)
    }

    // @DgsData services: returns services field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun services(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<DataService?> {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS14")
        return catalogServices.getServicesCatalog(ct.id,page,pageSize)
    }

    // @DgsData datasets: returns datasets field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun datasets(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int): Collection<DatasetInCatalog?> {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS15")
        return catalogServices.getDatasetsCatalog(ct.id,page,pageSize)
    }

    // @DgsData resources: returns resources field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun resources(dfe: DgsDataFetchingEnvironment,@InputArgument page: Int, @InputArgument pageSize: Int, @InputArgument type: String): Collection<ResourceInCatalog?> {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS16")
        return catalogServices.getResourcesCatalog(ct.id,page,pageSize, type)
    }
    // @DgsData numberOfResources: returns number of resources within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfResources(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS17")
        return catalogServices.getNumberResourcesCatalog(ct.id)
    }

    // @DgsData numberOfDatasets: returns number of datasets within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfDatasets(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS18")
        return catalogServices.getNumberDatasetsCatalog(ct.id)
    }

    // @DgsData numberOfDatasetSeries: returns number of datasetSeries within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfDatasetSeries(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS19")
        return catalogServices.getNumberDatasetSeriesCatalog(ct.id)
    }
    // @DgsData numberOfDataServices: returns number of dataServices within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfDataServices(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS20")
        return catalogServices.getNumberDataServicesCatalog(ct.id)
    }
    // @DgsData numberOfResources: returns number of catalogs within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfCatalogs(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS21")
        return catalogServices.getNumberCatalogsCatalog(ct.id)
    }
    // @DgsData numberOfRecords: returns number of records within the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfRecords(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS22")
        return catalogServices.getNumberRecordsCatalog(ct.id)
    }
    // @DgsData numberOfServedBy: returns number of services which served  the catalog
    @DgsData(parentType = "Catalog")
    fun numberOfServedBy(dfe: DgsDataFetchingEnvironment): Int? {
        val ct: Catalog = dfe.getSource()
        println("LETSSSSSS23")
        return catalogServices.getNumberServedServicesCatalog(ct.id)
    }
}
