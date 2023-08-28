package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String

public data class FechaHora(
  @JsonProperty("fecha")
  public val fecha: String? = null,
  @JsonProperty("hora")
  public val hora: String? = null,
) {
  public companion object
}
