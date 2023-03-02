package es.unizar.iaaa.tfg.repository

import es.unizar.iaaa.tfg.domain.RedisEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
@Repository
interface RedisRepository: CrudRepository<RedisEntity, String> {
}