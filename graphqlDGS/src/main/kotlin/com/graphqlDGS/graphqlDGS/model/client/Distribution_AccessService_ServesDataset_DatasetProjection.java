package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Distribution_AccessService_ServesDataset_DatasetProjection extends BaseSubProjectionNode<Distribution_AccessService_ServesDatasetProjection, DistributionProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Distribution_AccessService_ServesDataset_DatasetProjection(
      Distribution_AccessService_ServesDatasetProjection parent, DistributionProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public Distribution_AccessService_ServesDataset_Dataset_InSeriesProjection inSeries() {
     Distribution_AccessService_ServesDataset_Dataset_InSeriesProjection projection = new Distribution_AccessService_ServesDataset_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public Distribution_AccessService_ServesDataset_Dataset_DistributionsProjection distributions() {
     Distribution_AccessService_ServesDataset_Dataset_DistributionsProjection projection = new Distribution_AccessService_ServesDataset_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public Distribution_AccessService_ServesDataset_DatasetProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Distribution_AccessService_ServesDataset_DatasetProjection title() {
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
