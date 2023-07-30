package models


data class DistributionInfo(
    val id: String,
    val title: Collection<String>?,
    val accessUrl: String?,
    val identifiers: Collection<String>?,
    val format: String?,
    val byteSize: String?,

    val accessServiceID: Collection<String>?,
    val accessServiceIdentifiers: Collection<Collection<String>?>?,
    val accessServiceTitles: Collection<Collection<String>?>?,

    )

