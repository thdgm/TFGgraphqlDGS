package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Catalogs_Resources_DataService_ServesDatasetProjection extends BaseSubProjectionNode<Dataset_Catalog_Catalogs_Resources_DataServiceProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Catalogs_Resources_DataService_ServesDatasetProjection(
      Dataset_Catalog_Catalogs_Resources_DataServiceProjection parent, DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetSeriesProjection onDatasetSeries(
      ) {
    Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetSeriesProjection fragment = new Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetProjection onDataset(
      ) {
    Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetProjection fragment = new Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection onCatalog(
      ) {
    Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection fragment = new Dataset_Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
