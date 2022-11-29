package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Catalog_Catalogs_Resources_DataServiceProjection extends BaseSubProjectionNode<Catalog_Catalogs_ResourcesProjection, CatalogProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Catalog_Catalogs_Resources_DataServiceProjection(
      Catalog_Catalogs_ResourcesProjection parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Catalogs_Resources_DataService_ServesDatasetProjection servesDataset() {
     Catalog_Catalogs_Resources_DataService_ServesDatasetProjection projection = new Catalog_Catalogs_Resources_DataService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Catalog_Catalogs_Resources_DataServiceProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Catalogs_Resources_DataServiceProjection title() {
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
