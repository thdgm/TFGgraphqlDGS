package es.unizar.iaaa.tfg

import com.apollographql.apollo3.ApolloClient
import es.unizar.iaaa.tfg.services.initLoadServices.InitLoadFromCsvService
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@SpringBootApplication
class GraphqlDgsApplication {

   /*@Autowired
    lateinit var initLoadFromCsvService: InitLoadFromCsvService

    @PostConstruct
    fun init() {
        // Lógica a ejecutar al iniciar la aplicación
        //initLoadFromCsvService.loadFromCsv()
    }*/
}

fun main(vararg args: String) {

    runApplication<GraphqlDgsApplication>(*args)
}
