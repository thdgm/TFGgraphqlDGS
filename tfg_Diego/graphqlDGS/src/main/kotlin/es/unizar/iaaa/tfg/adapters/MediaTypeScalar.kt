package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsScalar
import es.unizar.iaaa.tfg.services.Logger
import es.unizar.iaaa.tfg.annotations.MediaType as MediaTypeScalarModel
import es.unizar.iaaa.tfg.annotations.Periocidad
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import graphql.schema.Coercing
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType


@DgsScalar(name = "MediaType")
class MediaTypeScalar : Coercing<String, MediaTypeScalarModel> { // Coercing Input,Output

    @Autowired
    lateinit var converter: ConvertersAuxiliarEntitiesTo


    override fun serialize(input: Any): MediaTypeScalarModel? {
        if (input is String) {
            val medType = MediaType.parseMediaType(input)
            return MediaTypeScalarModel(medType.type,medType.subtype)//converter.toPeriocidad(input)
        }
        return null
    }

    override fun parseLiteral(input: Any): String {
        if (input is MediaTypeScalarModel) {
            return  input.toString()
        }
        return ""
    }

    override fun parseValue(input: Any): String {
        if (input is MediaTypeScalarModel) {
            return input.toString()
        }
        return ""
    }
}
