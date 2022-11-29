package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection, CatalogProjectionRoot> {
  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection(
      Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_CatalogsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
