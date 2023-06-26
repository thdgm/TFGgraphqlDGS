package es.unizar.iaaa.tfg.services.queryAuxiliarServices


import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

/*
 * Services for get Catalog fields and entity.
 */

interface FieldsFilterServices {
    fun getThemes(page: Int, pageSize: Int): Collection<String>
    fun getKeywords(page: Int, pageSize: Int): Collection<String>
    fun getPublishersLabel(page: Int, pageSize: Int): Collection<String>
    fun getFrequenciesRanges(page: Int, pageSize: Int): Collection<String?>
    fun getAdmonLevel(page: Int, pageSize: Int): Collection<String>
    fun getFormats(page: Int, pageSize: Int): Collection<String>

}

@Service
class FieldsFilterServicesImpl(
    private val converter: ConvertersAuxiliarEntitiesTo,
    private val themeRepository: ThemeRepository,
    private val keywordRepository: KeywordRepository,
    private val publisherRepository: PublisherRepository,
    private val datasetRepository: DatasetRepository,
    private val distributionRepository: DistributionRepository

) : FieldsFilterServices {


    // Return string list with all the themes saved in database.
    override fun getThemes(page: Int, pageSize: Int): Collection<String> =
         themeRepository.findAllIdIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content
            .map { it.id }.distinct()


        /*themeRepository.findAll(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content
            .map { it!!.id }.distinct()*/

    // Return string list with all the keywords with particular language (language) saved in database.
    override fun getKeywords(page: Int, pageSize: Int): Collection<String> =
        keywordRepository.findAllWordIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).map { it.id.wordId }.distinct()

       // keywordRepository.findAll().map { it.id.wordId }.distinct()
        /*keywordRepository.findAll()
            .filter { if (language != null) it.language.id == language else true}
            .map { it.id.wordId }.distinct()*/

    // Return string list with all the publisher's labels saved in database.
    override fun getPublishersLabel(page: Int, pageSize: Int): Collection<String> =
        publisherRepository.findAllLabelNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull {  it }
        /*publisherRepository.findAll(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content
            .map { it.label }.distinct()*/

    // Return string list with all the frequency's ranges saved in database.
    override fun getFrequenciesRanges(page: Int, pageSize: Int): Collection<String?> =
        datasetRepository.findAllAccrualNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull { converter.toUpdateFrequencyFormat(converter.toPeriocidad(it).toString()) }
            //.map { converter.toUpdateFrequencyFormat(converter.toPeriocidad(it.accrualPeriodicity).toString()) }.distinct()
       /* datasetRepository.findAllAccrualNotNull(PageRequest.of(0,4))
            .map { converter.toUpdateFrequencyFormat(converter.toPeriocidad(it?.accrualPeriodicity).toString()) }.distinct()*/

    // Return string list with all the associated values to each publisher's label saved in database.
    override fun getAdmonLevel(page: Int, pageSize: Int): Collection<String> =
        publisherRepository.findAllNotationNotNull(
            PageRequest.of(
                page,
                if (pageSize >= 0) pageSize else Integer.MAX_VALUE
            )
        )
            .mapNotNull { converter.toAdministrationLevel(it) }.distinct().filter{it != "Otra institución"}

        /*publisherRepository.findAll(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content
            .map { converter.toAdministrationLevel(it.notation) }.distinct().drop(excludeCount)*/

    // Return string list with all the formats saved in database.
    override fun getFormats(page: Int, pageSize: Int): Collection<String> =
        distributionRepository.findAllFormatIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull { MediaTypeMap.MEDIA_TYPE.entries.associate { (key, value) -> value to key }[it] }
        /*return distributionRepository.findAllFormatIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull { MediaType.parseMediaType(it).subtype }*/





           /* .mapNotNull { it.format?.let { it1 -> MediaType.parseMediaType(it1).subtype } }
            .distinct()*/
        /*distributionRepository.findAll(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content.mapNotNull { it.format?.let { it1 -> MediaType.parseMediaType(it1).subtype } }
            .distinct()*/




}
