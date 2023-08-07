package commonModels

data class ResourceInfo(
    val resourceIdentifier: Collection<String>?,
    val resourceId: String
)

data class CatalogRecordModel(
    val id: String,
    val title: String?,
    val contentType:String?,
    val hints: Collection<String>?,
    val primaryTopic: ResourceInfo?,
)

