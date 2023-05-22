package models


data class ServedDatasetInfo(
    val datasetIdentifier: Collection<String>?,
    val datasetTitles: Collection<String>?,
    val datasetType: String
)
data class DataServiceInfo(
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

    val datasets: Collection<ServedDatasetInfo>?,

    val isPTOTitle: String?,
    val isPTOID: String?,

    )

