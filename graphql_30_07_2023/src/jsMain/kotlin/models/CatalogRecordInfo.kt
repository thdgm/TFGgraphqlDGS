package models


data class CatalogRecordInfo(
    val id: String,
    val title: Collection<String>?,
    val contentType: String?,
    val content: String?,
    val contentURL: String?,

    val pTId: String?,
    val ptIdentifier: Collection<String>?,
    val ptTitle: Collection<String>?,

    val inCatalogTitle: Collection<Collection<String>?>?,
    val inCatalogID: Collection<String?>,

    val hints: Collection<String>?

    )

