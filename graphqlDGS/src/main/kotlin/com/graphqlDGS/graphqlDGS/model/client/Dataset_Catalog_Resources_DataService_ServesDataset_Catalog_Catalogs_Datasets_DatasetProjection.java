package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection(
      Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_DatasetsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection inSeries(
      ) {
     Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection projection = new Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection distributions(
      ) {
     Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection projection = new Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Catalogs_Datasets_DatasetProjection title(
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
