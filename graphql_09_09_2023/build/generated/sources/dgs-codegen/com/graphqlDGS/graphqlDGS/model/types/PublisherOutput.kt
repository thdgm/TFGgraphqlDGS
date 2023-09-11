package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String
import kotlin.collections.List

public data class PublisherOutput(
  @JsonProperty("notation")
  public val notation: String? = null,
  @JsonProperty("label")
  public val label: String? = null,
  @JsonProperty("resources")
  public val resources: List<Resource>? = null,
) {
  public companion object
}
