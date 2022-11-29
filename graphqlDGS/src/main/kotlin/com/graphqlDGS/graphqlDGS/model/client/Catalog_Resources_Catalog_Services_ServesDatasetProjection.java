package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Resources_Catalog_Services_ServesDatasetProjection extends BaseSubProjectionNode<Catalog_Resources_Catalog_ServicesProjection, CatalogProjectionRoot> {
  public Catalog_Resources_Catalog_Services_ServesDatasetProjection(
      Catalog_Resources_Catalog_ServicesProjection parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_DatasetSeriesProjection onDatasetSeries(
      ) {
    Catalog_Resources_Catalog_Services_ServesDataset_DatasetSeriesProjection fragment = new Catalog_Resources_Catalog_Services_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_DatasetProjection onDataset() {
    Catalog_Resources_Catalog_Services_ServesDataset_DatasetProjection fragment = new Catalog_Resources_Catalog_Services_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_CatalogProjection onCatalog() {
    Catalog_Resources_Catalog_Services_ServesDataset_CatalogProjection fragment = new Catalog_Resources_Catalog_Services_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
