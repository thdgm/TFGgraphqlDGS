package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection extends BaseSubProjectionNode<DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ResourcesProjection, DataServiceProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection(
      DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_ResourcesProjection parent,
      DataServiceProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_InSeriesProjection inSeries(
      ) {
     DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_InSeriesProjection projection = new DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_DistributionsProjection distributions(
      ) {
     DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_DistributionsProjection projection = new DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public DataService_ServesDataset_Catalog_Datasets_Catalog_Catalogs_Resources_DatasetProjection title(
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
