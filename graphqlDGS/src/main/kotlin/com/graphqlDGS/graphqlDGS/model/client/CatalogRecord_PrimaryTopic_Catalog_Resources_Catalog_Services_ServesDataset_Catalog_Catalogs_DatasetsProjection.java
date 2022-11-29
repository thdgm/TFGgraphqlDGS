package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_DatasetsProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_DatasetsProjection(
      CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection onDataset(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection onCatalog(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
