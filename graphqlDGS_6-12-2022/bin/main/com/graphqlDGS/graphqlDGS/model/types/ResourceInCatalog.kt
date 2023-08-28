package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonSubTypes
import com.fasterxml.jackson.`annotation`.JsonTypeInfo

@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME,
  include = JsonTypeInfo.As.PROPERTY,
  property = "__typename",
)
@JsonSubTypes(value = [
  JsonSubTypes.Type(value = DatasetSeries::class, name = "DatasetSeries"),
  JsonSubTypes.Type(value = DataService::class, name = "DataService"),
  JsonSubTypes.Type(value = Dataset::class, name = "Dataset"),
  JsonSubTypes.Type(value = Catalog::class, name = "Catalog")
])
public interface ResourceInCatalog {
  public companion object
}
