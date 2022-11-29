package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection extends BaseSubProjectionNode<Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(
      Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
