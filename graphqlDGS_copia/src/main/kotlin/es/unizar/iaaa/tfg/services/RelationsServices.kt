package es.unizar.iaaa.tfg.services
import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import org.springframework.stereotype.Service

interface InitService {
    fun showCatalogs(): Collection<Catalog?>
    fun showCatalog(id: String): Catalog?
    fun showDatasets(): Collection<Dataset?>
    fun showDataset(id: String): Dataset?
    fun showDatasetSeries(): Collection<DatasetSeries?>
    fun showDatasetSerie(id: String): DatasetSeries?
    fun showDataServices(): Collection<DataService?>
    fun showDataService(id: String): DataService?
    fun showCatalogRecords(): Collection<CatalogRecords?>
    fun showCatalogRecord(id: String): CatalogRecords?
    fun showDistributions(): Collection<Distribution?>
    fun showDistribution(id: String): Distribution?
    fun showDatasetsInCatalog(): Collection<DatasetInCatalog?>
    fun showDatasetInCatalog(id:String): DatasetInCatalog?
    fun showResourcesInCatalog(): Collection<ResourceInCatalog?>
    fun showResourceInCatalog(id:String): ResourceInCatalog?
}

@Service
class InitBasicServices(
    private val catalogRepository: CatalogRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val dataServiceRepository: DataServiceRepository,
    private val datasetRepository: DatasetRepository,
    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository
    ) : InitService {

    // Genera una lista de Catalogs de prueba
    override fun showCatalogs(): Collection<Catalog?> {
        return listOf(Catalog("catalog1", "catalogTit1"))
    }
    // Busca el Catalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toCatalog()
        }
        return null
    }

    // Genera una lista de Dataset de prueba
    override fun showDatasets(): Collection<Dataset?> {
        return listOf(Dataset("d1", "dTit1"))
    }
    // Busca el Dataset correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDataset(id: String): Dataset? {
        val c = datasetRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataset()
        }
        return null
    }

    // Genera una lista de DatasetSeries de prueba
    override fun showDatasetSeries(): Collection<DatasetSeries?> {
        return listOf(DatasetSeries("dS1", "dSTit1"))
    }
    // Busca el DatasetSeries correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetSerie(id: String): DatasetSeries? {
        val c = datasetSeriesRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDatasetSeries()
        }
        return null
    }
    // Genera una lista de DataService de prueba
    override fun showDataServices(): Collection<DataService?> {
        return listOf(DataService("dSer1", "dServTit1"))
    }
    // Busca el DataService correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDataService(id: String): DataService? {
        val c = dataServiceRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataService()
        }
        return null
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
    // Busca el CatalogRecords correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showCatalogRecord(id: String): CatalogRecords? {
        val c = catalogRecordsRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toCatalogRecords()
        }
        return null
    }
    // Genera una lista de Distribution de prueba
    override fun showDistributions(): Collection<Distribution?> {
        return listOf(
            Distribution("Dist1", "DistTit1"),
            Distribution("Dist2", "DistTit2"),
            Distribution("Dist3", "DistTit3")
        )
    }
    // Busca el Distributions correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDistribution()
        }
        return null
    }
    // Genera una lista de DatasetInCatalog de prueba
    override fun showDatasetsInCatalog(): Collection<DatasetInCatalog?> {
        return listOf(
            DatasetSeries("dS1", "dSTit1"),
            Dataset("d1", "dTit1"),
            Catalog("catalog1", "catalogTit1")
        )
    }
    // Busca el DatasetInCatalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetInCatalog(id:String): DatasetInCatalog? {
        var c:DatasetInCatalog? = showCatalog(id)
        if (c == null){
            c = showDatasetSerie(id)
            if (c == null){
                c = showDataset(id)
            }
        }
        return c
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
    // Busca el ResourceInCatalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showResourceInCatalog(id:String): ResourceInCatalog? {
        var c:ResourceInCatalog? = showCatalog(id)
        if (c == null){
            c = showDatasetSerie(id)
            if (c == null){
                c = showDataset(id)
                if (c == null){
                    c = showDataService(id)
                }
            }
        }
        return c
    }
}
