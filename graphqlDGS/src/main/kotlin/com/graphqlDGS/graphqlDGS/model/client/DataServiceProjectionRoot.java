package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class DataServiceProjectionRoot extends BaseProjectionNode {
  public DataService_ServesDatasetProjection servesDataset() {
    DataService_ServesDatasetProjection projection = new DataService_ServesDatasetProjection(this, this);    
    getFields().put("servesDataset", projection);
    return projection;
  }

  public DataServiceProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public DataServiceProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }
}
