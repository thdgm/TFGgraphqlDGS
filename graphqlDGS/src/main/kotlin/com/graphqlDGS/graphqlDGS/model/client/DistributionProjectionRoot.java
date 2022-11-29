package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class DistributionProjectionRoot extends BaseProjectionNode {
  public Distribution_AccessServiceProjection accessService() {
    Distribution_AccessServiceProjection projection = new Distribution_AccessServiceProjection(this, this);    
    getFields().put("accessService", projection);
    return projection;
  }

  public DistributionProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public DistributionProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }
}
