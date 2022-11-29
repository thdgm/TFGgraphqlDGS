package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_CatalogProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection(
      CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_CatalogProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection datasets(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection services(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection records(
      ) {
    getFields().put("records", null);
    return this;
  }
}
