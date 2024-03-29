package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional


@Repository
interface LanguageRepository : JpaRepository<LanguageEntity, String> {
    fun findLanguagesResourcesByResourcesLanguagesId(id: String): Collection<LanguageEntity>
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

   /* @Modifying
    @Query(value = "INSERT INTO keyword (word,language_id) VALUES (?1,?2);", nativeQuery = true)
    @Transactional
    fun createKeyword(@Param("word") word: String, @Param("language_id") id: String)*/


}

@Repository
interface LocationRepository : JpaRepository<LocationEntity, String> {
    fun findLocationsByDatasetsId(id: String): Collection<LocationEntity>
}
