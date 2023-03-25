package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Error(
  @JsonProperty("message")
  public val message: String? = null,
) : CatalogRecordOutput {
  public companion object
}
