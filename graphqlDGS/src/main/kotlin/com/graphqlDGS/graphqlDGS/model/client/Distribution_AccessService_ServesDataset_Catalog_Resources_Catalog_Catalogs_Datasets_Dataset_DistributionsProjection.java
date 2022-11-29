package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection(
      Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
