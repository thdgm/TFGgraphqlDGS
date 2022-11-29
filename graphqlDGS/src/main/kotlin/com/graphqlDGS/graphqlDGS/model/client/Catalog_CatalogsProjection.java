package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_CatalogsProjection extends BaseSubProjectionNode<CatalogProjectionRoot, CatalogProjectionRoot> {
  public Catalog_CatalogsProjection(CatalogProjectionRoot parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Catalogs_ResourcesProjection resources() {
     Catalog_Catalogs_ResourcesProjection projection = new Catalog_Catalogs_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Catalog_Catalogs_DatasetsProjection datasets() {
     Catalog_Catalogs_DatasetsProjection projection = new Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Catalog_Catalogs_ServicesProjection services() {
     Catalog_Catalogs_ServicesProjection projection = new Catalog_Catalogs_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_CatalogsProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Catalog_CatalogsProjection records() {
    getFields().put("records", null);
    return this;
  }
}
