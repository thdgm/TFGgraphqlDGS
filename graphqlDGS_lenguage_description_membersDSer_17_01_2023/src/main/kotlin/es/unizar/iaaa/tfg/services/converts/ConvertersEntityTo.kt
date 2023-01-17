package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.*
import org.springframework.stereotype.Service

interface Converters {
    fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord
    fun createResource(res: ResourceEntity): ResourceInCatalog
    fun createDataset(res: ResourceEntity): DatasetInCatalog
    fun toDataService(res: ResourceEntity): DataService?
    fun toCatalog(res: ResourceEntity): Catalog?
    fun toDistribution(dist: DistributionEntity): Distribution
    fun toDatasetSeries(ds: DatasetSeriesEntity): DatasetSeries
    fun convertToResourceDescription(des: DescriptionEntity): ResourceDescription
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
    //Recibe un descriptionEntity y crea el ResourceDescription correspondiente
    override fun convertToResourceDescription(des: DescriptionEntity): ResourceDescription = ResourceDescription(des.text,des.language.id)

}
