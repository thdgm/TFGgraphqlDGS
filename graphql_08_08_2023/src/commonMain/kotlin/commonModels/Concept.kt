package commonModels

import kotlinx.serialization.Serializable


@Serializable
data class Concept(var literal: String, var tag: String){
    override fun toString(): String {
        return "$literal--$tag"
    }
    fun asLangString(value: String) {
        val literalTags = value.split(", tag=")
        this.literal = literalTags.elementAt(0).split("=").elementAt(1)
        this.tag = literalTags.elementAt(1)
    }
}