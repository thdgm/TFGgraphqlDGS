package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_DatasetsProjection extends BaseSubProjectionNode<Catalog_CatalogsProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_DatasetsProjection(Catalog_CatalogsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Catalogs_Datasets_DatasetSeriesProjection onDatasetSeries() {
    Catalog_Catalogs_Datasets_DatasetSeriesProjection fragment = new Catalog_Catalogs_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Datasets_DatasetProjection onDataset() {
    Catalog_Catalogs_Datasets_DatasetProjection fragment = new Catalog_Catalogs_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Datasets_CatalogProjection onCatalog() {
    Catalog_Catalogs_Datasets_CatalogProjection fragment = new Catalog_Catalogs_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
