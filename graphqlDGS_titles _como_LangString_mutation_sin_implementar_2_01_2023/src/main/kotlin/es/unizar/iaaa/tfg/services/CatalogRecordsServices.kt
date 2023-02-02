package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.stereotype.Service

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
    fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?>
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: ConvertersResourcesEntitiesTo,

) : CatalogRecordsServices {

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findById(id)
        return if (crE.isEmpty) null else converter.toCatalogRecord(crE.get())
    }

    // Return de list of catalogRecord which contains de resource id
    override fun getCatalogsRecordOf(filterId: String?, id: String): Collection<CatalogRecord?> {
        val catalogRecords = catalogRecordsRepository.findCatalogRecordsByResourceId(id)
            .map {
                converter.toCatalogRecord(it!!)
            }
        return if (filterId == null) catalogRecords else catalogRecords.filter { it?.id == filterId }
    }
}
