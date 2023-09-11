package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import com.graphqlDGS.graphqlDGS.model.types.PublisherOutput
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.slf4j.LoggerFactory.getLogger
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.repository.ResourceRepositoryExtra
import org.springframework.cache.annotation.Cacheable
import org.springframework.cache.annotation.EnableCaching
import org.springframework.context.annotation.Configuration

/*
 * Services for get Resource fields and entity.
 */
interface ResourceServices {
    fun getResources(id: String): ResourceInCatalog?
    fun getLanguages(id: String): Collection<String?>
    fun getTitles(id: String): Collection<LangString?>
    fun getDescriptions(id: String): Collection<LangString?>
    fun getCreacion(id: String): LocalDateTime?
    fun getModificacion(id: String): LocalDateTime?
    fun getCatalogOfResource(filterId: String?, id: String): Collection<Catalog?>
    fun getTheme(id: String): Collection<String?>
    fun getLicense(id: String): String?

    fun getPublisher(id: String): Concept?

    fun getNumberOfResources(filters: Collection<MapInput>,type: String): Int
    // fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
}

@Service
class ResourceServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val converter: ConvertersResourcesEntitiesTo,
    private val languageRepository: LanguageRepository,
    private val descriptionRepository: DescriptionRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,
    private val catalogRepository: CatalogRepository,
    private val titleRepository: TitleResourceRepository,
    private val themeRepository: ThemeRepository,
    private val repoCriteria: ResourceRepositoryExtra,
    private val converterAux: ConvertersAuxiliarEntitiesTo,

    ) : ResourceServices {

    // Return ResourceInCatalog  id or null
    @Cacheable
    override fun getResources(id: String): ResourceInCatalog? {
        println("RESSSS1")
        val resEntity = resourceRepository.findByResId(id)//.findById(id)
        println("RESSSS2")
        return if (resEntity != null) converter.createResource(resEntity) else null
    }

    // Returns language list of id
    @Cacheable
    override fun getLanguages(id: String): Collection<String?> =
        languageRepository.findLanguagesResourcesByResourcesLanguagesId(id)
            .map {
                it.id
            }

    // Returns titles list of id with its language
    @Cacheable
    override fun getTitles(id: String): Collection<LangString?> {
        var titlesDistribution = listOf<LangString?>()


        titleRepository.findByResourceTitleId(id)
            .map {
                val languageStrings = mutableListOf<LangString?>()
                val title = it

                languageRepository.findLanguagesResourcesByTitlesResourceIdTitleId(it.id.titleId)
                    .forEach {

                        languageStrings.add(
                            converterAuxiliar.toLangString(title.id.titleId + LANGSTRING_SEPARADOR + it.id)
                        )

                    }

                languageStrings

            }.map{
                titlesDistribution += it

            }

        getLogger("logger").debug("A VER $titlesDistribution")

        return titlesDistribution
    }

    // Returns descriptions list of id with its language
    @Cacheable
    override fun getDescriptions(id: String): Collection<LangString?> {
       // getLogger("logger").debug("ESTO TENGO: ${descriptionRepository.findByResourceId(id)}")
        var descriptions = listOf<LangString?>()

        descriptionRepository.findByResourceId(id)
            .map {
                val languageStrings = mutableListOf<LangString?>()
                val description = it
                languageRepository.findLanguagesResourcesByDescriptionsIdDescriptionId(it.id.descriptionId)
                    .forEach {

                        languageStrings.add(
                            converterAuxiliar.toLangString(
                                description.id.descriptionId + LANGSTRING_SEPARADOR + it.id
                            )
                        )

                    }
                languageStrings
            }.map{
                descriptions += it
            }
        return descriptions
    }
    // Returns resource creation date
    @Cacheable
    override fun getCreacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.issued

    // Returns resource last modified date
    @Cacheable
    override fun getModificacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.modified

    // Return de list of catalog which contains de resource id
    @Cacheable
    override fun getCatalogOfResource(filterId: String?, id: String): Collection<Catalog?> {
        val catalogs = catalogRepository.findCatalogsByResourceId(id)
            .map {
                converter.catalogIdtoCatalog(it)
            }
        return if (filterId == null) catalogs else catalogs.filter { it?.id == filterId }
    }

    // Return theme's list of resource id
    @Cacheable
    override fun getTheme(id: String): Collection<String?> {
        getLogger("logger").debug("GEEEEEEETTTTTTTTT THEEEEEEMMMMMMMMEEEEESSSSSSSSS")
        return themeRepository.findThemeByResourcesId(id)

    }

    // Return license of resource id
    @Cacheable
    override fun getLicense(id: String): String? =
        resourceRepository.findByIdOrNull(id)?.license

    // Return publisher of resource id
    @Cacheable
    override fun getPublisher(id: String): Concept? =
        converterAuxiliar.publisherEntitytoConcept(resourceRepository.findByIdOrNull(id)?.publisher)


    fun getNumberOfDatasets(appliedFilters: Collection<MapInput>,type: String): Int {

        //Conversiones de issued, modified y period
        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val period = appliedFilters.find { it.key == "Frecuencia de Actualización"}?.values?.map{converterAux.castFrequencyFilter(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de Administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        val startEnd = appliedFilters.find { it.key == "Periodo" }?.values
        var start: LocalDateTime? = null
        var end:LocalDateTime? = null
        if (!startEnd.isNullOrEmpty()){
            start = if (startEnd.first().split("--").first().trim() != ""){
                converterAux.toLocalDateTime(startEnd.first().split("--").first().trim())
            } else null
            end = if (startEnd.first().split("--").last().trim() != ""){
                converterAux.toLocalDateTime(startEnd.first().split("--").last().trim())
            } else null
        }
        val n =  repoCriteria.findNumberOfDatasetsByFilters(appliedFilters,type,issued, modified, period, notation, start, end)?.toInt() ?: 0

        return n
    }

    fun getNumberOfCatalogs(appliedFilters: Collection<MapInput>,type: String): Int {

        //Conversiones de issued, modified y period
        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = if (appliedFilters.find { it.key == "Número de recursos"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de recursos"}?.values?.first() else null
        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                else -> null
            }
        }
        return repoCriteria.findCatalogsNumberByFilters(appliedFilters,type,issued, modified, notation,rangeNumber)?.toInt() ?: 0

    }
    fun getNumberOfByType(appliedFilters: Collection<MapInput>,type: String): Int {

        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = null
        if (type == "dataset_series"){
            numberOfResources = if (appliedFilters.find { it.key == "Número de datasets"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de datasets"}?.values?.first() else null
        }else{
            numberOfResources= if (appliedFilters.find { it.key == "Número de recursos"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de recursos"}?.values?.first() else null
        }
        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                "Ningún dataset" -> Pair("0","0")
                else -> null
            }
        }
        return repoCriteria.findResourcesNumberByFilters(appliedFilters,type,issued, modified, notation,rangeNumber)?.toInt() ?: 0

    }
    fun getNumberOfServices(appliedFilters: Collection<MapInput>,type: String): Int {

        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = null

        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                "Ningún dataset" -> Pair("0","0")
                else -> null
            }
        }
        return repoCriteria.findServicesNumberByFilters(appliedFilters,type,issued, modified, notation,rangeNumber)?.toInt() ?: 0

    }

    //Return number of resources of type passed as parameter
    @Cacheable
    override fun getNumberOfResources(filters: Collection<MapInput>,type: String): Int {

        var appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        val n = if (appliedFilters.isEmpty() || checkIfSelectedFiltersIsEmpty(appliedFilters)){
             //resourceRepository.countByType(type).toInt()
            repoCriteria.findResourcesNumber(type)?.toInt() ?: 0
        } else {
            when (type) {
                "dataset" -> getNumberOfDatasets(appliedFilters, type)
                "catalog" -> getNumberOfCatalogs(appliedFilters, type)
                "data_service" -> getNumberOfServices(appliedFilters, type)//getNumberOfByType(appliedFilters, type)
                "dataset_series" -> getNumberOfByType(appliedFilters, type)
                else -> 0
            }
        }
        println("QUERYYYYY_NUMBERRRRR::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: $n")

        return n


    }


    fun checkIfSelectedFiltersIsEmpty(selectedFilters: Collection<MapInput>?): Boolean{
        if (selectedFilters.isNullOrEmpty()){
            return true
        }
        selectedFilters?.map{
            if (it.values.isNotEmpty()){
                return false
            }
        }
        return true
    }


}
