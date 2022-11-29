package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_ServicesProjection extends BaseSubProjectionNode<Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_ServicesProjection(
      Catalog_Catalogs_Resources_DataService_ServesDataset_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Catalogs_Resources_DataService_ServesDataset_Catalog_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
