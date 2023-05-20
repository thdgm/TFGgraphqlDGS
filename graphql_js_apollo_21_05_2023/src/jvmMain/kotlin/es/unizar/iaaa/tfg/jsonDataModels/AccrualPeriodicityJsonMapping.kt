package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record AccrualPeriodicity field.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class AccrualPeriodicityJsonMapping (

        val value: String,

    ):ModelJsonMapping

