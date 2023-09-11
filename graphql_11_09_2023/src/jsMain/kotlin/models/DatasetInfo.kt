package models

import commonModels.FrequencyAdapterScalar

data class DistInfo(
    val accessURl:String?,
    val id: String
)

data class DatasetInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val notation: String?,
    val description: Collection<String>?,
    val license: String?,
    val keywords: Collection<String>?,
    val theme: Collection<String>?,
    val language: Collection<String>?,
    val issued: String?,
    val modified: String?,
    val accrualPeriodicity: FrequencyAdapterScalar?,
    //val accrualPeriodicityPeriod: Float?,
    val spatial: Collection<String>?,
    val temporalStart:String?,
    val temporalEnd: String?,
    //val accessURl: Collection<String>?, //distributions
    val formats: Collection<String>?,
    val identifiers: Collection<String>?,
    val distInfo: Collection<DistInfo>?,

    val isPTOID: Collection<String?>,


    val inCatalogID: Collection<String?>,


    val inSeriesID: Collection<String?>,

    val servedByID: Collection<String>?,

)