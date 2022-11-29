package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection(
      CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
