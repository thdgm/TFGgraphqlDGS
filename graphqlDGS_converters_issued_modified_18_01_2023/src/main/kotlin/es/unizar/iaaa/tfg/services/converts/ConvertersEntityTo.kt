package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.*
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.util.*

interface Converters {
    fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord
    fun createResource(res: ResourceEntity): ResourceInCatalog
    fun createDataset(res: ResourceEntity): DatasetInCatalog
    fun toDataService(res: ResourceEntity): DataService?
    fun toDataset(res: DatasetEntity?): Dataset?
    fun toCatalog(res: ResourceEntity): Catalog?
    fun catalogEntitytoCatalog(res: CatalogEntity?): Catalog?
    fun toDistribution(dist: DistributionEntity): Distribution
    fun toDatasetSeries(ds: DatasetSeriesEntity): DatasetSeries
    fun convertToResourceDescription(des: DescriptionEntity): ResourceDescription
    fun DatetoFechaHora(d: Date?):FechaHora?
}

@Service
class ConvertersEntityTo : Converters {

    // Recibe ResourceEntity y crea el DataService correspondiente
    override fun toDataService(res: ResourceEntity): DataService? =
        if (res.type == "data_service") DataService(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion)) else null
    override fun toDataset(res: DatasetEntity?): Dataset? = Dataset(res!!.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))

    // Recibe ResourceEntity y crea el Catalog correspondiente
    override fun toCatalog(res: ResourceEntity): Catalog? =
        if (res.type == "catalog") Catalog(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion)) else null

    // Recibe CatalogEntity y crea el Catalog correspondiente
    override fun catalogEntitytoCatalog(res: CatalogEntity?): Catalog? = Catalog(res!!.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))

    // Recibe CatalogRecordEntity y crea el CatalogRecord correspondiente
    override fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord = CatalogRecord(
        cre.id,
        cre.title,
        createResource(cre.resource)
    )

    // Recibe DatasetSeriesEntity y crea el DatasetSeries correspondiente
    override fun toDatasetSeries(ds: DatasetSeriesEntity): DatasetSeries = DatasetSeries(ds.id, ds.title,fechaHoraCreacion = DatetoFechaHora(ds.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(ds.fechaHoraCreacion))

    // Recibe DsitributionEntity y crea el Distribution correspondiente
    override fun toDistribution(dist: DistributionEntity): Distribution = Distribution(dist.id, dist.title)

    // Recibe ResoruceEntity y crea el Resource correspondiente en función del type
    override fun createResource(res: ResourceEntity): ResourceInCatalog = when (res.type) {
        "catalog" -> Catalog(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        "data_service" -> DataService(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        "dataset" -> Dataset(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        "dataset_series" -> DatasetSeries(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }

    // Recibe ResoruceEntity y crea el Dataset correspondiente en función del type
    override fun createDataset(res: ResourceEntity): DatasetInCatalog = when (res.type) {
        "catalog" -> Catalog(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        "dataset" -> Dataset(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        "dataset_series" -> DatasetSeries(res.id, res.title,fechaHoraCreacion = DatetoFechaHora(res.fechaHoraCreacion), ultimaModificacion = DatetoFechaHora(res.fechaHoraCreacion))
        else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
    }
    //Recibe un descriptionEntity y crea el ResourceDescription correspondiente
    override fun convertToResourceDescription(des: DescriptionEntity): ResourceDescription = ResourceDescription(des.text,des.language.id)

    //Transform date to FechaHora
     override fun DatetoFechaHora(d: Date?):FechaHora{
        val fecha = d.toString().split(" ")
        return FechaHora(fecha.elementAt(0),fecha.elementAt(1))
     }

}
