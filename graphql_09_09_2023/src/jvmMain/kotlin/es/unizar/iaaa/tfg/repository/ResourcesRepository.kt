package es.unizar.iaaa.tfg.repository

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.ids.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ThemeEntity
import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.EntityManager
import jakarta.persistence.PersistenceContext
import jakarta.persistence.criteria.CriteriaBuilder
import jakarta.persistence.criteria.CriteriaQuery
import jakarta.persistence.criteria.Join
import jakarta.persistence.criteria.Predicate
import jakarta.persistence.criteria.Root
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

    @Query(
        value = "select id from resource where id = ?1 and tipo = 'catalog'",
        nativeQuery = true
    )
    @Transactional
    fun findCatalogById(id:String): String?
    @Query(
        value = "select id_catalog from relationships where id_resource = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findCatalogsByResourceId(id: String): Collection<String?>

    @Query(
        value = "select id_resource from cataloginrecord where id_catalog_record = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findCatalogsByRecordsId(id: String): Collection<String?>//CHANGEE

    @Modifying
    @Transactional
    @Query("INSERT INTO \"relationships\" (\"id_catalog\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInRelationships(cat: String, res: String)

    @Query(
        value = "select COUNT(DISTINCT id_resource) from relationships where id_catalog = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfResourcesById(id: String): Int

    @Query(
        value = "select COUNT(DISTINCT relat.id_resource) from relationships relat, resource r where relat.id_catalog = ?1 and relat.id_resource = r.id and r.tipo = ?2",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfResourcesByIdAndType(id: String, type: String): Int

    @Query(
        value = "select COUNT(DISTINCT id_catalog_record) from cataloginrecord where id_resource = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfRecordsByIdAndType(id: String): Int

    @Query(
        value = "select COUNT(DISTINCT id_dataservice) from serves_dataset where id_resource = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfServedServicesByIdAndType(id: String): Int
}

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String> {

    @Query(
        value = "select * from catalogrecord where id = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findCRById(cr: String): CatalogRecordEntity?
    /*@Query(
        value = "select cr.id, cr.title, cr.resource_id, cr.content, cr.content_type, cr.content_url from cataloginrecord cri, catalogrecord cr where id_resource  = ?1 and cri.id_catalog_record = cr.id",
        nativeQuery = true
    )
    @Transactional*/
    fun findCatalogRecordsByResourceId(id: String,page: Pageable): Page<CatalogRecordEntity?>//CHANGEE

    @Query(
        value =
        "select cr.id from catalogrecord cr, cataloginrecord cin where cr.id = cin.id_catalog_record and cin.id_resource = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findRecordsByCatalogsId(id: String, page: Pageable): Page<String?>
    @Modifying
    @Transactional
    @Query(
        "INSERT INTO \"cataloginrecord\" (\"id_catalog_record\", \"id_resource\") VALUES (?1, ?2)",
        nativeQuery = true
    )
    fun insertInCatalogRecord(cr: String, res: String)

    @Query(
        value =
        "select distinct content_type from catalogrecord",
        nativeQuery = true
    )
    @Transactional
    fun findAllContentTypeIsNotNull(page: Pageable): Page<String>

    @Query(
        value =
        "select distinct h.id_hint from catalogrecord cr, hints h where cr.id = h.id_catalog_record",
        nativeQuery = true
    )
    @Transactional
    fun findAllHintsIsNotNull(page: Pageable): Page<String>


}

@Repository
interface DataServiceRepository : JpaRepository<DataServiceEntity, String> {
    @Query(
        value = "select id from resource cr where id = ?1 and tipo = 'data_service'",
        nativeQuery = true
    )
    @Transactional
    fun findServiceById(id: String): String?//CHANGEEE
    @Query(
        value = "select data_service_id from acessservice cr where distribution_id  = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findAccessServiceByDistributionsId(id: String): Collection<String?>//CHANGEEE
    @Query(
        value =
        "select * from resource r, (select id_dataservice from serves_dataset where id_resource = ?1) as dServ where dServ.id_dataservice = r.id ORDER BY r.id",
        nativeQuery = true
    )
    @Transactional
    fun findDatasetServiceByServesDatasetId(id: String, page: Pageable): Page<DataServiceEntity>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"serves_dataset\" (\"id_dataservice\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInServesDataset(dser: String, d: String)

    @Query(
        value = "select COUNT(DISTINCT id_resource) from serves_dataset where id_dataservice = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfResourcesById(id: String): Int

    @Query(
        value = "select COUNT(DISTINCT serv.id_resource) from serves_dataset serv, resource r where serv.id_dataservice = ?1 and serv.id_resource = r.id and r.tipo = ?2",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfResourcesByIdAndType(id: String, type: String): Int
}

@Repository
interface DatasetRepository : JpaRepository<DatasetEntity, String> {
    @Query(
        value =
        "select * from resource where id = ?1 and tipo = 'dataset'",
        nativeQuery = true
    )
    @Transactional
    fun findDatasetById(id: String): DatasetEntity?
    @Query(
        value =
        "select accrual_periodicity from resource where id = ?1 and tipo = 'dataset'",
        nativeQuery = true
    )
    @Transactional
    fun findAccrualPeriodById(id: String): String?

    @Query(
        value =
        "select distinct accrual_periodicity from \"resource\" as t WHERE t.\"accrual_periodicity\" is not null and t.\"accrual_periodicity\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllAccrualNotNull(pageable: Pageable): Page<String>

   /*@Query(
        value = "select dataset_id from inseries cr where data_series_id  = ?1",
        nativeQuery = true
    )
    @Transactional*/
    fun findDatasetByInseriesId(id: String,page: Pageable): Page<DatasetEntity?> //CHANGEE
    /*@Query(
        value = "select dataset_id from distributions cr where distribution_id  = ?1",
        nativeQuery = true
    )
    @Transactional*/
    fun findDatasetsByDistributionsDatasetId(id: String, page: Pageable): Page<DatasetEntity?> //CHANGEE
}

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String> {
    @Query(
        value = "select data_series_id from inseries cr where dataset_id  = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findInseriesByDatasetId(id: String, page: Pageable): Page<String?> //CHANGEE
    @Query(
        value = "select COUNT(DISTINCT dataset_id) from inseries where data_series_id = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfMembersDatasets(id: String): Int
}

@Repository
interface DistributionRepository : JpaRepository<DistributionEntity, String> {
    @Query(
        value = "select * from distribution where id  = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findbyDistId(id: String): DistributionEntity?
    @Query(
        value = "select d.id, d.access_url, d.byte_size, d.format from distributions dists, distribution d where dists.dataset_id = ?1 and d.id = dists.distribution_id",
        nativeQuery = true
    )
    @Transactional
    fun findDistributionsByDatasetsId(id: String, page: Pageable): Page<DistributionEntity?>//CHANGEE

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
        nativeQuery = true
    )
    @Transactional
    fun findAllFormatIsNotNull(pageable: Pageable): Page<String>
    /*@Query(
        value = "select distribution_id from acessservice cr where data_service_id  = ?1",
        nativeQuery = true
    )
    @Transactional*/
    fun findDistributionsByAccessServiceId(id: String, pageable: Pageable): Page<DistributionEntity?>//CHANGEE
}





@Repository
class ResourceRepositoryExtra(){
    @PersistenceContext
    private lateinit var entityManager: EntityManager
    fun findNumberOfDatasetsByFilters(
        filters: Collection<MapInput>,
        type: String,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        period: List<String>,
        notation: List<String>,
        start: LocalDateTime?,
        end: LocalDateTime?): Long?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
        val formats_pre = appliedFilters.find { it.key == "Formato" }?.values ?: listOf()
        val formats = formats_pre.mapNotNull { mediaTypeMap[it] }
        val periods = period
        val keywords = appliedFilters.find { it.key == "Etiqueta" }?.values ?: listOf()
        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val themes = appliedFilters.find { it.key == "Categoría" }?.values ?: listOf()
        val licenses = appliedFilters.find { it.key == "Licenses" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()
        var queryString = "SELECT COUNT(DISTINCT tt.id) as total_rows " +
                "FROM ( " +
                "SELECT r.id, r.tipo, tit_res.id_title, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, tr.id_theme,k1_0.id_word, pub.label, pub.notation,dd.format " +                "FROM resource r " +
                "LEFT JOIN themes_resources tr ON r.id = tr.id_resource " +
                "LEFT JOIN keyword k1_0 ON r.id = k1_0.id_dataset " +
                "LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "+
                "LEFT JOIN description descr ON r.id = descr.id_resource "+
                "LEFT JOIN (" +
                "SELECT dists.dataset_id, d.format, d.id " +
                "FROM distribution d " +
                "LEFT JOIN distributions dists ON d.id = dists.distribution_id " +
                ") as dd ON dd.dataset_id = r.id " +
                ") as tt " +
                "WHERE tt.tipo = 'dataset' AND "
        if (formats.isNotEmpty()) queryString += "tt.format IN :format OR "
        if (periods.isNotEmpty()) queryString += "tt.accrual_periodicity IN :period OR "
        if (keywords.isNotEmpty()) queryString += "tt.id_word IN :keyword OR "
        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (themes.isNotEmpty()) queryString += "tt.id_theme IN :theme OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (licenses.isNotEmpty()) queryString += "tt.license IN :licenses OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "
        if (start != null && end != null) queryString += "(tt.temporal_coverage_start = :start AND tt.temporal_coverage_end = :end) OR "

        var querySplit = queryString.split(' ').toMutableList()
        if(querySplit[querySplit.size-2] == "OR") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")
        queryString = queryString.trimEnd() + " ;"
        val nativeQuery = entityManager.createNativeQuery(queryString)
        if(formats.isNotEmpty()) nativeQuery.setParameter("format", formats)
        if (periods.isNotEmpty())nativeQuery.setParameter("period", periods)
        if(keywords.isNotEmpty()) nativeQuery.setParameter("keyword", keywords)
        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(themes.isNotEmpty()) nativeQuery.setParameter("theme", themes)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if(licenses.isNotEmpty()) nativeQuery.setParameter("licenses", licenses)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if (start != null) nativeQuery.setParameter("start", start)
        if (end != null) nativeQuery.setParameter("end", end)
        println("RRRRREEEEE ----------------- ${nativeQuery.resultList}")
        return kotlin.runCatching {
            nativeQuery.resultList.first() as Long?
        }.getOrNull()

    }

    fun findDatasetsByFilters(
        filters: Collection<MapInput>,
        type: String,
        orderBy: String,
        sortBy: String,
        page: Int,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        period: List<String>,
        notation: List<String>,
        start: LocalDateTime?,
        end: LocalDateTime?
    ): Collection<ResourceEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
        val formats_pre = appliedFilters.find { it.key == "Formato" }?.values ?: listOf()
        val formats = formats_pre.mapNotNull { mediaTypeMap[it] }
        val periods = period
        val ids = appliedFilters.find { it.key == "ID" }?.values ?: listOf()
        val keywords = appliedFilters.find { it.key == "Etiqueta" }?.values ?: listOf()
        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val themes = appliedFilters.find { it.key == "Categoría" }?.values ?: listOf()
        val licenses = appliedFilters.find { it.key == "Licenses" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()

        println("******************** TITLESSS *******************:: $titles")
        println("******************** DESCRIPPTTTIONSSSS *******************:: $descriptions")

        var queryString = "SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  FROM ( " +
                "SELECT r.id, r.tipo, tit_res.id_title, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, tr.id_theme,k1_0.id_word, pub.label, pub.notation,dd.format " +
                "FROM resource r " +
                "LEFT JOIN themes_resources tr ON r.id = tr.id_resource " +
                "LEFT JOIN keyword k1_0 ON r.id = k1_0.id_dataset " +
                "LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "+
                "LEFT JOIN description descr ON r.id = descr.id_resource "+
                "LEFT JOIN (SELECT dists.dataset_id, d.format FROM distribution d " +
                "LEFT JOIN distributions dists ON d.id = dists.distribution_id) as dd ON dd.dataset_id = r.id) as tt " +
                "WHERE tt.tipo = 'dataset' AND "

        if (formats.isNotEmpty()) queryString += "tt.format IN :format OR "
        if (ids.isNotEmpty()) queryString += "tt.id IN :ids OR "
        if (periods.isNotEmpty()) queryString += "tt.accrual_periodicity IN :period OR "
        if (keywords.isNotEmpty()) queryString += "tt.id_word IN :keyword OR "
        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (themes.isNotEmpty()) queryString += "tt.id_theme IN :theme OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (licenses.isNotEmpty()) queryString += "tt.license IN :licenses OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "
        if (start != null && end != null) queryString += "(tt.temporal_coverage_start = :start AND tt.temporal_coverage_end = :end) OR "


        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")
        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, ResourceEntity::class.java)
        if(formats.isNotEmpty()) nativeQuery.setParameter("format", formats)
        if (ids.isNotEmpty()) nativeQuery.setParameter("ids", ids)
        if (periods.isNotEmpty())nativeQuery.setParameter("period", periods)
        if(keywords.isNotEmpty()) nativeQuery.setParameter("keyword", keywords)
        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(themes.isNotEmpty()) nativeQuery.setParameter("theme", themes)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if(licenses.isNotEmpty()) nativeQuery.setParameter("licenses", licenses)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if (start != null) nativeQuery.setParameter("start", start)
        if (end != null) nativeQuery.setParameter("end", end)
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<ResourceEntity>?
        }.getOrNull()
    }

    fun findCatalogsByFilters(
        filters: Collection<MapInput>,
        type: String,
        orderBy: String,
        sortBy: String,
        page: Int,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        notation: List<String>,
        numberOfResources: Pair<String, String>?
    ): Collection<ResourceEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()

        var queryString = "SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  FROM ( " +
                "SELECT r.id, r.tipo, tit_res.id_title, res.id_resource as resources, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, pub.label, pub.notation " +
                "FROM resource r " +
                "LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "+
                "LEFT JOIN relationships res ON r.id = res.id_catalog " +
                "LEFT JOIN description descr ON r.id = descr.id_resource) as tt " +
                "WHERE tt.tipo = 'catalog' AND "

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        if(numberOfResources != null) queryString += "GROUP BY tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  HAVING COUNT(tt.resources) BETWEEN :startCount AND :endCount "

        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, ResourceEntity::class.java)

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if(numberOfResources != null) {
            nativeQuery.setParameter("startCount", numberOfResources.first.toInt())
            nativeQuery.setParameter("endCount", numberOfResources.second.toInt())
        }
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<ResourceEntity>?
        }.getOrNull()
    }

    fun findCatalogsNumberByFilters(
        filters: Collection<MapInput>,
        type: String,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        notation: List<String>,
        numberOfResources: Pair<String, String>?
    ): Long?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()
        var queryString = "SELECT COUNT(DISTINCT result.id) as total_elements " +
                "FROM ( " +
                "    SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id, tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity " +
                "    FROM ( " +
                "        SELECT r.id, r.tipo, tit_res.id_title, res.id_resource as resources, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, pub.label, pub.notation " +
                "        FROM resource r " +
                "        LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "        LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource " +
                "        LEFT JOIN relationships res ON r.id = res.id_catalog " +
                "        LEFT JOIN description descr ON r.id = descr.id_resource " +
                "    ) as tt " +
                "    WHERE tt.tipo = 'catalog' AND "

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        if(numberOfResources != null) queryString += "GROUP BY tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  HAVING COUNT(tt.resources) BETWEEN :startCount AND :endCount "

        queryString = queryString.trimEnd() + ") as result;"//" ;"

        val nativeQuery = entityManager.createNativeQuery(queryString)

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
       // val n = nativeQuery.resultList.first() as Long?
        if(numberOfResources != null) {
            nativeQuery.setParameter("startCount", numberOfResources.first.toInt())
            nativeQuery.setParameter("endCount", numberOfResources.second.toInt())
        }
        println("NUMBERSSSSSSSSSSSSSSSSS 2: $numberOfResources")
        return kotlin.runCatching {
            nativeQuery.resultList.first() as Long?
        }.getOrNull()
    }

    fun findServicesByFilters(
        filters: Collection<MapInput>,
        type: String,
        orderBy: String,
        sortBy: String,
        page: Int,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        notation: List<String>,
        numberOfResources: Pair<String, String>?
    ): Collection<ResourceEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()

        var queryString = "SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  FROM ( " +
                "SELECT r.id, r.tipo, tit_res.id_title, serv.id_resource as resources, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, pub.label, pub.notation " +
                "FROM resource r " +
                "LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "+
                "LEFT JOIN serves_dataset serv ON r.id = serv.id_dataservice " +
                "LEFT JOIN description descr ON r.id = descr.id_resource) as tt " +
                "WHERE tt.tipo = 'data_service' AND "

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        if(numberOfResources != null) queryString += "GROUP BY tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  HAVING COUNT(tt.resources) BETWEEN :startCount AND :endCount "

        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, ResourceEntity::class.java)

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if(numberOfResources != null) {
            nativeQuery.setParameter("startCount", numberOfResources.first.toInt())
            nativeQuery.setParameter("endCount", numberOfResources.second.toInt())
        }
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<ResourceEntity>?
        }.getOrNull()
    }

    fun findSeriesByFilters(
        filters: Collection<MapInput>,
        type: String,
        orderBy: String,
        sortBy: String,
        page: Int,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        notation: List<String>,
        numberOfResources: Pair<String, String>?
    ): Collection<ResourceEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()

        var queryString = "SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  FROM ( " +
                "SELECT r.id, r.tipo, tit_res.id_title, series.dataset_id as resources, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, pub.label, pub.notation " +
                "FROM resource r " +
                "LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "+
                "LEFT JOIN inseries series ON r.id = series.data_series_id " +
                "LEFT JOIN description descr ON r.id = descr.id_resource) as tt " +
                "WHERE tt.tipo = 'dataset_series' AND "

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        if(numberOfResources != null) queryString += "GROUP BY tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  HAVING COUNT(tt.resources) BETWEEN :startCount AND :endCount "

        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, ResourceEntity::class.java)

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if(numberOfResources != null) {
            nativeQuery.setParameter("startCount", numberOfResources.first.toInt())
            nativeQuery.setParameter("endCount", numberOfResources.second.toInt())
        }
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<ResourceEntity>?
        }.getOrNull()
    }

    fun findResourcesNumberByFilters(
        filters: Collection<MapInput>,
        type: String,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        notation: List<String>,
        numberOfResources: Pair<String, String>?
    ): Long?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val publishers = appliedFilters.find { it.key == "Publicador" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()
        val descriptions = appliedFilters.find { it.key == "Descripciones" }?.values ?: listOf()
        var queryString = "SELECT COUNT(DISTINCT result.id) as total_elements " +
                "FROM ( " +
                "    SELECT DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id, tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity " +
                "    FROM ( " +
                "        SELECT r.id, r.tipo, "

                queryString += if(type == "dataset_series") "series.dataset_id as resources, "
               else "serv.id_resource as resources, "

                queryString += "tit_res.id_title, descr.id_description, r.issued, r.license, r.modified, r.publisher_id, r.accrual_periodicity, r.temporal_coverage_end, r.temporal_coverage_start, r.validity, pub.label, pub.notation " +
                "        FROM resource r " +
                "        LEFT JOIN publisher pub ON r.publisher_id = pub.id " +
                "        LEFT JOIN titles_resource tit_res ON r.id = tit_res.id_resource "

                queryString += if(type == "dataset_series")"LEFT JOIN inseries series ON r.id = series.data_series_id "
                else "LEFT JOIN serves_dataset serv ON r.id = serv.id_dataservice "

                queryString += "        LEFT JOIN description descr ON r.id = descr.id_resource " +
                "    ) as tt " +
                "    WHERE tt.tipo = :type AND "

        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, _ ->
                if (index == notation.size-1 && notation.size > 1) queryString += "tt.notation LIKE :notation$index ESCAPE '') OR "
                else if (index == 0 && notation.size > 1)  queryString += "(tt.notation LIKE :notation$index ESCAPE '' OR "
                else queryString += "tt.notation LIKE :notation$index ESCAPE '' OR "
            }
        }
        if (publishers.isNotEmpty()) queryString += "tt.label IN :publisher OR "
        if (issued.isNotEmpty()) queryString += "tt.issued IN :issued OR "
        if (modified.isNotEmpty()) queryString += "tt.modified IN :modified OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "
        if (descriptions.isNotEmpty()) queryString += "tt.id_description IN :descriptions OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "AND") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        if(numberOfResources != null) queryString += "GROUP BY tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity  HAVING COUNT(tt.resources) BETWEEN :startCount AND :endCount "

        queryString = queryString.trimEnd() + ") as result;"//" ;"

        val nativeQuery = entityManager.createNativeQuery(queryString)

        nativeQuery.setParameter("type", type)
        if (notation.isNotEmpty()) {
            notation.mapIndexed { index, v ->
                nativeQuery.setParameter("notation$index", v)
            }
        }
        if(publishers.isNotEmpty()) nativeQuery.setParameter("publisher", publishers)
        if(issued.isNotEmpty()) nativeQuery.setParameter("issued", issued)
        if(modified.isNotEmpty()) nativeQuery.setParameter("modified", modified)
        if (descriptions.isNotEmpty()) nativeQuery.setParameter("descriptions", descriptions)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        // val n = nativeQuery.resultList.first() as Long?
        if(numberOfResources != null) {
            nativeQuery.setParameter("startCount", numberOfResources.first.toInt())
            nativeQuery.setParameter("endCount", numberOfResources.second.toInt())
        }
        println("NUMBERSSSSSSSSSSSSSSSSS 2: $numberOfResources")
        return kotlin.runCatching {
            nativeQuery.resultList.first() as Long?
        }.getOrNull()
    }

    fun findDistributionsByFilters(
        filters: Collection<MapInput>,
        orderBy: String,
        sortBy: String,
        page: Int,
        byteSizeRange: Pair<String, String>?,
        formats: List<String>,
    ): Collection<DistributionEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val accessUrl = appliedFilters.find { it.key == "AccessUrl" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()

        var queryString = "SELECT DISTINCT tt.id, tt.access_url, tt.byte_size, tt.format FROM ( " +
                "SELECT dist.id, dist.access_url, dist.byte_size, dist.format, titls.id_title " +
                "FROM distribution dist " +
                "LEFT JOIN titles_distribution titls ON dist.id = titls.id_distribution) as tt " +
                "WHERE "

        if (formats.isNotEmpty()) queryString += "tt.format IN :formats OR "
        if (accessUrl.isNotEmpty()) queryString += "tt.access_url IN :accessUrls OR "
        if (byteSizeRange != null) queryString += "tt.byte_size BETWEEN :byteStart AND :byteEnd OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "WHERE") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, DistributionEntity::class.java)

        if (formats.isNotEmpty()) nativeQuery.setParameter("formats", formats)
        if (accessUrl.isNotEmpty()) nativeQuery.setParameter("accessUrls", accessUrl)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if(byteSizeRange != null) {
            nativeQuery.setParameter("byteStart", byteSizeRange.first.toInt())
            nativeQuery.setParameter("byteEnd", byteSizeRange.second.toInt())
        }
        println("QEURRYYYYYYYYYYYYYYYYY:::::::::::::::::::---------------------------- $queryString")
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<DistributionEntity>?
        }.getOrNull()
    }

    fun findNumberOfDistributionsByFilters(
        filters: Collection<MapInput>,
        byteSizeRange: Pair<String, String>?,
        formats: List<String>,
    ): Long?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val accessUrl = appliedFilters.find { it.key == "AccessUrl" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Títulos" }?.values ?: listOf()

        var queryString = "SELECT COUNT(DISTINCT result.id) as total_elements FROM " +
                "(SELECT DISTINCT tt.id, tt.access_url, tt.byte_size, tt.format " +
                "FROM (SELECT dist.id, dist.access_url, dist.byte_size, dist.format, titls.id_title " +
                "FROM distribution dist " +
                "LEFT JOIN titles_distribution titls ON dist.id = titls.id_distribution) as tt " +
                "WHERE "


        if (formats.isNotEmpty()) queryString += "tt.format IN :formats OR "
        if (accessUrl.isNotEmpty()) queryString += "tt.access_url IN :accessUrls OR "
        if (byteSizeRange != null) queryString += "tt.byte_size BETWEEN :byteStart AND :byteEnd OR "
        if (titles.isNotEmpty()) queryString += "tt.id_title IN :titles OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "WHERE") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")
        queryString =  queryString.trimEnd()+ ") as result"


        val nativeQuery = entityManager.createNativeQuery(queryString)

        if (formats.isNotEmpty()) nativeQuery.setParameter("formats", formats)
        if (accessUrl.isNotEmpty()) nativeQuery.setParameter("accessUrls", accessUrl)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if(byteSizeRange != null) {
            nativeQuery.setParameter("byteStart", byteSizeRange.first.toInt())
            nativeQuery.setParameter("byteEnd", byteSizeRange.second.toInt())
        }
        println("QEURRYYYYYYYYYYYYYYYYY COUNTTT::::::::::: <$formats> ::::::::---------------------------- ${nativeQuery.resultList}")
        return kotlin.runCatching {
            nativeQuery.resultList.first() as Long?
        }.getOrNull()
    }

    fun findCatalogRecordsByFilters(
        filters: Collection<MapInput>,
        orderBy: String,
        sortBy: String,
        page: Int,
        formats: List<String>,
    ): Collection<CatalogRecordEntity>?{
        val appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val hints = appliedFilters.find { it.key == "Hints" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Título" }?.values ?: listOf()
        val url = appliedFilters.find { it.key == "ContentUrl" }?.values ?: listOf()
        val pTopic = appliedFilters.find { it.key == "PrimaryTopic" }?.values ?: listOf()

        var queryString = "SELECT DISTINCT tt.id, tt.content, tt.content_type, tt.content_url, tt.title, tt.resource_id FROM ( " +
                "SELECT cr.id, cr.content, cr.content_type, cr.content_url, cr.title, cr.resource_id, h.id_hint as hints " +
                "FROM catalogrecord cr " +
                "LEFT JOIN hints h ON h.id_catalog_record = cr.id) as tt " +
                "WHERE "

        if (formats.isNotEmpty()) queryString += "tt.content_type IN :formats OR "
        if (hints.isNotEmpty()) queryString += "tt.hints IN :hints OR "
        if (titles.isNotEmpty()) queryString += "tt.title IN :titles OR "
        if (url.isNotEmpty()) queryString += "tt.content_url IN :url OR "
        if (pTopic.isNotEmpty()) queryString += "tt.resource_id IN :pTopic OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "WHERE") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")

        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, CatalogRecordEntity::class.java)

        if (formats.isNotEmpty()) nativeQuery.setParameter("formats", formats)
        if (hints.isNotEmpty()) nativeQuery.setParameter("hints", hints)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if (url.isNotEmpty()) nativeQuery.setParameter("url", url)
        if (pTopic.isNotEmpty()) nativeQuery.setParameter("pTopic", pTopic)

        println("QEURRYYYYYYYYYYYYYYYYY:::::::::::::::::::---------------------------- $queryString")
        return kotlin.runCatching {
            nativeQuery.resultList as Collection<CatalogRecordEntity>?
        }.getOrNull()
    }

    fun findNumberOfCRByFilter(
        appliedFilters: Collection<MapInput>,
        formats: List<String>
    ): Long?{
        val hints = appliedFilters.find { it.key == "Hints" }?.values ?: listOf()
        val titles = appliedFilters.find { it.key == "Título" }?.values ?: listOf()
        val url = appliedFilters.find { it.key == "ContentUrl" }?.values ?: listOf()
        val pTopic = appliedFilters.find { it.key == "PrimaryTopic" }?.values ?: listOf()

        var queryString = "SELECT COUNT(DISTINCT result.id) as total_elements FROM " +
                "(SELECT DISTINCT tt.id, tt.content, tt.content_type, tt.content_url, tt.title, tt.resource_id " +
                "FROM (SELECT cr.id, cr.content, cr.content_type, cr.content_url, cr.title, cr.resource_id, h.id_hint as hints " +
                "FROM catalogrecord cr " +
                "LEFT JOIN hints h ON h.id_catalog_record = cr.id) as tt " +
                " WHERE "
        if (formats.isNotEmpty()) queryString += "tt.content_type IN :formats OR "
        if (hints.isNotEmpty()) queryString += "tt.hints IN :hints OR "
        if (titles.isNotEmpty()) queryString += "tt.title IN :titles OR "
        if (url.isNotEmpty()) queryString += "tt.content_url IN :url OR "
        if (pTopic.isNotEmpty()) queryString += "tt.resource_id IN :pTopic OR "

        var querySplit = queryString.split(' ').toMutableList()

        if(querySplit[querySplit.size-2] == "OR" || querySplit[querySplit.size-2] == "WHERE") querySplit[querySplit.size-2] = ""
        queryString = querySplit.joinToString(" ")
        queryString += ")as result;"
        val nativeQuery = entityManager.createNativeQuery(queryString)

        if (formats.isNotEmpty()) nativeQuery.setParameter("formats", formats)
        if (hints.isNotEmpty()) nativeQuery.setParameter("hints", hints)
        if (titles.isNotEmpty()) nativeQuery.setParameter("titles", titles)
        if (url.isNotEmpty()) nativeQuery.setParameter("url", url)
        if (pTopic.isNotEmpty()) nativeQuery.setParameter("pTopic", pTopic)

        println("QEURRYYYYYYYYYYYYYYYYY COUNTTT:::::::::::::::::::---------------------------- $queryString")
        return kotlin.runCatching {
            nativeQuery.resultList.first() as Long?
        }.getOrNull()
    }
}

@Repository
interface ResourceRepository : JpaRepository<ResourceEntity, String> {
    @Query(
        value = "select * from resource where id = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findByResId(idRes: String): ResourceEntity? //CHANGEE
    fun findByIdAndTypeNot(idS: String, type: String): ResourceEntity?

   /* @Query(
        value = "select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"relationships\" as relat, \"resource\" as r where \"id_catalog\" = ?1 and relat.\"id_resource\" = r.\"id\"",
        nativeQuery = true
    )
    @Transactional*/

    fun findDistinctResourcesCatalogByCatalogResourcesId(id_catalog: String, page: Pageable): Page<ResourceEntity> //CHANGEE
    fun findDistinctResourcesCatalogByCatalogResourcesIdAndType(id_catalog: String, type:String, page: Pageable): Page<ResourceEntity> //CHANGEE
    @Query(
        value = "select DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity from serves_dataset s, resource tt where s.id_resource = tt.id and s.id_dataservice = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findDistinctServesDatasetByDatasetServiceId(id: String,page: Pageable): Page<ResourceEntity> //CHANGEE
    @Query(
        value = "select DISTINCT tt.id, tt.tipo, tt.issued, tt.license, tt.modified, tt.publisher_id,tt.accrual_periodicity, tt.temporal_coverage_end, tt.temporal_coverage_start, tt.validity from serves_dataset s, resource tt where s.id_resource = tt.id and s.id_dataservice = ?1 and tt.tipo = ?2",
        nativeQuery = true
    )
    @Transactional
    fun findDistinctServesDatasetByDatasetServiceIdAndType(id: String,type:String,page: Pageable): Page<ResourceEntity> //CHANGEE


    //@Query("select COUNT(r) from \"resource\" as r WHERE r.\"tipo\" = ?1")
    fun countByType(type: String): Long

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset'",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasets(pageable: Pageable): Page<ResourceEntity>

    fun findByPublisherNotationIn(notations: Collection<String>, page: Pageable): Page<ResourceEntity>

}
