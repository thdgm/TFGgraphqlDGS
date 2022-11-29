package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection extends BaseSubProjectionNode<Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection, CatalogProjectionRoot> {
  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(
      Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }
}
