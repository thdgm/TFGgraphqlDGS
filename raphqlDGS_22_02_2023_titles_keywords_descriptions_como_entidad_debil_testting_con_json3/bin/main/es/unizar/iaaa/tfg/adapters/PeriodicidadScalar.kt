package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.Periocidad
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired

@DgsScalar(name = "Periocidad")
class PeriocidadScalar : Coercing<String,Periocidad> { // Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    override fun serialize(input: Any): Periocidad? {
        println("INPUUTT: $input")
        if (input is String) {
            println("INPUUTT2: $input")
            return converter.toPeriocidad(input)
        }
        return null
    }

    override fun parseLiteral(input: Any): String {
        if (input is Periocidad) {
            return input.toString()
        }
        return ""
    }

    override fun parseValue(input: Any): String {
        if (input is Periocidad) {
            return input.toString()
        }
        return ""
    }
}
