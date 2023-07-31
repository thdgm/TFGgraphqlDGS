package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String
import kotlin.collections.List

public data class MapInput(
  @JsonProperty("key")
  public val key: String,
  @JsonProperty("values")
  public val values: List<String>,
) {
  public companion object
}
