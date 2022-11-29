package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessServiceProjection extends BaseSubProjectionNode<DistributionProjectionRoot, DistributionProjectionRoot> {
  public Distribution_AccessServiceProjection(DistributionProjectionRoot parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Distribution_AccessService_ServesDatasetProjection servesDataset() {
     Distribution_AccessService_ServesDatasetProjection projection = new Distribution_AccessService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Distribution_AccessServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessServiceProjection title() {
    getFields().put("title", null);
    return this;
  }
}
