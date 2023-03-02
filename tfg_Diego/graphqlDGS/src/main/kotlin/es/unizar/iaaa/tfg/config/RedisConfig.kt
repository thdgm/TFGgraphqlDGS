package es.unizar.iaaa.tfg.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.RedisStandaloneConfiguration
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer
import org.springframework.data.redis.serializer.StringRedisSerializer

@Configuration
@EnableRedisRepositories
class RedisConfig {

    @Value("\${redis.host}")
    lateinit var redisHostName: String

    @Value("\${redis.port}")
    val redisPort: Int = 0

    @Bean
    fun jedisConnectionFactory(): JedisConnectionFactory {

        var redisStandaloneConfiguration = RedisStandaloneConfiguration()
        redisStandaloneConfiguration.hostName = redisHostName
        redisStandaloneConfiguration.port = redisPort
        val factory = JedisConnectionFactory(redisStandaloneConfiguration)
        factory.getPoolConfig<String>()?.minIdle = 10
        factory.getPoolConfig<String>()?.maxIdle = 30
        return factory
    }

    @Bean
     fun redisTemplate(): RedisTemplate<String, Object> {
        var template: RedisTemplate<String, Object>  =  RedisTemplate()
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