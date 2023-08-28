package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.NonNegativeInt
import kotlin.String
import kotlin.collections.List

public data class Distribution(
  @JsonProperty("id")
  public val id: String,
  @JsonProperty("title")
  public val title: List<LangString>? = null,
  @JsonProperty("accessUrl")
  public val accessUrl: String? = null,
  @JsonProperty("accessService")
  public val accessService: List<DataService>? = null,
  @JsonProperty("byteSize")
  public val byteSize: NonNegativeInt? = null,
  @JsonProperty("format")
  public val format: String? = null,
  @JsonProperty("identifier")
  public val identifier: String? = null,
) {
  public companion object
}
