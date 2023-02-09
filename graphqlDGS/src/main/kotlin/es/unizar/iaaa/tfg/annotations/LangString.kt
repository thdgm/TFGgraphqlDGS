package es.unizar.iaaa.tfg.annotations

data class LangString(val literal: String, val tag: String) {

    override fun toString(): String {
        return literal + "," + tag
    }
}
