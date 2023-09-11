package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.MediaType
import es.unizar.iaaa.tfg.annotations.NonNegativeDouble
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Distribution(
  @JsonProperty("id")
  public val id: String,
  @JsonProperty("title")
  public val title: List<LangString>? = null,
  @JsonProperty("accessUrl")
  public val accessUrl: String? = null,
  @JsonProperty("isDistributionOf")
  public val isDistributionOf: List<Dataset>? = null,
  @JsonProperty("accessService")
  public val accessService: List<DataService>? = null,
  @JsonProperty("byteSize")
  public val byteSize: NonNegativeDouble? = null,
  @JsonProperty("format")
  public val format: MediaType? = null,
  @JsonProperty("identifier")
  public override val identifier: List<String>? = null,
) : ReferenceWithinExternalContext {
  public companion object
}
