package commonModels

data class ServicesModel(
    val id: String,
    val title: String?,
    val description:String?,
    val issued: String?,
    val modified: String?,
    val numberOfServedResources: Int
)

