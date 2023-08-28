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
  @JsonProperty("description")
  public override val description: List<ResourceDescription>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
) : ResourceInCatalog, Resource, AbstractDataset {
  public companion object
}
