package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection extends BaseSubProjectionNode<Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection, CatalogProjectionRoot> {
  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection(
      Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_DatasetProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection accessService(
      ) {
     Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection projection = new Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Services_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
