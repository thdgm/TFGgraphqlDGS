package models




data class DatasetSeriesInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val notation: String?,
    val description: Collection<String>?,
    val license: String?,
    val issued: String?,
    val modified: String?,
    val numberOfDatasets: Int,
    val isPTO: RecordsInfo?,
    val inCatalog: Collection<InCatalogInfo>?,
    var resources: Collection<ResourceInfo>?,
    var isServedBy: Collection<IsServedInfo>?,


    )

