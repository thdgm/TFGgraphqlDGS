package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface LanguageRepository : JpaRepository<LanguageEntity, String> {
    fun findLanguagesResourcesByResourcesLanguagesId(id: String): Collection<LanguageEntity>

    @Modifying
    @Transactional
    @Query("INSERT INTO \"languages_resources\" (\"id_language\", \"id_resource\") VALUES (?1, ?2)", nativeQuery = true)
    fun insertInLanguagesResources(lang: String, res: String)
}

@Repository
interface DescriptionRepository : JpaRepository<ResourceDescriptionsEntity, String> {
    fun findByResourceId(id: String): Collection<ResourceDescriptionsEntity>
}

@Repository
interface TitleRepository : JpaRepository<TitlesEntity, String> {
    fun findByResourceTitleId(id: String): Collection<TitlesEntity>
    fun findByDistributionTitleId(id: String): Collection<TitlesEntity>
}

@Repository
interface KeywordRepository : JpaRepository<KeywordEntity, String> {
    fun findKeywordsByDatasetsId(id: String): Collection<KeywordEntity>

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
