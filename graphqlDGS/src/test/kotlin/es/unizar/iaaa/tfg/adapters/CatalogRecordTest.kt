package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration
import es.unizar.iaaa.tfg.services.CatalogRecordsServices
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CatalogRecordTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @Test
    fun `el catalogRecord cR1 tiene 1 primaryTopic catalog`() {
        val type : String = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalogRecord(id: "cR1") {
                    primaryTopic {
                        __typename
                    }
                }
            }
        """.trimIndent(), "data.catalogRecord.primaryTopic.__typename")
        assertThat(type).isEqualTo("Catalog")
    }
    @Test
    fun `el catalogRecord cR2 tiene 1 primaryTopic dataservice`() {
        val type : String = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalogRecord(id: "cR2") {
                    primaryTopic {
                        __typename
                    }
                }
            }
        """.trimIndent(), "data.catalogRecord.primaryTopic.__typename")
        assertThat(type).isEqualTo("DataService")
    }
    @Test
    fun `el catalogRecord cR3 tiene 1 primaryTopic dataset`() {
        val type : String = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalogRecord(id: "cR3") {
                    primaryTopic {
                        __typename
                    }
                }
            }
        """.trimIndent(), "data.catalogRecord.primaryTopic.__typename")
        assertThat(type).isEqualTo("Dataset")
    }
    @Test
    fun `el catalogRecord cR4 tiene 1 primaryTopic dataseries`() {
        val type : String = dgsQueryExecutor.executeAndExtractJsonPath("""
            {
                catalogRecord(id: "cR4") {
                    primaryTopic {
                        __typename
                    }
                }
            }
        """.trimIndent(), "data.catalogRecord.primaryTopic.__typename")
        assertThat(type).isEqualTo("DatasetSeries")
    }
}  