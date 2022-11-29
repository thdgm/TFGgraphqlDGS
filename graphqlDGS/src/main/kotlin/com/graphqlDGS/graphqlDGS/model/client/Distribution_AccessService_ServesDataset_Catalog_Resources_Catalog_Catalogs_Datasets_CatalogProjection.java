package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_DatasetsProjection, DistributionProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection(
      Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_DatasetsProjection parent,
      DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_ServicesProjection services(
      ) {
     Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_ServicesProjection projection = new Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_Catalog_Resources_Catalog_Catalogs_Datasets_CatalogProjection records(
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
