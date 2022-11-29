package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class CatalogRecordProjectionRoot extends BaseProjectionNode {
  public CatalogRecord_PrimaryTopicProjection primaryTopic() {
    CatalogRecord_PrimaryTopicProjection projection = new CatalogRecord_PrimaryTopicProjection(this, this);    
    getFields().put("primaryTopic", projection);
    return projection;
  }

  public CatalogRecordProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecordProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }
}
