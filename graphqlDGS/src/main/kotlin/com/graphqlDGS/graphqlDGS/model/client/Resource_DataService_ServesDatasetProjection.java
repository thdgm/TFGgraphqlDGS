package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDatasetProjection extends BaseSubProjectionNode<Resource_DataServiceProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDatasetProjection(Resource_DataServiceProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Resource_DataService_ServesDataset_DatasetSeriesProjection onDatasetSeries() {
    Resource_DataService_ServesDataset_DatasetSeriesProjection fragment = new Resource_DataService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_DatasetProjection onDataset() {
    Resource_DataService_ServesDataset_DatasetProjection fragment = new Resource_DataService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Resource_DataService_ServesDataset_CatalogProjection onCatalog() {
    Resource_DataService_ServesDataset_CatalogProjection fragment = new Resource_DataService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
