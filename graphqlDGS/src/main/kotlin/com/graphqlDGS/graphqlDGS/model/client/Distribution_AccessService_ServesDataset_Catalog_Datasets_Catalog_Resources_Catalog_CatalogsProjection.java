package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_CatalogsProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_CatalogProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_CatalogsProjection(
      Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_CatalogProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_Catalogs_ServicesProjection services(
      ) {
     Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_Catalogs_ServicesProjection projection = new Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_CatalogsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_CatalogsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Datasets_Catalog_Resources_Catalog_CatalogsProjection records(
      ) {
    getFields().put("records", null);
    return this;
  }
}
