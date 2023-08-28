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

    public const val BelongsToCatalog: String = "belongsToCatalog"

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

    public object BELONGSTOCATALOG_INPUT_ARGUMENT {
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
  }

  public object DATASETSERIES {
    public const val TYPE_NAME: String = "DatasetSeries"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val MembersDatasets: String = "membersDatasets"
  }

  public object DATASET {
    public const val TYPE_NAME: String = "Dataset"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val InSeries: String = "inSeries"

    public const val Distributions: String = "distributions"

    public const val Description: String = "description"

    public const val Language: String = "language"
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

  public object RESOURCE {
    public const val TYPE_NAME: String = "Resource"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"
  }

  public object RESOURCEINCATALOG {
    public const val TYPE_NAME: String = "ResourceInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"
  }

  public object DATASETINCATALOG {
    public const val TYPE_NAME: String = "DatasetInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"
  }

  public object ABSTRACTDATASET {
    public const val TYPE_NAME: String = "AbstractDataset"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"
  }
}
