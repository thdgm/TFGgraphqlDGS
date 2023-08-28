package com.graphqlDGS.graphqlDGS.model

import kotlin.String

public object DgsConstants {
  public const val QUERY_TYPE: String = "Query"

  public object QUERY {
    public const val TYPE_NAME: String = "Query"

    public const val Resource: String = "resource"

    public const val Catalog: String = "catalog"

    public const val Dataset: String = "dataset"

    public const val DataService: String = "dataService"

    public const val DatasetSeries: String = "datasetSeries"

    public const val CatalogRecord: String = "catalogRecord"

    public const val Distribution: String = "distribution"

    public object RESOURCE_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object CATALOG_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object DATASET_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object DATASERVICE_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object DATASETSERIES_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object CATALOGRECORD_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object DISTRIBUTION_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }
  }

  public object DATASERVICE {
    public const val TYPE_NAME: String = "DataService"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val ServesDataset: String = "servesDataset"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }
  }

  public object CATALOG {
    public const val TYPE_NAME: String = "Catalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Resources: String = "resources"

    public const val Datasets: String = "datasets"

    public const val Services: String = "services"

    public const val Catalogs: String = "catalogs"

    public const val Records: String = "records"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISSERVEDBY_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }
  }

  public object DATASETSERIES {
    public const val TYPE_NAME: String = "DatasetSeries"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val SeriesMembers: String = "seriesMembers"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public object SERIESMEMBERS_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISSERVEDBY_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }
  }

  public object DATASET {
    public const val TYPE_NAME: String = "Dataset"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val InSeries: String = "inSeries"

    public const val Distributions: String = "distributions"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val Keywords: String = "keywords"

    public const val Spatial: String = "spatial"

    public const val AccrualPeriodicity: String = "accrualPeriodicity"

    public const val Temporal: String = "temporal"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public object INSERIES_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISSERVEDBY_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }
  }

  public object CATALOGRECORD {
    public const val TYPE_NAME: String = "CatalogRecord"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val PrimaryTopic: String = "primaryTopic"
  }

  public object DISTRIBUTION {
    public const val TYPE_NAME: String = "Distribution"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val AccessService: String = "accessService"
  }

  public object RESOURCEDESCRIPTION {
    public const val TYPE_NAME: String = "ResourceDescription"

    public const val Text: String = "text"

    public const val Idioma: String = "idioma"
  }

  public object KEYWORDS {
    public const val TYPE_NAME: String = "Keywords"

    public const val Word: String = "word"

    public const val Idioma: String = "idioma"
  }

  public object FECHAHORA {
    public const val TYPE_NAME: String = "FechaHora"

    public const val Fecha: String = "fecha"

    public const val Hora: String = "hora"
  }

  public object PERIODICIDAD {
    public const val TYPE_NAME: String = "Periodicidad"

    public const val Rango: String = "rango"

    public const val Periodo: String = "periodo"
  }

  public object COBERTURATEMPORAL {
    public const val TYPE_NAME: String = "CoberturaTemporal"

    public const val Start: String = "start"

    public const val End: String = "end"
  }

  public object RESOURCE {
    public const val TYPE_NAME: String = "Resource"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"
  }

  public object RESOURCEINCATALOG {
    public const val TYPE_NAME: String = "ResourceInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"
  }

  public object DATASETINCATALOG {
    public const val TYPE_NAME: String = "DatasetInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"
  }

  public object ABSTRACTDATASET {
    public const val TYPE_NAME: String = "AbstractDataset"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val FechaHoraCreacion: String = "fechaHoraCreacion"

    public const val UltimaModificacion: String = "ultimaModificacion"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"
  }
}
