package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection extends BaseSubProjectionNode<Catalog_Services_ServesDataset_Catalog_CatalogsProjection, CatalogProjectionRoot> {
  public Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection(
      Catalog_Services_ServesDataset_Catalog_CatalogsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection onDatasetSeries(
      ) {
    Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection fragment = new Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection onDataService(
      ) {
    Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection fragment = new Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection onDataset() {
    Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection fragment = new Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection onCatalog() {
    Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection fragment = new Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
