package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.Frequency
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired

/*
 * Scalar Graphql implementation. FrequencyScalar implementation.
 *  Input: string
 *  Output: Frequency (rango:string, periodo:float)
 */
@DgsScalar(name = "Frequency")
class FrequencyScalar : Coercing<String, Frequency> { // Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo


    override fun serialize(input: Any): Frequency? {
        if (input is String) {
            return converter.toPeriocidad(input)
        }
        return null
    }

    override fun parseLiteral(input: Any): String {
        if (input is Frequency) {
            return input.toString()
        }
        return ""
    }

    override fun parseValue(input: Any): String {
        if (input is Frequency) {
            return input.toString()
        }
        return ""
    }
}
