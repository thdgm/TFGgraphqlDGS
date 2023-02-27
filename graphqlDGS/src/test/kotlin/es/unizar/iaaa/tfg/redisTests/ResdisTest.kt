package es.unizar.iaaa.tfg.redisTests

import es.unizar.iaaa.tfg.domain.RedisEntity
import es.unizar.iaaa.tfg.repository.RedisRepository
import jakarta.annotation.PostConstruct
import jakarta.annotation.PreDestroy
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.data.redis.RedisProperties
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.redis.connection.RedisServer
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories
import org.springframework.data.repository.findByIdOrNull


@SpringBootTest
@EnableRedisRepositories
class RedisTest {

    @Autowired lateinit var redisRepo: RedisRepository




    //@Test
    fun `save en redis`() {

        val redisEntity = RedisEntity()
        redisEntity.id = "Eng2015001"
        redisEntity.name = "RedisPrueba"
        redisRepo.save(redisEntity)
        val findEntity = redisRepo.findByIdOrNull("Eng2015001")
        

    }
}
