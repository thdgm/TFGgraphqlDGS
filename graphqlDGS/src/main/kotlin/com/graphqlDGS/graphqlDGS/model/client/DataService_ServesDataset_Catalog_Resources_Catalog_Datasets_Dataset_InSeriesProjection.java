package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_InSeriesProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_InSeriesProjection(
      DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_InSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_Resources_Catalog_Datasets_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
