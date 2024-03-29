package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.TitleRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDateTime

interface ResourceServices {
    fun showResources(id: String): ResourceInCatalog?
    fun getLanguages(id: String): Collection<String?>
    fun getTitles(id: String): Collection<LangString?>
    fun getDescriptions(id: String): Collection<LangString?>
    fun getCreacion(id: String): LocalDateTime?
    fun getModificacion(id: String): LocalDateTime?
    fun getCatalogOfResource(filterId: String?, id: String): Collection<Catalog?>
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
    private val titleRepository: TitleRepository,

) : ResourceServices {

    // Return ResourceInCatalog  id or null
    override fun showResources(id: String): ResourceInCatalog? {
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
        val l = titleRepository.findByResourceTitleId(id)
            .map {
                val languageStrings = mutableListOf<LangString?>()
                val title = it
                languageRepository.findLanguagesResourcesByTitlesTitle(it.title)
                    .forEach {
                        languageStrings.add(converterAuxiliar.toLangString(title.title + "," + it.id))
                    }
                languageStrings

            }
        return l.elementAt(0)
    }

    // Returns descriptions list of id with its language
    override fun getDescriptions(id: String): Collection<LangString?> {
        val l = descriptionRepository.findByResourceId(id)
            .map {
                val languageStrings = mutableListOf<LangString?>()
                val description = it
                languageRepository.findLanguagesResourcesByDescriptionsText(it.text)
                    .forEach {

                        languageStrings.add(converterAuxiliar.toLangString(description.text + "," + it.id))

                    }
                languageStrings
            }
        return l.elementAt(0)
    }
    // Returns resource creation date
    override fun getCreacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.fechaHoraCreacion

    // Returns resource last modified date
    override fun getModificacion(id: String): LocalDateTime? =
        resourceRepository.findByIdOrNull(id)?.ultimaModificacion

    // Return de list of catalog which contains de resource id
    override fun getCatalogOfResource(filterId: String?, id: String): Collection<Catalog?> {
        val catalogs = catalogRepository.findCatalogResourcesByResourcesCatalogId(id)
            .map {
                converter.catalogEntitytoCatalog(it)
            }
        return if (filterId == null) catalogs else catalogs.filter { it?.id == filterId }
    }

    /*// Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {
        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
            .map {
                converter.toCatalogRecord(it!!)
            }
        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }*/
}
