package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.ResourceDescriptionsEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.TitlesEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

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
}

@Repository
interface LocationRepository : JpaRepository<LocationEntity, String> {
    fun findLocationsByDatasetsId(id: String): Collection<LocationEntity>
}
