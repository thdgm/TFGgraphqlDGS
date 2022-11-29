package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection(
      Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
