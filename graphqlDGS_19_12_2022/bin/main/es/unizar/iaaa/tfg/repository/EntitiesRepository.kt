package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String>

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String>{
    /*@Query("SELECT r.id,r.title,r.tipo FROM ResourceEntity AS r,CatalogRecordEntity AS cr WHERE r.id = cr.resource and cr.id = ?1")
    fun primaryTopic(id:String):String?
    @Query("SELECT cr.id,cr.title FROM CatalogRecordEntity AS cr WHERE cr.id LIKE %?1%")
    fun findCR(id:String):String?*/
}

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String>{
    //@Query("SELECT r.id,r.title " + "FROM ResourceEntity AS r WHERE r.datasetService LIKE %?1%")
    @Query("SELECT r FROM ResourceEntity AS r WHERE r.datasetService = ?1")
    fun servesDataset(ds:DataServiceEntity):Collection<ResourceEntity?>

    fun findAccessServiceByDistributionsId(id:String):Collection<DataServiceEntity?>
}

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String>

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String>

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String>

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String>