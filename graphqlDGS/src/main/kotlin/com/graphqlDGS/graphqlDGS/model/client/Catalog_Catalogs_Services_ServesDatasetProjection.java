package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_Services_ServesDatasetProjection extends BaseSubProjectionNode<Catalog_Catalogs_ServicesProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_Services_ServesDatasetProjection(
      Catalog_Catalogs_ServicesProjection parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Catalogs_Services_ServesDataset_DatasetSeriesProjection onDatasetSeries() {
    Catalog_Catalogs_Services_ServesDataset_DatasetSeriesProjection fragment = new Catalog_Catalogs_Services_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Services_ServesDataset_DatasetProjection onDataset() {
    Catalog_Catalogs_Services_ServesDataset_DatasetProjection fragment = new Catalog_Catalogs_Services_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Catalogs_Services_ServesDataset_CatalogProjection onCatalog() {
    Catalog_Catalogs_Services_ServesDataset_CatalogProjection fragment = new Catalog_Catalogs_Services_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
