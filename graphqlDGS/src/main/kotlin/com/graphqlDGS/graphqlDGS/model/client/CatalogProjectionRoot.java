package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseProjectionNode;

public class CatalogProjectionRoot extends BaseProjectionNode {
  public Catalog_ResourcesProjection resources() {
    Catalog_ResourcesProjection projection = new Catalog_ResourcesProjection(this, this);    
    getFields().put("resources", projection);
    return projection;
  }

  public Catalog_DatasetsProjection datasets() {
    Catalog_DatasetsProjection projection = new Catalog_DatasetsProjection(this, this);    
    getFields().put("datasets", projection);
    return projection;
  }

  public Catalog_ServicesProjection services() {
    Catalog_ServicesProjection projection = new Catalog_ServicesProjection(this, this);    
    getFields().put("services", projection);
    return projection;
  }

  public Catalog_CatalogsProjection catalogs() {
    Catalog_CatalogsProjection projection = new Catalog_CatalogsProjection(this, this);    
    getFields().put("catalogs", projection);
    return projection;
  }

  public CatalogProjectionRoot id() {
    getFields().put("id", null);
    return this;
  }

  public CatalogProjectionRoot title() {
    getFields().put("title", null);
    return this;
  }

  public CatalogProjectionRoot records() {
    getFields().put("records", null);
    return this;
  }
}
