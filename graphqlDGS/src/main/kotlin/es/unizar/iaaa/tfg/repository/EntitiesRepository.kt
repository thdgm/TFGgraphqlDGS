package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.CatalogEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String>{
    fun findByTitle(t:String?):CatalogEntity?

}
/*
@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String>*/
