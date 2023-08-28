package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import es.unizar.iaaa.tfg.annotations.LangString
import kotlin.String
import kotlin.collections.List

public data class Distribution(
  @JsonProperty("id")
  public val id: String,
  @JsonProperty("title")
  public val title: List<LangString>? = null,
  @JsonProperty("accessService")
  public val accessService: List<DataService>? = null,
) {
  public companion object
}
