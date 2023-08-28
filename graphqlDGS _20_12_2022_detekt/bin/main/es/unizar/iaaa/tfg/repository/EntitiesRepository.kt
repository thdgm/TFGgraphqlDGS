package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.CatalogInRecordEntity
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.RelationshipsEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String>

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String>

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String> {
    @Query("SELECT r FROM ResourceEntity AS r WHERE r.datasetService = ?1")
    fun servesDataset(ds: DataServiceEntity): Collection<ResourceEntity?>
    fun findAccessServiceByDistributionsId(id: String): Collection<DataServiceEntity?>
}

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String>

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String> {
    fun findInseriesByDatasetId(id: String): Collection<DatasetSeriesEntity?>
}

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String> {
    fun findDistributionsByDatasetsId(id: String): Collection<DistributionEntity?>
}

@Repository
interface RelationshipsRepository : JpaRepository<RelationshipsEntity, String> {
    fun findByIdIdSourceAndTypes(idS: String, type: String): Collection<RelationshipsEntity?>
    fun findByIdIdSource(idS: String): Collection<RelationshipsEntity?>
    fun findByIdIdSourceAndTypesNot(idS: String, type: String): Collection<RelationshipsEntity?>
}

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String> {
    fun findByIdAndTipoNot(idS: String, type: String): ResourceEntity?
}

@Repository
interface CatalogInRecordRepository : JpaRepository<CatalogInRecordEntity, String> {
    fun findByIdResourceId(id: String): Collection<CatalogInRecordEntity?>
}
