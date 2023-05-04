package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record PeriodOfTime fields.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class PeriodOfTimeJsonMapping(
        val id: String,
        val start: String?,
        val end:String?,
    ):ModelJsonMapping
