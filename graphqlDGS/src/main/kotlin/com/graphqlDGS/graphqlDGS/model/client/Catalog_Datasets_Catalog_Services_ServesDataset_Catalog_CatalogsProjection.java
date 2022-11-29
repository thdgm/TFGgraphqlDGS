package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;

public class Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_CatalogsProjection extends BaseSubProjectionNode<Catalog_Datasets_Catalog_Services_ServesDataset_CatalogProjection, CatalogProjectionRoot> {
  public Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_CatalogsProjection(
      Catalog_Datasets_Catalog_Services_ServesDataset_CatalogProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection resources(
      ) {
     Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection projection = new Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_CatalogsProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_CatalogsProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Catalog_Datasets_Catalog_Services_ServesDataset_Catalog_CatalogsProjection records() {
    getFields().put("records", null);
    return this;
  }
}
