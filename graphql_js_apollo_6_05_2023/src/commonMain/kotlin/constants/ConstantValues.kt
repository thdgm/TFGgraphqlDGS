package es.unizar.iaaa.tfg.constants

/*
 * Constant values used in the program.
 */
object ConstantValues {
    const val LANGSTRING_SEPARADOR = "--"
    const val DATE_PATTERN = "yyyy-MM-dd'T'HH:mm:ss'+'SS:ss"
    const val DATE_PATTERN_ZONE_OFFSET = "yyyy-MM-dd'T'HH:mm:ssZ"
    const val REGEX_FREQUENCY = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\+\\d{4})?"
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

    val DIR3_MAP = mapOf(
        "Administrador de Infraestructuras Ferroviarias" to "EA0003338",
        "Agencia de Información y Control Alimentarios" to "EA0022336",
        "Agencia Española de Cooperación Internacional para el Desarrollo" to "EA0035768",
        "Agencia Española de Medicamentos y Productos Sanitarios" to "EA0023011",
        "Agencia Española de Protección de Datos" to "I00000121",
        "Agencia Española de Seguridad Alimentaria y Nutrición" to "EA0043127",
        "Agencia Estatal Boletín Oficial del Estado" to "EA0040819",
        "Agencia Estatal Consejo Superior de Investigaciones Científicas" to "EA0020951",
        "Agencia Estatal de Administración Tributaria" to "EA0028512",
        "Agencia Estatal de Investigación" to "EA0020843",
        "Agencia Estatal de Meteorología" to "EA0022545",
        "Agencia Nacional de Evaluación de la Calidad y Acreditación" to "EA0020877",
        "ANIMSA" to "A0DAT0002",
        "Autoridad Portuaria de Alicante" to "EA0001296",
        "Autoridad Portuaria de Almería" to "EA0001297",
        "Autoridad Portuaria de Avilés" to "EA0001298",
        "Autoridad Portuaria de Bahía de Cádiz" to "EA0001300",
        "Autoridad Portuaria de Baleares" to "EA0001301",
        "Autoridad Portuaria de Barcelona" to "EA0001302",
        "Autoridad Portuaria de Bilbao" to "EA0001303",
        "Autoridad Portuaria de Cartagena" to "EA0001304",
        "Autoridad Portuaria de Castellón" to "EA0001305",
        "Autoridad Portuaria de Ceuta" to "EA0001306",
        "Autoridad Portuaria de Ferrol-San Cibrao" to "EA0001307",
        "Autoridad Portuaria de Gijon" to "EA0001308",
        "Autoridad Portuaria de Huelva" to "EA0001309",
        "Autoridad Portuaria de la Bahía de Algeciras" to "EA0001299",
        "Autoridad Portuaria de la Coruña" to "EA0001310",
        "Autoridad Portuaria de Las Palmas" to "EA0001311",
        "Autoridad Portuaria de Málaga" to "EA0001312",
        "Autoridad Portuaria de Marín y Ría de Pontevedra" to "EA0001313",
        "Autoridad Portuaria de Melilla" to "EA0001314",
        "Autoridad Portuaria de Motril" to "EA0001315",
        "Autoridad Portuaria de Pasajes" to "EA0001316",
        "Autoridad Portuaria de Santa Cruz de Tenerife" to "EA0001317",
        "Autoridad Portuaria de Santander" to "EA0001318",
        "Autoridad Portuaria de Sevilla" to "EA0001319",
        "Autoridad Portuaria de Tarragona" to "EA0001320",
        "Autoridad Portuaria de Valencia" to "EA0001321",
        "Autoridad Portuaria de Vigo" to "EA0001322",
        "Autoridad Portuaria de Villagarcía de Arosa" to "EA0001323",
        "Ayuntamiento de Abaltzisketa" to "L01200013",
        "Ayuntamiento de Adamuz" to "L01140018",
        "Ayuntamiento de Aduna" to "L01200028",
        "Ayuntamiento de Aguilar de la Frontera" to "L01140023",
        "Ayuntamiento de Aia" to "L01200163",
        "Ayuntamiento de Aizarnazabal" to "L01200034",
        "Ayuntamiento de Alaior" to "L01070027",
        "Ayuntamiento de Albacete" to "L01020030",
        "Ayuntamiento de Albal" to "L01460076",
        "Ayuntamiento de Albiztur" to "L01200049",
        "Ayuntamiento de Alcalá de Henares" to "L01280053",
        "Ayuntamiento de Alcantarilla" to "L01300050",
        "Ayuntamiento de Alcaracejos" to "L01140039",
        "Ayuntamiento de Alcobendas" to "L01280066",
        "Ayuntamiento de Alcoy" to "L01030092",
        "Ayuntamiento de Algueña" to "L01030134",
        "Ayuntamiento de Alhaurín de la Torre" to "L01290075",
        "Ayuntamiento de Alhendín" to "L01180140",
        "Ayuntamiento de Alicante" to "L01030149",
        "Ayuntamiento de Almedinilla" to "L01140044",
        "Ayuntamiento de Almendralejo" to "L01060114",
        "Ayuntamiento de Almodóvar del Río" to "L01140057",
        "Ayuntamiento de Almoradí" to "L01030152",
        "Ayuntamiento de Andoain" to "L01200090",
        "Ayuntamiento de Añora" to "L01140060",
        "Ayuntamiento de Arganda del Rey" to "L01280148",
        "Ayuntamiento de Arona" to "L01380064",
        "Ayuntamiento de Avilés" to "L01330045",
        "Ayuntamiento de Badajoz" to "L01060153",
        "Ayuntamiento de Badia del Vallès" to "L01089045",
        "Ayuntamiento de Baena" to "L01140076",
        "Ayuntamiento de Barakaldo" to "L01480139",
        "Ayuntamiento de Barcelona" to "L01080193",
        "Ayuntamiento de Belmez" to "L01140095",
        "Ayuntamiento de Benamejí" to "L01140109",
        "Ayuntamiento de Bilbao" to "L01480209",
        "Ayuntamiento de Blázquez, Los" to "L01140116",
        "Ayuntamiento de Bujalance" to "L01140121",
        "Ayuntamiento de Burgos" to "L01090597",
        "Ayuntamiento de Burujón" to "L01450247",
        "Ayuntamiento de Cabañas de la Sagra" to "L01450250",
        "Ayuntamiento de Cáceres" to "L01100377",
        "Ayuntamiento de Camargo" to "L01390165",
        "Ayuntamiento de Cañete de las Torres" to "L01140142",
        "Ayuntamiento de Carcabuey" to "L01140155",
        "Ayuntamiento de Cardeña" to "L01140168",
        "Ayuntamiento de Carlota, La" to "L01140174",
        "Ayuntamiento de Carpio, El" to "L01140180",
        "Ayuntamiento de Cartagena" to "L01300161",
        "Ayuntamiento de Castellón de la Plana" to "L01120402",
        "Ayuntamiento de Catadau" to "L01460930",
        "Ayuntamiento de Cerdanyola del Vallès" to "L01082665",
        "Ayuntamiento de Cieza" to "L01300196",
        "Ayuntamiento de Conil de la Frontera" to "L01110146",
        "Ayuntamiento de Conquista" to "L01140207",
        "Ayuntamiento de Córdoba" to "L01140214",
        "Ayuntamiento de Cornellà de Llobregat" to "L01080734",
        "Ayuntamiento de Coruña, A" to "L01150308",
        "Ayuntamiento de Corvera de Asturias" to "L01330208",
        "Ayuntamiento de Dénia" to "L01030633",
        "Ayuntamiento de Donostia/San Sebastián" to "L01200697",
        "Ayuntamiento de Doña Mencía" to "L01140229",
        "Ayuntamiento de Dos Torres" to "L01140235",
        "Ayuntamiento de Encinas Reales" to "L01140240",
        "Ayuntamiento de Espejo" to "L01140253",
        "Ayuntamiento de Espiel" to "L01140266",
        "Ayuntamiento de Fernán-Núñez" to "L01140272",
        "Ayuntamiento de Ferrol" to "L01150367",
        "Ayuntamiento de Fuente la Lancha" to "L01140288",
        "Ayuntamiento de Fuente Obejuna" to "L01140291",
        "Ayuntamiento de Fuente Palmera" to "L01140305",
        "Ayuntamiento de Fuente-Tójar" to "L01140312",
        "Ayuntamiento de Gandia" to "L01461311",
        "Ayuntamiento de Getafe" to "L01280650",
        "Ayuntamiento de Getxo" to "L01480448",
        "Ayuntamiento de Gijón" to "L01330241",
        "Ayuntamiento de Granjuela, La" to "L01140327",
        "Ayuntamiento de Granollers" to "L01080961",
        "Ayuntamiento de Guadalajara" to "L01191305",
        "Ayuntamiento de Guadalcázar" to "L01140333",
        "Ayuntamiento de Guijo, El" to "L01140348",
        "Ayuntamiento de Hinojosa del Duque" to "L01140351",
        "Ayuntamiento de Hornachuelos" to "L01140364",
        "Ayuntamiento de Huétor Vega" to "L01181015",
        "Ayuntamiento de Igualada" to "L01081022",
        "Ayuntamiento de Ingenio" to "L01350115",
        "Ayuntamiento de Iznájar" to "L01140370",
        "Ayuntamiento de Jerez de la Frontera" to "L01110201",
        "Ayuntamiento de la Pobla de Vallbona" to "L01462021",
        "Ayuntamiento de Las Palmas de Gran Canaria" to "L01350167",
        "Ayuntamiento de Leganés" to "L01280745",
        "Ayuntamiento de L'Hospitalet de Llobregat" to "L01081017",
        "Ayuntamiento de Logroño" to "L01260892",
        "Ayuntamiento de Lorca" to "L01300243",
        "Ayuntamiento de Lucena" to "L01140386",
        "Ayuntamiento de Luque" to "L01140399",
        "Ayuntamiento de Madrid" to "L01280796",
        "Ayuntamiento de Majadahonda" to "L01280800",
        "Ayuntamiento de Málaga" to "L01290672",
        "Ayuntamiento de Manlleu" to "L01081120",
        "Ayuntamiento de Martos" to "L01230601",
        "Ayuntamiento de Montalbán de Córdoba" to "L01140403",
        "Ayuntamiento de Montemayor" to "L01140410",
        "Ayuntamiento de Montilla" to "L01140425",
        "Ayuntamiento de Montoro" to "L01140431",
        "Ayuntamiento de Monturque" to "L01140446",
        "Ayuntamiento de Moriles" to "L01140459",
        "Ayuntamiento de Móstoles" to "L01280920",
        "Ayuntamiento de Muras" to "L01270333",
        "Ayuntamiento de Murcia" to "L01300308",
        "Ayuntamiento de Obejo" to "L01140478",
        "Ayuntamiento de Oliva de Mérida" to "L01060943",
        "Ayuntamiento de Oviedo" to "L01330447",
        "Ayuntamiento de Palenciana" to "L01140484",
        "Ayuntamiento de Palma del Río" to "L01140497",
        "Ayuntamiento de Palma de Mallorca" to "L01070407",
        "Ayuntamiento de Pamplona" to "L01312016",
        "Ayuntamiento de Pedro Abad" to "L01140500",
        "Ayuntamiento de Pedroche" to "L01140517",
        "Ayuntamiento de Peñarroya-Pueblonuevo" to "L01140522",
        "Ayuntamiento de Pesquera" to "L01390514",
        "Ayuntamiento de Pinto" to "L01281132",
        "Ayuntamiento de Ponferrada" to "L01241152",
        "Ayuntamiento de Posadas" to "L01140538",
        "Ayuntamiento de Pozuelo de Alarcón" to "L01281150",
        "Ayuntamiento de Priego de Córdoba" to "L01140556",
        "Ayuntamiento de Rafelbunyol" to "L01462074",
        "Ayuntamiento de Rairiz de Veiga" to "L01320678",
        "Ayuntamiento de Rambla, La" to "L01140575",
        "Ayuntamiento de Reus" to "L01431233",
        "Ayuntamiento de Rivas-Vaciamadrid" to "L01281230",
        "Ayuntamiento de Roda, La" to "L01020693",
        "Ayuntamiento de Ronda" to "L01290846",
        "Ayuntamiento de Rosalejo" to "L01109016",
        "Ayuntamiento de Rubí" to "L01081846",
        "Ayuntamiento de Rute" to "L01140581",
        "Ayuntamiento de Sabadell" to "L01081878",
        "Ayuntamiento de Sagunto" to "L01462205",
        "Ayuntamiento de San Cristóbal de La Laguna" to "L01380239",
        "Ayuntamiento de San Sebastián de los Ballesteros" to "L01140594",
        "Ayuntamiento de San Sebastián de los Reyes" to "L01281343",
        "Ayuntamiento de Santa Cruz de Tenerife" to "L01380380",
        "Ayuntamiento de Santaella" to "L01140608",
        "Ayuntamiento de Santa Eufemia" to "L01140615",
        "Ayuntamiento de Santander" to "L01390759",
        "Ayuntamiento de Sant Boi de Llobregat" to "L01082009",
        "Ayuntamiento de Sant Feliu de Llobregat" to "L01082114",
        "Ayuntamiento de Sant Just Desvern" to "L01082212",
        "Ayuntamiento de Sant Quirze del Vallès" to "L01082384",
        "Ayuntamiento de Sant Vicenç Dels Horts" to "L01082634",
        "Ayuntamiento de Segovia" to "L01401945",
        "Ayuntamiento de Setcases" to "L01171925",
        "Ayuntamiento de Sevilla" to "L01410917",
        "Ayuntamiento de Tarragona" to "L01431482",
        "Ayuntamiento de Teba" to "L01290897",
        "Ayuntamiento de Terrassa" to "L01082798",
        "Ayuntamiento de Toreno" to "L01241699",
        "Ayuntamiento de Torrecampo" to "L01140620",
        "Ayuntamiento de Torrelavit" to "L01082877",
        "Ayuntamiento de Torremolinos" to "L01299018",
        "Ayuntamiento de Torrent" to "L01462444",
        "Ayuntamiento de Torre-Pacheco" to "L01300373",
        "Ayuntamiento de Valencia" to "L01462508",
        "Ayuntamiento de Valenzuela" to "L01140636",
        "Ayuntamiento de Valladolid" to "L01471868",
        "Ayuntamiento de Valsequillo" to "L01140641",
        "Ayuntamiento de Vélez-Málaga" to "L01290944",
        "Ayuntamiento de Vera" to "L01041002",
        "Ayuntamiento de Victoria, La" to "L01140654",
        "Ayuntamiento de Vigo" to "L01360577",
        "Ayuntamiento de Viladecans" to "L01083015",
        "Ayuntamiento de Villa del Río" to "L01140667",
        "Ayuntamiento de Villafranca de Córdoba" to "L01140673",
        "Ayuntamiento de Villaharta" to "L01140689",
        "Ayuntamiento de Villalbilla" to "L01281723",
        "Ayuntamiento de Villanueva de Castellón" to "L01462573",
        "Ayuntamiento de Villanueva de la Serena" to "L01061535",
        "Ayuntamiento de Villanueva del Duque" to "L01140706",
        "Ayuntamiento de Villanueva del Rey" to "L01140713",
        "Ayuntamiento de Villaralto" to "L01140728",
        "Ayuntamiento de Villaviciosa de Córdoba" to "L01140734",
        "Ayuntamiento de Vitoria-Gasteiz" to "L01010590",
        "Ayuntamiento de Zamora" to "L01492755",
        "Ayuntamiento de Zaragoza" to "L01502973",
        "Ayuntamiento de Zuheros" to "L01140752",
        "Ayuntamiento Leza" to "L01010344",
        "Biblioteca Nacional de España" to "EA0019768",
        "Cabildo Insular de El Hierro" to "L03380005",
        "Cabildo Insular de Fuerteventura" to "L03350002",
        "Cabildo Insular de Lanzarote" to "L03350007",
        "Cabildo Insular de La Palma" to "L03380010",
        "Cabildo Insular de Tenerife" to "L03380011",
        "Cartográfica de Canarias, S.A. (GRAFCAN)" to "GE0012152",
        "Casa Árabe" to "EA0038493",
        "Catálogo Oficial de Datos y Servicios INSPIRE" to "E0DAT0002",
        "Centro de Estudios Jurídicos" to "E00131802",
        "Centro de Estudios Políticos y Constitucionales" to "EA0040767",
        "Centro de Estudios y Experimentación de Obras Públicas" to "E00125801",
        "Centro de Investigaciones Energéticas, Medioambientales y Tecnológicas" to "EA0020936",
        "Centro de Investigaciones Sociológicas" to "EA0022266",
        "Centro Español de Metrología" to "EA0038911",
        "Centro Nacional de Información Geográfica" to "E00125901",
        "Centro Nacional de Inteligencia" to "EA0020816",
        "Centro para el Desarrollo Tecnológico Industrial" to "EA0020855",
        "Comisionado para el Mercado de Tabacos" to "EA0023053",
        "Comisión Nacional del Mercado de Valores" to "EA0033574",
        "Comisión Nacional de los Mercados y la Competencia" to "EA0042931",
        "Compañia Española de Financiacion del Desarrollo Cofides, S.A." to "EA0038967",
        "Comunidad Autónoma de Canarias" to "A05003638",
        "Comunidad Autónoma de Castilla-La Mancha" to "A08002880",
        "Comunidad Autónoma de País Vasco" to "A16003011",
        "Comunidad de Madrid" to "A13002908",
        "Comunidad Foral de Navarra" to "A15002917",
        "Concello de Santiago de Compostela" to "L01150780",
        "Confederación Hidrográfica del Cantábrico" to "EA0022616",
        "Confederación Hidrográfica del Duero" to "EA0043420",
        "Confederación Hidrográfica del Ebro" to "EA0022629",
        "Confederación Hidrográfica del Guadalquivir" to "EA0022687",
        "Confederación Hidrográfica del Guadiana" to "EA0022898",
        "Confederación Hidrográfica del Júcar" to "EA0022929",
        "Confederación Hidrográfica del Miño-Sil" to "EA0022935",
        "Confederación Hidrográfica del Segura" to "EA0022954",
        "Confederación Hidrográfica del Tajo" to "EA0022973",
        "Consejo de Administración del Patrimonio Nacional" to "EA0040781",
        "Consejo de Transparencia y Buen Gobierno" to "EA0040111",
        "Consejo General del Poder Judicial" to "I00000041",
        "Consejo Insular de Ibiza" to "L03070006",
        "Consejo Superior de Deportes" to "E00122805",
        "Consell Insular de Mallorca" to "L03070008",
        "Consorci Administració Oberta de Catalunya" to "A09018933",
        "Consorcio Casa África" to "EEA0038493",
        "Consorcio Casa del Mediterráneo" to "EA0038496",
        "Consorcio Casa Sefarad-Israel" to "EA0038497",
        "Consorcio de Compensación de Seguros" to "EA0027989",
        "Consorcio de la Zona Franca de Cádiz" to "EA0024049",
        "Consorcio de la Zona Franca de Gran Canaria" to "EA0024069",
        "Consorcio de la Zona Franca de Santa Cruz de Tenerife" to "EA0024088",
        "Consorcio de la Zona Franca de Vigo" to "EA0024162",
        "Coordinacion Iniciativa Aporta" to "E0DAT0001",
        "Diputación de Pontevedra" to "LA0006111",
        "Diputación Foral de Álava" to "L02000001",
        "Diputación Foral de Bizkaia" to "L02000048",
        "Diputación Foral de Gipuzkoa" to "L02000020",
        "Diputación Provincial de Alicante" to "L01010014",
        "Diputación Provincial de Badajoz" to "L02000006",
        "Diputación Provincial de Barcelona" to "L02000008",
        "Diputación Provincial de Cádiz" to "L02000011",
        "Diputación Provincial de Castelló/Castellón" to "L02000012",
        "Diputación Provincial de Córdoba" to "L02000014",
        "Diputación Provincial de Huelva" to "L02000021",
        "Diputación Provincial de Jaén" to "L02000023",
        "Diputación Provincial de Ourense" to "L02000032",
        "Diputación Provincial de Salamanca" to "L02000037",
        "Diputación Provincial de Valencia" to "L02000046",
        "Diputación Provincial de Valladolid" to "L02000047",
        "Dirección General de Tráfico" to "E00130502",
        "Empresa Municipal de Transportes de Madrid" to "LA0008678",
        "Empresa Nacional de Residuos Radiactivos" to "EA0033866",
        "Entidad Estatal de Seguros Agrarios" to "EA0022323",
        "Fábrica Nacional de Moneda y Timbre - Real Casa de la Moneda" to "EA0023070",
        "Federación de Municipios de Cataluña" to "L0DAT0001",
        "Fondo de Garantía Salarial" to "EA0021371",
        "Fondo Español de Garantía Agraria" to "EA0022362",
        "Fundación Biodiversidad" to "EA0022424",
        "Fundación de Aeronáutica y Astronáutica Españolas" to "EA0008341",
        "Fundación del Teatro Real" to "EA0022020",
        "Fundación Española para la Ciencia y la Tecnología" to "EA0039433",
        "Fundación Española para la Cooperación Internacional, Salud y Política Social" to "EA0022189",
        "Fundación ICO" to "EA0028340",
        "Fundación Instituto de Cultura Gitana" to "EA0022021",
        "Fundación Integra" to "A0DAT0001",
        "Fundación internacional y para Iberoamérica de administración y políticas públicas" to "EA0038499",
        "Fundación Laboral de Minusválidos Santa Bárbara" to "EA0023228",
        "Fundación Lázaro Galdiano" to "EA0022023",
        "Fundación para el Fomento de la Investigación Sanitaria y Biomédica de la Comunitat Valenciana (FISABIO)" to "A10018363",
        "Fundación Pluralismo y Convivencia" to "EA0040811",
        "Fundación Víctimas del Terrorismo" to "EA0008368",
        "Generalitat de Catalunya" to "A09002970",
        "Generalitat Valenciana" to "A10002983",
        "Gobierno de Aragón" to "A02002834",
        "Gobierno de La Rioja" to "A17002943",
        "Gobierno de las Islas Baleares" to "A04003003",
        "ICEX España Exportación e Inversiones" to "EA0038767",
        "Inspección de Trabajo y Seguridad Social" to "EA0021795",
        "Instituto Canario de Estadística" to "A05003423",
        "Instituto Cántabro de Estadística" to "A06004074",
        "Instituto Cervantes" to "EA0038526",
        "Instituto de Astrofísica de Canarias" to "EA0020886",
        "Instituto de Contabilidad y Auditoría de Cuentas" to "EA0033662",
        "Instituto de Crédito Oficial" to "EA0033670",
        "Instituto de Estudios Fiscales" to "EA0022992",
        "Instituto de la Cinematografía y Artes Audiovisuales" to "EA0019850",
        "Instituto de la Juventud" to "EA0028493",
        "Instituto de la Mujer y para la Igualdad de Oportunidades" to "EA0033560",
        "Instituto de Mayores y Servicios Sociales" to "EA0028449",
        "Instituto de Salud Carlos III" to "EA0020890",
        "Instituto de Turismo de España" to "EA0038886",
        "Instituto de Turismo de la Región de Murcia (ITREM)" to "A14005495",
        "Instituto de Vivienda, Infraestructura y Equipamiento del Ministerio de Defensa" to "E04905001",
        "Instituto Español de Oceanografía" to "EA0021100",
        "Instituto Geológico y Minero de España" to "EA0010987",
        "Instituto Hidrográfico de la Marina" to "E02895901",
        "Instituto Insular de Atención Social y Socio-Sanitaria" to "LA0000130",
        "Instituto Nacional de Administración Pública" to "EA0040116",
        "Instituto Nacional de Cirberseguridad de España" to "EA0028348",
        "Instituto Nacional de Estadística" to "EA0010587",
        "Instituto Nacional de Gestión Sanitaria" to "EA0023096",
        "Instituto Nacional de Investigación y Tecnología Agraria y Alimentaria" to "EA0020924",
        "Instituto Nacional de las Artes Escénicas y de la Música" to "EA0019807",
        "Instituto Nacional de la Seguridad Social" to "E00142603",
        "Instituto Nacional de Seguridad e Higiene en el Trabajo" to "EA0021624",
        "Instituto Nacional de Técnica Aeroespacial Esteban Terradas" to "E00116401",
        "Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado" to "EA0022045",
        "Instituto para la Diversificación y Ahorro de la Energía" to "EA0033869",
        "Instituto para la Evaluación de Políticas Públicas" to "EA0040127",
        "Instituto Social de la Marina" to "EA0021256",
        "Instituto Social de las Fuerzas Armadas" to "E00116901",
        "Jefatura Central de Tráfico" to "E00130201",
        "Junta de Andalucía" to "A01002820",
        "Junta de Castilla y León" to "A07002862",
        "Junta de Extremadura" to "A11002926",
        "Mancomunidad de los Canales del Taibilla" to "EA0022979",
        "Mercados Centrales de Abastecimiento S.A." to "EA0023244",
        "Ministerio de Agricultura, Pesca y Alimentación" to "E05024401",
        "Ministerio de Agricultura y Pesca, Alimentación y Medio Ambiente [EXTINTO]" to "E04990301",
        "Ministerio de Asuntos Económicos y Transformación Digital" to "E05068901",
        "Ministerio de Asuntos Exteriores, Unión Europea y Cooperación" to "E05023901",
        "Ministerio de Asuntos Exteriores y de Cooperación [EXTINTO]" to "E04585801",
        "Ministerio de Ciencia e Innovación" to "E05071301",
        "Ministerio de Ciencia, Innovación y Universidades [EXTINTO]" to "E05025101",
        "Ministerio de Consumo" to "E05072201",
        "Ministerio de Cultura y Deporte" to "E05024801",
        "Ministerio de Defensa" to "E00003301",
        "Ministerio de Derechos Sociales y Agenda 2030" to "E05070401",
        "Ministerio de Educación, Cultura y Deporte [EXTINTO]" to "E04921401",
        "Ministerio de Educación y Formación Profesional" to "E05024101",
        "Ministerio de Energía, Turismo y Agenda Digital [EXTINTO]" to "E04990201",
        "Ministerio de Hacienda y Función Pública" to "E05188501",
        "Ministerio de Igualdad" to "E05071601",
        "Ministerio de Inclusión, Seguridad Social y Migraciones" to "E05072501",
        "Ministerio de Industria, Comercio y Turismo" to "E05024301",
        "Ministerio de Justicia" to "E00003901",
        "Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática" to "E05067101",
        "Ministerio del Interior" to "E00003801",
        "Ministerio de Política Territorial" to "E05189101",
        "Ministerio de Sanidad" to "E05070101",
        "Ministerio de Sanidad, Consumo y Bienestar Social [EXTINTO]" to "E05025001",
        "Ministerio de Trabajo, Migraciones y Seguridad Social [EXTINTO]" to "E05024201",
        "Ministerio de Trabajo y Economía Social" to "E05066501",
        "Ministerio de Transportes, Movilidad y Agenda Urbana" to "E05065601",
        "Ministerio de Universidades" to "E05073401",
        "Ministerio para la Transición Ecológica [EXTINTO]" to "E05024701",
        "Ministerio para la Transición Ecológica y el Reto Demográfico" to "E05068001",
        "Museo Nacional Centro de Arte Reina Sofía" to "EA0021786",
        "Museo Nacional de Ciencia y Tecnología" to "EA0020889",
        "Museo Nacional del Prado" to "EA0021762",
        "Mutualidad General de Funcionarios Civiles del Estado" to "EA0040021",
        "Mutualidad General Judicial" to "E03134002",
        "Oficina Española de Patentes y Marcas" to "EA0038829",
        "org-1.8.5" to "EA0007777",
        "Organismo Autónomo Parques Nacionales" to "EA0022425",
        "Organismo Empresa Privada" to "P12345678",
        "Organismo-SDA Pro" to "EA0007777",
        "Organización Nacional de Trasplantes" to "EA0022388",
        "Parlamento de Canarias" to "I00000687",
        "Presidencia del Gobierno" to "EA0008567",
        "Principado de Asturias" to "A03002951",
        "Puertos del Estado" to "EA0001277",
        "Real Academia de Bellas Artes de San Fernando" to "EA0019849",
        "Real Patronato sobre Discapacidad" to "EA0022231",
        "Red.es" to "EA0028346",
        "Región de Murcia" to "A14002961",
        "Renfe-Operadora" to "EA0003337",
        "Secretaría de Estado de la Seguridad Social y Pensiones" to "E04926001",
        "SEPES Entidad Pública Empresarial de Suelo" to "EA0000845",
        "Servicio Español para la Internacionalización de la Educación" to "EA0020949",
        "Servicio Público de Empleo Estatal" to "EA0021425",
        "Sindicatura de Comptes de la Comunitat Valenciana" to "I00000847",
        "Sociedad de Salvamento y Seguridad Marítima" to "EA0003343",
        "Sociedad Estatal de Participaciones Industriales" to "EA0023306",
        "Sociedad Estatal para la Gestión de la Innovación y las Tecnologías Turísticas" to "EA0038897",
        "Tesorería General de la Seguridad Social" to "E00142503",
        "Trabajo Penitenciario y Formación para el Empleo" to "E00130302",
        "Universidad Autónoma de Madrid" to "U02300001",
        "Universidad Carlos III de Madrid" to "U03600001",
        "Universidad Complutense de Madrid" to "U01000001",
        "Universidad de Alicante" to "U00100001",
        "Universidad de Burgos" to "U05100001",
        "Universidad de Cantabria" to "U01600001",
        "Universidad de Castilla-La Mancha" to "U03400001",
        "Universidad de Extremadura" to "U00200001",
        "Universidad de Granada" to "U00800001",
        "Universidad de Huelva" to "U04900001",
        "Universidad de Mondragón" to "PUDAT0001",
        "Universidad de Valladolid" to "U01900001",
        "Universidad de Vigo" to "U03800001",
        "Universidad de Zaragoza" to "U02100001",
        "Universidad Internacional Menéndez Pelayo" to "EA0020857",
        "Universidad Nacional de Educación a Distancia" to "U02800001",
        "Universidad Pablo de Olavide" to "U00000046",
        "Universidad Politécnica de Cartagena" to "U06400001",
        "Universidad Rey Juan Carlos" to "U05600001",
        "Universitat Politècnica de València" to "U02700001",
        "Xunta de Galicia" to "A12002994"
    )


}
