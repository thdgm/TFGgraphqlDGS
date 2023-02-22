package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.PublisherEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.ThemeEntity
import es.unizar.iaaa.tfg.domain.TitlesDistributionEntity
import es.unizar.iaaa.tfg.domain.TitlesResourceEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
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
        value = "INSERT INTO \"languages_descriptions\" (\"id_language\",\"id_description\",\"id_resource\") VALUES (?1,?2,?3)",
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
        value = "INSERT INTO \"languages_titles_distribution\" (\"id_language\",\"id_distribution\",\"id_title\") VALUES (?1,?2,?3)",
        nativeQuery = true
    )
    @Transactional
    fun insertInLanguageTitles(languageId: String, distributionId: String, titleId: String)
}
@Repository
interface TitleResourceRepository : JpaRepository<TitlesResourceEntity, String> {
    fun findByResourceTitleId(id: String): Collection<TitlesResourceEntity>

    @Modifying
    @Query(
        value = "INSERT INTO \"languages_titles_resources\" (\"id_language\",\"id_title\",\"id_resource\") VALUES (?1,?2,?3)",
        nativeQuery = true
    )
    @Transactional
    fun insertInLanguageTitles(languageId: String, titleId: String,resourceId:String)
}
@Repository
interface KeywordRepository : JpaRepository<KeywordEntity, String> {
    fun findKeywordsByDatasetId(id: String): Collection<KeywordEntity>

    @Modifying
    @Query(value = "INSERT INTO \"dataset_keyword\" (\"keyword_id\",\"dataset_id\") VALUES (?1,?2)", nativeQuery = true)
    @Transactional
    fun insertInKeywordsDataset(keywordId: String, id: String)
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

}

@Repository
interface PublisherRepository : JpaRepository<PublisherEntity, String>