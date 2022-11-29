package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class DataSeriesProjectionRoot extends BaseProjectionNode {
  public DataSeriesProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public DataSeriesProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }
}
