package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface CatalogRecordsServices {
    fun showCatalogRecord(id: String): CatalogRecord?
}

@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter: Converters
) : CatalogRecordsServices {

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        val crE = catalogRecordsRepository.findById(id)
        return if (crE.isEmpty) null else converter.toCatalogRecord(crE.get())
    }
}
