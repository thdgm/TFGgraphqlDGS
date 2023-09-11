package commonModels

data class CatalogModel(
    val id: String,
    val title: String?,
    val description:String?,
    val issued: String?,
    val modified: String?,
    val numberOfResources: Int
)

