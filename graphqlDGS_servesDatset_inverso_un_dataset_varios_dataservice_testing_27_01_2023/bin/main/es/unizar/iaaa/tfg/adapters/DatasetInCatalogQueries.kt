package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.Keywords
import com.graphqlDGS.graphqlDGS.model.types.Periodicidad
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.DatasetInCatalogServices
import es.unizar.iaaa.tfg.services.DatasetServices
import es.unizar.iaaa.tfg.services.DatasetServicesAuxiliarFields

@DgsComponent
class DatasetInCatalogQueries(

    private val datasetServicesAuxiliarFields: DatasetServicesAuxiliarFields,
) {

    // @DgsData temporal: returns the inverse of servesDataset DatasetService's property
    @DgsData(parentType = "DatasetInCatalog")
    fun isServedBy(filter:String?,dfe: DgsDataFetchingEnvironment): Collection<DataService?>{
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServicesAuxiliarFields.getDatasetServices(filter,dic!!.id)
    }
}
