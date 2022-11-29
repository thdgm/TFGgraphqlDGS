package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection extends BaseSubProjectionNode<Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_DistributionsProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection(
      Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_DistributionsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Dataset_Distributions_AccessServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
