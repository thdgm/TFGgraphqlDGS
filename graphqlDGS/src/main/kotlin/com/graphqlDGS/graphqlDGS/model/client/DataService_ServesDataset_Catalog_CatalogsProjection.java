package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class DataService_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<DataService_ServesDataset_CatalogProjection, DataServiceProjectionRoot> {
  public DataService_ServesDataset_Catalog_CatalogsProjection(
      DataService_ServesDataset_CatalogProjection parent, DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection resources() {
     DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection projection = new DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection datasets() {
     DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection projection = new DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public DataService_ServesDataset_Catalog_Catalogs_ServicesProjection services() {
     DataService_ServesDataset_Catalog_Catalogs_ServicesProjection projection = new DataService_ServesDataset_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public DataService_ServesDataset_Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_CatalogsProjection title() {
    getFields().put("title", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_CatalogsProjection records() {
    getFields().put("records", null);
    return this;
  }
}
