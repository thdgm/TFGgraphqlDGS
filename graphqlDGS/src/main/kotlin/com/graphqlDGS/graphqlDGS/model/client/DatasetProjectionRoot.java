package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class DatasetProjectionRoot extends BaseProjectionNode {
  public Dataset_DatasetSeriesProjection onDatasetSeries() {
    Dataset_DatasetSeriesProjection fragment = new Dataset_DatasetSeriesProjection(this, this);
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_DatasetProjection onDataset() {
    Dataset_DatasetProjection fragment = new Dataset_DatasetProjection(this, this);
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_CatalogProjection onCatalog() {
    Dataset_CatalogProjection fragment = new Dataset_CatalogProjection(this, this);
    getFragments().add(fragment);
    return fragment;
  }
}
