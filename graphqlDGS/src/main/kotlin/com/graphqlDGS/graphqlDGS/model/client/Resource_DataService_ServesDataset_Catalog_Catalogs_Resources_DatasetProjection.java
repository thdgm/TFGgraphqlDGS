package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection extends BaseSubProjectionNode<Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection, ResourceProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection(
      Resource_DataService_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      ResourceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection inSeries(
      ) {
     Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection distributions(
      ) {
     Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection projection = new Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Resource_DataService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection title() {
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
