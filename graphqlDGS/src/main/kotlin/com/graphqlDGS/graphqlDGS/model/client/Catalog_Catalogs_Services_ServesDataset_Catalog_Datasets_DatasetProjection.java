package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_DatasetProjection extends BaseSubProjectionNode<Catalog_Catalogs_Services_ServesDataset_Catalog_DatasetsProjection, CatalogProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_DatasetProjection(
      Catalog_Catalogs_Services_ServesDataset_Catalog_DatasetsProjection parent,
      CatalogProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Dataset"));
  }

  public Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_InSeriesProjection inSeries(
      ) {
     Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_InSeriesProjection projection = new Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_InSeriesProjection(this, getRoot());
     getFields().put("inSeries", projection);
     return projection;
  }

  public Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_DistributionsProjection distributions(
      ) {
     Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_DistributionsProjection projection = new Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_Dataset_DistributionsProjection(this, getRoot());
     getFields().put("distributions", projection);
     return projection;
  }

  public Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_DatasetProjection id() {
    getFields().put("id", null);
    return this;
  }

  public Catalog_Catalogs_Services_ServesDataset_Catalog_Datasets_DatasetProjection title() {
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
