package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDatasetProjection extends BaseSubProjectionNode<Dataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDatasetProjection(
      Dataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetSeriesProjection onDatasetSeries(
      ) {
    Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetSeriesProjection fragment = new Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetProjection onDataset(
      ) {
    Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetProjection fragment = new Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_CatalogProjection onCatalog(
      ) {
    Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_CatalogProjection fragment = new Dataset_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
