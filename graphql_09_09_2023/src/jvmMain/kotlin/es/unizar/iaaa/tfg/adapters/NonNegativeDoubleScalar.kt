package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.NonNegativeDouble
import graphql.schema.Coercing

/*
 * Scalar Graphql implementation. NonNegativeDoubleScalar implementation.
 *  Input: NonNegativeDouble (value:Double)
 *  Output: string
 */
@DgsScalar(name = "NonNegativeDouble")
class NonNegativeDoubleScalar : Coercing<NonNegativeDouble, String> { // Coercing Input,Output

    override fun serialize(input: Any): String? {
        if (input is NonNegativeDouble) {
            return input.value.toString()
        }
        return null
    }

    override fun parseLiteral(input: Any): NonNegativeDouble {
        if (input is String) {
            return NonNegativeDouble(input.toDouble())
        }
        return NonNegativeDouble(0.0)
    }

    override fun parseValue(input: Any): NonNegativeDouble {
        if (input is String) {
            return NonNegativeDouble(input.toDouble())
        }
        return NonNegativeDouble(0.0)
    }
}
