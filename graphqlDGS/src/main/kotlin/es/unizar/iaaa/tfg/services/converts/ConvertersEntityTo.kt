package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.*
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import org.springframework.stereotype.Service

interface Converters{
    fun toDataServices(dse: Collection<DataServiceEntity?>):Collection<DataService?>
    fun toCatalogRecords(cre: Collection<CatalogRecordEntity?>): Collection<CatalogRecord?>
    fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord?
    fun createResource(res: ResourceEntity):ResourceInCatalog
    fun createDataset(res: ResourceEntity):DatasetInCatalog
}
@Service
class ConvertersEntityTo: Converters{
    override fun toDataServices(dse: Collection<DataServiceEntity?>):Collection<DataService?>{
        var ds = listOf <DataService?>()
        dse.forEach{
            ds += it?.toDataService()
        }
        return ds
    }
    override fun toCatalogRecords(cre: Collection<CatalogRecordEntity?>): Collection<CatalogRecord?> {
        var cr = listOf <CatalogRecord?>()
        cre.forEach{
            cr += CatalogRecord(it!!.id,it.title,createResource(it.resource))
        }
        return cr
    }
    override fun toCatalogRecord(cre: CatalogRecordEntity): CatalogRecord? {
       return CatalogRecord(cre!!.id,cre.title,createResource(cre.resource))
    }

    override fun createResource(res: ResourceEntity):ResourceInCatalog{
        return when(res.tipo){
            "catalog"-> Catalog(res.id,res.title)
            "data_service" -> DataService(res.id,res.title)
            "dataset"-> Dataset(res.id,res.title)
            "dataset_series"-> DatasetSeries(res.id,res.title)
            else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
        }
    }
    override fun createDataset(res: ResourceEntity):DatasetInCatalog{
        return when(res.tipo){
            "catalog"-> Catalog(res.id,res.title)
            "dataset"-> Dataset(res.id,res.title)
            "dataset_series"-> DatasetSeries(res.id,res.title)
            else -> throw IllegalArgumentException("Tipo desconocido $res.tipo")
        }
    }

}