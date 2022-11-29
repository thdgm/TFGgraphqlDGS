package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_CatalogProjection extends BaseSubProjectionNode<Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDatasetProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_CatalogProjection(
      Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDatasetProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Catalog_ResourcesProjection resources(
      ) {
     Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Catalog_ResourcesProjection projection = new Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_Catalog_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_CatalogProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Dataset_Catalog_Datasets_Catalog_Catalogs_Services_ServesDataset_CatalogProjection records(
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
