package com.graphqlDGS.graphqlDGS.model

import kotlin.String

public object DgsConstants {
  public const val QUERY_TYPE: String = "Query"

  public const val Mutation_TYPE: String = "Mutation"

  public object QUERY {
    public const val TYPE_NAME: String = "Query"

    public const val Resource: String = "resource"

    public const val Catalog: String = "catalog"

    public const val Dataset: String = "dataset"

    public const val DataService: String = "dataService"

    public const val DatasetSeries: String = "datasetSeries"

    public const val CatalogRecord: String = "catalogRecord"

    public const val Distribution: String = "distribution"

    public const val ResourcesByFilter: String = "resourcesByFilter"

    public const val FindResourceByIdentifier: String = "findResourceByIdentifier"

    public const val GetAllThemes: String = "getAllThemes"

    public const val GetAllKeywords: String = "getAllKeywords"

    public const val GetAllPublishers: String = "getAllPublishers"

    public const val GetAllFrequencies: String = "getAllFrequencies"

    public const val GetAllFormats: String = "getAllFormats"

    public const val GetAllAdminLabel: String = "getAllAdminLabel"

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

    public object RESOURCESBYFILTER_INPUT_ARGUMENT {
      public const val Filter: String = "filter"

      public const val Value: String = "value"

      public const val Page: String = "page"
    }

    public object FINDRESOURCEBYIDENTIFIER_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object GETALLTHEMES_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLKEYWORDS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLPUBLISHERS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLFREQUENCIES_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLFORMATS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLADMINLABEL_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }
  }

  public object MUTATION {
    public const val TYPE_NAME: String = "Mutation"

    public const val CreateCatalogRecord: String = "createCatalogRecord"

    public object CREATECATALOGRECORD_INPUT_ARGUMENT {
      public const val Input: String = "input"
    }
  }

  public object ERROR {
    public const val TYPE_NAME: String = "Error"

    public const val Message: String = "message"
  }

  public object DATASERVICE {
    public const val TYPE_NAME: String = "DataService"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val ServesDataset: String = "servesDataset"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"

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

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"

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

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"

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

    public const val Keywords: String = "keywords"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val Spatial: String = "spatial"

    public const val AccrualPeriodicity: String = "accrualPeriodicity"

    public const val Temporal: String = "temporal"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"

    public const val Validity: String = "validity"

    public const val Regulations: String = "regulations"

    public const val RelatedResources: String = "relatedResources"

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

    public const val ContentType: String = "contentType"

    public const val Content: String = "content"

    public const val ContentURL: String = "contentURL"

    public const val Hints: String = "hints"

    public const val PrimaryTopic: String = "primaryTopic"

    public const val InCatalog: String = "inCatalog"
  }

  public object DISTRIBUTION {
    public const val TYPE_NAME: String = "Distribution"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val AccessUrl: String = "accessUrl"

    public const val AccessService: String = "accessService"

    public const val ByteSize: String = "byteSize"

    public const val Format: String = "format"

    public const val Identifier: String = "identifier"
  }

  public object PERIODOFTIME {
    public const val TYPE_NAME: String = "PeriodOfTime"

    public const val Start: String = "start"

    public const val End: String = "end"
  }

  public object CATALOGRECORDINPUT {
    public const val TYPE_NAME: String = "CatalogRecordInput"

    public const val InCatalog: String = "inCatalog"

    public const val CatalogRecordId: String = "catalogRecordId"

    public const val ContentType: String = "contentType"

    public const val Content: String = "content"

    public const val ContentUrl: String = "contentUrl"

    public const val Hints: String = "hints"
  }

  public object REFERENCEWITHINEXTERNALCONTEXT {
    public const val TYPE_NAME: String = "ReferenceWithinExternalContext"

    public const val Identifier: String = "identifier"
  }

  public object RESOURCE {
    public const val TYPE_NAME: String = "Resource"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val Theme: String = "theme"

    public const val Identifier: String = "identifier"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"
  }

  public object RESOURCEINCATALOG {
    public const val TYPE_NAME: String = "ResourceInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"
  }

  public object DATASETINCATALOG {
    public const val TYPE_NAME: String = "DatasetInCatalog"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val IsServedBy: String = "isServedBy"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"
  }

  public object ABSTRACTDATASET {
    public const val TYPE_NAME: String = "AbstractDataset"

    public const val Id: String = "id"

    public const val Title: String = "title"

    public const val Description: String = "description"

    public const val Language: String = "language"

    public const val Issued: String = "issued"

    public const val Modified: String = "modified"

    public const val InCatalog: String = "inCatalog"

    public const val IsPrimaryTopicOf: String = "isPrimaryTopicOf"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"
  }

  public object CATALOGRECORDOUTPUT {
    public const val TYPE_NAME: String = "CatalogRecordOutput"
  }
}
