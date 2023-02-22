package es.unizar.iaaa.tfg.jsonDataModels

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
        val identifier:String?,
        val license:String?,
        val theme:Collection<String?>,
        val publisher:String?,



    ):ModelJsonMapping

