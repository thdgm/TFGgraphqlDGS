package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection extends BaseSubProjectionNode<Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection, DatasetProjectionRoot> {
  public Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection(
      Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("ResourceInCatalog"));
  }

  public Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection onDatasetSeries(
      ) {
    Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection fragment = new Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection onDataService(
      ) {
    Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection fragment = new Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection onDataset(
      ) {
    Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection fragment = new Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }

  public Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection onCatalog(
      ) {
    Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection fragment = new Dataset_Catalog_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_CatalogProjection(this, getRoot());
    getFragments().add(fragment);
    return fragment;
  }
}
