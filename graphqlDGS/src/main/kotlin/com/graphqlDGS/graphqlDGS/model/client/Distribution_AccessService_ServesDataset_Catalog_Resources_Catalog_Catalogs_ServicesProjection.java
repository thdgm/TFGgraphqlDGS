package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection(
      Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
