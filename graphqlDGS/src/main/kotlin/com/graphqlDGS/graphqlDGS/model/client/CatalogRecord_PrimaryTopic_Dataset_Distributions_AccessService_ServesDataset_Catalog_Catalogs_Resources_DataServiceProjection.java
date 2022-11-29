package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection extends BaseSubProjectionNode<CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection, CatalogRecordProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection(
      CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_ResourcesProjection parent,
      CatalogRecordProjectionRoot root) {
    super(parent, root, java.util.Optional.of("DataService"));
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public CatalogRecord_PrimaryTopic_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Resources_DataServiceProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on DataService {");
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
