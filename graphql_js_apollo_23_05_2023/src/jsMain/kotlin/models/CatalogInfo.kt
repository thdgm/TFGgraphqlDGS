package models


data class ResourceInfo(
    val resourceIdentifier: Collection<String>?,
    val resourceTitles: Collection<String>?,
    val resourceType: String
)
data class CatalogInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val description: Collection<String>?,
    val license: String?,
    val theme: Collection<String>?,
    val language: Collection<String>?,
    val issued: String?,
    val modified: String?,

    val resources: Collection<ResourceInfo>?,

    val datasets: Collection<String>?,
    val dataservices: Collection<String>?,
    val records: Collection<String>?,

    val inCatalogTitle: Collection<Collection<String>?>?,
    val inCatalogID: Collection<String?>,

    val isServedByTitle: Collection<Collection<String>?>?,
    val isServedByID: Collection<String>?,

    val isPTOTitle: String?,
    val isPTOID: String?,


    )

