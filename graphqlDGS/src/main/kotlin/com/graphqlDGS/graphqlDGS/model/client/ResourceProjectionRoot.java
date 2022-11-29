package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class ResourceProjectionRoot extends BaseProjectionNode {
  public ResourceProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public ResourceProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }

  public Resource_DataServiceProjection onDataService() {
    Resource_DataServiceProjection fragment = new Resource_DataServiceProjection(this, this);
    getFragments().add(fragment);
    return fragment;
  }
}
