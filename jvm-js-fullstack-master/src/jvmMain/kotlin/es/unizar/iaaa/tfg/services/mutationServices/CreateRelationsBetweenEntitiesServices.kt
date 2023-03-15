package es.unizar.iaaa.tfg.services.mutationServices

import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ThemeEntity
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.LocationRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import org.springframework.stereotype.Service

interface CreateRelationsBetweenEntitiesServices {

    fun insertIntoCatalogRecord(cr: CatalogRecordEntity, idCatalog: String)
    fun insertIntoRelathionships(c: CatalogEntity, res: ResourceEntity)
    fun insertIntoServesDataset(dser: DataServiceEntity, res: ResourceEntity)
    //fun insertIntoInSeries(d: DatasetEntity, ds: DatasetSeriesEntity)
    fun insertIntoDistributions(d: DatasetEntity, dist: MutableCollection<DistributionEntity>)
    fun insertIntoAccessInService(dist: MutableCollection<DistributionEntity>, dser: DataServiceEntity)
    fun insertIntoDatasetLocation(loc: Collection<LocationEntity>, dat: DatasetEntity)
    fun insertIntoThemesResources(themeIds: Collection<String?>, resourceId: String)
}

@Service
class CreateRelationsBetweenEntitiesServicesImpl(

    private val locationRepository: LocationRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val catalogRepository: CatalogRepository,
    private val datasetServicesRepository: DataServiceRepository,
    private val distributionRepository: DistributionRepository,
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
    /*override fun insertIntoInSeries(d: DatasetEntity, ds: DatasetSeriesEntity) {
        datasetRepository.insertInInSeries(d.id, ds.id)
    }*/
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

    override fun insertIntoDatasetLocation(loc: Collection<LocationEntity>, dat: DatasetEntity) {
        loc.forEach {
            locationRepository.insertInDatasetLocation(it.nombre, dat.id)
        }
    }

    override fun insertIntoThemesResources(themeIds: Collection<String?>, resourceId: String){
        themeIds.forEach {
            if (!it.isNullOrBlank()){
                val newTheme = ThemeEntity()
                newTheme.id = it
                themeRepository.save(newTheme)
                themeRepository.insertInThemesResources(it, resourceId)
            }
        }

    }

}
