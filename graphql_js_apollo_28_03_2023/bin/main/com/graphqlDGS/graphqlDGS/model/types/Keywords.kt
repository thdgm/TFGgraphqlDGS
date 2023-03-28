package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String

public data class Keywords(
  @JsonProperty("word")
  public val word: String? = null,
  @JsonProperty("idioma")
  public val idioma: String? = null,
) {
  public companion object
}
