package es.unizar.iaaa.tfg.services.queryAuxiliarServices


import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
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
    fun getContentTypes(page: Int, pageSize: Int): Collection<String>
    fun getHints(page: Int, pageSize: Int): Collection<String>

}

@Service
class FieldsFilterServicesImpl(
    private val converter: ConvertersAuxiliarEntitiesTo,
    private val themeRepository: ThemeRepository,
    private val keywordRepository: KeywordRepository,
    private val publisherRepository: PublisherRepository,
    private val datasetRepository: DatasetRepository,
    private val distributionRepository: DistributionRepository,
    private val catalogRecordsRepository: CatalogRecordsRepository

) : FieldsFilterServices {


    // Return string list with all the themes saved in database.
    override fun getThemes(page: Int, pageSize: Int): Collection<String> =
         themeRepository.findAllIdIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE)).content
            .map { it.id }.distinct()

    // Return string list with all the keywords with particular language (language) saved in database.
    override fun getKeywords(page: Int, pageSize: Int): Collection<String> =
        keywordRepository.findMoreUsedWords()


    // Return string list with all the publisher's labels saved in database.
    override fun getPublishersLabel(page: Int, pageSize: Int): Collection<String> =
        publisherRepository.findAllLabelNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull {  it }


    // Return string list with all the frequency's ranges saved in database.
    override fun getFrequenciesRanges(page: Int, pageSize: Int): Collection<String?> =
        datasetRepository.findAllAccrualNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull { converter.toUpdateFrequencyFormat(converter.toPeriocidad(it).toString()) }

    // Return string list with all the associated values to each publisher's label saved in database.
    override fun getAdmonLevel(page: Int, pageSize: Int): Collection<String> =
        publisherRepository.findAllNotationNotNull(
            PageRequest.of(
                page,
                if (pageSize >= 0) pageSize else Integer.MAX_VALUE
            )
        )
            .mapNotNull { converter.toAdministrationLevel(it) }.distinct().filter{it != "Otra institución"}


    // Return string list with all the formats saved in database.
    override fun getFormats(page: Int, pageSize: Int): Collection<String> =
        distributionRepository.findAllFormatIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .mapNotNull { MediaTypeMap.MEDIA_TYPE.entries.associate { (key, value) -> value to key }[it] }


    // Return string list with all the content types saved in database.
    override fun getContentTypes(page: Int, pageSize: Int): Collection<String> =
        catalogRecordsRepository.findAllContentTypeIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .content
    // Return string list with all the hints saved in database.
    override fun getHints(page: Int, pageSize: Int): Collection<String> =
        catalogRecordsRepository.findAllHintsIsNotNull(PageRequest.of(page,if(pageSize >= 0) pageSize else Integer.MAX_VALUE))
            .content





}
