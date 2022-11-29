package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_CatalogsProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_Catalogs_ServicesProjection(
      Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_CatalogsProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_Catalogs_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_Catalogs_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
