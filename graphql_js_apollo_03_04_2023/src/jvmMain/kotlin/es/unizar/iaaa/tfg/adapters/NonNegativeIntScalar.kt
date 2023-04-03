package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.NonNegativeInt
import graphql.schema.Coercing

/*
 * Scalar Graphql implementation. NonNegativeIntScalar implementation.
 *  Input: NonNegativeInt (value:UInt)
 *  Output: string
 */
@DgsScalar(name = "NonNegativeInt")
class NonNegativeIntScalar : Coercing<NonNegativeInt, String> { // Coercing Input,Output

    override fun serialize(input: Any): String? {
        if (input is NonNegativeInt) {
            return input.value.toString()
        }
        return null
    }

    override fun parseLiteral(input: Any): NonNegativeInt {
        if (input is String) {
            return NonNegativeInt(input.toUInt())
        }
        return NonNegativeInt(0u)
    }

    override fun parseValue(input: Any): NonNegativeInt {
        if (input is String) {
            return NonNegativeInt(input.toUInt())
        }
        return NonNegativeInt(0u)
    }
}
