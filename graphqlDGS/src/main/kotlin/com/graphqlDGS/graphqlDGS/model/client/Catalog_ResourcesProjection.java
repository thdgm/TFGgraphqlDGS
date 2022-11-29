package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_ResourcesProjection extends BaseSubProjectionNode<CatalogProjectionRoot, CatalogProjectionRoot> {
  public Catalog_ResourcesProjection(CatalogProjectionRoot parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public Catalog_Resources_DatasetSeriesProjection onDatasetSeries() {
    Catalog_Resources_DatasetSeriesProjection fragment = new Catalog_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Resources_DataServiceProjection onDataService() {
    Catalog_Resources_DataServiceProjection fragment = new Catalog_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Resources_DatasetProjection onDataset() {
    Catalog_Resources_DatasetProjection fragment = new Catalog_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Resources_CatalogProjection onCatalog() {
    Catalog_Resources_CatalogProjection fragment = new Catalog_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
