package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import es.unizar.iaaa.tfg.repository.PublisherRepository



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
import org.springframework.data.domain.PageRequest

/*
 * Services for get Resource fields and entity.
 */
interface PublisherServices {

    fun getPublisherInfo(notation: String?,label: String?): PublisherOutput?
    fun getResources(notation: String?,page: Int): Collection<Resource>
}

@Service
class PublisherServicesImpl(
    private val resourceRepository: ResourceRepository,
    private val publisherRepository: PublisherRepository,
    private val converterAux: ConvertersAuxiliarEntitiesTo,
    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo
    ) : PublisherServices {

    // Return publisher information
    override fun getPublisherInfo(notation: String?,label: String?): PublisherOutput?{
        println("PUBLISHERRRRRRRR2::::::::::::::: $notation")
        return if (notation != null){
            println("PUBLISHERRRRRRRR3::::::::::::::: ${publisherRepository.findById(notation)}")
            converterAux.toPublisherOutput(publisherRepository.findById(notation).get())
        }else if (label != null){
            converterAux.toPublisherOutput(publisherRepository.findByLabel(label))
        }else{
            null
        }
    }
    //
    override fun getResources(notation: String?, page: Int): Collection<Resource>{
        println("RUNNNNNNNNNNNNN RESOURCESSSSSSSSS")
        if (notation == null) return emptyList()


        val res = resourceRepository.findByPublisherNotationIn(listOf(notation), PageRequest.of(page, 10)) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        println("RUNNNNNNNNNNNNN RESOURCESSSSSSSSS RESSSS $res")
        return res?.map { convertersResourcesEntitiesTo.createResource(it) }?.distinct() ?: listOf()
    }


}
