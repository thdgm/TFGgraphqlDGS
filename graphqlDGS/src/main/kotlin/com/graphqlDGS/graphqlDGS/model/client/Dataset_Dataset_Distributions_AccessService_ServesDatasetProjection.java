package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_Distributions_AccessService_ServesDatasetProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessServiceProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_Distributions_AccessService_ServesDatasetProjection(
      Dataset_Dataset_Distributions_AccessServiceProjection parent, DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection onDatasetSeries(
      ) {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection onDataset() {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection onCatalog() {
    Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection fragment = new Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
