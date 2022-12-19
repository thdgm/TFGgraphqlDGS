package es.unizar.iaaa.tfg.services

import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.services.converts.Converters
import org.springframework.stereotype.Service

interface CatalogRecordsServices {
    fun showCatalogRecords(): Collection<CatalogRecord?>
    fun showCatalogRecord(id: String): CatalogRecord?

}
@Service
class CatalogRecordsServicesImpl(
    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val converter:Converters
):CatalogRecordsServices {

    // Return list of CatalogRecords
    override fun showCatalogRecords(): Collection<CatalogRecord?> {
        val cREntity = catalogRecordsRepository.findAll()
        var catalogRecords = listOf<CatalogRecord?>()
        cREntity.forEach {
            catalogRecords += converter.toCatalogRecord(it)
        }
        return catalogRecords
    }

    // Return CatalogRecords id or null
    override fun showCatalogRecord(id: String): CatalogRecord? {
        return converter.toCatalogRecord(catalogRecordsRepository.findById(id).get())

    }
}