package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_DatasetsProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_DatasetsProjection(
      Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetProjection onDataset(
      ) {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_CatalogProjection onCatalog(
      ) {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_CatalogProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
