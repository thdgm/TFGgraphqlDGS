package commonModels

data class CatalogModel(
    val id: String,
    val title: String?,
    val publisher: String?,
    val description:String?,
    val format: Collection<String?>
)

