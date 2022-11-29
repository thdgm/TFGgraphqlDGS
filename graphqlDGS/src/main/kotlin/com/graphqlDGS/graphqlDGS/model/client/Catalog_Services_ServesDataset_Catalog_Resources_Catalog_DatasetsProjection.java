package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Services_ServesDataset_Catalog_Resources_Catalog_DatasetsProjection extends BaseSubProjectionNode<Catalog_Services_ServesDataset_Catalog_Resources_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_DatasetsProjection(
      Catalog_Services_ServesDataset_Catalog_Resources_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection fragment = new Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection onDataset(
      ) {
    Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection fragment = new Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection onCatalog(
      ) {
    Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection fragment = new Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
