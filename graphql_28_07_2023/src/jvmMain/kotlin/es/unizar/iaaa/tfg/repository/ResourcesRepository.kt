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
import jakarta.persistence.criteria.JoinType
import jakarta.persistence.criteria.Predicate
import jakarta.persistence.criteria.Root
import jakarta.persistence.criteria.Subquery
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime


@Repository
interface CatalogRepository : JpaRepository<CatalogEntity, String> {
    fun findCatalogResourcesByResourcesCatalogId(id: String): Collection<CatalogEntity?>
    fun findCatalogsByRecordsId(id: String): Collection<CatalogEntity?>

    @Query(
        value =
        "select cr.id, cr.content, cr.content_type, cr.content_url, cr.title, cr.resource_id from catalogrecord cr, cataloginrecord c where c.id_resource = ?1 and c.id_catalog_record = cr.id",
        nativeQuery = true
    )
    @Transactional
    fun findRecordsByCatalogId(id: String, page: Pageable): Page<CatalogRecordEntity>

    fun findRecordsById(id: String, pageable: Pageable): Page<CatalogRecordEntity>

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
}

@Repository
interface CatalogRecordsRepository : JpaRepository<CatalogRecordEntity, String> {
    fun findCatalogRecordsByResourceId(id: String): Collection<CatalogRecordEntity?>

    //fun findRecordsByCatalogsId(id: String, page: Pageable): Collection<CatalogRecordEntity?>

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

    /*@Query(value="select r.\"id\",r.\"issued\",r.\"modified\",r.\"tipo\",r.\"license\",r.\"accrual_periodicity\",r.\"temporal_coverage_end\",r.\"temporal_coverage_start\",r.\"validity\",r.\"publisher_id\" from \"distribution\" as d, \"distributions\" as dist, \"resource\" as r where d.\"id\" = dist.\"distribution_id\" and r.\"id\" = dist.\"dataset_id\" and d.\"format\" IN :format"
        ,nativeQuery = true)
    @Transactional
    fun findByDistributionsFormatInOrderByLabelASC(@Param("format") format: Collection<String>, page: Pageable): Page<DatasetEntity>*/
/*
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
*/


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

        // Aplicar los filtros seleccionados

        /*filters.forEach { filter ->
            when (filter.key) {
                "Categoría" -> {
                    val themeJoin: Join<ResourceEntity, ThemeEntity> = root.join("theme")
                    predicates.add(themeJoin.get<String>("id").`in`(filter.values))
                }
                /*"Formato" -> {
                    val distributionJoin: Join<DatasetEntity, DistributionEntity> = root.join("distributions")
                    val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
                    val formats = filter.values.mapNotNull { mediaTypeMap[it] }
                    predicates.add(distributionJoin.get<String>("format").`in`(formats))
                }*/
                "Frecuencia de Actualización" -> {
                    val datasetJoin: Join<ResourceEntity, DatasetEntity> = root.join("dataset")
                    predicates.add(datasetJoin.get<String>("accrualPeriodicity").`in`(period))
                }
               /* "Títulos" -> {
                    predicates.add(root.get<String>("title").`in`(filter.values))
                }
                "Descripciones" -> {
                    predicates.add(root.get<String>("description").`in`(filter.values))
                }
                "DataServices" -> {
                    val datasetServiceJoin: Join<ResourceEntity, DataServiceEntity> = root.join("datasetService")
                    predicates.add(datasetServiceJoin.get<String>("datasetServiceId").`in`(filter.values))
                }
                "DatasetSeries" -> {
                    val datasetSeriesJoin: Join<ResourceEntity, DatasetSeriesEntity> = root.join("datasetSeries")
                    predicates.add(datasetSeriesJoin.get<String>("id").`in`(filter.values))
                }
                "Catalogs" -> {
                    val catalogJoin: Join<ResourceEntity, CatalogEntity> = root.join("catalogResources")
                    predicates.add(catalogJoin.get<String>("id").`in`(filter.values))
                }
                "Distribuciones" -> {
                    val distributionJoin: Join<ResourceEntity, DistributionEntity> = root.join("distributions")
                    predicates.add(distributionJoin.get<String>("id").`in`(filter.values))
                }
                "Etiqueta" -> {
                    val datasetJoin: Join<ResourceEntity, DatasetEntity> = root.join("dataset")
                    predicates.add(datasetJoin.get<String>("keywords").`in`(filter.values))
                }
                "Publicador" -> {
                    val publisherJoin: Join<ResourceEntity, PublisherEntity> = root.join("publisher")
                    predicates.add(publisherJoin.get<String>("label").`in`(filter.values))
                }
                "Licenses" -> {
                    predicates.add(root.get<String>("license").`in`(filter.values))
                }
                "Nivel de Administración" -> {
                    val publisherJoin: Join<ResourceEntity, PublisherEntity> = root.join("publisher")
                    predicates.add(publisherJoin.get<String>("notation").`in`(filter.values))
                }
                "Fecha creación" -> {
                    predicates.add(root.get<LocalDateTime>("issued").`in`(issued))
                }
                "Fecha última modificación" -> {
                    predicates.add(root.get<LocalDateTime>("modified").`in`(modified))
                }
                "Frecuencia de Actualización" -> {
                    val datasetJoin: Join<ResourceEntity, DatasetEntity> = root.join("dataset")
                    predicates.add(datasetJoin.get<String>("accrualPeriodicity").`in`(period))
                }
                "Formato" -> {
                    val distributionJoin: Join<ResourceEntity, DistributionEntity> = root.join("distributions")
                    val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
                    val formats = filter.values.mapNotNull { mediaTypeMap[it] }
                    predicates.add(distributionJoin.get<String>("format").`in`(formats))
                }
                "PrimaryTopic" -> {
                    val catalogRecordJoin: Join<ResourceEntity, CatalogRecordEntity> = root.join("catalogRecords")
                    predicates.add(catalogRecordJoin.get<String>("id").`in`(filter.values))
                }*/
                else -> {

                    // Otros casos de filtro, si los tienes
                }
            }
        }

        // Aplicar filtro por tipo
        predicates.add(criteriaBuilder.equal(root.get<String>("type"), type))

        // Combinar todos los predicados con AND
        val combinedPredicate: Predicate = criteriaBuilder.and(*predicates.toTypedArray())
        criteriaQuery.select(root).where(combinedPredicate)

        // Aplicar paginación
        val pageSize = 20
        val offset = page * pageSize
        val resultList = entityManager.createQuery(criteriaQuery)
            .setFirstResult(offset)
            .setMaxResults(pageSize)
            .resultList
*/

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
        val notations = notation
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
        if (notations.isNotEmpty()) queryString += "tt.notation LIKE :notation ESCAPE '' OR "
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
        if (notations.isNotEmpty()) nativeQuery.setParameter("notation", notations)
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
        val keywords = appliedFilters.find { it.key == "Etiqueta" }?.values ?: listOf()
        val notations = notation
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
        if (periods.isNotEmpty()) queryString += "tt.accrual_periodicity IN :period OR "
        if (keywords.isNotEmpty()) queryString += "tt.id_word IN :keyword OR "
        if (notations.isNotEmpty()) queryString += "tt.notation LIKE :notation ESCAPE '' OR "
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
        queryString += "ORDER BY tt.${sortBy} $orderBy " +
                "OFFSET ${page*10} ROWS FETCH FIRST 10 ROWS ONLY;"

        val nativeQuery = entityManager.createNativeQuery(queryString, ResourceEntity::class.java)
        if(formats.isNotEmpty()) nativeQuery.setParameter("format", formats)
        if (periods.isNotEmpty())nativeQuery.setParameter("period", periods)
        if(keywords.isNotEmpty()) nativeQuery.setParameter("keyword", keywords)
        if (notations.isNotEmpty()) nativeQuery.setParameter("notation", notations)
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
