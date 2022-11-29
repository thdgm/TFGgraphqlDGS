package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import com.graphqlDGS.graphqlDGS.model.types.AbstractDataset
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Dataset(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
  @JsonProperty("inSeries")
  public var inSeries: List<DatasetSeries>? = null,
  @JsonProperty("distributions")
  public var distributions: List<Distribution>? = null,
) : AbstractDataset, ResourceInCatalog, DatasetInCatalog {
  public companion object
}
 