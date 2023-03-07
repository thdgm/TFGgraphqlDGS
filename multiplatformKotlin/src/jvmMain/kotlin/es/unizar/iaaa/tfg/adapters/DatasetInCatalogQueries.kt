package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import es.unizar.iaaa.tfg.services.DatasetServicesAuxiliarFields

@DgsComponent
class DatasetInCatalogQueries(

    private val datasetServicesAuxiliarFields: DatasetServicesAuxiliarFields,
) {

    // @DgsData temporal: returns the inverse of servesDataset DatasetService's property
    @DgsData(parentType = "DatasetInCatalog")
    fun isServedBy(filter: String?, dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getDatasetServices(filter, dic.id)
    }
}
