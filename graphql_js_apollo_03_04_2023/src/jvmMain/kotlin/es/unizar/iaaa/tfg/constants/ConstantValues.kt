package es.unizar.iaaa.tfg.constants

/*
 * Constant values used in the program.
 */
object ConstantValues {
    const val LANGSTRING_SEPARADOR = "--"
    const val DATE_PATTERN = "yyyy-MM-dd'T'HH:mm:ss'+'SS:ss"
    const val DISTRIBUTION = "Distribution"
    const val DATASET = "Dataset"
    const val CR_ID = "/CatalogRecord"
    const val ACCRUAL_PERIODICITY = "AccrualPeriodicity"
    const val DATASET_TYPE = "dataset"
    const val LOCATION_DELIMETER = "/"
    const val PUBLISHER = "Publisher"
    const val FORMAT = "Format"
    const val PERIOD_OF_TIME = "PeriodOfTime"
    const val MAX_IDLE = 30
    const val MIN_IDLE = 10

    const val CATALOGS = "catalogs" 
    const val RECORDS = "records" 
    const val SERVICES = "services" 
    const val DATSETS = "datasets" 
    const val DATASERIES = "dataSeries" 
    const val ACCESSSERVICE = "accessService" 
    const val INSERIES = "inSeries" 
    const val DISTRIBUTIONS = "distributions"

    const val CATALOGENTITY  = "catalogEntity " 
    const val DATASETENTITY  = "datasetEntity" 
    const val DATASETSERIESENTITY  = "datasetSeriesEntity" 
    const val DATASETSERVICEENTITY  = "datasetServiceEntity"
    val PERIODICITY_RANGE = listOf("days", "years", "months", "weeks")


    val ADMON_LEVEL = mapOf(
        'E' to "Administración del Estado",
        'L' to "Administración Local",
        'A' to "Administración Autonómica",
        'P' to "Entidad privada",
        'U' to "Universidades"
    )


}
