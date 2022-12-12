package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String>{
    fun findByTitle(t:String?):CatalogEntity?

}

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String>

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String>

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String>

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String>

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String>