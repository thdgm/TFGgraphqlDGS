package es.unizar.iaaa.tfg.jsonDataModels

import java.time.LocalDateTime

/*
 * This data class helps to process the csv file recording all its metadata.
 */
data class DatasetCSVModel(
    val url: String?,
    val identifier: String?,
    val title: Collection<String>,
    val description: Collection<String>, //lang-text
    val themes: Collection<String>,
    val keywords: Map<String,String>?, // {es=Alemania//España, en=Spain//Germany}
    val issued: LocalDateTime?,
    val modified: LocalDateTime?,
    val frequency: String?, // AccrualPeriodicity p.e days, 2
    val languages: Collection<String>,
    val publisher: String?,
    val license: String?,
    val spatial: String?,
    val period: Pair<LocalDateTime, LocalDateTime>?, //Start-end
    val validity: LocalDateTime?, // No está en el modelo
    val relatedResources: String?, //No está en el modelo
    val regulations: String?, // No está en el modelo Es la Normativa
    val distributions: Collection<Map<String,String>?>?,

    )

