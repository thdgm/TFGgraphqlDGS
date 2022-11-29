package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDataset_Catalog_ResourcesProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_CatalogProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDataset_Catalog_ResourcesProjection(
      Distribution_AccessService_ServesDataset_CatalogProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetSeriesProjection onDatasetSeries(
      ) {
    Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetSeriesProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_DataServiceProjection onDataService(
      ) {
    Distribution_AccessService_ServesDataset_Catalog_Resources_DataServiceProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetProjection onDataset() {
    Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_CatalogProjection onCatalog() {
    Distribution_AccessService_ServesDataset_Catalog_Resources_CatalogProjection fragment = new Distribution_AccessService_ServesDataset_Catalog_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
