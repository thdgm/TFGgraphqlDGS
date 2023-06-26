package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.annotations.MediaType
import es.unizar.iaaa.tfg.constants.ConstantValues.PERIODICITY_RANGE
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.repository.DataServiceRepository
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.IdentifierRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

interface ResourcesByFilterServices {
    fun getResourcesByField(filter: String, value: Collection<String>, page: Int): Collection<Resource?>

    fun getResourcesByFilters(filters: Collection<MapInput>, type: String, page: Int): Collection<Resource>
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
    override fun getResourcesByField(filter: String, value: Collection<String>, page: Int): Collection<Resource?> {
        println("ESTO1::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ")

        return when (filter) {
            "publisher" -> {
                if (value.size == 1) { // Just one publisher is allowed to filter by.
                    resourceRepository.findAllDatasets(PageRequest.of(page,Int.MAX_VALUE)).content.filter { value.contains(it.publisher?.notation) }
                        .map { convertersResourcesEntitiesTo.createResource(it) }
                } else {
                    emptyList()
                }
            }

            "periodicity" -> {
                if (value.all { PERIODICITY_RANGE.contains(it) }) {
                    datasetRepository.findAll(PageRequest.of(page,Int.MAX_VALUE)).content
                        .filter { value.contains(converterAux.toPeriocidad(it.accrualPeriodicity).range) }
                        .map { convertersResourcesEntitiesTo.createResource(it) }
                } else {
                    emptyList()
                }
            }

            "keyword" -> {
                datasetRepository.findAll(PageRequest.of(page,Int.MAX_VALUE)).content.filter {
                    keywordRepository.findKeywordsByDatasetId(it.id).map { it.id.wordId }.any { value.contains(it) }
                }.map { convertersResourcesEntitiesTo.createResource(it) }

            }

            "format" -> {
                distributionRepository.findAll(PageRequest.of(page,Int.MAX_VALUE)).content
                    .filter { value.contains(it.format) }
                    .map { it.accessService }.flatten().distinct()
                    .map { it.servesDataset }.flatten().distinct()
                    .map { convertersResourcesEntitiesTo.createResource(it) }
            }

            "theme" -> {

                resourceRepository.findAllDatasets(PageRequest.of(page,Int.MAX_VALUE)).content.filter {
                    themeRepository.findThemeByResourcesId(it.id).map { it?.id }.any { value.contains(it) }
                }.map { convertersResourcesEntitiesTo.createResource(it) }

            }

            "adminLevel" -> {

                resourceRepository.findAllDatasets(PageRequest.of(page,Int.MAX_VALUE)).content.filter {
                    it.publisher !== null
                }.filter { it.publisher!!.notation[0] == converterAux.getAdministrationLevel(value.elementAt(0)) }
                    .map { convertersResourcesEntitiesTo.createResource(it) }

            }

            "all" -> {
                resourceRepository.findAllDatasets(PageRequest.of(page,100)).content.map { convertersResourcesEntitiesTo.createResource(it) }

            }

            else -> listOf(null, null)
        }



    }

    override fun getResourcesByFilters(filters: Collection<MapInput>, type: String,page: Int): Collection<Resource>{

        if (filters.isEmpty()){
            return resourceRepository.findAllDatasets(PageRequest.of(page,10)).content.map { convertersResourcesEntitiesTo.createResource(it) }
        }
        println("ESTO::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: $filters")
        return filters.asSequence().map {
            when(it.key){
                "Categoría" -> resourceRepository.findResourcesByThemeIn(it.values,PageRequest.of(page,20))
                "Títulos" -> resourceRepository.findByTitlesIn(it.values,PageRequest.of(page,20))
                "Descripciones" -> resourceRepository.findByDescriptionsIn(it.values,PageRequest.of(page,20))
                "DataServices" -> resourceRepository.findServesDatasetByDatasetServiceIdIn(it.values,PageRequest.of(page,20))
                "DatasetSeries" -> datasetRepository.findDatasetByInseriesIdIn(it.values,PageRequest.of(page,20))
                "Catalogs" -> resourceRepository.findResourcesCatalogByCatalogResourcesIdIn(it.values,PageRequest.of(page,20))
                "Distribuciones" -> datasetRepository.findDatasetsByDistributionsIdIn(it.values,PageRequest.of(page,20))
                "Etiqueta" -> datasetRepository.findByKeywordsIn(it.values,PageRequest.of(page,20))
                "Publicador" -> resourceRepository.findByPublisherLabelIn(it.values,PageRequest.of(page,20))
                "Licenses" -> resourceRepository.findByLicenseIn(it.values,PageRequest.of(page,20))
                "Nivel de Administración" -> {

                    val resultList = mutableListOf<ResourceEntity>()
                    val numberOfPages = if(it.values.size > 0) 20 / it.values.size else 20
                    it.values.forEach {
                        val letter = converterAux.getAdministrationLevel(it)
                        resultList += resourceRepository.findByPublisherNotationLike("${letter}%", PageRequest.of(page,numberOfPages)).toList()
                    }
                    resultList.distinct()
                    //val v = resourceRepository.findByPublisherNotationIn(it.values,PageRequest.of(page,20))
                }
                "Fecha creación" -> resourceRepository.findByIssuedIn(it.values.map{converterAux.toLocalDateTimeSimple(it)},PageRequest.of(page,20))
                "Fecha última modificación" -> resourceRepository.findByModifiedIn(it.values.map{converterAux.toLocalDateTimeSimple(it)},PageRequest.of(page,20))
                "Frecuencia de Actualización" -> {
                    val freqvalues = it.values.map{converterAux.castFrequencyFilter(it)}
                    datasetRepository.findByAccrualPeriodicityIn(freqvalues,PageRequest.of(page,20))
                }
                "Formato" -> {
                    val valuesFormat = it.values.map{ MediaTypeMap.MEDIA_TYPE["$it"]}.filterNotNull()
                    datasetRepository.findByDistributionsFormatIn(valuesFormat,PageRequest.of(page,20))
                }
                "PrimaryTopic" -> resourceRepository.findByCatalogRecordsIdIn(it.values,PageRequest.of(page,20))
                else -> listOf()
            }
        }.flatten().filter { it.type == type }.map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
            .toList()
    }
}
