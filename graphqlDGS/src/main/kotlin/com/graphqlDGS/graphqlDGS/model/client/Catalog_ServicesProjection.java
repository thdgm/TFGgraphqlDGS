package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_ServicesProjection extends BaseSubProjectionNode<CatalogProjectionRoot, CatalogProjectionRoot> {
  public Catalog_ServicesProjection(CatalogProjectionRoot parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public Catalog_Services_ServesDatasetProjection servesDataset() {
     Catalog_Services_ServesDatasetProjection projection = new Catalog_Services_ServesDatasetProjection(this, getRoot());
     getFields().put("servesDataset", projection);
     return projection;
  }

  public Catalog_ServicesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_ServicesProjection title() {
    getFields().put("title", null);
    return this;
  }
}
