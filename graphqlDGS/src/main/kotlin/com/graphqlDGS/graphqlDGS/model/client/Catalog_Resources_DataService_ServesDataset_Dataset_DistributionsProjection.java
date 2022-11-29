package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Resources_DataService_ServesDataset_Dataset_DistributionsProjection extends BaseSubProjectionNode<Catalog_Resources_DataService_ServesDataset_DatasetProjection, CatalogProjectionRoot> {
  public Catalog_Resources_DataService_ServesDataset_Dataset_DistributionsProjection(
      Catalog_Resources_DataService_ServesDataset_DatasetProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Catalog_Resources_DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection accessService(
      ) {
     Catalog_Resources_DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection projection = new Catalog_Resources_DataService_ServesDataset_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public Catalog_Resources_DataService_ServesDataset_Dataset_DistributionsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Resources_DataService_ServesDataset_Dataset_DistributionsProjection title() {
    getFields().put("title", null);
    return this;
  }
}
