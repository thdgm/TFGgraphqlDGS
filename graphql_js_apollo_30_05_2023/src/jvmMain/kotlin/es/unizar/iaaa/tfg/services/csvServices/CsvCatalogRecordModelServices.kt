package es.unizar.iaaa.tfg.services.csvServices


import com.graphqlDGS.graphqlDGS.model.types.CatalogRecordInput
import es.unizar.iaaa.tfg.constants.ConstantValues
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.jsonDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.CatalogRecordsRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

/*
 * These services help to create a CatalogRecordEntity and its relationships
 * with other entities.
 */

interface CsvCatalogRecordModelService {
    fun createCatalogRecord(input: CatalogRecordInput, idCatalog: String, d: DatasetCSVModel,resourcePrimaryTopic: ResourceEntity): CatalogRecordEntity?
}

@Service
class CsvCatalogRecordModelServiceImpl(


    private val catalogRecordsRepository: CatalogRecordsRepository,
    private val resourcesRepository: ResourceRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,

    ) : CsvCatalogRecordModelService {

    override fun createCatalogRecord(input: CatalogRecordInput, idCatalog: String, d: DatasetCSVModel, resourcePrimaryTopic: ResourceEntity): CatalogRecordEntity? {

        if (d.url != null) {
            val primaryTopicId = UUID.nameUUIDFromBytes(d.url.toByteArray()).toString()

            val newCatalogRecord = CatalogRecordEntity()
            newCatalogRecord.id = input.catalogRecordId ?: "$primaryTopicId${ConstantValues.CR_ID}"
            if(!resourcesRepository.existsById(newCatalogRecord.id)) {
                newCatalogRecord.title = "TitleCR"
                if (input.content != null) newCatalogRecord.content = input.content!!
                if (input.contentUrl != null) newCatalogRecord.contentUrl = input.contentUrl!!
                if (input.contentType != null) newCatalogRecord.contentType = input.contentType!!
                newCatalogRecord.resource = resourcePrimaryTopic//resourcesRepository.findById(primaryTopicId).get()
                catalogRecordsRepository.save(newCatalogRecord)

                if (!input.hints.isNullOrEmpty()) {
                    createAuxiliarEntitiesServices.createHints(input.hints,newCatalogRecord)
                }
                createRelationsBetweenEntitiesServices.insertIntoCatalogRecord(newCatalogRecord, idCatalog)
           }
            return newCatalogRecord//catalogRecordsRepository.findByIdOrNull(newCatalogRecord.id)
        }
        return null
    }


}

