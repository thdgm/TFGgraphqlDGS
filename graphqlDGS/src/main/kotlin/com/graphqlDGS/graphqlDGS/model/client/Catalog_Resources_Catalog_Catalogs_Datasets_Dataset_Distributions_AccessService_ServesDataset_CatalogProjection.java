package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection extends BaseSubProjectionNode<Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDatasetProjection, CatalogProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection(
      Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDatasetProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection services(
      ) {
     Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection projection = new Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Catalog_Resources_Catalog_Catalogs_Datasets_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection records(
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
