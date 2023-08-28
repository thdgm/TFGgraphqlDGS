package models



data class DataServiceInfo(
    val id: String,
    val title: Collection<String>?,
    val publisher: String?,
    val notation: String?,
    val description: Collection<String>?,
    val license: String?,
    val issued: String?,
    val modified: String?,
    val numberOfResources: Int,
    val numberOfCatalogs: Int,
    val numberOfDatasets: Int,
    val numberOfDatasetSeries: Int,
    var resources: Collection<ResourceInfo>?,
    val inCatalog: Collection<InCatalogInfo>?,
    val isPTO: RecordsInfo?,

    )

