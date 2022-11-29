package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection(
      Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection services(
      ) {
     Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection projection = new Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection records(
      ) {
    getFields().put("records", null);
    return this;
  }
}
