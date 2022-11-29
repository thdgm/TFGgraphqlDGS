package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<Dataset_Dataset_DistributionsProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_Distributions_AccessServiceProjection(
      Dataset_Dataset_DistributionsProjection parent, DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDatasetProjection servesDataset() {
     Dataset_Dataset_Distributions_AccessService_ServesDatasetProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessServiceProjection title() {
    getFields().put("title", null);
    return this;
  }
}
