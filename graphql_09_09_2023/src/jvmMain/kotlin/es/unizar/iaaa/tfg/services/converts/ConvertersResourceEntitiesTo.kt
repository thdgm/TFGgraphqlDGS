package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import org.springframework.stereotype.Service

interface ConvertersResourcesEntitiesTo {
    fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord
    fun toCatalogRecordById(cre: String,pto: ResourceEntity): CatalogRecord
    fun toDataService(res: ResourceEntity?): DataService?
    fun toDataServiceById(resId: String?): DataService?
    fun toDataset(res: DatasetEntity?): Dataset?
    fun toDatasetById(resId: String?): Dataset?
    fun toCatalog(res: ResourceEntity): Catalog?
    fun createResource(res: ResourceEntity): ResourceInCatalog
    fun createDataset(res: ResourceEntity): DatasetInCatalog
    fun catalogEntitytoCatalog(res: CatalogEntity?): Catalog?
    fun catalogIdtoCatalog(resId: String?): Catalog?
    fun toDatasetSeries(ds: DatasetSeriesEntity?): DatasetSeries?
    fun toDatasetSeriesById(dsId: String?): DatasetSeries?
    fun toDistribution(dist: DistributionEntity?): Distribution?
    fun toDistributionByID(distId: String?): Distribution?
}

@Service
class ConvertersResourceEntitiesToImpl : ConvertersResourcesEntitiesTo {

    // Cast ResourceEntity into DataService
    override fun toDataService(res: ResourceEntity?): DataService? =
        if (res != null && res.type == "data_service") DataService(res.id) else null
    override fun toDataServiceById(resId: String?): DataService? = if (resId.isNullOrBlank()) null else DataService(resId)

    // Cast DatasetEntity into Dataset
    override fun toDataset(res: DatasetEntity?): Dataset? = if(res != null) Dataset(res.id) else null
    override fun toDatasetById(resId: String?): Dataset? = if(resId != null) Dataset(resId) else null
    // Cast ResourceEntity into Catalog
    override fun toCatalog(res: ResourceEntity): Catalog? = if (res.type == "catalog")  Catalog(res.id) else null


    // Cast CatalogEntity into Catalog
    override fun catalogEntitytoCatalog(res: CatalogEntity?): Catalog? = if (res != null) Catalog(res.id) else null
    override fun catalogIdtoCatalog(resId: String?): Catalog? = if (resId != null) Catalog(resId) else null

    // Cast CatalogRecordEntity into CatalogRecord
    override fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord =
        CatalogRecord(cre.id, cre.title, primaryTopic = createResource(cre.resource))

    override fun toCatalogRecordById(cre: String, pto: ResourceEntity): CatalogRecord =
        CatalogRecord(cre, primaryTopic = createResource(pto))

    // Cast DatasetSeriesEntity into DatasetSeries
    override fun toDatasetSeries(ds: DatasetSeriesEntity?): DatasetSeries? =
        if (ds != null) DatasetSeries(ds.id)  else null
    override fun toDatasetSeriesById(dsId: String?): DatasetSeries? = if (dsId != null) DatasetSeries(dsId)  else null

    // Cast DistributionEntity into Distribution
    override fun toDistribution(dist: DistributionEntity?): Distribution? =
        if (dist != null) Distribution(dist.id) else null
    override fun toDistributionByID(distId: String?): Distribution? = if (distId != null) Distribution(distId) else null

    // Cast ResourceEntity into Resource according to the type
    override fun createResource(
        res: ResourceEntity,
    ): ResourceInCatalog = when (res.type) {
        "catalog" -> Catalog(
            res.id,

        )
        "data_service" -> DataService(
            res.id,

        )
        "dataset" -> Dataset(
            res.id,

        )
        "dataset_series" -> DatasetSeries(
            res.id,

        )
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }

    // Cast ResourceEntity into Dataset according to the type
    override fun createDataset(
        res: ResourceEntity
    ): DatasetInCatalog = when (res.type) {
        "catalog" -> Catalog(
            res.id,

        )
        "dataset" -> Dataset(
            res.id,

        )
        "dataset_series" -> DatasetSeries(
            res.id,

        )
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }
}
