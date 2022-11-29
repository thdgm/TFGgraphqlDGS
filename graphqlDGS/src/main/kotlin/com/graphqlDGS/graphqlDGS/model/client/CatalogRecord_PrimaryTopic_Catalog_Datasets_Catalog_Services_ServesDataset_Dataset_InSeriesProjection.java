package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_Dataset_InSeriesProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_DatasetProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_Dataset_InSeriesProjection(
      CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_DatasetProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_Dataset_InSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Services_ServesDataset_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
