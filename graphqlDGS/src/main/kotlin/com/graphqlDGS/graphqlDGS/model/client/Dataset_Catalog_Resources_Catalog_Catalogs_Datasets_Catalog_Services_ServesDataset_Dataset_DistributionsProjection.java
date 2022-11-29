package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_DistributionsProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_DistributionsProjection(
      Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_DatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Distribution"));
  }

  public Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection accessService(
      ) {
     Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection projection = new Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection(this, getRoot());
     getFields().put("accessService", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_DistributionsProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_Services_ServesDataset_Dataset_DistributionsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
