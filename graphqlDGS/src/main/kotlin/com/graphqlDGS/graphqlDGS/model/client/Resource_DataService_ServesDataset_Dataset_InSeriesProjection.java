package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Dataset_InSeriesProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_DatasetProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Dataset_InSeriesProjection(
      Resource_DataService_ServesDataset_DatasetProjection parent, ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Resource_DataService_ServesDataset_Dataset_InSeriesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Dataset_InSeriesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
