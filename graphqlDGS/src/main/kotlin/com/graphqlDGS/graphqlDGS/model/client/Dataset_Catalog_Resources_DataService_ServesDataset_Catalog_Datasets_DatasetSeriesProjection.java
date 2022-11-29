package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection extends BaseSubProjectionNode<Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_DatasetsProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection(
      Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_DatasetsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Catalog_Resources_DataService_ServesDataset_Catalog_Datasets_DatasetSeriesProjection title(
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
