package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import org.springframework.stereotype.Service

interface Converters {
    fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord
    fun createResource(res: ResourceEntity): ResourceInCatalog
    fun createDataset(res: ResourceEntity): DatasetInCatalog
    fun toDataService(res: ResourceEntity): DataService?
    fun toCatalog(res: ResourceEntity): Catalog?
    fun toDistribution(dist: DistributionEntity): Distribution
    fun toDatasetSeries(ds: DatasetSeriesEntity): DatasetSeries
}

@Service
class ConvertersEntityTo : Converters {

    // Recibe ResourceEntity y crea el DataService correspondiente
    override fun toDataService(res: ResourceEntity): DataService? =
        if (res.type == "data_service") DataService(res.id, res.title) else null

    // Recibe ResourceEntity y crea el Catalog correspondiente
    override fun toCatalog(res: ResourceEntity): Catalog? =
        if (res.type == "catalog") Catalog(res.id, res.title) else null

    // Recibe CatalogRecordEntity y crea el CatalogRecord correspondiente
    override fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord = CatalogRecord(
        cre.id,
        cre.title,
        createResource(cre.resource)
    )

    // Recibe DatasetSeriesEntity y crea el DatasetSeries correspondiente
    override fun toDatasetSeries(ds: DatasetSeriesEntity): DatasetSeries = DatasetSeries(ds.id, ds.title)

    // Recibe DsitributionEntity y crea el Distribution correspondiente
    override fun toDistribution(dist: DistributionEntity): Distribution = Distribution(dist.id, dist.title)

    // Recibe ResoruceEntity y crea el Resource correspondiente en función del type
    override fun createResource(res: ResourceEntity): ResourceInCatalog = when (res.type) {
        "catalog" -> Catalog(res.id, res.title)
        "data_service" -> DataService(res.id, res.title)
        "dataset" -> Dataset(res.id, res.title)
        "dataset_series" -> DatasetSeries(res.id, res.title)
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }

    // Recibe ResoruceEntity y crea el Dataset correspondiente en función del type
    override fun createDataset(res: ResourceEntity): DatasetInCatalog = when (res.type) {
        "catalog" -> Catalog(res.id, res.title)
        "dataset" -> Dataset(res.id, res.title)
        "dataset_series" -> DatasetSeries(res.id, res.title)
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }
}
