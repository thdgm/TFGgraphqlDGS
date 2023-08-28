package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.*
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.DatasetServices

@DgsComponent
class DatasetQueries(
    private val datasetServices: DatasetServices,
) {

    // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
    @DgsQuery
    fun dataset(@InputArgument id: String?): DatasetInCatalog? {
        if (id == null) {
            return null
        }
        return datasetServices.showDatasetInCatalog(id)
    }

    // @DgsData inSeries: returns inSeries field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun inSeries(dfe: DgsDataFetchingEnvironment): Collection<DatasetSeries?> {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.showInSeriesDataset(dic!!.id)
    }

    // @DgsData distributions: returns distributions field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun distributions(dfe: DgsDataFetchingEnvironment): Collection<Distribution?> {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.showDistributionsDataset(dic!!.id)
    }

    // @DgsData keywords: returns keywords field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun keywords(dfe: DgsDataFetchingEnvironment): Collection<Keywords?> {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.getKeywords(dic!!.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun spatial(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.getLocations(dic!!.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun AccrualPeriodicity(dfe: DgsDataFetchingEnvironment): Periodicidad? {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.getAccrualPeriodicity(dic!!.id)
    }

    // @DgsData temporal: returns the temporal period that the dataset covers.
    @DgsData(parentType = "Dataset")
    fun temporal(dfe: DgsDataFetchingEnvironment): CoberturaTemporal? {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServices.getTemporal(dic!!.id)
    }
}
