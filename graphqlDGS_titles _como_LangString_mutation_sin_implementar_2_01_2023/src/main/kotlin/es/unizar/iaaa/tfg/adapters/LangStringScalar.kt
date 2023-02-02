package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired


@DgsScalar(name="LangString")
class LangStringScalar: Coercing<LangString, LangString> { //Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo

    override fun serialize(input: Any): LangString? {
        println("ENTRA")
        if (input is LangString){
            return input//.toString()
        }
        return null
    }

    override fun parseLiteral(input: Any): LangString {
        println("ENTRA1")
        if (input is String){
            return converter.toLangString(input)
        }
        return LangString("","")

    }

    override fun parseValue(input: Any): LangString {
        println("ENTRA2")
        if (input is String){
            return converter.toLangString(input)
        }
        return LangString("","")
    }

}