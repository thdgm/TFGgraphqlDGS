package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_CatalogsProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection(
      DataService_ServesDataset_Catalog_CatalogsProjection parent, DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection onDataset() {
    DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection onCatalog() {
    DataService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection fragment = new DataService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
