package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ResourcesProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ResourcesProjection(
      Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetSeriesProjection onDatasetSeries(
      ) {
    Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetSeriesProjection fragment = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DataServiceProjection onDataService(
      ) {
    Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DataServiceProjection fragment = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection onDataset(
      ) {
    Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection fragment = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_CatalogProjection onCatalog(
      ) {
    Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_CatalogProjection fragment = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
