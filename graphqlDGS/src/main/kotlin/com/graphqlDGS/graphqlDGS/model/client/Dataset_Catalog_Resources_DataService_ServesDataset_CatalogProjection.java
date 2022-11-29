package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Resources_DataService_ServesDataset_CatalogProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_DataService_ServesDatasetProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_CatalogProjection(
      Dataset_Catalog_Resources_DataService_ServesDatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_DatasetsProjection datasets() {
     Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_DatasetsProjection projection = new Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_ServicesProjection services() {
     Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_ServicesProjection projection = new Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection catalogs() {
     Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection projection = new Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_CatalogsProjection(this, getRoot());
     getFields().put("catalogs", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_CatalogProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_CatalogProjection title() {
    getFields().put("title", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_CatalogProjection records() {
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
