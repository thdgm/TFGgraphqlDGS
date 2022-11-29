package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection(
      CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection inSeries(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection distributions(
      ) {
     CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection projection = new CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Catalog_Services_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on Dataset {");
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
