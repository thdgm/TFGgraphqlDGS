package es.unizar.iaaa.tfg.annotations

data class Concept(val notation: String, val label: String) {

    override fun toString(): String {
        return notation + "_" + label
    }
}