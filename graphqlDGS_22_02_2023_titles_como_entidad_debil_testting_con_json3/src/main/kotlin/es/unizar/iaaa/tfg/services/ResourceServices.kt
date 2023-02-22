package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.repository.CatalogRepository
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.repository.TitleDistributionRepository
import es.unizar.iaaa.tfg.repository.TitleResourceRepository
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
    fun getTheme(id: String): Collection<String?>
    fun getIdentifier(id: String): String?
    fun getLicense(id: String): String?

    fun getPublisher(id: String): Concept?
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
    private val publisherRepository: PublisherRepository,

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
        var titlesDistribution = listOf<LangString?>()
        println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS")
        val l = titleRepository.findByResourceTitleId(id)
            .map {
                println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS2")
                val languageStrings = mutableListOf<LangString?>()
                val title = it
                languageRepository.findLanguagesResourcesByTitlesResourceIdTitleId(it.id.titleId)
                    .forEach {
                        println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS3.1 ${title.id.titleId} -- ${it.id}")
                        println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS3.2 ${converterAuxiliar.toLangString(title.id.titleId + "--" + it.id)}")
                        languageStrings.add(converterAuxiliar.toLangString(title.id.titleId + "--" + it.id))
                        println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS4")
                    }

                languageStrings


            }.map{
                titlesDistribution += it
                println("GEEEETTTTTTTT TIIIITTLLLLLLLEEEEEEEEEEEEEEESSSSSSSSSSSS5")
            }
        println("A VER $titlesDistribution")
        return titlesDistribution
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

    // Return theme's list of resource id
    override fun getTheme(id: String): Collection<String?> =
        themeRepository.findThemeByResourcesId(id)
            .map{
                it?.id
            }



    // Return identifier resource id
    override fun getIdentifier(id: String): String? =
        resourceRepository.findByIdOrNull(id)?.identifier

    // Return license of resource id
    override fun getLicense(id: String): String? =
        resourceRepository.findByIdOrNull(id)?.license

    // Return publisher of resource id
    override fun getPublisher(id: String): Concept? =
        converterAuxiliar.publisherEntitytoConcept(resourceRepository.findByIdOrNull(id)?.publisher)



    /*// Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {
        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
            .map {
                converter.toCatalogRecord(it!!)
            }
        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }*/
}
