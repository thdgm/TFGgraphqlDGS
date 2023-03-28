package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.constants.ConstantValues.PERIODICITY_RANGE
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface ResourcesByFilterServices {
    fun getResourcesByField(filter: String, value: Collection<String>): Collection<Resource?>
}

@Service
class ResourcesByFilterServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val datasetRepository: DatasetRepository,
    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo,
    private val converterAux: ConvertersAuxiliarEntitiesTo,
    private val distributionRepository: DistributionRepository,
    private val keywordRepository: KeywordRepository,
    private val themeRepository: ThemeRepository,


) : ResourcesByFilterServices {

    /*
     * Return resourceInCatalog collection according to field value.
     * In case filter is periodicity, the value could be days, weeks, months, years.
     */
    override fun getResourcesByField(filter: String, value: Collection<String>): Collection<Resource?> =
        when(filter){
            "publisher" -> {
                if (value.size == 1) { // Just one publisher is allowed to filter by.
                    resourceRepository.findAll().filter { value.contains(it.publisher?.notation) }
                        .map { convertersResourcesEntitiesTo.createResource(it) }
                }else {
                    emptyList()
                }
            }
            "periodicity" -> {

                if (value.all{PERIODICITY_RANGE.contains(it)}){
                    datasetRepository.findAll().filter { value.contains(converterAux.toPeriocidad(it.accrualPeriodicity).range) }
                        .map {  convertersResourcesEntitiesTo.createResource(it)}
                } else {
                    emptyList()
                }
            }
            "keyword" -> {
                datasetRepository.findAll().filter {
                    keywordRepository.findKeywordsByDatasetId(it.id).map{it.id.wordId}.any{value.contains(it)}
                }.map{convertersResourcesEntitiesTo.createResource(it)}

            }
            "format" -> {
                distributionRepository.findAll()
                    .filter{value.contains(it.format)}
                    .map{it.accessService}.flatten().distinct()
                    .map{it.servesDataset}.flatten().distinct()
                    .map { convertersResourcesEntitiesTo.createResource(it) }
            }
            "theme" -> {

               resourceRepository.findAll().filter{
                   themeRepository.findThemeByResourcesId(it.id).map { it?.id }.any{value.contains(it)}
               }.map { convertersResourcesEntitiesTo.createResource(it) }

            }
            else -> emptyList()
        }




}
