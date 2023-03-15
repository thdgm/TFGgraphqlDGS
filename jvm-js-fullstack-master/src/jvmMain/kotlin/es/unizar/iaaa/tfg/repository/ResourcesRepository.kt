package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String> {
    fun findCatalogResourcesByResourcesCatalogId(id: String): Collection<CatalogEntity?>
    fun findCatalogsByRecordsId(id: String): Collection<CatalogEntity?>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"relationships\" (\"id_catalog\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInRelationships(cat: String, res: String)
}

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String> {
    fun findCatalogRecordsByResourceId(id: String): Collection<CatalogRecordEntity?>

    @Modifying
    @Transactional
    @Query(
        "INSERT INTO \"cataloginrecord\" (\"id_catalog_record\", \"id_resource\") VALUES (?1, ?2)",
        nativeQuery = true
    )
    fun insertInCatalogRecord(cr: String, res: String)
}

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String> {
    fun findAccessServiceByDistributionsId(id: String): Collection<DataServiceEntity?>
    fun findDatasetServiceByServesDatasetId(id: String): Collection<DataServiceEntity>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"serves_dataset\" (\"id_dataservice\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInServesDataset(dser: String, d: String)
}

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String> {
    fun findDatasetByInseriesId(id: String): Collection<DatasetEntity?>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"inseries\" (\"dataset_id\", \"data_series_id\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInInSeries(d: String, dS: String)
}

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String> {
    fun findInseriesByDatasetId(id: String): Collection<DatasetSeriesEntity?>
}

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String> {
    fun findDistributionsByDatasetsId(id: String): Collection<DistributionEntity?>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"distributions\" (\"dataset_id\", \"distribution_id\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInDistributions(d: String, dist: String)

    @Modifying
    @Transactional
    @Query(
        "INSERT INTO \"acessservice\" (\"distribution_id\", \"data_service_id\") VALUES (?1, ?2)",
        nativeQuery = true
    )
    fun insertInAccessInService(dist: String, ds: String)
}

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String> {
    fun findByIdAndTypeNot(idS: String, type: String): ResourceEntity?
    fun findResourcesCatalogByCatalogResourcesId(id: String): Collection<ResourceEntity>
    fun findServesDatasetByDatasetServiceId(id: String): Collection<ResourceEntity>
}
