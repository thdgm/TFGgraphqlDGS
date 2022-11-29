package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection extends BaseSubProjectionNode<Catalog_Datasets_Catalog_ResourcesProjection, CatalogProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection(
      Catalog_Datasets_Catalog_ResourcesProjection parent, CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Datasets_Catalog_Resources_DatasetSeriesProjection title() {
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
