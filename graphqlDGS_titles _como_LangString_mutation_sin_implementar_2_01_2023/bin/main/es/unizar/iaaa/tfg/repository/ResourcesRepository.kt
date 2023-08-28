package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String> {
    fun findCatalogResourcesByResourcesCatalogId(id: String): Collection<CatalogEntity?>
}

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String> {
    fun findCatalogRecordsByResourceId(id: String): Collection<CatalogRecordEntity?>
}

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String> {
    fun findAccessServiceByDistributionsId(id: String): Collection<DataServiceEntity?>
    fun findDatasetServiceByServesDatasetId(id: String): Collection<DataServiceEntity>
}

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String> {
    fun findDatasetByInseriesId(id: String): Collection<DatasetEntity?>
}

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String> {
    fun findInseriesByDatasetId(id: String): Collection<DatasetSeriesEntity?>
}

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String> {
    fun findDistributionsByDatasetsId(id: String): Collection<DistributionEntity?>
}

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String> {
    fun findByIdAndTypeNot(idS: String, type: String): ResourceEntity?
    fun findResourcesCatalogByCatalogResourcesId(id: String): Collection<ResourceEntity>
    fun findServesDatasetByDatasetServiceId(id: String): Collection<ResourceEntity>
}
