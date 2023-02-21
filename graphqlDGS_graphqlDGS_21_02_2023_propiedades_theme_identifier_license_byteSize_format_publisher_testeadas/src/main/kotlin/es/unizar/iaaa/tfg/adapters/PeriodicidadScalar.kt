package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.Periocidad
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired

@DgsScalar(name = "Periocidad")
class PeriocidadScalar : Coercing<Periocidad, String> { // Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    override fun serialize(input: Any): String? {
        if (input is Periocidad) {
            return input.toString()
        }
        return null
    }

    override fun parseLiteral(input: Any): Periocidad {
        if (input is String) {
            return converter.toPeriocidad(input)
        }
        return Periocidad(null, null)
    }

    override fun parseValue(input: Any): Periocidad {
        if (input is String) {
            return converter.toPeriocidad(input)
        }
        return Periocidad(null, null)
    }
}
