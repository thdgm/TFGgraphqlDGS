package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection(
      CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on DatasetSeries {");
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
