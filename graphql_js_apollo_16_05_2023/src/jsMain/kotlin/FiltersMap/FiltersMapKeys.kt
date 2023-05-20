package FiltersMap

class FiltersMapKeys {
    val filtersSelectedMap = mutableMapOf<String,MutableMap<String,Collection<String>>>(
        "Datasets" to mutableMapOf(),
        "DatasetSeries" to mutableMapOf(),
        "Catalogs" to mutableMapOf(
            "Resources" to listOf(),
            "CatalogRecords" to listOf(),
            "DataServices" to listOf(),
            "Catalogs" to listOf(),
            "Título" to listOf(),
            "PrimaryTopic" to listOf(),
            "Descripciones" to listOf(),
            "Categoría" to listOf(),
            "Publicador" to listOf(),
            "Licenses" to listOf(),
            "Nivel de Administración" to listOf(),
            "Fecha creación" to listOf(),
            "Fecha última modificación" to listOf()
        ),
        "DataServices" to mutableMapOf(),
        "Distributions" to mutableMapOf(),
        "CatalogRecords" to mutableMapOf()
    )
    val filtersSelectedMapCatalog = mutableMapOf<String,Collection<String>>(
        "Resources" to listOf("v2"),
        "CatalogRecords" to listOf("v1"),
        "DataServices" to listOf("v1"),
        "Catalogs" to listOf("v1"),
        "Título" to listOf("v1"),
        "PrimaryTopic" to listOf("v1"),
        "Descripciones" to listOf("v1"),
        "Categoría" to listOf("v1"),
        "Publicador" to listOf("v1"),
        "Licenses" to listOf("v1"),
        "Nivel de Administración" to listOf("v1"),
        "Fecha creación" to listOf("v1"),
        "Fecha última modificación" to listOf("v1")
    )
}
