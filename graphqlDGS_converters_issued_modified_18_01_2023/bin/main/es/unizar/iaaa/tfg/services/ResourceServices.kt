package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.FechaHora
import com.graphqlDGS.graphqlDGS.model.types.ResourceDescription
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import com.jayway.jsonpath.internal.path.PathCompiler.fail
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

interface ResourceServices {
    fun showResources(id: String): ResourceInCatalog?
    fun getLanguages(id: String): Collection<String?>
    fun getDescriptions(id: String): Collection<ResourceDescription?>
    fun getCreacion(id: String): FechaHora?
    fun getModificacion(id: String): FechaHora?
}

@Service
class ResourceServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val converter: Converters,
    private val languageRepository: LanguageRepository,
    private val descriptionRepository: DescriptionRepository,

    ) : ResourceServices {

    // Return ResourceInCatalog  id or null
    override fun showResources(id: String): ResourceInCatalog? {
        val resEntity = resourceRepository.findById(id)
        return if (!resEntity.isEmpty) converter.createResource(resEntity.get()) else null
    }

    // Returns language list of id
    override fun getLanguages(id: String): Collection<String?> {
        val c = languageRepository.findLanguagesResourcesByResourcesLanguagesId(id)
            .map{
                it.id
            }
        println(c)
        return c
    }


    // Returns descriptions list of id with its language
    override fun getDescriptions(id: String): Collection<ResourceDescription?> = descriptionRepository.findByResourceId(id)
            .map{
                converter.convertToResourceDescription(it)
            }
    // Returns resource creation date
    override fun getCreacion(id: String): FechaHora? = converter.DatetoFechaHora(resourceRepository.findByIdOrNull(id)?.fechaHoraCreacion)

    // Returns resource last modified date
    override fun getModificacion(id: String): FechaHora? = converter.DatetoFechaHora(resourceRepository.findByIdOrNull(id)?.ultimaModificacion)

}
