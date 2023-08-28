package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonSubTypes
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String

@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME,
  include = JsonTypeInfo.As.PROPERTY,
  property = "__typename",
)
@JsonSubTypes(value = [
  JsonSubTypes.Type(value = Catalog::class, name = "Catalog"),
  JsonSubTypes.Type(value = DatasetSeries::class, name = "DatasetSeries"),
  JsonSubTypes.Type(value = Dataset::class, name = "Dataset")
])
public interface AbstractDataset : Resource {
  public override val id: String

  public override val title: String

  public companion object
}
