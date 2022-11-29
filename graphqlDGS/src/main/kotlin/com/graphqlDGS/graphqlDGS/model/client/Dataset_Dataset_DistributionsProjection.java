package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_DistributionsProjection extends BaseSubProjectionNode<Dataset_DatasetProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_DistributionsProjection(Dataset_DatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Dataset_Dataset_Distributions_AccessServiceProjection accessService() {
     Dataset_Dataset_Distributions_AccessServiceProjection projection = new Dataset_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public Dataset_Dataset_DistributionsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_DistributionsProjection title() {
    getFields().put("title", null);
    return this;
  }
}
