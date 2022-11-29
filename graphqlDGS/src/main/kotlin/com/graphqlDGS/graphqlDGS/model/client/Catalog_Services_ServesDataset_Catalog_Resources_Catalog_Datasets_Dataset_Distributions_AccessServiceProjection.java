package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_DistributionsProjection, CatalogProjectionRoot> {
  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection(
      Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_DistributionsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
