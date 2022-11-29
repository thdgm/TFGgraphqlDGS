package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection(
      DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
