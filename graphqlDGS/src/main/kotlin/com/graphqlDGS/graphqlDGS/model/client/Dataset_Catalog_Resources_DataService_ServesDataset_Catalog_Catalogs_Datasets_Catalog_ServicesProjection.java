package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection(
      Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
