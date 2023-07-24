package es.unizar.iaaa.tfg.services.queryServices

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.MapInput
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
    override fun getResources(id: String): ResourceInCatalog? {
        val resEntity = resourceRepository.findById(id)
        return if (!resEntity.isEmpty) converter.createResource(resEntity.get()) else null
    }

    // Returns language list of id
    override fun getLanguages(id: String): Collection<String?> =
        languageRepository.findLanguagesResourcesByResourcesLanguagesId(id)
            .map {
                it.id
            }

    // Returns titles list of id with its language
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
        println("TIIIIIITTLEEEESS RESS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ${titlesDistribution}")

        return titlesDistribution
    }

    // Returns descriptions list of id with its language
    override fun getDescriptions(id: String): Collection<LangString?> {
        getLogger("logger").debug("ESTO TENGO: ${descriptionRepository.findByResourceId(id)}")
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
    override fun getCreacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.issued

    // Returns resource last modified date
    override fun getModificacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.modified

    // Return de list of catalog which contains de resource id
    override fun getCatalogOfResource(filterId: String?, id: String): Collection<Catalog?> {
        val catalogs = catalogRepository.findCatalogResourcesByResourcesCatalogId(id)
            .map {
                converter.catalogEntitytoCatalog(it)
            }
        return if (filterId == null) catalogs else catalogs.filter { it?.id == filterId }
    }

    // Return theme's list of resource id
    override fun getTheme(id: String): Collection<String?> {
        getLogger("logger").debug("GEEEEEEETTTTTTTTT THEEEEEEMMMMMMMMEEEEESSSSSSSSS")
        return themeRepository.findThemeByResourcesId(id)
            .map{
                it?.id
            }
    }

    // Return license of resource id
    override fun getLicense(id: String): String? =
        resourceRepository.findByIdOrNull(id)?.license

    // Return publisher of resource id
    override fun getPublisher(id: String): Concept? =
        converterAuxiliar.publisherEntitytoConcept(resourceRepository.findByIdOrNull(id)?.publisher)

    //Return number of resources of type passed as parameter
    override fun getNumberOfResources(filters: Collection<MapInput>,type: String): Int {
        var appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }

        return if (appliedFilters.isEmpty() || checkIfSelectedFiltersIsEmpty(appliedFilters)){
            resourceRepository.countByType(type).toInt()
        }else{
            //Conversiones de issued, modified y period
            val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
            val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
            val period = appliedFilters.find { it.key == "Frecuencia de Actualización"}?.values?.map{converterAux.castFrequencyFilter(it)} ?: listOf()
            val notation = appliedFilters.find { it.key == "Nivel de Administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
            repoCriteria.findNumberOfDatasetsByFilters(appliedFilters,type,issued, modified, period, notation)?.toInt() ?: 0
        }
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
