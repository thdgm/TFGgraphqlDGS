package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_ResourcesProjection extends BaseSubProjectionNode<DataService_ServesDataset_CatalogProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_ResourcesProjection(
      DataService_ServesDataset_CatalogProjection parent, DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public DataService_ServesDataset_Catalog_Resources_DatasetSeriesProjection onDatasetSeries() {
    DataService_ServesDataset_Catalog_Resources_DatasetSeriesProjection fragment = new DataService_ServesDataset_Catalog_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Resources_DataServiceProjection onDataService() {
    DataService_ServesDataset_Catalog_Resources_DataServiceProjection fragment = new DataService_ServesDataset_Catalog_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Resources_DatasetProjection onDataset() {
    DataService_ServesDataset_Catalog_Resources_DatasetProjection fragment = new DataService_ServesDataset_Catalog_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Resources_CatalogProjection onCatalog() {
    DataService_ServesDataset_Catalog_Resources_CatalogProjection fragment = new DataService_ServesDataset_Catalog_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
