package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String

public data class ResourceDescription(
  @JsonProperty("text")
  public val text: String? = null,
  @JsonProperty("idioma")
  public val idioma: String? = null,
) {
  public companion object
}
