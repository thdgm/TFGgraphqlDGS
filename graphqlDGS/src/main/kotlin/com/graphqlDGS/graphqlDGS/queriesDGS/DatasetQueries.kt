package com.graphqlDGS.graphqlDGS.queriesDGS

import com.graphqlDGS.graphqlDGS.domain.Properties
import com.graphqlDGS.graphqlDGS.initget.GetFieldService
import com.graphqlDGS.graphqlDGS.initget.InitService
import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument

@DgsComponent
class DatasetQueries(
    private val initService: InitService,
    private val getFieldService: GetFieldService
) {

    // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
    @DgsQuery
    fun dataset(@InputArgument id: String?): DatasetInCatalog? {
        if (id == null) {
            return null
        }

        return initService.showDatasetsInCatalog().firstOrNull {
            when (it) {
                is Dataset -> it.id == id
                is Catalog -> it.id == id
                is DatasetSeries -> it.id == id
                else -> false
            }
        }
    }

    // @DgsData inSeries: returns inSeries field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun inSeries(dfe: DgsDataFetchingEnvironment): Collection<DatasetSeries?> {
        return when (val dic: DatasetInCatalog? = dfe.getSource()) {
            is Dataset ->
                initService.showDatasetSeries().filter {
                    it?.id in getFieldService.loadDatasets(dic.id, Properties.INSERIES.n)
                }
            else -> listOf()
        }
    }

    // @DgsData distributions: returns distributions field of the corresponding Dataset
    @DgsData(parentType = "Dataset")
    fun distributions(dfe: DgsDataFetchingEnvironment): Collection<Distribution?> {
        return when (val dic: DatasetInCatalog? = dfe.getSource()) {
            is Dataset ->
                initService.showDistributions().filter {
                    it?.id in getFieldService.loadDatasets(dic.id, Properties.DISTRIBUTIONS.n)
                }
            else -> listOf()
        }
    }
}
