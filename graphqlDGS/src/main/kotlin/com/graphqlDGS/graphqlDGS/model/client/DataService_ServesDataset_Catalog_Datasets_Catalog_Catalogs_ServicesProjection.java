package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ServicesProjection(
      DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
