package models



data class CatalogRecordInfo(
    val id: String,
    val title: String?,
    val contentType: String?,
    val content: String?,
    val contentURL: String?,
    val hints: Collection<String>?,
    val primaryTopic: ResourceInfo?,
    val inCatalog: Collection<InCatalogInfo>?
    )

