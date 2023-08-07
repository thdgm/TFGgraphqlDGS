package models


data class DistributionInfo(
    val id: String,
    val title: Collection<String>?,
    val accessUrl: String?,
    val identifiers: Collection<String>?,
    val format: String?,
    val byteSize: String?,
    var accessService: Collection<IsServedInfo>?,
    )

