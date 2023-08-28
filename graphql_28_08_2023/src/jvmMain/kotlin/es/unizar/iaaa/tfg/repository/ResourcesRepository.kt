package es.unizar.iaaa.tfg.repository

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
    fun findCatalogResourcesByResourcesCatalogId(id: String): Collection<CatalogEntity?>
    fun findCatalogsByRecordsId(id: String): Collection<CatalogEntity?>



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
    fun findCatalogRecordsByResourceId(id: String,page: Pageable): Page<CatalogRecordEntity?>

    @Query(
        value =
        "select cr.id from catalogrecord cr, cataloginrecord c where c.id_resource = ?1 and c.id_catalog_record = cr.id",
        nativeQuery = true
    )
    @Transactional
    fun findRecordsByCatalogsId(id: String, page: Pageable): Page<String?>
    @Query(
        value =
        "select cr from catalogrecord cr, cataloginrecord c where c.id_resource = ?1 and c.id_catalog_record = cr.id",
        nativeQuery = true
    )
    @Transactional
    fun findRecordsByCatalogId(id: String, page: Pageable): Page<CatalogRecordEntity>
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
    fun findAccessServiceByDistributionsId(id: String): Collection<DataServiceEntity?>
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
        "select distinct accrual_periodicity from \"resource\" as t WHERE t.\"accrual_periodicity\" is not null and t.\"accrual_periodicity\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllAccrualNotNull(pageable: Pageable): Page<String>

    fun findDatasetByInseriesId(id: String,page: Pageable): Page<DatasetEntity?>
    fun findDatasetsByDistributionsDatasetId(id: String): Collection<DatasetEntity?>

    fun findByAccrualPeriodicityIn(periods: Collection<String>, page: Pageable): Page<DatasetEntity>
    fun findDatasetByInseriesIdIn(series: Collection<String>, page: Pageable): Page<DatasetEntity>
    fun findDatasetsByDistributionsDatasetIdIn(distributions: Collection<String>, page: Pageable): Page<DatasetEntity>

    //ORDER BY LABEL (publisher):  select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id from (select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id,pub.label from distribution as d, distributions as dist, resource as r, publisher as pub where d.id = dist.distribution_id and r.id = dist.dataset_id and pub.id = r.publisher_id and d.format IN ('text/html') order by pub.label ASC) as r;
    //ORDER BY NOTATION (ADMON LEVEL): select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id from distribution as d, distributions as dist, resource as r where d.id = dist.distribution_id and r.id = dist.dataset_id and d.format IN ('text/html') order by r.publisher_id ASC;
    //ORDER BY TITLE: select r.id,r.issued,r.modified,r.tipo,r.license,r.accrual_periodicity,r.temporal_coverage_end,r.temporal_coverage_start,r.validity,r.publisher_id, COUNT(tit.id_title) from distribution as d, distributions as dist, resource as r, titles_resource as tit where d.id = dist.distribution_id and r.id = dist.dataset_id and d.format IN ('text/html') and tit.id_resource = r.id  GROUP BY r.id order by COUNT(tit.id_title) ASC;
    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsDatasetFormatIn(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>

    @Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"keyword\" as key, \"resource\" as r where r.\"id\" = key.\"id_dataset\" and r.\"tipo\" = 'dataset' and key.\"id_word\" IN :keywords"
        ,nativeQuery = true)
    @Transactional
    fun findByKeywordsIn(@Param("keywords") keywords: Collection<String>, page: Pageable): Page<DatasetEntity>



}

@Repository
interface DatasetSeriesRepository : JpaRepository<DatasetSeriesEntity, String> {
    fun findInseriesByDatasetId(id: String): Collection<DatasetSeriesEntity?>
    @Query(
        value = "select COUNT(DISTINCT dataset_id) from inseries where data_series_id = ?1",
        nativeQuery = true
    )
    @Transactional
    fun findNumberOfMembersDatasets(id: String): Int
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
class ResourceRepositoryCriteria(private val entityManager: EntityManager) {
    fun getResources(
        filters: Collection<MapInput>,
        type: String,
        page: Int,
        issued: List<LocalDateTime>,
        modified: List<LocalDateTime>,
        period: List<String>,
        notation: List<String>
    ): Collection<ResourceEntity> {
        val criteriaBuilder: CriteriaBuilder = entityManager.criteriaBuilder
        val criteriaQuery: CriteriaQuery<ResourceEntity> = criteriaBuilder.createQuery(ResourceEntity::class.java)
        val root: Root<ResourceEntity> = criteriaQuery.from(ResourceEntity::class.java)
        criteriaQuery.select(root)
        val predicates: MutableList<Predicate> = ArrayList()
        println("OBTENGOOOO1::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ")
        filters.forEach { filter ->
            when (filter.key) {
                "Categoría" -> {
                    if (!filter.values.isEmpty()) {
                        val themeJoin: Join<ResourceEntity, ThemeEntity> = root.join("theme")
                        predicates.add(themeJoin.get<String>("id").`in`(filter.values))
                    }
                }
                "Frecuencia de Actualización" -> {
                    if (!filter.values.isEmpty()) {

                       // val datasetJoin: Join<ResourceEntity, DatasetEntity> = root.join("id")
                        predicates.add(root.get<String>("accrualPeriodicity").`in`(period))
                    }
                }
                "Publicador" -> {
                    if (!filter.values.isEmpty()) {
                        val publisherJoin: Join<ResourceEntity, PublisherEntity> = root.join("publisher")
                        predicates.add(publisherJoin.get<String>("label").`in`(filter.values))
                    }
                }

                "Nivel de Administración" -> {
                    if (!filter.values.isEmpty()) {
                        val publisherJoin: Join<ResourceEntity, PublisherEntity> = root.join("publisher")
                        for (n in notation) {
                            predicates.add(criteriaBuilder.like(publisherJoin.get("notation"), n))
                        }
                        //predicates.add(publisherJoin.get<String>("notation").`in`(filter.values))
                    }
                }
                "Etiqueta" -> {
                    if (!filter.values.isEmpty()) {
                        val datasetJoin: Join<ResourceEntity, KeywordEntity> = root.join("keywords")

                        predicates.add(
                            datasetJoin.get<KeywordDatasetId>("id").get<String>("wordId").`in`(filter.values)
                        )
                    }
                }
                "Formato" -> {
                    if (!filter.values.isEmpty()) {
                        val distributionJoin: Join<ResourceEntity, DistributionEntity> =
                            root.join("distributionsDataset")
                        val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
                        val formats = filter.values.mapNotNull { mediaTypeMap[it] }
                        println("FORMATS:::::::::::::::::::::::::::::: $formats")
                        predicates.add(distributionJoin.get<String>("format").`in`(formats))
                    }
                }
                else ->{}

            }
        }
        println("OBTENGOOOO2:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::${predicates.toTypedArray()}")

        val combinedPredicate = criteriaBuilder.or(*predicates.toTypedArray())
        criteriaQuery.where(combinedPredicate)


        val pageNumber = page
        val pageSize = 10
        criteriaQuery.orderBy(criteriaBuilder.asc(root.get<String>("id")))
        val typedEM = entityManager.createQuery(criteriaQuery)
            typedEM.setFirstResult((pageNumber) * pageSize)
            typedEM.setMaxResults(pageSize)
            val resultList =typedEM.resultList
        println("OBTENGOOOO::::::::::::::::::::::: $resultList")
        return resultList



        // Convertir entidades a recursos

    }
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
    fun findByIdAndTypeNot(idS: String, type: String): ResourceEntity?



   /* @Query(
        value = "select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"relationships\" as relat, \"resource\" as r where \"id_catalog\" = ?1 and relat.\"id_resource\" = r.\"id\"",
        nativeQuery = true
    )
    @Transactional*/
    fun findDistinctResourcesCatalogByCatalogResourcesId(id_catalog: String, page: Pageable): Page<ResourceEntity>
    fun findDistinctResourcesCatalogByCatalogResourcesIdAndType(id_catalog: String, type:String, page: Pageable): Page<ResourceEntity>
    fun findDistinctServesDatasetByDatasetServiceId(id: String,page: Pageable): Page<ResourceEntity>
    fun findDistinctServesDatasetByDatasetServiceIdAndType(id: String,type:String,page: Pageable): Page<ResourceEntity>


    //@Query("select COUNT(r) from \"resource\" as r WHERE r.\"tipo\" = ?1")
    fun countByType(type: String): Long

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset'",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasets(pageable: Pageable): Page<ResourceEntity>

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'catalog'",
        nativeQuery = true
    )
    @Transactional
    fun findAllCatalogs(pageable: Pageable): Page<ResourceEntity>

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by issued asc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByIssuedASC(pageable: Pageable): Page<ResourceEntity>
    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by issued desc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByIssuedDESC(pageable: Pageable): Page<ResourceEntity>

    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by modified asc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByModifiedASC(pageable: Pageable): Page<ResourceEntity>
    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by modified desc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByModifiedDESC(pageable: Pageable): Page<ResourceEntity>
    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by publisher_id asc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByNotationASC(pageable: Pageable): Page<ResourceEntity>
    @Query(
        value =
        "select * from \"resource\" as t WHERE t.\"tipo\" = 'dataset' order by publisher_id desc",
        nativeQuery = true
    )
    @Transactional
    fun findAllDatasetsOrderByNotationDESC(pageable: Pageable): Page<ResourceEntity>

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
