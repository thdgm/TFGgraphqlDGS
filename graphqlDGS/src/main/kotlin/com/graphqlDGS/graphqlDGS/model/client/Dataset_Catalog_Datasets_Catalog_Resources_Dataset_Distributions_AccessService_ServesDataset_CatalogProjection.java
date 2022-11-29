package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection extends BaseSubProjectionNode<Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection(
      Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection services(
      ) {
     Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection projection = new Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection catalogs(
      ) {
     Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection projection = new Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_CatalogsProjection(this, getRoot());
     getFields().put("catalogs", projection);
     return projection;
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection records(
      ) {
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
