package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Resource_DataServiceProjection extends BaseSubProjectionNode<ResourceProjectionRoot, ResourceProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Resource_DataServiceProjection(ResourceProjectionRoot parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Resource_DataService_ServesDatasetProjection servesDataset() {
     Resource_DataService_ServesDatasetProjection projection = new Resource_DataService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Resource_DataServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataServiceProjection title() {
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
