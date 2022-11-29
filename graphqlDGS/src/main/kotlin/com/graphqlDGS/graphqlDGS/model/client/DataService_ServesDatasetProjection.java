package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDatasetProjection extends BaseSubProjectionNode<DataServiceProjectionRoot, DataServiceProjectionRoot> {
  public DataService_ServesDatasetProjection(DataServiceProjectionRoot parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public DataService_ServesDataset_DatasetSeriesProjection onDatasetSeries() {
    DataService_ServesDataset_DatasetSeriesProjection fragment = new DataService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_DatasetProjection onDataset() {
    DataService_ServesDataset_DatasetProjection fragment = new DataService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public DataService_ServesDataset_CatalogProjection onCatalog() {
    DataService_ServesDataset_CatalogProjection fragment = new DataService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
