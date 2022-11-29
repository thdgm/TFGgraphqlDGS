package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Resource_DataService_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_CatalogProjection, ResourceProjectionRoot> {
  public Resource_DataService_ServesDataset_Catalog_CatalogsProjection(
      Resource_DataService_ServesDataset_CatalogProjection parent, ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection resources() {
     Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection datasets() {
     Resource_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection services() {
     Resource_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_CatalogsProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_CatalogsProjection records() {
    getFields().put("records", null);
    return this;
  }
}
