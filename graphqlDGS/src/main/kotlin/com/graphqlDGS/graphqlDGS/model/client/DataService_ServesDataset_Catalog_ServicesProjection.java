package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_ServicesProjection extends BaseSubProjectionNode<DataService_ServesDataset_CatalogProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_ServicesProjection(
      DataService_ServesDataset_CatalogProjection parent, DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public DataService_ServesDataset_Catalog_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
