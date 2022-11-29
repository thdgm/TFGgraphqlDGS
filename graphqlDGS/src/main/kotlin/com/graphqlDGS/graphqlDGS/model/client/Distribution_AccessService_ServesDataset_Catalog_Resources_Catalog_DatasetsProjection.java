package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_DatasetsProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Resources_CatalogProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_DatasetsProjection(
      Distribution_AccessService_ServesDataset_Catalog_Resources_CatalogProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection onDatasetSeries(
      ) {
    Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection onDataset(
      ) {
    Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection onCatalog(
      ) {
    Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Datasets_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
