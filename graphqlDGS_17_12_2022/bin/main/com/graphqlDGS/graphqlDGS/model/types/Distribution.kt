package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String
import kotlin.collections.List

public data class Distribution(
  @JsonProperty("id")
  public val id: String,
  @JsonProperty("title")
  public val title: String,
  @JsonProperty("accessService")
  public val accessService: List<DataService>? = null,
) {
  public companion object
}
