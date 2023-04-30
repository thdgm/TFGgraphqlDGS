package es.unizar.iaaa.tfg.services.loadInitDataServices


import com.netflix.graphql.dgs.DgsQueryExecutor
import es.unizar.iaaa.tfg.services.csvServices.ProcessCsvServices
import org.springframework.stereotype.Service

/*
 * Services for load in database some resources reading csv file.
 */


interface LoadDataFromCsv {
    fun loadFromCsv()
}

@Service
class LoadDataFromCsvImpl(
    private val dgsQueryExecutor: DgsQueryExecutor,
    private val processCsvServices: ProcessCsvServices

    ) : LoadDataFromCsv {

    override fun loadFromCsv() {
        val inputParam = "\$input"
        val urlRecord = "classpath:datosGob.csv"

        processCsvServices.processCsvService(urlRecord).map {
           createCatalogRecord(urlRecord,inputParam,it.toString())
        }
    }

    fun createCatalogRecord(urlRecord: String, inputParam:String, datasetFieldsString:String) {

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                    primaryTopic{
                        id
                        publisher
                        inCatalog{
                            id
                             records { 
                               id
                            }
                        }
                    }
                }
            }
        }
        """.trimIndent()

        val crInput = mutableMapOf<String, Any>(
            "input" to mapOf(
                "inCatalog" to "root",
                "contentType" to "txt/csv",
                "contentUrl" to urlRecord,
                "content" to datasetFieldsString,
                "catalogRecordId" to "CRNuevo",
                "hints" to listOf("datos.gob.es")
            )
        )
        dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)

    }

}
