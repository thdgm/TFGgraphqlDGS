package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection(
      Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
