package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsQueryExecutor
import data.ConstantValues
import es.unizar.iaaa.tfg.services.Logger
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.slf4j.LoggerFactory.getLogger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class CatalogRecordTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

   /* @Autowired
    lateinit var logger: Logger*/

    @Test
    fun `el catalogRecord cR1 tiene 1 primaryTopic catalog`() {
        val type: String = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalogRecord(id: "cR1") {
                    primaryTopic {
                        __typename
                    }
                }
            }
            """.trimIndent(),
            "data.catalogRecord.primaryTopic.__typename"
        )
        assertThat(type).isEqualTo(ConstantValues.CATALOG)
    }

    @Test
    fun `el catalogRecord cR2 tiene 1 primaryTopic dataservice`() {
        val type: String = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalogRecord(id: "cR2") {
                    primaryTopic {
                        __typename
                    }
                }
            }
            """.trimIndent(),
            "data.catalogRecord.primaryTopic.__typename"
        )
        assertThat(type).isEqualTo(ConstantValues.DATASERVICE)
    }

    @Test
    fun `el catalogRecord cR3 tiene 1 primaryTopic dataset`() {
        val type: String = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalogRecord(id: "cR3") {
                    primaryTopic {
                        __typename
                    }
                }
            }
            """.trimIndent(),
            "data.catalogRecord.primaryTopic.__typename"
        )
        assertThat(type).isEqualTo(ConstantValues.DATASET)
    }

    @Test
    fun `el catalogRecord cR4 tiene 1 primaryTopic dataseries`() {
        val type: String = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalogRecord(id: "cR4") {
                    primaryTopic {
                        __typename
                    }
                }
            }
            """.trimIndent(),
            "data.catalogRecord.primaryTopic.__typename"
        )
        assertThat(type).isEqualTo(ConstantValues.DATASETSERIES)
    }

    @Test
    fun `el catalogRecord cR1 esta en Catalog1`() {
        val catalogs: Collection<String?> = dgsQueryExecutor.executeAndExtractJsonPath(
            """
            {
                catalogRecord(id: "cR1") {
                    inCatalog {
                        id
                    }
                }
            }
            """.trimIndent(),
            "data.catalogRecord.inCatalog[*].id"
        )
        getLogger("loggerTest").debug("$catalogs")
        assertThat("catalog1").isIn(catalogs)
    }
}
