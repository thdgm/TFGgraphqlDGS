package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Catalog_Services_ServesDataset_CatalogProjection extends BaseSubProjectionNode<Catalog_Services_ServesDatasetProjection, CatalogProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Catalog_Services_ServesDataset_CatalogProjection(
      Catalog_Services_ServesDatasetProjection parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Services_ServesDataset_Catalog_ResourcesProjection resources() {
     Catalog_Services_ServesDataset_Catalog_ResourcesProjection projection = new Catalog_Services_ServesDataset_Catalog_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Catalog_Services_ServesDataset_Catalog_DatasetsProjection datasets() {
     Catalog_Services_ServesDataset_Catalog_DatasetsProjection projection = new Catalog_Services_ServesDataset_Catalog_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Catalog_Services_ServesDataset_Catalog_CatalogsProjection catalogs() {
     Catalog_Services_ServesDataset_Catalog_CatalogsProjection projection = new Catalog_Services_ServesDataset_Catalog_CatalogsProjection(this, getRoot());
     getFields().put("catalogs", projection);
     return projection;
  }

  public Catalog_Services_ServesDataset_CatalogProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Services_ServesDataset_CatalogProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Catalog_Services_ServesDataset_CatalogProjection records() {
    getFields().put("records", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on Catalog {");
    getFields().forEach((k, v) -> {
        builder.append(" ").append(k);
        if(v != null) {
            builder.append(" ").append(v.toString());
        }
    });
    builder.append("}");
     
    return builder.toString();
  }
}
