package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class Test9CRMutation {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    val urlRecord = "https://datos.gob.es/es/catalogo/e00003801-estadistica-de-trafico-de-drogas-2021-anuario-estadistico-del-ministerio-del-interior.jsonld"

    @Autowired
    lateinit var convertersAuxiliarEntitiesTo: ConvertersAuxiliarEntitiesTo


    @Test
    fun `El CR tiene primaryTopic a un dataset compruebo su fechaHoraCreacion ultimaModificacion y temporal`() {
        val inputParam = "\$input"

        val query = """
        mutation createCR($inputParam:CatalogRecordInput){
            createCatalogRecord(input:$inputParam){
                ... on CatalogRecord{
                       primaryTopic{
                         fechaHoraCreacion
                         ultimaModificacion
                        ... on Dataset{                       
                          temporal{
                           start
                           end
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
                "contentType" to "application/json",
                "contentUrl" to urlRecord,
                "hints" to listOf("datos.gob.es")
            )
        )
        val createCR = dgsQueryExecutor.executeAndGetDocumentContext(query, crInput)
        val response = GraphQLResponse(createCR.jsonString())
        val creacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.fechaHoraCreacion")
        val modificacion = response.extractValue<String>("data.createCatalogRecord.primaryTopic.fechaHoraCreacion")
        val start = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.start")
        val end = response.extractValue<String>("data.createCatalogRecord.primaryTopic.temporal.end")

        val creatDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(creacion)
        val modifDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(modificacion)
        val startDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(start)
        val endDate = convertersAuxiliarEntitiesTo.toLaocalDateTime(end)

        assertThat(creatDate).isBeforeOrEqualTo(modifDate)
        assertThat(startDate).isBeforeOrEqualTo(endDate)
    }

}
