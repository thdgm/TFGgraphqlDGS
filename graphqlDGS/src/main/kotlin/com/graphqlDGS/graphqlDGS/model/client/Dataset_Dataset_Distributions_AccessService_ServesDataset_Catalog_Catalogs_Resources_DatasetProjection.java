package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection(
      Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection inSeries(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DatasetProjection title(
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
