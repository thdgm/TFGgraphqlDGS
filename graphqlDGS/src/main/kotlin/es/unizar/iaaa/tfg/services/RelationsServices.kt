package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DatasetSeriesRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
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
interface InitServiceById {
    fun showCatalog(id: String): Catalog?
    fun showDataset(id: String): Dataset?
    fun showDatasetSerie(id: String): DatasetSeries?
    fun showDataService(id: String): DataService?
    fun showCatalogRecord(id: String): CatalogRecords?
    fun showDistribution(id: String): Distribution?
    fun showDatasetInCatalog(id: String): DatasetInCatalog?
    fun showResourceInCatalog(id: String): ResourceInCatalog?
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
        val cEntity = catalogRepository.findAll()
        var catalogs = listOf<Catalog?>()
        cEntity.forEach {
            catalogs += it.toCatalog()
        }
        return catalogs
    }

    // Genera una lista de Dataset de prueba
    override fun showDatasets(): Collection<Dataset?> {
        val dEntity = datasetRepository.findAll()
        var datasets = listOf<Dataset?>()
        dEntity.forEach {
            datasets += it.toDataset()
        }
        return datasets
    }

    // Genera una lista de DatasetSeries de prueba
    override fun showDatasetSeries(): Collection<DatasetSeries?> {
        val dSEntity = datasetSeriesRepository.findAll()
        var datasetSeries = listOf<DatasetSeries?>()
        dSEntity.forEach {
            datasetSeries += it.toDatasetSeries()
        }
        return datasetSeries
    }

    // Genera una lista de DataService de prueba
    override fun showDataServices(): Collection<DataService?> {
        val dSerEntity = dataServiceRepository.findAll()
        var dataServices = listOf<DataService?>()
        dSerEntity.forEach {
            dataServices += it.toDataService()
        }
        return dataServices
    }

    // Genera una lista de CatalogRecords de prueba
    override fun showCatalogRecords(): Collection<CatalogRecords?> {
        val cREntity = catalogRecordsRepository.findAll()
        var catalogRecords = listOf<CatalogRecords?>()
        cREntity.forEach {
            catalogRecords += it.toCatalogRecords()
        }
        return catalogRecords
    }

    // Genera una lista de Distribution de prueba
    override fun showDistributions(): Collection<Distribution?> {
        val distEntity = distributionRepository.findAll()
        var distributions = listOf<Distribution?>()
        distEntity.forEach {
            distributions += it.toDistribution()
        }
        return distributions
    }

    // Genera una lista de DatasetInCatalog de prueba
    override fun showDatasetsInCatalog(): Collection<DatasetInCatalog?> {
        val datasets = datasetRepository.findAll()
        val catalogs = catalogRepository.findAll()
        val datasetSeries = datasetSeriesRepository.findAll()
        val dcs = datasets + catalogs + datasetSeries
        var datasetsInCatalogs = listOf<DatasetInCatalog?>()
        dcs.forEach {
            when (it) {
                is DatasetEntity -> datasetsInCatalogs + it.toDataset()
                is DatasetSeriesEntity -> datasetsInCatalogs + it.toDatasetSeries()
                is CatalogEntity -> datasetsInCatalogs + it.toCatalog()
            }
        }
        return datasetsInCatalogs
    }

    // Genera una lista de ResourceInCatalog de prueba
    override fun showResourcesInCatalog(): Collection<ResourceInCatalog?> {
        val datasets = datasetRepository.findAll()
        val catalogs = catalogRepository.findAll()
        val datasetSeries = datasetSeriesRepository.findAll()
        val dataServices = dataServiceRepository.findAll()
        val dcss = datasets + catalogs + datasetSeries + dataServices
        var resourceInCatalogs = listOf<ResourceInCatalog?>()
        dcss.forEach {
            when (it) {
                is DatasetEntity -> resourceInCatalogs + it.toDataset()
                is DatasetSeriesEntity -> resourceInCatalogs + it.toDatasetSeries()
                is CatalogEntity -> resourceInCatalogs + it.toCatalog()
                is DataServiceEntity -> resourceInCatalogs + it.toDataService()
            }
        }
        return resourceInCatalogs
    }
}

@Service
class InitBasicServicesId(
    private val catalogRepository: CatalogRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val dataServiceRepository: DataServiceRepository,
    private val datasetRepository: DatasetRepository,
    private val datasetSeriesRepository: DatasetSeriesRepository,
    private val distributionRepository: DistributionRepository
) : InitServiceById {

    // Busca el Catalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showCatalog(id: String): Catalog? {
        val c = catalogRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toCatalog()
        }
        return null
    }

    // Busca el Dataset correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDataset(id: String): Dataset? {
        val c = datasetRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataset()
        }
        return null
    }

    // Busca el DatasetSeries correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetSerie(id: String): DatasetSeries? {
        val c = datasetSeriesRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDatasetSeries()
        }
        return null
    }

    // Busca el DataService correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDataService(id: String): DataService? {
        val c = dataServiceRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDataService()
        }
        return null
    }

    // Busca el CatalogRecords correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showCatalogRecord(id: String): CatalogRecords? {
        val c = catalogRecordsRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toCatalogRecords()
        }
        return null
    }

    // Busca el Distributions correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDistribution(id: String): Distribution? {
        val c = distributionRepository.findById(id)
        if (!c.isEmpty) {
            return c.get().toDistribution()
        }
        return null
    }

    // Busca el DatasetInCatalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showDatasetInCatalog(id: String): DatasetInCatalog? {
        var c: DatasetInCatalog? = showCatalog(id)
        if (c == null) {
            c = showDatasetSerie(id)
            if (c == null) {
                c = showDataset(id)
            }
        }
        return c
    }

    // Busca el ResourceInCatalog correspondiente al id y lo devuelve, si no lo encuentra devuelve null
    override fun showResourceInCatalog(id: String): ResourceInCatalog? {
        var c: ResourceInCatalog? = showCatalog(id)
        if (c == null) {
            c = showDatasetSerie(id)
            if (c == null) {
                c = showDataset(id)
                if (c == null) {
                    c = showDataService(id)
                }
            }
        }
        return c
    }
}
