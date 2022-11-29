package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_ServicesProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_ServicesProjection(
      Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_Catalog_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
