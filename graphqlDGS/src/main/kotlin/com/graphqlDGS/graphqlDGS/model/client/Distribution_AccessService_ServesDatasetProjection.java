package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Distribution_AccessService_ServesDatasetProjection extends BaseSubProjectionNode<Distribution_AccessServiceProjection, DistributionProjectionRoot> {
  public Distribution_AccessService_ServesDatasetProjection(
      Distribution_AccessServiceProjection parent, DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetInCatalog"));
  }

  public Distribution_AccessService_ServesDataset_DatasetSeriesProjection onDatasetSeries() {
    Distribution_AccessService_ServesDataset_DatasetSeriesProjection fragment = new Distribution_AccessService_ServesDataset_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_DatasetProjection onDataset() {
    Distribution_AccessService_ServesDataset_DatasetProjection fragment = new Distribution_AccessService_ServesDataset_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Distribution_AccessService_ServesDataset_CatalogProjection onCatalog() {
    Distribution_AccessService_ServesDataset_CatalogProjection fragment = new Distribution_AccessService_ServesDataset_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
