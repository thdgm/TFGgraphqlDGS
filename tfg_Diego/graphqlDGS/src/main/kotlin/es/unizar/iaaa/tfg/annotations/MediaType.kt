package es.unizar.iaaa.tfg.annotations
import es.unizar.iaaa.tfg.services.Logger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import java.nio.charset.Charset

data class MediaType(
    val type:String,
    val subtype:String,
    /*val concrete:Boolean,
    val wildcardType:Boolean,
    val wildcardSubtype:Boolean,
    val parameters: Map<String,String>,
    val charset:Charset,
    val qualityValue: Double,*/

) {

    override fun toString(): String {
        return "${this.type}/${this.subtype}"
    }

}
