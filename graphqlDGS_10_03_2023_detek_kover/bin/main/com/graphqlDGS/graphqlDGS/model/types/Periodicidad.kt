package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String

public data class Periodicidad(
  @JsonProperty("rango")
  public val rango: String? = null,
  @JsonProperty("periodo")
  public val periodo: String? = null,
) {
  public companion object
}
