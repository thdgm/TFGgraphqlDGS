package es.unizar.iaaa.tfg.annotations

/*
 * Data class. Implementation of type Periocidad with toString function.
 */
data class Frequency(val range: String?, val period: Float?) {

    override fun toString(): String {
        if (range != null && period != null) {
            return "time:$range $period"
        }
        return ""
    }
}
