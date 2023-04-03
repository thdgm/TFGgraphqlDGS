package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record Imt fields.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class ImtJsonMapping (

        val id: String,
        val value: String,

    ):ModelJsonMapping

