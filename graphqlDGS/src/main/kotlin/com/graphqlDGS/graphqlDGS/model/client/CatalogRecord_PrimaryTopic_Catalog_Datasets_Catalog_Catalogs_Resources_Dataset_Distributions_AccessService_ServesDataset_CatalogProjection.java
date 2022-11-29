package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection(
      CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDatasetProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection services(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_Distributions_AccessService_ServesDataset_CatalogProjection records(
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
