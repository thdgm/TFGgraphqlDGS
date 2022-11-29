package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection(
      Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
