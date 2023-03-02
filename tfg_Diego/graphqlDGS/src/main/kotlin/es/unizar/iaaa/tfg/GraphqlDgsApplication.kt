package es.unizar.iaaa.tfg

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories

@SpringBootApplication

class GraphqlDgsApplication


fun main(vararg args: String) {


    runApplication<GraphqlDgsApplication>(*args)
}
