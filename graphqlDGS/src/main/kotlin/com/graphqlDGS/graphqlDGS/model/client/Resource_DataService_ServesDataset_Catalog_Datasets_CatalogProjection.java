package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Resource_DataService_ServesDataset_Catalog_Datasets_CatalogProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_DatasetsProjection, ResourceProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_CatalogProjection(
      Resource_DataService_ServesDataset_Catalog_DatasetsProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ResourcesProjection resources(
      ) {
     Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ResourcesProjection projection = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection services() {
     Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection projection = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection catalogs() {
     Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection projection = new Resource_DataService_ServesDataset_Catalog_Datasets_Catalog_CatalogsProjection(this, getRoot());
     getFields().put("catalogs", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_CatalogProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_CatalogProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Datasets_CatalogProjection records() {
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
