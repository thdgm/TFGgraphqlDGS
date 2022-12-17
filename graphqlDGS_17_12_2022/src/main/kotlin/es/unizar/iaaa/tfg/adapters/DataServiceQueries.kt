package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.domain.Properties
import es.unizar.iaaa.tfg.services.GetFieldService
import es.unizar.iaaa.tfg.services.InitService
import es.unizar.iaaa.tfg.services.InitServiceById

@DgsComponent
class DataServiceQueries(
    private val initService: InitService,
    private val initServiceById: InitServiceById,
    private val getFieldService: GetFieldService
) {
    // @DgsQuery dataService: returns the dataService which id is the @InputArgument id
    @DgsQuery
    fun dataService(@InputArgument id: String?): DataService? {
        if (id == null) {
            return null
        }
        return initServiceById.showDataService(id)
    }

    // @DgsData servesDataset: returns servesDataset field of the corresponding DataService
    @DgsData(parentType = "DataService")
    fun servesDataset(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
        val dserv: DataService? = dfe.getSource()
        val cat = initService.showCatalogs().filter {
            it?.id in getFieldService.loadServices(
                dserv!!.id,
                Properties.CATALOGS.n
            )
        }
        val d = initService.showDatasets().filter {
            it?.id in getFieldService.loadServices(
                dserv!!.id,
                Properties.DATSETS.n
            )
        }
        val ds = initService.showDatasetSeries().filter {
            it?.id in getFieldService.loadServices(
                dserv!!.id,
                Properties.DATASERIES.n
            )
        }
        return cat + d + ds
    }
}
