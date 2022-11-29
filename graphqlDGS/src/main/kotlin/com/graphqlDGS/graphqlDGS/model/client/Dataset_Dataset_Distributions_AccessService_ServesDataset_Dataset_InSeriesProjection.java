package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_Distributions_AccessService_ServesDataset_Dataset_InSeriesProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Dataset_InSeriesProjection(
      Dataset_Dataset_Distributions_AccessService_ServesDataset_DatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Dataset_InSeriesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
