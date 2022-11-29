package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.BaseSubProjectionNode;
import java.lang.Override;
import java.lang.String;

public class Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection extends BaseSubProjectionNode<Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_DatasetsProjection, DatasetProjectionRoot> {
  {
    getFields().put("__typename", null);
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection(
      Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_DatasetsProjection parent,
      DatasetProjectionRoot root) {
    super(parent, root, java.util.Optional.of("Catalog"));
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ResourcesProjection resources(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ResourcesProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ResourcesProjection(this, getRoot());
     getFields().put("resources", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection services(
      ) {
     Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection projection = new Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_Catalog_ServicesProjection(this, getRoot());
     getFields().put("services", projection);
     return projection;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection id(
      ) {
    getFields().put("id", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection title(
      ) {
    getFields().put("title", null);
    return this;
  }

  public Dataset_Dataset_Distributions_AccessService_ServesDataset_Catalog_Catalogs_Datasets_CatalogProjection records(
      ) {
    getFields().put("records", null);
    return this;
  }

  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("... on Catalog {");
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
