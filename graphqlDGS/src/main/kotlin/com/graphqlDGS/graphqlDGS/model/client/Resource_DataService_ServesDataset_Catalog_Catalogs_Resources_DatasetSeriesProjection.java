package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection, ResourceProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection(
      Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetSeriesProjection title(
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
