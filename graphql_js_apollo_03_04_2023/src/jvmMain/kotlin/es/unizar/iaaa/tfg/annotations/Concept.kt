package es.unizar.iaaa.tfg.annotations

/*
 * Data class. Implementation of type Concept with toString function.
 */
data class Concept(val notation: String, val label: String) {

    override fun toString(): String {
        return notation + "_" + label
    }
}
