package commonModels

data class SeriesModel(
    val id: String,
    val title: String?,
    val description:String?,
    val issued: String?,
    val modified: String?,
    val numberOfDatasets: Int
)

