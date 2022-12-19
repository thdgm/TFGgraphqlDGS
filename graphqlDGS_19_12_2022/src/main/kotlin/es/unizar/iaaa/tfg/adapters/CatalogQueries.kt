package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.Properties
import es.unizar.iaaa.tfg.services.GetFieldService
import es.unizar.iaaa.tfg.services.InitService
import es.unizar.iaaa.tfg.services.InitServiceById
import es.unizar.iaaa.tfg.services.converts.ConvertersEntityTo

@DgsComponent
class CatalogQueries(
    private val initService: InitService,
    private val initServiceById: InitServiceById,
    private val getFieldService: GetFieldService,
    private val convertersEntityTo: ConvertersEntityTo
) {
    // @DgsQuery catalog: returns the catalog which id is the @InputArgument id
    @DgsQuery
    fun catalog(@InputArgument id: String?): Catalog? {
        if (id == null) {
            return null
        }
        return initServiceById.showCatalog(id)
    }

    // @DgsData catalogs: returns catalogs field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun catalogs(dfe: DgsDataFetchingEnvironment): Collection<Catalog?> {
        val ct: Catalog? = dfe.getSource()
        return initService.showCatalogs().filter {
            it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.CATALOGS.n)
        }
    }

    // @DgsData records: returns records field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun records(dfe: DgsDataFetchingEnvironment): Collection<CatalogRecords?> {
        val ct: Catalog? = dfe.getSource()
        return initService.showCatalogRecords().filter {
            it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.RECORDS.n)
        }
    }

    // @DgsData services: returns services field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun services(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val ct: Catalog? = dfe.getSource()
        return convertersEntityTo.toDataServices(initService.showDataServices()).filter {
            it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.SERVICES.n)
        }
    }

    // @DgsData datasets: returns datasets field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun datasets(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
        val ct: Catalog? = dfe.getSource()

        val cat =
            initService.showCatalogs().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.CATALOGS.n)
            }
        val d =
            initService.showDatasets().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.DATSETS.n)
            }
        val ds =
            initService.showDatasetSeries().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.DATASERIES.n)
            }
        return cat + d + ds
    }

    // @DgsData resources: returns resources field of the corresponding Catalog
    @DgsData(parentType = "Catalog")
    fun resources(dfe: DgsDataFetchingEnvironment): Collection<ResourceInCatalog?> {
        val ct: Catalog? = dfe.getSource()
        val cat =
            initService.showCatalogs().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.CATALOGS.n)
            }
        val d =
            initService.showDatasets().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.DATSETS.n)
            }
        val ds =
            initService.showDatasetSeries().filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.DATASERIES.n)
            }
        val dSe = convertersEntityTo.toDataServices(initService.showDataServices()).filter {
                it?.id in getFieldService.loadCatalogs(ct!!.id, Properties.SERVICES.n)
            }

        return cat + d + ds + dSe
    }
}
