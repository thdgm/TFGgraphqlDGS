package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection(
      CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_DataService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
