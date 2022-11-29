package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_DatasetSeriesProjection extends BaseSubProjectionNode<DatasetProjectionRoot, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_DatasetSeriesProjection(DatasetProjectionRoot parent, DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DatasetSeries"));
  }

  public Dataset_DatasetSeriesProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Dataset_DatasetSeriesProjection title() {
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
