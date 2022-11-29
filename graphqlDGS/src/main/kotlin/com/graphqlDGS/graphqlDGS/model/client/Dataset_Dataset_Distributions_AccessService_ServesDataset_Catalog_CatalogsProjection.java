package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection, DatasetProjectionRoot> {
  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection(
      Dataset_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection resources(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_DatasetsProjection datasets(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_DatasetsProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection services(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection records(
      ) {
    getFields().put("records", null);
    return this;
  }
}
