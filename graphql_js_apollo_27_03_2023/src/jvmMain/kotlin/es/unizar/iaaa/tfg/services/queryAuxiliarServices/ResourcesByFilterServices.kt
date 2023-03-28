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
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface ResourcesByFilterServices {
    fun getResourcesByField(filter: String, value: String): Collection<Resource?>
}

@Service
class ResourcesByFilterServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val datasetRepository: DatasetRepository,
    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo,
    private val converterAux: ConvertersAuxiliarEntitiesTo,
    private val distributionRepository: DistributionRepository,
    private val keywordRepository: KeywordRepository,


) : ResourcesByFilterServices {

    /*
     * Return resourceInCatalog collection according to field value.
     * In case filter is periodicity, the value could be days, weeks, months, years.
     */
    override fun getResourcesByField(filter: String, value: String): Collection<Resource?> =
        when(filter){
            "publisher" -> resourceRepository.findAll().filter { it.publisher?.notation == value }
                .map {  convertersResourcesEntitiesTo.createResource(it)}
            "periodicity" -> {

                if (PERIODICITY_RANGE.contains(value)){
                    datasetRepository.findAll().filter { converterAux.toPeriocidad(it.accrualPeriodicity).range == value }
                        .map {  convertersResourcesEntitiesTo.createResource(it)}
                } else {
                    emptyList()
                }
            }
            "keyword" -> {
                datasetRepository.findAll().filter {
                    keywordRepository.findKeywordsByDatasetId(it.id).map{it.id.wordId}.contains(value)
                }.map{convertersResourcesEntitiesTo.createResource(it)}

            }
            "format" -> {
                distributionRepository.findAll()
                    .filter{it.format == "application/json"}
                    .map{it.accessService}.flatten().distinct()
                    .map{it.servesDataset}.flatten().distinct()
                    .map { convertersResourcesEntitiesTo.createResource(it) }
            }
            "theme" -> {
                emptyList()

            }
            else -> emptyList()
        }




}
