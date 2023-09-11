package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.DataService
import com.graphqlDGS.graphqlDGS.model.types.DatasetInCatalog
import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

/*
 * Services for get DataServices fields and entity.
 */

interface DataServicesServices {
    fun getDataService(id: String): DataService?
    fun getServesDataset(id: String,page: Int, pageSize: Int, type: String): Collection<DatasetInCatalog?>
    fun getDistributions(id: String): Collection<Distribution>
    fun getNumberOfServedResources(id: String): Int?
    fun getNumberOfServedDatasetSeries(id: String): Int?
    fun getNumberOfServedCatalogs(id: String): Int?
    fun getNumberOfServedDatasets(id: String): Int?
}

@Service
class DataServicesServicesImpl(
    private val dataServiceRepository: DataServiceRepository,
    private val distributionsRepository:DistributionRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val resourceRepository: ResourceRepository

) : DataServicesServices {

    // Return DataService id or null
    override fun getDataService(id: String): DataService? {
        val c = dataServiceRepository.findServiceById(id)
        return if (c != null) converter.toDataServiceById(c) else null
    }

    // Return servesDataset of DataService id
    override fun getServesDataset(id: String,page: Int, pageSize: Int, type: String): Collection<DatasetInCatalog?> {
        return if (type == "All"){
            println("LETSSS 334")
            resourceRepository.findDistinctServesDatasetByDatasetServiceId(id,
                PageRequest.of(if(page != 0) page-1 else 0,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).map {converter.createDataset(it) }.distinct().toList()//resourceRepository.findResourcesCatalog(id).map {converter.createResource(it) }
        }else{
            println("LETSSS 335")
            resourceRepository.findDistinctServesDatasetByDatasetServiceIdAndType(id,type,
                PageRequest.of(if(page != 0) page-1 else 0,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).map {converter.createDataset(it) }.distinct().toList()
        }

    }

    // Return Distribuions according to accessService
    override fun getDistributions(id: String): Collection<Distribution> =
      distributionsRepository.findDistributionsByAccessServiceId(id, PageRequest.of(0,5)).mapNotNull { converter.toDistribution(it) }

    // Return the number of resources served by data service
    override fun getNumberOfServedResources(id: String): Int? =
        dataServiceRepository.findNumberOfResourcesById(id)

    // Return the number of datasets iserved by data service
    override fun getNumberOfServedDatasets(id: String): Int? =
        dataServiceRepository.findNumberOfResourcesByIdAndType(id, "dataset")

    // Return the number of datasetSeries served by data service
    override fun getNumberOfServedDatasetSeries(id: String): Int? =
        dataServiceRepository.findNumberOfResourcesByIdAndType(id, "dataset_series")

    // Return the number of catalogs served by data service
    override fun getNumberOfServedCatalogs(id: String): Int? =
        dataServiceRepository.findNumberOfResourcesByIdAndType(id, "catalog")
}
