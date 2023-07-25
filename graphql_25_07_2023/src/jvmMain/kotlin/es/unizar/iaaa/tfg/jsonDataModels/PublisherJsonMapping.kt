package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record Publisher fields.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class PublisherJsonMapping (

        val id: String,
        val notation: String,
        val label: String,

    ):ModelJsonMapping

