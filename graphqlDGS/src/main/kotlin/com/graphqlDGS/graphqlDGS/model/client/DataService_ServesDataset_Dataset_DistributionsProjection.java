package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Dataset_DistributionsProjection extends BaseSubProjectionNode<DataService_ServesDataset_DatasetProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Dataset_DistributionsProjection(
      DataService_ServesDataset_DatasetProjection parent, DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection accessService() {
     DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection projection = new DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public DataService_ServesDataset_Dataset_DistributionsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Dataset_DistributionsProjection title() {
    getFields().put("title", null);
    return this;
  }
}
