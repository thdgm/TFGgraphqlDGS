package es.unizar.iaaa.tfg.jsonDataModels

data class DistributionJsonMapping(
        val id: String,
        val accessUrl: String,
        val titlesText:Collection<String?>,
        val titlesLang:Collection<String?>,
        val byteSize: Int?,
        val identifier:String?,
        val format: String?,
    ):ModelJsonMapping

