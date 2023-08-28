package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.CatalogEntity
import es.unizar.iaaa.tfg.domain.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import es.unizar.iaaa.tfg.domain.DatasetEntity
import es.unizar.iaaa.tfg.domain.DatasetSeriesEntity
import es.unizar.iaaa.tfg.domain.DistributionEntity
import es.unizar.iaaa.tfg.domain.KeywordEntity
import es.unizar.iaaa.tfg.domain.LanguageEntity
import es.unizar.iaaa.tfg.domain.LocationEntity
import es.unizar.iaaa.tfg.domain.ResourceEntity
import es.unizar.iaaa.tfg.domain.ThemeEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import org.springframework.stereotype.Service

interface CreateRelationsBetweenEntitiesServices {

    fun insertIntoCatalogRecord(cr: CatalogRecordEntity, idCatalog: String)
    fun insertIntoRelathionships(c: CatalogEntity, res: ResourceEntity)
    fun insertIntoServesDataset(dser: DataServiceEntity, res: ResourceEntity)
    fun insertIntoInSeries(d: DatasetEntity, ds: DatasetSeriesEntity)
    fun insertIntoDistributions(d: DatasetEntity, dist: MutableCollection<DistributionEntity>)
    fun insertIntoAccessInService(dist: MutableCollection<DistributionEntity>, dser: DataServiceEntity)
    fun insertIntoLanguagesResources(lang: MutableCollection<LanguageEntity>, res: ResourceEntity)
    fun insertIntoKeywordsDataset(k: Collection<KeywordEntity>, dat: DatasetEntity)
    fun insertIntoDatasetLocation(loc: Collection<LocationEntity>, dat: DatasetEntity)
    fun insertIntoLanguageDescriptions(languageId: String, descriptionId: String,resourceId:String)
    fun insertIntoLanguageTitles(languageId: String, titleId: String, resDist:Any)
    fun insertIntoThemesResources(themeIds: Collection<String?>, resourceId: String)
}

@Service
class CreateRelationsBetweenEntitiesServicesImpl(
    private val languageRepository: LanguageRepository,
    private val keywordRepository: KeywordRepository,
    private val locationRepository: LocationRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val catalogRepository: CatalogRepository,
    private val datasetServicesRepository: DataServiceRepository,
    private val datasetRepository: DatasetRepository,
    private val distributionRepository: DistributionRepository,
    private val descriptionRepository: DescriptionRepository,
    private val titlesDistributionRepository: TitleDistributionRepository,
    private val titlesResourceRepository: TitleResourceRepository,
    private val themeRepository: ThemeRepository,

    ) : CreateRelationsBetweenEntitiesServices {

    override fun insertIntoCatalogRecord(cr: CatalogRecordEntity, idCatalog: String) {
        catalogRecordsRepository.insertInCatalogRecord(cr.id, idCatalog)
    }
    override fun insertIntoRelathionships(c: CatalogEntity, res: ResourceEntity) {
        catalogRepository.insertInRelationships(c.id, res.id)
    }
    override fun insertIntoServesDataset(dser: DataServiceEntity, res: ResourceEntity) {
        datasetServicesRepository.insertInServesDataset(dser.id, res.id)
    }
    override fun insertIntoInSeries(d: DatasetEntity, ds: DatasetSeriesEntity) {
        datasetRepository.insertInInSeries(d.id, ds.id)
    }
    override fun insertIntoDistributions(d: DatasetEntity, dist: MutableCollection<DistributionEntity>) {
        dist.forEach {
            distributionRepository.insertInDistributions(d.id, it.id)
        }
    }
    override fun insertIntoAccessInService(dist: MutableCollection<DistributionEntity>, dser: DataServiceEntity) {
        dist.forEach {
            distributionRepository.insertInAccessInService(it.id, dser.id)
        }
    }
    override fun insertIntoLanguagesResources(lang: MutableCollection<LanguageEntity>, res: ResourceEntity) {
        lang.forEach {
            languageRepository.insertInLanguagesResources(it.id, res.id)
        }
    }

    override fun insertIntoKeywordsDataset(k: Collection<KeywordEntity>, dat: DatasetEntity) {
        k.forEach {
            keywordRepository.insertInKeywordsDataset(it.id.wordId, dat.id)
        }
    }
    override fun insertIntoDatasetLocation(loc: Collection<LocationEntity>, dat: DatasetEntity) {
        loc.forEach {
            locationRepository.insertInDatasetLocation(it.nombre, dat.id)
        }
    }

    override fun insertIntoLanguageDescriptions(languageId: String, descriptionId: String, resourceId:String){
        descriptionRepository.insertInLanguageDescriptions(languageId,descriptionId,resourceId)
    }
    override fun insertIntoLanguageTitles(languageId: String, titleId: String, resDist:Any){
        if (resDist is ResourceEntity){
            println("METOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO: $languageId -- ${resDist.id} -- $titleId")
            titlesResourceRepository.insertInLanguageTitles(languageId,titleId,resDist.id)
        }else if(resDist is DistributionEntity){
            println("METOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO: ${resDist.id}")
            titlesDistributionRepository.insertInLanguageTitles(languageId,resDist.id,titleId)
        }

    }

    override fun insertIntoThemesResources(themeIds: Collection<String?>, resourceId: String){
        println("GEEEEEEETTTTTTTTT THEEEEEEMMMMMMMMEEEEESSSSSSSSS CREATEE $themeIds")
        themeIds.forEach {
            if (it != null){
                val newTheme = ThemeEntity()
                newTheme.id = it
                themeRepository.save(newTheme)
                themeRepository.insertInThemesResources(it, resourceId)
            }
        }

    }

}
