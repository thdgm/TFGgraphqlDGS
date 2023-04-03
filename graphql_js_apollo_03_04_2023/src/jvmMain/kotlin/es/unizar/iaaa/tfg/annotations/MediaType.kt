package es.unizar.iaaa.tfg.annotations


/*
 * Data class. Implementation of type MediaType with toString function.
 * Parse org.springframework.http.MediaType and extract some fields to create
 * this type.
 */
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
