package es.unizar.iaaa.tfg.adapters.mutations

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.client.GraphQLResponse
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.annotation.DirtiesContext

@SpringBootTest
class TestsFicheroJson3 {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor


    //val urlRecord = "https://datos.gob.es/es/catalogo/a16003011-tablas-estadisticas-inventario-de-emisiones-de-contaminantes-a-la-atmosfera-de-la-c-a-del-pais-vasco-1990-20181.jsonld"
    val urlRecord = "classpath:json3.json"

}