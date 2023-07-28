package models


data class ResourceInfo(
    val resourceIdentifier: Collection<String>?,
    val resourceId: String,
    val resourceType: String
)

data class InCatalogInfo(
    val catalogIdentifiers: Collection<String>?,
    val catalogId: String,
)

data class IsServedInfo(
    val serviceIdentifiers: Collection<String>?,
    val serviceId: String,
)
data class RecordsInfo(
    val recordId: String,
    val recordTitle: String?,
)

data class CatalogInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val notation: String?,
    val description: Collection<String>?,
    val license: String?,
    val issued: String?,
    val modified: String?,
    val resources: Collection<ResourceInfo>?,
    val records: Collection<RecordsInfo>?,
    val inCatalog: Collection<InCatalogInfo>?,
   // val isServedBy: Collection<IsServedInfo>?,
    val isPTO: RecordsInfo?,

    )

