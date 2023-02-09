package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


@DgsScalar(name="LocalDateTime")
class LocalDateTimeScalar: Coercing<LocalDateTime, String> { //Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    var dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss")

    override fun serialize(input: Any): String? {

        if (input is LocalDateTime){
            return input.format(dateFormatter)
        }
        return null
    }

    override fun parseLiteral(input: Any): LocalDateTime {

        if (input is String){
            return LocalDateTime.parse(input, dateFormatter)
        }
        return  LocalDateTime.now()

    }

    override fun parseValue(input: Any): LocalDateTime {

        if (input is String){
            return LocalDateTime.parse(input, dateFormatter)
        }
        return  LocalDateTime.now()
    }

}