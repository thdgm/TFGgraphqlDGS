package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Catalogs_ServicesProjection extends BaseSubProjectionNode<Catalog_CatalogsProjection, CatalogProjectionRoot> {
  public Catalog_Catalogs_ServicesProjection(Catalog_CatalogsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Catalogs_Services_ServesDatasetProjection servesDataset() {
     Catalog_Catalogs_Services_ServesDatasetProjection projection = new Catalog_Catalogs_Services_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Catalog_Catalogs_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Catalogs_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
