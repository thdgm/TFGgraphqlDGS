package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection(
      Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection accessService(
      ) {
     Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
