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

    public const val NumberOfResources: String = "numberOfResources"

    public const val NumberOfDistributions: String = "numberOfDistributions"

    public const val NumberOfCatalogRecords: String = "numberOfCatalogRecords"

    public const val DataService: String = "dataService"

    public const val DatasetSeries: String = "datasetSeries"

    public const val CatalogRecord: String = "catalogRecord"

    public const val Distribution: String = "distribution"

    public const val ResourcesByFilter: String = "resourcesByFilter"

    public const val DistributionsByFilters: String = "distributionsByFilters"

    public const val CatalogRecordsByFilters: String = "catalogRecordsByFilters"

    public const val FindResourceByIdentifier: String = "findResourceByIdentifier"

    public const val GetAllThemes: String = "getAllThemes"

    public const val GetAllKeywords: String = "getAllKeywords"

    public const val GetAllPublishers: String = "getAllPublishers"

    public const val GetAllFrequencies: String = "getAllFrequencies"

    public const val GetAllFormats: String = "getAllFormats"

    public const val GetAllAdminLabel: String = "getAllAdminLabel"

    public const val GetAllContentTypes: String = "getAllContentTypes"

    public const val GetAllHints: String = "getAllHints"

    public object RESOURCE_INPUT_ARGUMENT {
      public const val Id: String = "id"

      public const val IsDataset: String = "isDataset"

      public const val IsCatalog: String = "isCatalog"

      public const val IsDataService: String = "isDataService"

      public const val IsDatasetSeries: String = "isDatasetSeries"

      public const val Page: String = "page"
    }

    public object CATALOG_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object DATASET_INPUT_ARGUMENT {
      public const val Id: String = "id"
    }

    public object NUMBEROFRESOURCES_INPUT_ARGUMENT {
      public const val Filters: String = "filters"

      public const val Type: String = "type"
    }

    public object NUMBEROFDISTRIBUTIONS_INPUT_ARGUMENT {
      public const val Filters: String = "filters"
    }

    public object NUMBEROFCATALOGRECORDS_INPUT_ARGUMENT {
      public const val Filters: String = "filters"
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
      public const val Filters: String = "filters"

      public const val Type: String = "type"

      public const val Page: String = "page"

      public const val IsDataset: String = "isDataset"

      public const val IsCatalog: String = "isCatalog"

      public const val IsDataService: String = "isDataService"

      public const val IsDatasetSeries: String = "isDatasetSeries"
    }

    public object DISTRIBUTIONSBYFILTERS_INPUT_ARGUMENT {
      public const val Filters: String = "filters"

      public const val Page: String = "page"
    }

    public object CATALOGRECORDSBYFILTERS_INPUT_ARGUMENT {
      public const val Filters: String = "filters"

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

    public object GETALLCONTENTTYPES_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object GETALLHINTS_INPUT_ARGUMENT {
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

    public const val IsAccessedBy: String = "isAccessedBy"

    public const val Theme: String = "theme"

    public const val License: String = "license"

    public const val Publisher: String = "publisher"

    public const val Identifier: String = "identifier"

    public const val NumberOfServedResources: String = "numberOfServedResources"

    public const val NumberOfServedCatalogs: String = "numberOfServedCatalogs"

    public const val NumberOfServedDatasets: String = "numberOfServedDatasets"

    public const val NumberOfServedDatasetSeries: String = "numberOfServedDatasetSeries"

    public object SERVESDATASET_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"

      public const val Type: String = "type"
    }

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

    public const val NumberOfResources: String = "numberOfResources"

    public const val NumberOfDatasets: String = "numberOfDatasets"

    public const val NumberOfDatasetSeries: String = "numberOfDatasetSeries"

    public const val NumberOfDataServices: String = "numberOfDataServices"

    public const val NumberOfCatalogs: String = "numberOfCatalogs"

    public const val NumberOfRecords: String = "numberOfRecords"

    public const val NumberOfServedBy: String = "numberOfServedBy"

    public object RESOURCES_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"

      public const val Type: String = "type"
    }

    public object DATASETS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object SERVICES_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object CATALOGS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object RECORDS_INPUT_ARGUMENT {
      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISSERVEDBY_INPUT_ARGUMENT {
      public const val Filter: String = "filter"

      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
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

    public const val NumberOfMembersDatasets: String = "numberOfMembersDatasets"

    public object SERIESMEMBERS_INPUT_ARGUMENT {
      public const val Filter: String = "filter"

      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
    }

    public object INCATALOG_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISPRIMARYTOPICOF_INPUT_ARGUMENT {
      public const val Filter: String = "filter"
    }

    public object ISSERVEDBY_INPUT_ARGUMENT {
      public const val Filter: String = "filter"

      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
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

      public const val Page: String = "page"

      public const val PageSize: String = "pageSize"
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

    public const val IsDistributionOf: String = "isDistributionOf"

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

  public object MAPINPUT {
    public const val TYPE_NAME: String = "MapInput"

    public const val Key: String = "key"

    public const val Values: String = "values"
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
