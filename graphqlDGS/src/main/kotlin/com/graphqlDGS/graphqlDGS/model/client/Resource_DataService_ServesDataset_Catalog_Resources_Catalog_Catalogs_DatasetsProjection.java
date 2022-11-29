package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_DatasetsProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_DatasetsProjection(
      Resource_DataService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetSeriesProjection fragment = new Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection onDataset(
      ) {
    Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection fragment = new Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection onCatalog(
      ) {
    Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection fragment = new Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
