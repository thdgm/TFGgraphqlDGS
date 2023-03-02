package es.unizar.iaaa.tfg.jsonDataModels

data class PeriodOfTimeJsonMapping(
        val id: String,
        val start: String?,
        val end:String?,
    ):ModelJsonMapping
