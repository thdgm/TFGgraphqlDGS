package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_CatalogProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDatasetProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_CatalogProjection(
      CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDatasetProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_Catalog_DatasetsProjection datasets(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_Catalog_DatasetsProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_Catalog_DatasetsProjection(this, getRoot());
     getFields().put("datasets", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Catalogs_Resources_Catalog_Services_ServesDataset_CatalogProjection records(
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
