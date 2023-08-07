package commonModels

data class CatalogRecordModel(
    val id: String,
    val title: String?,
    val contentType:String?,
    val hints: Collection<String>?,
    val primaryTopic: String?,
)

