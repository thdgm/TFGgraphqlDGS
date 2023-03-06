package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Id
import lombok.AllArgsConstructor
import lombok.Data
import lombok.NoArgsConstructor
import org.springframework.data.redis.core.RedisHash
import org.springframework.data.redis.core.index.Indexed
import java.io.Serializable

@Data
@AllArgsConstructor
@NoArgsConstructor
@RedisHash("Redis_entity")
class RedisEntity : Serializable {
    @Id
    lateinit var id: String
    @Indexed
    lateinit var name: String

}
