package FiltersMap

class FiltersMapKeys {
    val filtersSelectedMap = mutableMapOf<String,MutableMap<String,Collection<String>>>(
        "Datasets" to mutableMapOf(
            "Categoría" to listOf(),
            "Títulos" to listOf(),
            "Descripciones" to listOf(),
            "DataServices" to listOf(),
            "DatasetSeries" to listOf(),
            "Catalogs" to listOf(),
            "Distribuciones" to listOf(),
            "Etiqueta" to listOf(),
            "Publicador" to listOf(),
            "Licenses" to listOf(),
            "Nivel de Administración" to listOf(),
            "Fecha creación" to listOf(),
            "Fecha última modificación" to listOf(),
            "Frecuencia de Actualización" to listOf(),
            "Formato" to listOf(),
            "PrimaryTopic" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),
        ),
        "DatasetSeries" to mutableMapOf(
            "Categoría" to listOf(),
            "Publicador" to listOf(),
            "Nivel de Administración" to listOf(),
            "Licencia" to listOf(),
            "Títulos" to listOf(),
            "Descripciones" to listOf(),
            "DataServices" to listOf(),
            "Catalogos" to listOf(),
            "Dataset Members" to listOf(),
            "Fecha creación" to listOf(),
            "Fecha última modificación" to listOf(),
            "PrimaryTopic" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),
        ),


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
            "Fecha última modificación" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),
        ),
        "DataServices" to mutableMapOf(
            "Categoría" to listOf(),
            "Publicador" to listOf(),
            "Nivel de Administración" to listOf(),
            "PrimaryTopic" to listOf(),
            "Fecha creación" to listOf(),
            "Fecha última modificación" to listOf(),
            "Catalogs" to listOf(),
            "Datasets" to listOf(),
            "Descripciones" to listOf(),
            "Títulos" to listOf(),
            "Licenses" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),

        ),
        "Distributions" to mutableMapOf(
            "AccessUrl" to listOf(),
            "ByteSize" to listOf(),
            "Formato" to listOf(),
            "Títulos" to listOf(),
            "DataServices" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),
        ),
        "CatalogRecords" to mutableMapOf(
            "Hints" to listOf(),
            "Tipo del contenido" to listOf(),
            "ContentUrl" to listOf(),
            "PrimaryTopic" to listOf(),
            "Page" to listOf(),
            "OrderBy" to listOf("ASC"),
            "SortBy" to listOf("No Order"),
        )


    )
    val disabled = false

}
