package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopicProjection extends BaseSubProjectionNode<CatalogRecordProjectionRoot, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopicProjection(CatalogRecordProjectionRoot parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public CatalogRecord_PrimaryTopic_DatasetSeriesProjection onDatasetSeries() {
    CatalogRecord_PrimaryTopic_DatasetSeriesProjection fragment = new CatalogRecord_PrimaryTopic_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_DataServiceProjection onDataService() {
    CatalogRecord_PrimaryTopic_DataServiceProjection fragment = new CatalogRecord_PrimaryTopic_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_DatasetProjection onDataset() {
    CatalogRecord_PrimaryTopic_DatasetProjection fragment = new CatalogRecord_PrimaryTopic_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_CatalogProjection onCatalog() {
    CatalogRecord_PrimaryTopic_CatalogProjection fragment = new CatalogRecord_PrimaryTopic_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
