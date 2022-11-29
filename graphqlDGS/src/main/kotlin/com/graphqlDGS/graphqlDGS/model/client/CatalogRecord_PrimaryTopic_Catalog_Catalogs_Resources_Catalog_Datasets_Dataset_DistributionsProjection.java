package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_DistributionsProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_DistributionsProjection(
      CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_DatasetProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection accessService(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_DistributionsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Datasets_Dataset_DistributionsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
