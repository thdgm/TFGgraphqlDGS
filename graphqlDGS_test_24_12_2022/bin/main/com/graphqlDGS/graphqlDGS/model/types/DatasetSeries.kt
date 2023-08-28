package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class DatasetSeries(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource {
  public companion object
}
