package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection extends BaseSubProjectionNode<Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection(
      Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
