package es.unizar.iaaa.tfg.jsonDataModels

/*
 * This data class helps to process the json file with the metadata.
 * Record Dataset fields.
 * Inherit from ModelJsonMapping, in order to group these classes.
 */
data class DatasetJsonMapping (

        val id: String,
        val keywordsWord: Collection<String?>,
        val keywordsLang: Collection<String?>,
        val titlesText:Collection<String?>,
        val titlesLang:Collection<String?>,
        val distributions:Collection<String?>,
        val descriptionsText: Collection<String?>,
        val descriptionsLang: Collection<String?>,
        val issued:String?,
        val modified:String?,
        val languages: Collection<String?>,
        val spatial:Collection<String?>,
        val identifier:Collection<String?>,
        val license:String?,
        val theme:Collection<String?>,
        val publisher:String?,
        val temporal:String?,



    ):ModelJsonMapping

