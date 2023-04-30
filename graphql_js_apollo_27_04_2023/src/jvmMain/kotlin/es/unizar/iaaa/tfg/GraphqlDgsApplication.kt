package es.unizar.iaaa.tfg

import com.apollographql.apollo3.ApolloClient
import es.unizar.iaaa.tfg.services.loadInitDataServices.LoadDataFromCsv
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@SpringBootApplication
//@CrossOrigin(origins = ["http://localhost:8080"])
class GraphqlDgsApplication
/*
@Bean
fun corsConfigurer(): WebMvcConfigurer {
    return object : WebMvcConfigurer {
        override fun addCorsMappings(registry: CorsRegistry) {
            registry.addMapping("").allowedOrigins("http://localhost:8080")
        }
    }
}*/

//@CrossOrigin(origins = ["http://localhost:8080"])
    @Autowired
    lateinit var loadDataFromCsv: LoadDataFromCsv
    @PostConstruct
    fun init() {
        // Cargo unos datos del fichero de prueba
        loadDataFromCsv.loadFromCsv()
    }
fun main(vararg args: String) {


    runApplication<GraphqlDgsApplication>(*args)
}
