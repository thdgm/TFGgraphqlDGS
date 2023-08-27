package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.catalogRecordRelations.HintsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ThemeEntity
import es.unizar.iaaa.tfg.domain.distributionRelations.TitlesDistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RegulationsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RelatedResourcesEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.TitlesResourceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional


@Repository
interface LanguageRepository : JpaRepository<LanguageEntity, String> {
    fun findLanguagesResourcesByResourcesLanguagesId(id: String): Collection<LanguageEntity>
    fun findLanguagesResourcesByDescriptionsIdDescriptionId(id: String): Collection<LanguageEntity>
    fun findLanguagesResourcesByTitlesDistributionIdTitleId(id: String): Collection<LanguageEntity>
    fun findLanguagesResourcesByTitlesResourceIdTitleId(id: String): Collection<LanguageEntity>


    @Modifying
    @Transactional
    @Query("INSERT INTO \"languages_resources\" (\"id_language\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInLanguagesResources(lang: String, res: String)
}

@Repository
interface DescriptionRepository : JpaRepository<ResourceDescriptionsEntity, String> {
    fun findByResourceId(id: String): Collection<ResourceDescriptionsEntity>
    @Modifying
    @Query(
        value =
        "INSERT INTO \"languages_descriptions\" (\"id_language\",\"id_description\",\"id_resource\") VALUES (?1,?2,?3)",
        nativeQuery = true
    )
    @Transactional
    fun insertInLanguageDescriptions(languageId: String, descriptionId: String, resourceId: String)
}

@Repository
interface TitleDistributionRepository : JpaRepository<TitlesDistributionEntity, String> {

    fun findByDistributionTitleId(id: String): Collection<TitlesDistributionEntity>

    @Modifying
    @Query(
        value =
        "INSERT INTO \"languages_titles_distribution\" (\"id_language\",\"id_distribution\",\"id_title\") " +
                "VALUES (?1,?2,?3)",
        nativeQuery = true
    )
    @Transactional
    fun insertInLanguageTitles(languageId: String, distributionId: String, titleId: String)
}
@Repository
interface TitleResourceRepository : JpaRepository<TitlesResourceEntity, String> {
    fun findByResourceTitleId(id: String): Collection<TitlesResourceEntity>


    @Query(
        value =
        "select * from \"titles_resource\" as t WHERE t.\"id_title\" = ?1 and t.\"id_resource\" = ?2",
        nativeQuery = true
    )
    @Transactional
    fun findTitleByTitleId(titleId: String, resourceId:String): TitlesResourceEntity?

    @Modifying
    @Query(
        value =
        "INSERT INTO \"languages_titles_resources\" (\"id_language\",\"id_title\",\"id_resource\") VALUES (?1,?2,?3)",
        nativeQuery = true
    )
    @Transactional
    fun insertInLanguageTitles(languageId: String, titleId: String,resourceId:String)
}

@Repository
interface KeywordRepository : JpaRepository<KeywordEntity, String> {
    fun findKeywordsByDatasetId(id: String): Collection<KeywordEntity>
    @Query(
        value = "select distinct * from \"keyword\" as t WHERE t.\"id_word\" is not null and t.\"id_word\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllWordIsNotNull(pageable: Pageable): Page<KeywordEntity>
    @Query(
        value = "select k.id_word from (select distinct id_word, COUNT(id_word) from keyword WHERE id_word IS NOT NULL GROUP BY id_word ORDER BY COUNT(id_word) DESC LIMIT 10) as k",
        nativeQuery = true
    )
    @Transactional
    fun findMoreUsedWords(): Collection<String>



}

@Repository
interface LocationRepository : JpaRepository<LocationEntity, String> {
    fun findLocationsByDatasetsId(id: String): Collection<LocationEntity>

    @Modifying
    @Query(
        value = "INSERT INTO \"dataset_location\" (\"location_id\",\"dataset_id\") VALUES (?1,?2)",
        nativeQuery = true
    )
    @Transactional
    fun insertInDatasetLocation(locationId: String, datasetId: String)
}

@Repository
interface ThemeRepository : JpaRepository<ThemeEntity, String>{
    fun findThemeByResourcesId(id: String):Collection<ThemeEntity?>
    @Modifying
    @Query(
        value = "INSERT INTO \"themes_resources\" (\"id_theme\",\"id_resource\") VALUES (?1,?2);",
        nativeQuery = true
    )
    @Transactional
    fun insertInThemesResources(themeId: String, resourceId: String)

    @Query(
        value =
        "select * from \"theme\" as t WHERE t.\"id\" is not null and t.\"id\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllIdIsNotNull(pageable: Pageable): Page<ThemeEntity>

}

@Repository
interface PublisherRepository : JpaRepository<PublisherEntity, String>{

    @Query(
        value =
        "select distinct substring(notation, 1, 1) from \"publisher\" as t WHERE t.\"notation\" is not null and t.\"notation\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllNotationNotNull(pageable: Pageable): Page<String>

    @Query(
        value =
        "select distinct label from \"publisher\" as t WHERE t.\"label\" is not null and t.\"label\" <> ''",
        nativeQuery = true
    )
    @Transactional
    fun findAllLabelNotNull(pageable: Pageable): Page<String>

    fun findByLabel(label: String): PublisherEntity?
    /*@Query(value="select p.\"id\", p.\"notation\", p.\"label\" from \"publisher\" as p where (:notations is null OR p.\"notation\" LIKE CONCAT(:notations, '%'));"
        ,nativeQuery = true)
    @Transactional
    fun findPublisherByNotationIn(@Param("notations") notations: Collection<String>, page: Pageable): Page<PublisherEntity>*/
}

@Repository
interface IdentifierRepository : JpaRepository<IdentifierEntity, String>{
    fun findByResourceId(id: String):Collection<IdentifierEntity?>
    fun findByDistributionId(id: String):Collection<IdentifierEntity?>

}
@Repository
interface HintsRepository : JpaRepository<HintsEntity, String>{
    fun findByCatalogRecordHintsId(id: String): Collection<HintsEntity>


}

@Repository
interface RegulationsRepository : JpaRepository<RegulationsEntity, String>{
    fun findRegulationsByDatasetsId(id: String):Collection<RegulationsEntity?>
    @Modifying
    @Query(
        value = "INSERT INTO \"regulations_resources\" (\"id_regulations\",\"id_dataset\") VALUES (?1,?2);",
        nativeQuery = true
    )
    @Transactional
    fun insertInRegulationsDatasets(regulationId: String, datasetId: String)

}

@Repository
interface RelatedResourcesRepository : JpaRepository<RelatedResourcesEntity, String>{
    fun findRelatedResourcesByDatasetsId(id: String):Collection<RelatedResourcesEntity?>
    @Modifying
    @Query(
        value = "INSERT INTO \"resources_related\" (\"id_related_resources\",\"id_dataset\") VALUES (?1,?2);",
        nativeQuery = true
    )
    @Transactional
    fun insertInRelatedResourcesDatasets(resRelatId: String, datasetId: String)

}