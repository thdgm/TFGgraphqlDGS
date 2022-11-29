package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Resources_DataServiceProjection extends BaseSubProjectionNode<Dataset_Catalog_ResourcesProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Resources_DataServiceProjection(Dataset_Catalog_ResourcesProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Dataset_Catalog_Resources_DataService_ServesDatasetProjection servesDataset() {
     Dataset_Catalog_Resources_DataService_ServesDatasetProjection projection = new Dataset_Catalog_Resources_DataService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataServiceProjection title() {
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
