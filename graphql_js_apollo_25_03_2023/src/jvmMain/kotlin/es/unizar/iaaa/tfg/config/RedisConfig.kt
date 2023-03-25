package es.unizar.iaaa.tfg.config

import es.unizar.iaaa.tfg.constants.ConstantValues.MAX_IDLE
import es.unizar.iaaa.tfg.constants.ConstantValues.MIN_IDLE
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.RedisStandaloneConfiguration
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer
import org.springframework.data.redis.serializer.StringRedisSerializer
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
@EnableRedisRepositories
class RedisConfig {

    @Value("\${redis.host}")
    lateinit var redisHostName: String

    @Value("\${redis.port}")
    val redisPort: Int = 0

    @Bean
    fun jedisConnectionFactory(): JedisConnectionFactory {

        val redisStandaloneConfiguration = RedisStandaloneConfiguration()
        redisStandaloneConfiguration.hostName = redisHostName
        redisStandaloneConfiguration.port = redisPort
        val factory = JedisConnectionFactory(redisStandaloneConfiguration)
        factory.getPoolConfig<String>()?.minIdle = MIN_IDLE
        factory.getPoolConfig<String>()?.maxIdle = MAX_IDLE
        return factory
    }

    @Bean
     fun redisTemplate(): RedisTemplate<String, Object> {
        val template: RedisTemplate<String, Object>  =  RedisTemplate()
        template.setConnectionFactory(jedisConnectionFactory())

        template.keySerializer = StringRedisSerializer()
        template.hashKeySerializer = StringRedisSerializer()
        template.hashKeySerializer = JdkSerializationRedisSerializer()
        template.valueSerializer = JdkSerializationRedisSerializer()
        template.setEnableTransactionSupport(true)
        template.afterPropertiesSet()
        return template
    }
}
/*
@Configuration
@EnableWebMvc
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
    }
}*/