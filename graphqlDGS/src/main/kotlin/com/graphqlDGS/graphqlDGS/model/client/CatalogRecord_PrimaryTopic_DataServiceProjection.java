package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_DataServiceProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopicProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_DataServiceProjection(
      CatalogRecord_PrimaryTopicProjection parent, CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public CatalogRecord_PrimaryTopic_DataService_ServesDatasetProjection servesDataset() {
     CatalogRecord_PrimaryTopic_DataService_ServesDatasetProjection projection = new CatalogRecord_PrimaryTopic_DataService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_DataServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_DataServiceProjection title() {
    getFields().put("title", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on DataService {");
    getFields().forEach((k, v) -> {
        builder.append(" ").append(k);
        if(v != null) {
            builder.append(" ").append(v.toString());
        }
    });
    builder.append("}");
     
    return builder.toString();
  }
}
