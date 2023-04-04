package es.unizar.iaaa.tfg.services.queryAuxiliarServices


import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.PublisherRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

/*
 * Services for get Catalog fields and entity.
 */

interface FieldsFilterServices {
    fun getThemes(): Collection<String>
    fun getKeywords(language: String): Collection<String>
    fun getPublishersLabel(): Collection<String>
    fun getFrequenciesRanges(): Collection<String?>
    fun getAdmonLabel(): Collection<String>

}

@Service
class FieldsFilterServicesImpl(
    private val converter: ConvertersAuxiliarEntitiesTo,
    private val themeRepository: ThemeRepository,
    private val keywordRepository: KeywordRepository,
    private val publisherRepository: PublisherRepository,

    private val datasetRepository: DatasetRepository

) : FieldsFilterServices {


    // Return string list with all the themes saved in database.
    override fun getThemes(): Collection<String> =
        themeRepository.findAll()
            .map { it.id }.distinct()

    // Return string list with all the keywords with particular language (language) saved in database.
    override fun getKeywords(language: String): Collection<String> =
        keywordRepository.findAll()
            .filter { it.language.id == language }
            .map { it.id.wordId }.distinct()

    // Return string list with all the publisher's labels saved in database.
    override fun getPublishersLabel(): Collection<String> =
        publisherRepository.findAll()
            .map { it.label }.distinct()

    // Return string list with all the frequency's ranges saved in database.
    override fun getFrequenciesRanges(): Collection<String?> =
        datasetRepository.findAll()
            .filter { converter.toPeriocidad(it.accrualPeriodicity).range != null }
            .map { converter.toUpdateFrequencyFormat(converter.toPeriocidad(it.accrualPeriodicity).toString()) }.distinct()

    // Return string list with all the associated values to each publisher's label saved in database.

    override fun getAdmonLabel(): Collection<String> =
        publisherRepository.findAll()
            .map { it.notation }.distinct()
}
