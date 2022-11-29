package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_DatasetsProjection extends BaseSubProjectionNode<Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_DatasetsProjection(
      Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection fragment = new Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetProjection onDataset(
      ) {
    Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetProjection fragment = new Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_CatalogProjection onCatalog(
      ) {
    Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_CatalogProjection fragment = new Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
