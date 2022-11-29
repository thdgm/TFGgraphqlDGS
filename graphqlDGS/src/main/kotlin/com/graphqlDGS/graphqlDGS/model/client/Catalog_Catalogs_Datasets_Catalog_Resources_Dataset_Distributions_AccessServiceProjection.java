package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_DistributionsProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessServiceProjection(
      Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_DistributionsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection servesDataset(
      ) {
     Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection projection = new Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Catalogs_Datasets_Catalog_Resources_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
