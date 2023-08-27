package models


data class ExtraQueryInfo(
    val id: String?,
    val notation: String?,
    val label: String?,
    val keywords: Collection<String>?,
    val formats: Collection<String?>?,
    var descriptions: Collection<String>?,
    val title: Collection<String>?,
    val distributions: Collection<String>?,
    )

