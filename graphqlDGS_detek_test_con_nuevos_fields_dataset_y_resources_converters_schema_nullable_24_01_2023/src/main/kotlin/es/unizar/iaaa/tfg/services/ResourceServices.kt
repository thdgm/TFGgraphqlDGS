package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.FechaHora
import com.graphqlDGS.graphqlDGS.model.types.ResourceDescription
import com.graphqlDGS.graphqlDGS.model.types.ResourceInCatalog
import es.unizar.iaaa.tfg.repository.DescriptionRepository
import es.unizar.iaaa.tfg.repository.LanguageRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
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
    private val converter: ConvertersResourcesEntitiesTo,
    private val languageRepository: LanguageRepository,
    private val descriptionRepository: DescriptionRepository,
    private val converterAuxiliar: ConvertersAuxiliarEntitiesTo,

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

    // Returns descriptions list of id with its language
    override fun getDescriptions(id: String): Collection<ResourceDescription?> =
        descriptionRepository.findByResourceId(id)
            .map {
                converterAuxiliar.convertToResourceDescription(it)
            }

    // Returns resource creation date
    override fun getCreacion(id: String): FechaHora? = converterAuxiliar.datetoFechaHora(
        resourceRepository.findByIdOrNull(id)?.fechaHoraCreacion
    )

    // Returns resource last modified date
    override fun getModificacion(id: String): FechaHora? = converterAuxiliar.datetoFechaHora(
        resourceRepository.findByIdOrNull(id)?.ultimaModificacion
    )
}
