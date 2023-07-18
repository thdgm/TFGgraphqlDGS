package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

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

    @Query(
        value =
        "select distinct accrual_periodicity from \"resource\" as t WHERE t.\"accrual_periodicity\" is not null and t.\"accrual_periodicity\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllAccrualNotNull(pageable: Pageable): Page<String>

    fun findDatasetByInseriesId(id: String): Collection<DatasetEntity?>
    fun findDatasetsByDistributionsId(id: String): Collection<DatasetEntity?>

    fun findByAccrualPeriodicityIn(periods: Collection<String>, page: Pageable): Page<DatasetEntity>
    fun findDatasetByInseriesIdIn(series: Collection<String>, page: Pageable): Page<DatasetEntity>
    fun findDatasetsByDistributionsIdIn(distributions: Collection<String>, page: Pageable): Page<DatasetEntity>

    //ORDER BY LABEL (publisher):  select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id from (select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id,pub.label from distribution as d, distributions as dist, resource as r, publisher as pub where d.id = dist.distribution_id and r.id = dist.dataset_id and pub.id = r.publisher_id and d.format IN ('text/html') order by pub.label ASC) as r;
    //ORDER BY NOTATION (ADMON LEVEL): select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id from distribution as d, distributions as dist, resource as r where d.id = dist.distribution_id and r.id = dist.dataset_id and d.format IN ('text/html') order by r.publisher_id ASC;
    //ORDER BY TITLE: select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id, COUNT(tit.id_title) from distribution as d, distributions as dist, resource as r, titles_resource as tit where d.id = dist.distribution_id and r.id = dist.dataset_id and d.format IN ('text/html') and tit.id_resource = r.id  GROUP BY r.id order by COUNT(tit.id_title) ASC;
    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatIn(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"keyword\" as key, \"resource\" as r where r.\"id\" = key.\"id_dataset\" and r.\"tipo\" = 'dataset' and key.\"id_word\" IN :keywords"
        ,nativeQuery = true)
    @Transactional
    fun findByKeywordsIn(@Param("keywords") keywords: Collection<String>, page: Pageable): Page<DatasetEntity>

    /*@Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByLabelASC(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>*/

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"publisher_id\" ASC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByNotationASC(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"issued\" ASC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByIssuedASC(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"modified\" ASC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByModifiedASC(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"publisher_id\" DESC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByNotationDesc(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"issued\" DESC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByIssuedDesc(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format order by r.\"modified\" DESC"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByModifiedDesc(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>



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

    @Query(
        value = "select distinct format from \"distribution\" as t WHERE t.\"format\" is not null and t.\"format\" <> ''",
        //"select * from \"distribution\" as t WHERE t.\"format\" is not null and t.\"format\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllFormatIsNotNull(pageable: Pageable): Page<String>

    fun findDistributionsByAccessServiceId(id: String): Collection<DistributionEntity?>




}

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String> {
    fun findByIdAndTypeNot(idS: String, type: String): ResourceEntity?

   /* @Query(
        value = "select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"relationships\" as relat, \"resource\" as r where \"id_catalog\" = ?1 and relat.\"id_resource\" = r.\"id\"",
        nativeQuery = true
    )
    @Transactional*/
    fun findResourcesCatalogByCatalogResourcesId(id_catalog: String, page: Pageable): Page<ResourceEntity>
    fun findServesDatasetByDatasetServiceId(id: String): Collection<ResourceEntity>

    //@Query("select COUNT(r) from \"resource\" as r WHERE r.\"tipo\" = ?1")
    fun countByType(type: String): Long

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset'",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasets(pageable: Pageable): Page<ResourceEntity>

    fun findResourcesByThemeIn(themes: Collection<String>, page: Pageable): Page<ResourceEntity>

    fun findServesDatasetByDatasetServiceIdIn(services: Collection<String>, page: Pageable): Page<ResourceEntity>

    fun findResourcesCatalogByCatalogResourcesIdIn(catalogs: Collection<String>, page: Pageable): Page<ResourceEntity>
    fun findByLicenseIn(licenses: Collection<String>, page: Pageable): Page<ResourceEntity>
    fun findByIssuedIn(licenses: Collection<LocalDateTime>, page: Pageable): Page<ResourceEntity>
    fun findByModifiedIn(licenses: Collection<LocalDateTime>, page: Pageable): Page<ResourceEntity>
    fun findByPublisherLabelIn(labels: Collection<String>, page: Pageable): Page<ResourceEntity>


    fun findByPublisherNotationLike(notationFirstLetter: String, page: Pageable): Page<ResourceEntity>

    fun findByPublisherNotationIn(notations: Collection<String>, page: Pageable): Page<ResourceEntity>
    fun findByCatalogRecordsIdIn(cr: Collection<String>, page: Pageable): Page<ResourceEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"description\" as des, \"resource\" as r where r.\"id\" = des.\"id_resource\" and r.\"tipo\" = 'dataset' and des.\"id_description\" IN :descriptions"
        ,nativeQuery = true)
    @Transactional
    fun findByDescriptionsIn(@Param("descriptions") descriptions: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"titles_resource\" as tit, \"resource\" as r where r.\"id\" = tit.\"id_resource\" and r.\"tipo\" = 'dataset' and tit.\"id_title\" IN :titles"
        ,nativeQuery = true)
    @Transactional
    fun findByTitlesIn(@Param("titles") titles: Collection<String>, page: Pageable): Page<DatasetEntity>

}
