package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class DataService(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
  @JsonProperty("servesDataset")
  public val servesDataset: List<DatasetInCatalog>? = null,
) : Resource, ResourceInCatalog {
  public companion object
}
