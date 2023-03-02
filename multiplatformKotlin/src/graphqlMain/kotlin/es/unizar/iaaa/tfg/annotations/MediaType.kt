package es.unizar.iaaa.tfg.annotations

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
