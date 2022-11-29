package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<Catalog_Resources_Catalog_Services_ServesDataset_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection(
      Catalog_Resources_Catalog_Services_ServesDataset_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_DatasetsProjection datasets(
      ) {
     Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_DatasetsProjection projection = new Catalog_Resources_Catalog_Services_ServesDataset_Catalog_Catalogs_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Catalog_Resources_Catalog_Services_ServesDataset_Catalog_CatalogsProjection records() {
    getFields().put("records", null);
    return this;
  }
}
