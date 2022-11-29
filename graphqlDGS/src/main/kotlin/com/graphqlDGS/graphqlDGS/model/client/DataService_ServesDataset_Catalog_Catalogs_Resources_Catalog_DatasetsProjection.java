package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_DatasetsProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_DatasetsProjection(
      DataService_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetSeriesProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetProjection onDataset(
      ) {
    DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_CatalogProjection onCatalog(
      ) {
    DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_CatalogProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Resources_Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
