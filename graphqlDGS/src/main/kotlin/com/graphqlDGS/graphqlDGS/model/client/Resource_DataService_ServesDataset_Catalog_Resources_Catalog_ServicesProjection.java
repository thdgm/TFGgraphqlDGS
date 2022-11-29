package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Resources_Catalog_ServicesProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Resources_CatalogProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_ServicesProjection(
      Resource_DataService_ServesDataset_Catalog_Resources_CatalogProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
