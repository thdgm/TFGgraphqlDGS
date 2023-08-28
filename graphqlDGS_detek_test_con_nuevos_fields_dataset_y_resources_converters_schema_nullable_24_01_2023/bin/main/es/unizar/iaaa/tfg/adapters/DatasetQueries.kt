package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.CoberturaTemporal
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
class DatasetQueries(
    private val datasetServices: DatasetServices,
    private val datasetInCatalogServices: DatasetInCatalogServices,
    private val datasetServicesAuxiliarFields: DatasetServicesAuxiliarFields,
) {

    // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
    @DgsQuery
    fun dataset(@InputArgument id: String?): DatasetInCatalog? {
        if (id == null) {
            return null
        }
        return datasetInCatalogServices.showDatasetInCatalog(id)
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
        return datasetServicesAuxiliarFields.getKeywords(dic!!.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun spatial(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServicesAuxiliarFields.getLocations(dic!!.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun accrualPeriodicity(dfe: DgsDataFetchingEnvironment): Periodicidad? {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServicesAuxiliarFields.getAccrualPeriodicity(dic!!.id)
    }

    // @DgsData temporal: returns the temporal period that the dataset covers.
    @DgsData(parentType = "Dataset")
    fun temporal(dfe: DgsDataFetchingEnvironment): CoberturaTemporal? {
        val dic: DatasetInCatalog? = dfe.getSource()
        return datasetServicesAuxiliarFields.getTemporal(dic!!.id)
    }
}
