package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.PeriodOfTime
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.services.queryServices.DatasetInCatalogServices
import es.unizar.iaaa.tfg.services.queryServices.DatasetServices
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.DatasetServicesAuxiliarFields
import org.slf4j.LoggerFactory.getLogger
import java.time.LocalDateTime

/*
 * Query Graphql implementation. Here there are the different fields of Dataset type.
 * For one another, we call different services which return the corresponding type value.
 */
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
        return datasetInCatalogServices.getDatasetInCatalog(id)
    }

    // @DgsData inSeries: returns inSeries field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun inSeries(filter: String?, dfe: DgsDataFetchingEnvironment): Collection<DatasetSeries?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServices.getInSeriesDataset(filter, dic.id)
    }

    // @DgsData distributions: returns distributions field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun distributions(dfe: DgsDataFetchingEnvironment): Collection<Distribution?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServices.getDistributionsDataset(dic.id)
    }

    // @DgsData keywords: returns keywords field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun keywords(dfe: DgsDataFetchingEnvironment): Collection<LangString?> {
        val dic: DatasetInCatalog = dfe.getSource()
        getLogger("logger").debug("KEYYYYYYYYYYYYYYWOOOOOOORRRRRRRDDDDDDDDSSSSSSSS")
        return datasetServicesAuxiliarFields.getKeywords(dic.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun spatial(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getLocations(dic.id)
    }

    // @DgsData spatial: returns locations, spatial field, of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun accrualPeriodicity(dfe: DgsDataFetchingEnvironment): String? {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getAccrualPeriodicity(dic.id)
    }

    // @DgsData temporal: returns the temporal period that the dataset covers.
    @DgsData(parentType = "Dataset")
    fun temporal(dfe: DgsDataFetchingEnvironment): PeriodOfTime? {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getTemporal(dic.id)
    }

    // @DgsData validity: returns, if it exists when the resource expires, otherwise returns null.
    @DgsData(parentType = "Dataset")
    fun validity(dfe: DgsDataFetchingEnvironment): LocalDateTime? {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getValidity(dic.id)
    }
    // @DgsData regulations: returns, if it exists a list with the regulations
    // of the dataset with identifier id, otherwise returns null.
    @DgsData(parentType = "Dataset")
    fun regulations(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getRegulations(dic.id)
    }
    // @DgsData relatedResources: returns, if it exists a list with the related resources
    // of the dataset with identifier id, otherwise returns null.
    @DgsData(parentType = "Dataset")
    fun relatedResources(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val dic: DatasetInCatalog = dfe.getSource()
        return datasetServicesAuxiliarFields.getRelatedResources(dic.id)
    }
}
