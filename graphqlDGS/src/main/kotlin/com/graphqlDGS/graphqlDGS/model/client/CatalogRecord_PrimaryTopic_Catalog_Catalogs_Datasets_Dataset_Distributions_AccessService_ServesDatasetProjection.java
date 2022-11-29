package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDatasetProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection, CatalogRecordProjectionRoot> {
  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDatasetProjection(
      CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessServiceProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection onDatasetSeries(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection onDataset(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection onCatalog(
      ) {
    CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection fragment = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
