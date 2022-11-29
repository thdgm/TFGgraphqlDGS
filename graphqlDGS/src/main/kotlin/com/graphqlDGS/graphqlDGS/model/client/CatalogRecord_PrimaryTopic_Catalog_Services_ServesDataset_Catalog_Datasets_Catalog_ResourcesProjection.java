package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_ResourcesProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_CatalogProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_ResourcesProjection(
      CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_CatalogProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection onDatasetSeries(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DataServiceProjection onDataService(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DataServiceProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetProjection onDataset(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_CatalogProjection onCatalog(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_CatalogProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Datasets_Catalog_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
