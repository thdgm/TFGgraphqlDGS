package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired

/*
 * Scalar Graphql implementation. ConceptScalar (notation, label) implementation.
 *  Input: Concept (notation:string, label:string)
 *  Output: Concept (notation:string, label:string)
 */

@DgsScalar(name = "Concept")
class ConceptScalar : Coercing<Concept, Concept> { // Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    override fun serialize(input: Any): Concept? {

        if (input is Concept) {
            return input // .toString()
        }
        return null
    }

    override fun parseLiteral(input: Any): Concept {

        if (input is String) {
            return converter.toConcept(input)
        }
        return Concept("", "")
    }

    override fun parseValue(input: Any): Concept {

        if (input is String) {
            return converter.toConcept(input)
        }
        return Concept("", "")
    }
}
