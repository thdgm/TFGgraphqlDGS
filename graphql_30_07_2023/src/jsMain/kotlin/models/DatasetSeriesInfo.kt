package models


data class DatasetSeriesInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val description: Collection<String>?,
    val license: String?,
    val theme: Collection<String>?,
    val language: Collection<String>?,
    val issued: String?,
    val modified: String?,

    val inCatalogTitle: Collection<Collection<String>?>?,
    val inCatalogID: Collection<String?>,

    val servedDatasetID: Collection<String>?,
    val servedDatasetIdentifiers: Collection<Collection<String>?>?,
    val servedDatasetTitles: Collection<Collection<String>?>?,

    val seriesMembersID: Collection<String>?,
    val seriesMembersIdentifiers: Collection<Collection<String>?>?,
    val seriesMembersTitles: Collection<Collection<String>?>?,

    val isPTOTitle: String?,
    val isPTOID: String?,

    )

