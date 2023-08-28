package es.unizar.iaaa.tfg.domain

enum class Properties(val n: String) {
    CATALOGS("catalogs"),
    RECORDS("records"),
    SERVICES("services"),
    DATSETS("datasets"),
    DATASERIES("dataSeries"),
    ACCESSSERVICE("accessService"),
    INSERIES("inSeries"),
    DISTRIBUTIONS("distributions")
}
enum class Types(val type: String) {
    CATALOGENTITY("catalogEntity "),
    DATASETENTITY("datasetEntity"),
    DATASETSERIESENTITY("datasetSeriesEntity"),
    DATASETSERVICEENTITY("datasetServiceEntity")
}
