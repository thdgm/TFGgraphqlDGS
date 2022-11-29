package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_DatasetsProjection extends BaseSubProjectionNode<CatalogProjectionRoot, CatalogProjectionRoot> {
  public Catalog_DatasetsProjection(CatalogProjectionRoot parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Datasets_DatasetSeriesProjection onDatasetSeries() {
    Catalog_Datasets_DatasetSeriesProjection fragment = new Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Datasets_DatasetProjection onDataset() {
    Catalog_Datasets_DatasetProjection fragment = new Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Datasets_CatalogProjection onCatalog() {
    Catalog_Datasets_CatalogProjection fragment = new Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
