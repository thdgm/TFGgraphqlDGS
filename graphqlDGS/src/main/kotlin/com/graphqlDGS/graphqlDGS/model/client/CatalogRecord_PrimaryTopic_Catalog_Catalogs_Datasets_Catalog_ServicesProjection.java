package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_ServicesProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_CatalogProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_ServicesProjection(
      CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_CatalogProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_Services_ServesDatasetProjection servesDataset(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_Services_ServesDatasetProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_Services_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Catalog_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
