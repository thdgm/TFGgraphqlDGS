package es.unizar.iaaa.tfg.services
import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import org.springframework.stereotype.Service

interface InitService {
    fun showCatalogs(): Collection<Catalog?>
    fun showDatasets(): Collection<Dataset?>
    fun showDatasetSeries(): Collection<DatasetSeries?>
    fun showDataServices(): Collection<DataService?>
    fun showCatalogRecords(): Collection<CatalogRecords?>
    fun showDistributions(): Collection<Distribution?>
    fun showDatasetsInCatalog(): Collection<DatasetInCatalog?>
    fun showResourcesInCatalog(): Collection<ResourceInCatalog?>
}

@Service
class InitBasicServices : InitService {

    // Genera una lista de Catalogs de prueba
    override fun showCatalogs(): Collection<Catalog?> {
        return listOf(Catalog("catalog1", "catalogTit1"))
    }

    // Genera una lista de Dataset de prueba
    override fun showDatasets(): Collection<Dataset?> {
        return listOf(Dataset("d1", "dTit1"))
    }

    // Genera una lista de DatasetSeries de prueba
    override fun showDatasetSeries(): Collection<DatasetSeries?> {
        return listOf(DatasetSeries("dS1", "dSTit1"))
    }

    // Genera una lista de DataService de prueba
    override fun showDataServices(): Collection<DataService?> {
        return listOf(DataService("dSer1", "dServTit1"))
    }

    // Genera una lista de CatalogRecords de prueba
    override fun showCatalogRecords(): Collection<CatalogRecords?> {
        val catalogo1 = Catalog("catalog1", "catalogTit1")
        return listOf(
            CatalogRecords("cR1", "cRTit1", catalogo1),
            CatalogRecords("cR2", "cRTit2", catalogo1),
            CatalogRecords("cR3", "cRTit3", catalogo1),
            CatalogRecords("cR4", "cRTit4", catalogo1)
        )
    }

    // Genera una lista de Distribution de prueba
    override fun showDistributions(): Collection<Distribution?> {
        return listOf(
            Distribution("Dist1", "DistTit1"),
            Distribution("Dist2", "DistTit2"),
            Distribution("Dist3", "DistTit3")
        )
    }

    // Genera una lista de DatasetInCatalog de prueba
    override fun showDatasetsInCatalog(): Collection<DatasetInCatalog?> {
        return listOf(
            DatasetSeries("dS1", "dSTit1"),
            Dataset("d1", "dTit1"),
            Catalog("catalog1", "catalogTit1")
        )
    }

    // Genera una lista de ResourceInCatalog de prueba
    override fun showResourcesInCatalog(): Collection<ResourceInCatalog?> {
        return listOf(
            DatasetSeries("dS1", "dSTit1"),
            Dataset("d1", "dTit1"),
            Catalog("catalog1", "catalogTit1"),
            DataService("dSer1", "dServTit1")
        )
    }
}
