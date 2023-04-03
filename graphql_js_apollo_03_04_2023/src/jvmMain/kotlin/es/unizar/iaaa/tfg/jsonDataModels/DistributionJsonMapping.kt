package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record Distribution fields.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class DistributionJsonMapping(
        val id: String,
        val accessUrl: String?,
        val titlesText:Collection<String?>,
        val titlesLang:Collection<String?>,
        val byteSize: Int?,
        val identifier:Collection<String?>,
        val format: String?,
    ):ModelJsonMapping

