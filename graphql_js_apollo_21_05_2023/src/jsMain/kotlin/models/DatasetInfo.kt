package models

import commonModels.FrequencyAdapterScalar

data class DatasetInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
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
    val accessURl: Collection<String>?, //distributions

    val identifiers: Collection<String>?,

    val isPTOTitle: String?,
    val isPTOID: String?,

    val inCatalogTitle: Collection<Collection<String>?>?,
    val inCatalogIdentifiers: Collection<Collection<String>?>?,
    val inCatalogID: Collection<String?>,

    val inSeriesTitle: Collection<Collection<String>?>?,
    val inSeriesIdentifiers: Collection<Collection<String>?>?,
    val inSeriesID: Collection<String?>,

    val servedByID: Collection<String>?,
    val servedBytIdentifiers: Collection<Collection<String>?>?,
    val servedByTitles: Collection<Collection<String>?>?,
)