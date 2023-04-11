package es.unizar.iaaa.tfg.constants

/*
 * Constant values used in the program.
 */
object ConstantValues {
    const val LANGSTRING_SEPARADOR = "--"
    const val DATE_PATTERN = "yyyy-MM-dd'T'HH:mm:ss'+'SS:ss"
    const val DATE_PATTERN_ZONE_OFFSET = "yyyy-MM-dd'T'HH:mm:ssZ"
    const val REGEX_FREQUENCY = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\+\\d{4}"
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

    val FREQUENCY_MAP = mapOf(
        "time:years 1.0" to  "Anual",
        "time:months 3.0" to "Trimestral",
        "time:months 1.0" to "Mensual",
        "time:days 1.0" to "Diario",
        "time:days 15.0" to "Bimensual",

        "time:weeks 1.0" to "Semanal",
        "time:years 3.0" to "Trienal",
        "time:months 6.0" to "Semestral",
        "time:seconds 1.0" to "Continuo",
        "time:years 2.0" to "Bienal",

        "time:weeks 2.0" to "Quincenal",
        "time:days 3.0" to "Bisemanal",
        "time:months 4.0" to "Cuatrimestral",
        "time:days 2.0" to "Tres veces por semana",

    )
    val FREQUENCY_TRANSLATOR = mapOf(
        "days" to  "días",
        "years" to "años",
        "weeks" to "semanas",
        "hours" to "horas",
        "minutes" to "minutos",
        "seconds" to "segundos",
        "months" to "meses",
        )
}
